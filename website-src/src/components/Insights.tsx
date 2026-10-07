import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock HR trend data
const hrTrendData = [
  { name: '2020', 人才保留: 65, 远程工作: 20, 数字化转型: 40 },
  { name: '2021', 人才保留: 60, 远程工作: 65, 数字化转型: 55 },
  { name: '2022', 人才保留: 55, 远程工作: 75, 数字化转型: 70 },
  { name: '2023', 人才保留: 50, 远程工作: 80, 数字化转型: 85 },
  { name: '2024', 人才保留: 45, 远程工作: 85, 数字化转型: 90 },
];

// Latest insights/articles
const insights = [
  {
    title: "2024年人才趋势报告：后疫情时代的人才管理新挑战",
    excerpt: "分析后疫情时代企业面临的人才获取、保留与发展挑战，提供实用应对策略...",
    date: "2024-03-15",
    category: "趋势洞察"
  },
  {
    title: "构建高绩效文化：数据驱动的绩效管理体系设计",
    excerpt: "如何利用数据分析优化绩效评估流程，激发员工潜能，提升组织整体效能...",
    date: "2024-02-28",
    category: "绩效管理"
  },
  {
    title: "数字化转型中的人力资源变革：技术与人文的平衡",
    excerpt: "探讨HR数字化转型过程中的关键成功因素，如何在技术应用与员工体验间取得平衡...",
    date: "2024-01-10",
    category: "数字化转型"
  }
];

const Insights = () => {
  return (
    <section id="insights" className="py-20 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">行业洞察与研究</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            我们持续追踪人力资源领域最新趋势，分享专业见解与实践经验
          </p>
        </div>

        {/* HR Trends Chart */}
        <div className="bg-gray-50 p-8 rounded-xl shadow-md mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">人力资源管理趋势演变</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={hrTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="人才保留"
                  stroke="#1e40af"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="远程工作"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="数字化转型"
                  stroke="#93c5fd"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Latest Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-medium bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                    {insight.category}
                  </span>
                  <span className="text-xs text-gray-500">{insight.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-900 transition-colors">
                  {insight.title}
                </h3>
                <p className="text-gray-600 mb-6">{insight.excerpt}</p>
                <a href="#" className="text-blue-900 font-medium text-sm inline-flex items-center group">
                  阅读全文
                  <i className="fa-solid fa-arrow-right ml-2 text-xs group-hover:ml-3 transition-all"></i>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-blue-900 text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors">
            浏览全部洞察文章
          </button>
        </div>
      </div>
    </section>
  );
};

export default Insights;
