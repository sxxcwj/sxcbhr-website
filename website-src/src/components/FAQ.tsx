import { automaticConsultationEnabled } from '@/config/contact';

const questions = [
  ['还不确定需要哪类服务，怎么办？', '可以先描述企业目前最希望改善的问题，例如岗位职责不清、绩效目标难落地或关键人才流失。初步沟通时再讨论服务方向与项目范围。'],
  ['初步沟通需要准备哪些信息？', '建议准备业务背景、组织规模、主要问题和期望目标。初次咨询可以先提供概况或汇总信息，无需在网站中填写员工身份证号、个人薪酬明细等敏感资料。'],
  ['咨询项目如何确定范围和报价？', '项目范围与报价需要结合目标、交付内容、工作周期和企业实际情况沟通确定。请通过电话或邮件说明需求，便于进一步讨论。'],
  automaticConsultationEnabled
    ? ['提交咨询后，如何确认是否成功？', '页面显示“咨询已提交”表示服务已确认接收，邮件实际送达仍取决于邮箱处理。如出现失败或超时，填写内容会保留；请通过电话确认后再重试，也可以改用邮件草稿沟通。']
    : ['生成咨询邮件后，信息已经发送了吗？', '还没有。网站会生成邮件草稿，您需要点击“打开邮件草稿”并在邮件应用中自行发送；也可以复制内容，发送至网站列出的邮箱。'],
];

export default function FAQ() {
  return (
    <section id="faq" className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">咨询前的常见问题</h2>
          <p className="text-gray-600">让第一次沟通更清楚，也更有效。</p>
        </div>
        <div className="divide-y divide-gray-200 border-y border-gray-200">
          {questions.map(([question, answer]) => (
            <details key={question} className="faq-item py-5">
              <summary className="cursor-pointer font-medium text-gray-900 pr-5 leading-relaxed">{question}</summary>
              <p className="pt-4 text-gray-600 leading-relaxed">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
