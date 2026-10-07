import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "王坚",
    position: "创始人 & 首席顾问",
    bio: "北京大学光华高级工商管理硕士，拥有20年人力资源战略咨询经验，专注于组织变革与领导力发展。",
    imagePrompt: "Senior Chinese business consultant, professional attire, confident expression",
    imageUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/250001877250/attachment/IMG_1220_20250723120915.JPG"
  },
  {
    name: "樊文婧",
    position: "合伙人 & 人才战略总监",
    bio: "曾任多家跨国企业人力资源总监，擅长人才招聘、保留策略与企业文化建设。",
    imagePrompt: "Senior Chinese female HR executive, professional appearance, smiling",
    imageUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/250001877250/attachment/a70c9787fc67a748408079387c1d865e_20250723121540.jpeg"
  },
  {
    name: "李兆富",
    position: "组织发展合伙人",
    bio: "组织架构与流程优化专家，帮助超过100家企业实现组织效能提升。",
     imagePrompt: "Mature Chinese business consultant, glasses, professional look",
     imageUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/250001877250/attachment/微信图片_20250723121839_81_20250723121910.jpg"
  },
  {
    name: "王晓婷",
    position: "高级顾问",
    bio: "人力资源数据分析专家，擅长通过数据驱动人才决策与绩效管理体系设计。",
    imagePrompt: "Young Chinese female consultant, modern professional, intelligent expression",
    imageUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/250001877250/attachment/IMG_1220_20250723120915.JPG"
  }
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">我们的专家团队</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            由行业顶尖人才组成的专业团队，为您提供深度咨询服务与创新解决方案
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex space-x-3">
                    <a href="#" className="bg-white/20 hover:bg-white/40 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors">
                      <i className="fa-brands fa-linkedin text-white"></i>
                    </a>
                    <a href="#" className="bg-white/20 hover:bg-white/40 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors">
                      <i className="fa-solid fa-envelope text-white"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-900 font-medium text-sm mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm line-clamp-3">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-white text-blue-900 border border-blue-900 px-8 py-3 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">
            查看全部团队成员
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
