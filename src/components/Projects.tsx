import { motion } from 'framer-motion'

const projects = [
  {
    title: '电商平台',
    description: '一个现代化的全栈电商解决方案，具有流畅的购物体验和强大的管理后台。',
    tags: ['React', 'Next.js', 'Tailwind'],
    color: '#FF6B6B'
  },
  {
    title: '数据可视化',
    description: '交互式数据仪表板，将复杂数据转化为直观的图表和分析报告。',
    tags: ['D3.js', 'React', 'TypeScript'],
    color: '#4ECDC4'
  },
  {
    title: '社交应用',
    description: '实时聊天和社交网络应用，支持多媒体分享和用户互动。',
    tags: ['React', 'Socket.io', 'MongoDB'],
    color: '#FF6B6B'
  },
  {
    title: 'AI 助手',
    description: '智能对话系统，集成最新的 AI 模型，提供自然流畅的交互体验。',
    tags: ['React', 'OpenAI', 'Node.js'],
    color: '#4ECDC4'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-body text-primary text-sm uppercase tracking-widest mb-4 block"
          >
            作品
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-6xl font-bold"
          >
            精选
            <span className="text-primary">项目</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/5 border border-white/10 rounded-sm overflow-hidden"
            >
              <div 
                className="aspect-video relative overflow-hidden"
                style={{ backgroundColor: `${project.color}20` }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-20 group-hover:scale-110 transition-transform duration-500">
                    🎨
                  </div>
                </div>
                <div className="absolute inset-0 bg-dark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-primary text-dark font-body font-bold uppercase tracking-wider rounded-sm"
                  >
                    查看详情
                  </motion.button>
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="font-body text-light/60 mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-white/10 rounded-sm font-body text-sm text-light/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
