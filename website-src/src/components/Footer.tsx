const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="https://lf-code-agent.coze.cn/obj/x-ai-cn/250001877250/attachment/056b982e1e0ba537ecff5af192ffbe9_20250723115132.png"
              alt="长伴咨询 - Accompany Consultation"
              className="h-12 w-auto mb-6"
            />
            <p className="text-gray-400 mb-6">
              赋能组织，激发人才潜能。我们提供战略性人力资源咨询服务，帮助企业构建高效团队，实现可持续发展。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fa-brands fa-weixin"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fa-brands fa-weibo"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">服务</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">人才战略规划</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">组织架构优化</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">领导力发展</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">人才招聘与保留</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">绩效管理体系</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">企业文化建设</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">关于我们</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">公司简介</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-white transition-colors">团队成员</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">客户案例</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">合作伙伴</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">加入我们</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">联系方式</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">资源中心</h4>
            <ul className="space-y-4">
              <li><a href="#insights" className="text-gray-400 hover:text-white transition-colors">行业洞察</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">研究报告</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">案例研究</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">HR工具包</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">活动日历</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">常见问题</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2024 长伴咨询. 保留所有权利。
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">隐私政策</a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">服务条款</a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Cookie政策</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
