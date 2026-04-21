import { motion } from 'framer-motion'
import { useState } from 'react'
import { ExternalLink, Link, ArrowRight } from 'lucide-react'

const projects = [
  {
    title: '电商平台',
    description: '一个现代化的全栈电商解决方案，具有流畅的购物体验和强大的管理后台。功能包括商品浏览、购物车、支付集成和订单管理。',
    tags: ['React', 'Next.js', 'Tailwind'],
    color: '#FF6B6B',
    emoji: '🛒'
  },
  {
    title: '数据可视化',
    description: '交互式数据仪表板，将复杂数据转化为直观的图表和分析报告。支持实时数据更新、自定义图表和导出功能。',
    tags: ['D3.js', 'React', 'TypeScript'],
    color: '#4ECDC4',
    emoji: '📊'
  },
  {
    title: '社交应用',
    description: '实时聊天和社交网络应用，支持多媒体分享和用户互动。包括私信、群组聊天、动态发布和通知系统。',
    tags: ['React', 'Socket.io', 'MongoDB'],
    color: '#FFD93D',
    emoji: '💬'
  },
  {
    title: 'AI 助手',
    description: '智能对话系统，集成最新的 AI 模型，提供自然流畅的交互体验。支持多轮对话、上下文理解和智能建议。',
    tags: ['React', 'OpenAI', 'Node.js'],
    color: '#95E1D3',
    emoji: '🤖'
  }
]

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="min-h-screen py-32 relative">

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-body text-primary text-xs uppercase tracking-[0.5em] mb-4 block"
          >
            — 作品
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-6xl font-black"
          >
            精选<span className="text-primary">项目</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -12, scale: 1.02 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative glass rounded-3xl overflow-hidden border border-white/10"
            >
              <div 
                className="aspect-video relative overflow-hidden"
                style={{ backgroundColor: `${project.color}10` }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl opacity-40 group-hover:opacity-60 transition-opacity">
                    {project.emoji}
                  </div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0, y: hoveredIndex === index ? 0 : 20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-dark/80 backdrop-blur-sm flex items-center justify-center gap-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: project.color }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 glass rounded-full flex items-center justify-center border border-white/20 hover:border-transparent"
                  >
                    <ExternalLink size={24} className="text-light" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: project.color }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 glass rounded-full flex items-center justify-center border border-white/20 hover:border-transparent"
                  >
                    <Link size={24} className="text-light" />
                  </motion.button>
                </motion.div>

                <div className="absolute top-4 right-4">
                  <div 
                    className="w-8 h-8 rounded-full"
                    style={{ backgroundColor: project.color }}
                  />
                </div>
              </div>

              <div className="p-8">
                <motion.h3 
                  className="font-display text-2xl font-black mb-3 group-hover:text-primary transition-colors"
                  animate={{ x: hoveredIndex === index ? 5 : 0 }}
                >
                  {project.title}
                </motion.h3>
                <p className="font-body text-light/50 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-2 glass rounded-full text-xs font-body text-light/70 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 font-body text-primary font-bold uppercase tracking-widest text-sm"
                >
                  查看项目 <ArrowRight size={16} />
                </motion.button>
              </div>

              <motion.div
                className="absolute bottom-0 left-0 h-1"
                initial={{ width: '0%' }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.4 }}
                style={{ backgroundColor: project.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}