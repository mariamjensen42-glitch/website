import { motion } from 'framer-motion'
import { Sparkles, Code2, Palette, Zap, Coffee, Heart } from 'lucide-react'

export default function About() {
  const features = [
    { icon: Sparkles, title: '创意设计', desc: '追求独特的视觉风格' },
    { icon: Code2, title: '优质代码', desc: '整洁、可维护、高性能' },
    { icon: Palette, title: '用户体验', desc: '以用户为中心的设计' },
    { icon: Zap, title: '快速交付', desc: '高效的开发流程' },
  ]

  return (
    <section id="about" className="min-h-screen py-32 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div className="relative">
            <motion.div 
              className="aspect-square glass rounded-2xl overflow-hidden relative"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    className="text-9xl mb-4"
                  >
                    ✨
                  </motion.div>
                  <p className="font-display text-2xl font-bold text-light/80">
                    CREATIVE
                  </p>
                  <p className="font-body text-primary text-sm uppercase tracking-widest mt-2">
                    Developer
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-2 p-2">
                {Array.from({ length: 16 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="border border-white/5 rounded-lg"
                    whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                  />
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-6 -right-6 w-24 h-24 glass rounded-2xl flex items-center justify-center"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Coffee size={32} className="text-primary" />
            </motion.div>
            <motion.div 
              className="absolute -top-6 -left-6 w-20 h-20 glass rounded-2xl flex items-center justify-center"
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Heart size={28} className="text-secondary" />
            </motion.div>
          </motion.div>

          <motion.div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-body text-primary text-xs uppercase tracking-[0.5em] mb-4 block"
            >
              — 关于我
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-6xl font-black mb-8 leading-tight"
            >
              用<span className="text-primary">代码</span><br />
              构建<span className="text-secondary">未来</span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 mb-12"
            >
              <p className="font-body text-light/60 text-lg leading-relaxed">
                我是一名充满激情的前端开发者，专注于创造<span className="text-primary">优美</span>且<span className="text-secondary">功能性强大</span>的用户界面。
              </p>
              <p className="font-body text-light/60 text-lg leading-relaxed">
                在过去的几年里，我不断探索新技术，从 React 到 WebGL，每一次学习都让我对数字世界有了更深的理解。我相信好的设计和代码是不可分割的。
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4 mb-12">
              {features.map((feature, i) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass rounded-xl p-6 border border-white/5"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-4">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-light mb-2">
                      {feature.title}
                    </h3>
                    <p className="font-body text-light/50 text-sm">
                      {feature.desc}
                    </p>
                  </motion.div>
                )
              })}
            </div>

            <div className="grid grid-cols-3 gap-6">
              {[
                { number: '5+', label: '年经验' },
                { number: '50+', label: '项目' },
                { number: '30+', label: '客户' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="font-display text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <p className="font-body text-light/40 text-xs uppercase tracking-widest">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}