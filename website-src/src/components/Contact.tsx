import Icon from '@/components/ui/Icon';
import { useState } from 'react';
import { createConsultationDraft, consultationEmail, serviceOptions, type ConsultationInput } from '@/lib/consultation';

const Contact = () => {
  const [formData, setFormData] = useState<ConsultationInput>({
    name: '', company: '', contact: '', service: '', message: '',
  });
  const [draft, setDraft] = useState<ReturnType<typeof createConsultationDraft> | null>(null);
  const [error, setError] = useState('');
  const [copyNotice, setCopyNotice] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData(previous => ({ ...previous, [name]: value }));
    setDraft(null);
    setError('');
    setCopyNotice('');
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    try {
      setDraft(createConsultationDraft(formData));
      setError('');
      setCopyNotice('');
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : '请检查填写内容。');
    }
  };

  const copyDraft = async () => {
    if (!draft) return;
    try {
      await navigator.clipboard.writeText(draft.plainText);
      setCopyNotice('已复制，请粘贴到邮件应用中并发送。');
    } catch {
      setCopyNotice('未能自动复制，请选择下方草稿文字并手动复制。');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">联系我们</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            无论您有任何疑问或需求，我们的专业团队随时准备为您提供支持与咨询
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-md"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">准备咨询邮件</h3>
            <p id="consultation-help" className="text-sm text-gray-600 mb-6 leading-relaxed">
              填写后可生成邮件草稿，您需要在邮件应用中确认并发送。如未设置邮件应用，可复制草稿，发送至 {consultationEmail}，或直接拨打下方咨询电话。
            </p>
            <form onSubmit={handleSubmit} aria-describedby="consultation-help" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">姓名（必填）</label>
                  <input type="text" id="name" name="name" autoComplete="name" maxLength={80}
                    value={formData.name} onChange={handleChange} required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">公司名称（选填）</label>
                  <input type="text" id="company" name="company" autoComplete="organization" maxLength={120}
                    value={formData.company} onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" />
                </div>
              </div>
              <div>
                <label htmlFor="contact-method" className="block text-sm font-medium text-gray-700 mb-2">联系方式（必填）</label>
                <input type="text" id="contact-method" name="contact" maxLength={200}
                  placeholder="填写您的邮箱、电话或微信号" value={formData.contact} onChange={handleChange} required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">咨询服务类型（选填）</label>
                <select id="service" name="service" value={formData.service} onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                  <option value="">暂不确定，希望先沟通</option>
                  {serviceOptions.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">咨询内容（必填）</label>
                <textarea id="message" name="message" rows={4} maxLength={3000}
                  placeholder="例如：希望改善绩效目标设定和考核流程。" value={formData.message} onChange={handleChange} required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" />
              </div>
              {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
              <button type="submit" className="w-full bg-blue-900 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors shadow-lg">
                生成咨询邮件
              </button>
              <p className="text-xs text-gray-500 leading-relaxed">这些内容仅用于当前页面生成草稿。请在发送前检查内容，并避免填写员工身份证号等不必要的敏感信息。</p>
            </form>
            {draft && (
              <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4">
                <p role="status" className="text-sm font-medium text-blue-900 mb-3">草稿已生成，请在邮件应用中确认并发送。</p>
                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                  <a href={draft.mailto} className="bg-blue-900 text-white px-4 py-3 rounded-md text-sm font-medium text-center hover:bg-blue-800">打开邮件草稿</a>
                  <button type="button" onClick={copyDraft} className="bg-white text-blue-900 border border-blue-900 px-4 py-3 rounded-md text-sm font-medium">复制邮件内容</button>
                </div>
                <label htmlFor="consultation-draft" className="block text-sm text-gray-700 mb-2">邮件草稿（可选择文字复制）</label>
                <textarea id="consultation-draft" value={draft.plainText} readOnly rows={8} className="w-full border border-gray-300 rounded-md p-3 text-sm bg-white" />
                {copyNotice && <p role="status" className="text-sm text-blue-900 mt-3">{copyNotice}</p>}
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div className="flex flex-col"
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">联系方式</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    <Icon name="pin" className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-1">办公地址</h4>
                    <p className="text-gray-600">太原市综改区唐槐园区区清众数谷清众大厦7层</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    <Icon name="phone" className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-1">电话咨询</h4>
                    <a href="tel:+8618903518142" className="text-blue-900 hover:underline">+86 18903518142</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    <Icon name="mail" className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-1">电子邮箱</h4>
                    <a href={`mailto:${consultationEmail}`} className="text-blue-900 hover:underline break-all">{consultationEmail}</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    <Icon name="clock" className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-1">工作时间</h4>
                    <p className="text-gray-600">周一至周五: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-xl border border-blue-100 bg-blue-50 p-6">
                <h4 className="text-lg font-medium text-gray-900 mb-3">更希望直接沟通？</h4>
                <p className="text-sm text-gray-600 mb-5">您也可以拨打咨询电话，或通过邮件说明需求。</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="tel:+8618903518142" className="bg-blue-900 text-white px-4 py-3 rounded-md text-sm font-medium text-center hover:bg-blue-800">拨打咨询电话</a>
                  <a href={`mailto:${consultationEmail}`} className="bg-white text-blue-900 border border-blue-900 px-4 py-3 rounded-md text-sm font-medium text-center">发送邮件</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
