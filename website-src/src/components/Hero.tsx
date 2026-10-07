import heroImage from '@/assets/hero-1200.webp';
import heroSmall from '@/assets/hero-640.webp';
import Icon from '@/components/ui/Icon';

const partners = ['行业协会', '山西教授协会', '人力资源管理协会', '山西专精特新联合会'];

export default function Hero() {
  return (
    <section id="top" className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 relative overflow-hidden bg-white rounded-b-3xl shadow-sm">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="hero-enter">
            <p className="text-sm font-medium tracking-widest text-blue-900 mb-5">长伴咨询 · 组织与人力资源</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
              赋能组织<br /><span className="text-blue-900">激发人才潜能</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">我们提供战略性人力资源咨询服务，帮助企业构建高效团队，优化人才管理，实现组织卓越与可持续发展。</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services" className="bg-blue-900 text-white px-8 py-3 rounded-md text-sm font-medium text-center hover:bg-blue-800 transition-colors shadow-lg">探索我们的服务</a>
              <a href="#about" className="bg-white text-blue-900 border border-blue-900 px-8 py-3 rounded-md text-sm font-medium text-center hover:bg-gray-50 transition-colors">了解我们</a>
            </div>
            <div className="mt-10 inline-flex items-center gap-3 border-l-2 border-blue-900 pl-4">
              <Icon name="shield" className="h-6 w-6 text-blue-900" />
              <p className="text-sm text-gray-600">来自 <span className="font-semibold text-blue-900">500+</span> 企业客户的信任</p>
            </div>
          </div>
          <div className="relative hero-enter">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img src={heroImage} srcSet={`${heroSmall} 640w, ${heroImage} 1200w`}
                sizes="(min-width: 1280px) 600px, (min-width: 768px) 50vw, calc(100vw - 32px)"
                width={1200} height={720} alt="组织与数字化协作主题示意图" className="w-full h-auto object-cover" />
            </div>
            <p className="mt-3 text-xs text-gray-500 text-right">组织与数字化协作 · 主题示意</p>
          </div>
        </div>
        <div id="partners" className="mt-16 pt-8 border-t border-gray-100">
          <p className="text-center text-sm text-gray-500 mb-6">值得信赖的合作伙伴</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4 md:gap-x-16 text-gray-500">
            {partners.map(partner => <span key={partner} className="text-base font-medium">{partner}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
