import logo from '@/assets/logo-dark.webp';
import { consultationEmail } from '@/lib/consultation';

const columns = [
  { title: '专业服务', links: [
    ['人才战略规划', '#services'], ['组织架构优化', '#services'], ['领导力发展', '#services'],
    ['人才招聘与保留', '#services'], ['绩效管理体系', '#services'], ['企业文化建设', '#services'],
  ] },
  { title: '了解长伴', links: [
    ['关于我们', '#about'], ['专家团队', '#team'], ['合作伙伴', '#partners'], ['联系我们', '#contact'],
  ] },
  { title: '咨询指南', links: [
    ['组织效能', '#guide-organization'], ['绩效管理', '#guide-performance'], ['人才发展', '#guide-talent'], ['常见问题', '#faq'],
  ] },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <a href="#top" aria-label="长伴咨询首页"><img src={logo} width={600} height={168} loading="lazy" decoding="async" alt="长伴咨询 - Accompany Consultation" className="h-12 w-auto mb-6" /></a>
            <p className="text-gray-400 mb-5 text-sm leading-relaxed">赋能组织，激发人才潜能。我们提供战略性人力资源咨询服务，帮助企业构建高效团队，实现可持续发展。</p>
            <a href="tel:+8618903518142" className="block text-gray-300 hover:text-white mb-2 text-sm">+86 18903518142</a>
            <a href={`mailto:${consultationEmail}`} className="text-gray-300 hover:text-white text-sm break-all">{consultationEmail}</a>
          </div>
          {columns.map(column => (
            <div key={column.title}>
              <h3 className="text-base font-semibold mb-5">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map(([label, href]) => <li key={label}><a href={href} className="text-gray-400 hover:text-white transition-colors text-sm">{label}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row md:justify-between gap-4 text-sm">
          <p className="text-gray-400">© {new Date().getFullYear()} 长伴咨询. 保留所有权利。</p>
          <details className="max-w-xl text-gray-400">
            <summary className="cursor-pointer hover:text-white">咨询邮件说明</summary>
            <p className="mt-3 leading-relaxed">网页填写内容用于生成当前页面的邮件草稿，由您在邮件应用中确认并发送。页面不会自动发送或保存咨询内容。外部邮件应用的处理方式以其实际设置为准。</p>
          </details>
        </div>
      </div>
    </footer>
  );
}
