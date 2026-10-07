import assert from 'node:assert/strict';
import test from 'node:test';
import { createConsultationDraft, consultationEmail } from '../src/lib/consultation.ts';

const input = {
  name: '测试访客', company: '', contact: 'visitor@example.com',
  service: 'performance', message: '希望讨论目标设定。\n请先通过邮件联系。',
};

test('Chinese subject and multiline message survive mailto encoding', () => {
  const draft = createConsultationDraft(input);
  const url = new URL(draft.mailto);
  assert.equal(url.pathname, consultationEmail);
  assert.equal(url.searchParams.get('subject'), '网站咨询｜绩效管理体系｜测试访客');
  assert.equal(url.searchParams.get('body'), draft.body);
  assert.ok(draft.body.includes(input.message));
  assert.ok(draft.body.includes('公司：未填写'));
});

test('reserved URL characters cannot change the fixed recipient or add headers', () => {
  const draft = createConsultationDraft({ ...input, name: '测试\r\nBcc: other@example.com', message: 'A&B? C# D+E % 中文' });
  const url = new URL(draft.mailto);
  assert.equal(url.pathname, consultationEmail);
  assert.deepEqual([...url.searchParams.keys()], ['subject', 'body']);
  assert.ok(!draft.subject.includes('\n'));
  assert.ok(!draft.subject.includes('\r'));
  assert.ok(url.searchParams.get('body')?.endsWith('A&B? C# D+E % 中文'));
});

test('required fields reject whitespace-only values', () => {
  for (const field of ['name', 'contact', 'message']) {
    assert.throws(() => createConsultationDraft({ ...input, [field]: ' \n ' }), /请填写/);
  }
});

test('optional or unknown service uses an honest default and the copy includes the recipient', () => {
  const draft = createConsultationDraft({ ...input, service: 'unknown', company: ' 测试公司 ' });
  assert.ok(draft.body.includes('服务类型：待沟通确认'));
  assert.ok(draft.body.includes('公司：测试公司'));
  assert.ok(draft.plainText.startsWith(`收件人：${consultationEmail}\n主题：`));
});
