const About = () => {

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl bg-blue-900 text-white p-8 md:p-10 shadow-xl">
            <p className="text-sm text-blue-200 tracking-widest mb-6">咨询沟通思路</p>
            <h3 className="text-2xl md:text-3xl font-semibold leading-relaxed mb-8">从业务问题出发，<br />找到组织与人才的改进路径。</h3>
            <ol className="space-y-5">
              {[
                ['明确目标', '讨论业务背景、主要挑战与希望实现的变化。'],
                ['了解现状', '梳理组织、岗位、人才与管理流程中的关键问题。'],
                ['沟通方案', '结合实际条件，讨论优先事项和可能的解决路径。'],
                ['规划行动', '明确后续工作的范围、责任和阶段目标。'],
              ].map(([title, description], index) => (
                <li key={title} className="flex gap-4 border-t border-white/15 pt-5">
                  <span className="text-blue-200 text-sm font-medium mt-1">0{index + 1}</span>
                  <div><h4 className="font-medium mb-1">{title}</h4><p className="text-sm text-blue-100 leading-relaxed">{description}</p></div>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">关于长伴咨询</h2>

            <p className="text-gray-600 mb-6">
              长伴咨询成立于2020年，是国内领先的人力资源咨询公司，专注于为各类企业提供战略性人力资源解决方案。我们的团队由拥有平均15年以上行业经验的资深顾问组成，曾服务于多家世界500强企业与快速成长的本土上市企业。
            </p>

            <p className="text-gray-600 mb-8">
              我们深信，人才是企业最宝贵的资产。通过深入理解客户业务需求，结合行业最佳实践与创新方法，我们帮助企业构建高效的人才管理体系，激发组织潜能，实现可持续发展。
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-3xl font-bold text-blue-900 mb-2">15+</h3>
                <p className="text-gray-600">行业经验年限</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-900 mb-2">500+</h3>
                <p className="text-gray-600">成功服务客户</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-900 mb-2">98%</h3>
                <p className="text-gray-600">客户满意度</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-900 mb-2">30+</h3>
                <p className="text-gray-600">专业顾问团队</p>
              </div>
            </div>

            <a href="#team" className="inline-block bg-blue-900 text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors">
              了解我们的团队
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
