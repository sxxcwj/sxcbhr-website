import Icon from '@/components/ui/Icon';
import { consultingCases, onlyExampleCases } from '@/data/consultingCases';

export default function CaseStudies() {
  if (!consultingCases.length) return null;

  return (
    <section id="cases" className="py-20 bg-white" aria-labelledby="cases-heading">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-medium tracking-widest text-blue-900 mb-3">{onlyExampleCases ? '咨询情境示例' : '咨询案例'}</p>
          <h2 id="cases-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">从管理问题，到咨询方案</h2>
          <p className="text-lg text-gray-600 leading-relaxed">{onlyExampleCases ? '以下为模拟咨询情境，展示工作思路与可形成的交付内容。实际项目需结合客户情况确定方案。' : '了解我们如何结合客户的实际情况，开展组织与人力资源咨询工作。'}</p>
        </div>

        <div className="space-y-10">
          {consultingCases.map(study => (
            <article key={study.id} id={`case-${study.id}`} aria-labelledby={`case-${study.id}-title`} className="overflow-hidden rounded-xl border border-blue-100">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="bg-blue-900 text-white p-6 md:p-8 lg:p-10">
                  {study.kind === 'example' && <p className="text-xs font-medium text-blue-100 mb-4">示例情境 · 非历史客户案例</p>}
                  <ul aria-label="项目服务" className="flex flex-wrap gap-2 mb-6">
                    {study.services.map(service => <li key={service} className="text-xs px-3 py-1 rounded-full border border-blue-300 text-blue-50">{service}</li>)}
                  </ul>
                  <h3 id={`case-${study.id}-title`} className="text-2xl font-semibold leading-relaxed mb-6">{study.title}</h3>
                  <p className="text-sm font-medium text-blue-100 mb-2">{study.kind === 'example' ? '情境背景' : '客户背景'}</p>
                  <p className="font-medium mb-3 break-words">{study.client}</p>
                  <p className="text-sm text-blue-100 leading-relaxed break-words">{study.background}</p>
                </div>

                <div className="lg:col-span-2 p-6 md:p-8 lg:p-10 space-y-8">
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 mb-3">{study.kind === 'example' ? '典型问题' : '面临问题'}</h4>
                    <p className="text-gray-600 leading-relaxed break-words">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 mb-3">{study.kind === 'example' ? '建议工作路径' : '咨询工作'}</h4>
                    <ol className="space-y-3">
                      {study.approach.map((step, index) => (
                        <li key={step} className="flex items-start gap-3">
                          <span aria-hidden="true" className="shrink-0 text-sm font-semibold text-blue-900 leading-6">{String(index + 1).padStart(2, '0')}</span>
                          <span className="text-gray-600 leading-relaxed break-words min-w-0">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className="border-t border-blue-100 pt-6">
                    <h4 className="text-base font-semibold text-gray-900 mb-3">{study.kind === 'example' ? '可形成的交付' : '项目成果'}</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600 leading-relaxed break-words">
                      {study.outcomes.map(outcome => <li key={outcome}>{outcome}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 border-t border-gray-100 pt-8">
          <p className="text-gray-600 leading-relaxed">您的组织也面临类似问题？欢迎沟通具体需求。</p>
          <a href="#contact" className="shrink-0 inline-flex items-center justify-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors">咨询您的项目<Icon name="arrow" className="h-4 w-4" /></a>
        </div>
      </div>
    </section>
  );
}
