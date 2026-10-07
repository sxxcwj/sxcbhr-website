import Icon from '@/components/ui/Icon';

const guides = [
  {
    id: 'guide-organization', category: '组织效能', title: '组织架构需要调整，还是协作方式需要改善？',
    intro: '先梳理问题发生在哪些岗位与流程，再讨论结构调整是否必要。',
    points: ['哪些事项反复等待审批，或在部门之间来回协调？', '岗位职责、决策权限与工作交接是否清楚？', '业务目标变化后，现有组织分工是否仍然适配？'],
  },
  {
    id: 'guide-performance', category: '绩效管理', title: '绩效考核怎样与业务重点对齐？',
    intro: '把目标、评价标准与日常反馈放在一起讨论，明确需要改善的环节。',
    points: ['企业目标能否分解到团队和岗位？', '考核指标是否能被理解、衡量，并受岗位工作影响？', '结果反馈与后续改进行动是否形成闭环？'],
  },
  {
    id: 'guide-talent', category: '人才发展', title: '关键人才问题，应该从哪里开始分析？',
    intro: '先区分招聘、保留与发展中的具体困难，再确认需要的信息。',
    points: ['哪些岗位对业务最关键，目前缺口在哪里？', '人员流动集中在哪些岗位、阶段或团队？', '现有培养与激励安排能否支持关键岗位需要？'],
  },
];

export default function Insights() {
  return (
    <section id="insights" className="py-20 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-medium tracking-widest text-blue-900 mb-3">咨询指南</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">咨询前，先把问题说清楚</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">从三个常见议题出发，整理您的管理问题与沟通重点。</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guides.map(guide => (
            <article id={guide.id} key={guide.id} className="bg-gray-50 border border-gray-100 rounded-xl p-6 md:p-8 flex flex-col">
              <p className="text-xs font-medium text-blue-900 mb-5 tracking-widest">{guide.category}</p>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-relaxed">{guide.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{guide.intro}</p>
              <details className="guide-details mt-auto">
                <summary className="cursor-pointer text-blue-900 font-medium text-sm">查看沟通要点</summary>
                <ul className="mt-4 list-disc pl-5 space-y-3 text-sm text-gray-600 leading-relaxed">
                  {guide.points.map(point => <li key={point}>{point}</li>)}
                </ul>
              </details>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href="#contact" className="inline-flex items-center gap-2 bg-blue-900 text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors">讨论您的具体问题<Icon name="arrow" className="h-4 w-4" /></a>
        </div>
      </div>
    </section>
  );
}
