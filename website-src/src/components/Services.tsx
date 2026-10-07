import Icon, { type IconName } from '@/components/ui/Icon';

const services = [
  {
    title: "人才战略规划",
    description: "制定与业务目标一致的人力资源战略，优化人才结构，构建可持续的人才梯队。",
    icon: "strategy" as IconName,
    color: "bg-blue-50 text-blue-700"
  },
  {
    title: "组织架构优化",
    description: "设计高效的组织架构，明确岗位职责，提升组织敏捷性与决策效率。",
    icon: "organization" as IconName,
    color: "bg-blue-50 text-blue-700"
  },
  {
    title: "领导力发展",
    description: "识别高潜力人才，设计领导力发展项目，提升管理层的领导效能与团队影响力。",
    icon: "leadership" as IconName,
    color: "bg-blue-50 text-blue-700"
  },
  {
    title: "人才招聘与保留",
    description: "构建战略性招聘体系，优化员工体验，设计有效的激励机制，降低人才流失率。",
    icon: "users" as IconName,
    color: "bg-blue-50 text-blue-700"
  },
  {
    title: "绩效管理体系",
    description: "设计公平有效的绩效管理流程，建立目标对齐机制，激发员工绩效与潜力。",
    icon: "chart" as IconName,
    color: "bg-blue-50 text-blue-700"
  },
  {
    title: "企业文化建设",
    description: "塑造积极向上的企业文化，增强员工凝聚力与归属感，提升组织整体活力。",
    icon: "heart" as IconName,
    color: "bg-blue-50 text-blue-700"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">我们的专业服务</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            我们提供全方位的人力资源咨询解决方案，助力企业应对人才挑战，实现组织与人才共同成长
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}

              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-6`}>
                <Icon name={service.icon} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <a href="#contact" aria-label={`咨询${service.title}`} className="text-blue-900 font-medium text-sm inline-flex items-center group">
                咨询该服务
                <Icon name="arrow" className="h-4 w-4 ml-2 group-hover:ml-3 transition-all" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">不确定哪种服务最适合您的组织？</p>
          <a href="#contact" className="inline-block bg-white text-blue-900 border border-blue-900 px-8 py-3 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">
            联系我们进行需求评估
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
