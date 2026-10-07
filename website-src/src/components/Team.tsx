import wangJian from '@/assets/wang-jian.webp';
import fanWenjing from '@/assets/fan-wenjing.webp';
import liZhaofu from '@/assets/li-zhaofu.webp';
import Icon from '@/components/ui/Icon';

const teamMembers: { name: string; position: string; bio: string; imageUrl?: string; width?: number; height?: number }[] = [
  {
    name: "王坚",
    position: "创始人 & 首席顾问",
    bio: "北京大学光华高级工商管理硕士，拥有20年人力资源战略咨询经验，专注于组织变革与领导力发展。",

    imageUrl: wangJian, width: 640, height: 427
  },
  {
    name: "樊文婧",
    position: "合伙人 & 人才战略总监",
    bio: "曾任多家跨国企业人力资源总监，擅长人才招聘、保留策略与企业文化建设。",

    imageUrl: fanWenjing, width: 640, height: 854
  },
  {
    name: "李兆富",
    position: "组织发展合伙人",
    bio: "组织架构与流程优化专家，帮助超过100家企业实现组织效能提升。",

     imageUrl: liZhaofu, width: 640, height: 914
  },
  {
    name: "王晓婷",
    position: "高级顾问",
    bio: "人力资源数据分析专家，擅长通过数据驱动人才决策与绩效管理体系设计。",
  }
];


export default function Team() {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">我们的专家团队</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">由行业顶尖人才组成的专业团队，为您提供深度咨询服务与创新解决方案</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map(member => (
            <article key={member.name} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              {member.imageUrl ? (
                <img src={member.imageUrl} width={member.width} height={member.height} loading="lazy" decoding="async"
                  alt={member.name} className="w-full h-64 object-cover object-center" />
              ) : (
                <div role="img" aria-label={`${member.name}姓名头像`} className="h-64 bg-blue-100 flex flex-col items-center justify-center gap-4 text-blue-900">
                  <span className="rounded-full border border-blue-300 w-24 h-24 flex items-center justify-center text-4xl font-medium">{member.name.slice(0, 1)}</span>
                  <span className="text-sm tracking-widest">{member.name}</span>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-900 font-medium text-sm mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href="#contact" className="inline-flex items-center gap-2 bg-white text-blue-900 border border-blue-900 px-8 py-3 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">沟通您的咨询需求<Icon name="arrow" className="h-4 w-4" /></a>
        </div>
      </div>
    </section>
  );
}
