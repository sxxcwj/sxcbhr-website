import assert from 'node:assert/strict';
import test from 'node:test';
import { prepareConsultationSubmission, submitConsultation, ConsultationSubmissionError } from '../src/lib/submitConsultation.ts';

const endpoint = 'https://formspree.io/f/testform';
const input = { name: '张先生', company: '测试公司', contact: 'visitor@example.com', service: 'performance', message: '咨询绩效目标\n第二行' };
const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });
const errorCode = (code: string) => (error: unknown) => error instanceof ConsultationSubmissionError && error.code === code;

test('only whitelisted public fields are submitted; email is used for Reply-To', async () => {
  let calls = 0;
  await submitConsultation(endpoint, { ...input, recipient: 'injected@example.com' } as typeof input, {
    fetcher: async (url, options) => {
      calls++;
      assert.equal(url, endpoint);
      assert.equal(options?.method, 'POST');
      assert.equal(options?.credentials, 'omit');
      assert.equal(options?.redirect, 'error');
      assert.deepEqual(options?.headers, { Accept: 'application/json', 'Content-Type': 'application/json' });
      const payload = JSON.parse(String(options?.body));
      assert.deepEqual(Object.keys(payload).sort(), ['_gotcha', 'company', 'contact', 'email', 'message', 'name', 'service', 'subject'].sort());
      assert.equal(payload.service, '绩效管理体系');
      assert.equal(payload.email, input.contact);
      assert.equal(payload.message, input.message);
      return json({ next: 'https://formspree.io/thanks', ok: true });
    },
  });
  assert.equal(calls, 1);
});

test('phone and WeChat contacts are preserved and never treated as email addresses', () => {
  for (const contact of ['13800000000', '微信：visitor', 'visitor@example.com\nBCC: stranger@example.com']) {
    const { payload } = prepareConsultationSubmission(endpoint, { ...input, contact, service: 'unknown', company: '' });
    assert.equal(payload.email, undefined);
    assert.equal(payload.company, '未填写');
    assert.equal(payload.service, '待沟通确认');
    assert.ok(!payload.contact.includes('\n'));
  }
});

test('bad endpoints, invalid input and honeypot cause no network request', async () => {
  let calls = 0;
  const fetcher: typeof fetch = async () => { calls++; return json({ ok: true }); };
  for (const bad of ['', 'http://formspree.io/f/testform', 'https://evil.example/f/testform', `${endpoint}?token=abc`, `${endpoint}#a`, 'https://formspree.io@evil.example/f/testform']) {
    await assert.rejects(submitConsultation(bad, input, { fetcher }), errorCode('configuration'));
  }
  for (const invalid of [{ ...input, name: ' ' }, { ...input, message: ' ' }, { ...input, contact: '' }, { ...input, name: '字'.repeat(81) }, { ...input, message: '字'.repeat(3001) }]) {
    await assert.rejects(submitConsultation(endpoint, invalid, { fetcher }), errorCode('validation'));
  }
  await assert.rejects(submitConsultation(endpoint, input, { fetcher, honeypot: 'spam' }), errorCode('validation'));
  assert.equal(calls, 0);
});

test('HTTP failures and CAPTCHA never report success or retry automatically', async () => {
  for (const [status, body, code] of [
    [400, { errors: [{ field: 'email', code: 'TYPE_EMAIL' }] }, 'validation'],
    [403, { errors: [{ code: 'CAPTCHA_FAILED' }] }, 'captcha'],
    [429, { errors: [{ code: 'RATE_LIMIT' }] }, 'rate-limit'],
    [500, {}, 'server'],
  ] as const) {
    let calls = 0;
    await assert.rejects(submitConsultation(endpoint, input, { fetcher: async () => { calls++; return json(body, status); } }), errorCode(code));
    assert.equal(calls, 1);
  }
});

test('HTML, unexpected JSON or explicit errors cannot masquerade as a success', async () => {
  for (const response of [new Response('<html>challenge</html>'), json({}), json({ ok: false }), json({ ok: true, errors: [{ code: 'OTHER' }] }), json({ ok: true, error: 'failed' })]) {
    await assert.rejects(submitConsultation(endpoint, input, { fetcher: async () => response }), errorCode('unconfirmed'));
  }
});

test('accepted JSON next response is supported without implying inbox delivery', async () => {
  await submitConsultation(endpoint, input, { fetcher: async () => json({ next: '/thanks' }) });
});

test('network failure retains caller input and makes only one attempt', async () => {
  const original = { ...input };
  let calls = 0;
  await assert.rejects(submitConsultation(endpoint, original, { fetcher: async () => { calls++; throw new TypeError('Failed to fetch'); } }), errorCode('network'));
  assert.deepEqual(original, input);
  assert.equal(calls, 1);
});

test('timeout aborts request, preserves input and cautions against duplicate submission', async () => {
  let calls = 0;
  const original = { ...input };
  await assert.rejects(submitConsultation(endpoint, original, {
    timeoutMs: 10,
    fetcher: async (_url, options) => {
      calls++;
      return await new Promise<Response>((_resolve, reject) => options?.signal?.addEventListener('abort', () => reject(new DOMException('Aborted', 'AbortError')), { once: true }));
    },
  }), error => errorCode('timeout')(error) && /避免重复/.test(String(error)));
  assert.equal(calls, 1);
  assert.deepEqual(original, input);
});
