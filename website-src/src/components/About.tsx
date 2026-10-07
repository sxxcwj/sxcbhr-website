import { motion } from 'framer-motion';

const About = () => {
  const aboutImageUrl = `https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=%24%7BaboutImagePrompt%7D&sign=c2c2ce6eb26182ab1f2f02170d4a86da`;

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
              <img
                src={aboutImageUrl}
                alt="About our HR consulting firm"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-blue-100 rounded-full opacity-50 blur-2xl z-0"></div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-blue-900 rounded-full opacity-10 blur-2xl z-0"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">关于我们的人力资源咨询公司</h2>

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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
