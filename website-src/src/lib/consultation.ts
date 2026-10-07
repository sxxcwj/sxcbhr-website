export const consultationEmail = 'wangjiano@cbrlzy.com';

export const serviceOptions = [
  { value: 'talent-strategy', label: '人才战略规划' },
  { value: 'organization-design', label: '组织架构优化' },
  { value: 'leadership-development', label: '领导力发展' },
  { value: 'recruitment', label: '人才招聘与保留' },
  { value: 'performance', label: '绩效管理体系' },
  { value: 'culture', label: '企业文化建设' },
  { value: 'other', label: '其他服务' },
] as const;

export interface ConsultationInput {
  name: string;
  company: string;
  contact: string;
  service: string;
  message: string;
}

const singleLine = (value: string) => value.replace(/[\r\n]+/g, ' ').trim();

export function createConsultationDraft(input: ConsultationInput) {
  const name = singleLine(input.name);
  const contact = singleLine(input.contact);
  const message = input.message.trim();
  if (!name || !contact || !message) {
    throw new Error('请填写姓名、联系方式和咨询内容。');
  }

  const company = singleLine(input.company);
  const service = serviceOptions.find(option => option.value === input.service)?.label ?? '待沟通确认';
  const subject = `网站咨询｜${service}｜${name}`;
  const body = [
    '您好，我希望沟通以下咨询需求：',
    '',
    `姓名：${name}`,
    `公司：${company || '未填写'}`,
    `联系方式：${contact}`,
    `服务类型：${service}`,
    '',
    '咨询内容：',
    message,
  ].join('\n');

  return {
    subject,
    body,
    mailto: `mailto:${consultationEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    plainText: `收件人：${consultationEmail}\n主题：${subject}\n\n${body}`,
  };
}
