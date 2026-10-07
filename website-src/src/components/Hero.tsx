import { motion } from 'framer-motion';

const Hero = () => {
  // Use the provided image URL
  const heroImageUrl = "https://lf-code-agent.coze.cn/obj/x-ai-cn/250001877250/attachment/IMG_4636_20250723120322.png";

  return (
    <section id="top" className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 relative overflow-hidden bg-white rounded-b-3xl shadow-sm">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
              赋能组织<br />
              <span className="text-blue-900">激发人才潜能</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              我们提供战略性人力资源咨询服务，帮助企业构建高效团队，优化人才管理，实现组织卓越与可持续发展。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services" className="bg-blue-900 text-white px-8 py-3 rounded-md text-sm font-medium text-center hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-300">
                探索我们的服务
              </a>
              <a href="#about" className="bg-white text-blue-900 border border-blue-900 px-8 py-3 rounded-md text-sm font-medium text-center hover:bg-gray-50 transition-colors">
                了解我们
              </a>
            </div>

            <div className="mt-12 flex items-center">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://space.coze.cn/api/coze_space/gen_image?prompt=%24%7BencodeURIComponent%28%27professional&sign=f31e6767fce41af0b6233569c8538cc7 business person headshot, formal attire')}&image_size=square&sign=17fb6f368481f6bab2216c9603d8e6a8`}
                    alt="Client"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <div className="ml-4">
                <div className="flex items-center text-yellow-400 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <i key={i} className="fa-solid fa-star text-xs"></i>
                  ))}
                </div>
                <p className="text-sm text-gray-600">来自500+企业客户的信任</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
              <img
                src={heroImageUrl}
                alt="HR Consulting Team"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-blue-100 rounded-full opacity-50 blur-3xl z-0"></div>
            <div className="absolute -top-6 -right-6 w-64 h-64 bg-blue-900 rounded-full opacity-10 blur-3xl z-0"></div>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-24">
          <p className="text-center text-sm text-gray-500 mb-8">值得信赖的合作伙伴</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60">
            {['行业协会', '山西教授协会', '人力资源管理协会', '山西专精特新联合会'].map((partner, i) => (
              <div key={i} className="text-gray-500 text-lg font-medium">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
