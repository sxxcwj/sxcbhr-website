import { createConsultationDraft, serviceOptions, type ConsultationInput } from './consultation.ts';

export type SubmissionErrorCode = 'configuration' | 'validation' | 'captcha' | 'rate-limit' | 'server' | 'unconfirmed' | 'network' | 'timeout';

export class ConsultationSubmissionError extends Error {
  code: SubmissionErrorCode;
  constructor(code: SubmissionErrorCode, message: string) {
    super(message);
    this.name = 'ConsultationSubmissionError';
    this.code = code;
  }
}

export function prepareConsultationSubmission(endpoint: string, input: ConsultationInput, honeypot = '') {
  if (!/^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(endpoint)) {
    throw new ConsultationSubmissionError('configuration', '在线咨询暂未配置，请使用邮件草稿或电话联系我们。');
  }
  if (honeypot.trim()) {
    throw new ConsultationSubmissionError('validation', '未能提交，请重新填写或使用邮件联系我们。');
  }
  const limits = { name: 80, company: 120, contact: 200, service: 80, message: 3000 };
  for (const field of Object.keys(limits) as Array<keyof ConsultationInput>) {
    if (typeof input[field] !== 'string' || input[field].length > limits[field]) {
      throw new ConsultationSubmissionError('validation', '填写内容超出允许长度，请检查后再提交。');
    }
  }
  let draft;
  try {
    draft = createConsultationDraft(input);
  } catch {
    throw new ConsultationSubmissionError('validation', '请填写姓名、联系方式和咨询内容。');
  }
  const singleLine = (value: string) => value.replace(/[\r\n]+/g, ' ').trim();
  const contact = singleLine(input.contact);
  const payload: Record<string, string> = {
    name: singleLine(input.name),
    company: singleLine(input.company) || '未填写',
    contact,
    service: serviceOptions.find(option => option.value === input.service)?.label ?? '待沟通确认',
    message: input.message.trim(),
    subject: draft.subject,
    _gotcha: '',
  };
  // Reply-To is useful for emails, but phone/WeChat values must not be sent as email.
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact)) payload.email = contact;
  return { endpoint, payload };
}

export async function submitConsultation(
  endpoint: string,
  input: ConsultationInput,
  options: { honeypot?: string; fetcher?: typeof fetch; timeoutMs?: number } = {},
): Promise<void> {
  const request = prepareConsultationSubmission(endpoint, input, options.honeypot);
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), options.timeoutMs ?? 20000);
  try {
    const response = await (options.fetcher ?? fetch)(request.endpoint, {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      credentials: 'omit',
      redirect: 'error',
      body: JSON.stringify(request.payload),
      signal: controller.signal,
    });
    const data: unknown = await response.json().catch(() => null);
    const result = data && typeof data === 'object' ? data as Record<string, unknown> : null;
    const errors = Array.isArray(result?.errors) ? result.errors : [];
    if (errors.some(error => error && typeof error === 'object' && /captcha/i.test(String(error.code)))) {
      throw new ConsultationSubmissionError('captcha', '服务要求额外的人机验证，本次未确认提交。请使用邮件草稿或电话联系我们。');
    }
    if (response.status === 429) {
      throw new ConsultationSubmissionError('rate-limit', '在线咨询暂时繁忙或额度已满，请稍后再试，或使用邮件草稿联系我们。');
    }
    if (!response.ok) {
      throw new ConsultationSubmissionError(response.status >= 500 ? 'server' : 'validation', '咨询未能提交，填写内容已保留。请稍后再试或使用邮件草稿联系我们。');
    }
    // A successful HTTP status alone can be an HTML challenge or an unexpected response.
    if (!result || errors.length || result.error || result.ok === false ||
      !(result.ok === true || typeof result.next === 'string' && result.next.length > 0)) {
      throw new ConsultationSubmissionError('unconfirmed', '未收到明确的提交确认，请通过电话确认是否收到，避免重复提交。');
    }
  } catch (cause) {
    if (cause instanceof ConsultationSubmissionError) throw cause;
    if (controller.signal.aborted) {
      throw new ConsultationSubmissionError('timeout', '等待提交确认超时。信息可能已被接收，请通过电话确认后再重试，避免重复提交；填写内容已保留。');
    }
    throw new ConsultationSubmissionError('network', '网络连接失败，未能确认提交。填写内容已保留，请通过电话确认后重试，或使用邮件草稿联系我们。');
  } finally {
    clearTimeout(timer);
  }
}
