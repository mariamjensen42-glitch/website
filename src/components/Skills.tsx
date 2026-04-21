import { motion } from 'framer-motion'
import { Code2, Layout, Database, Zap, Palette, Layers, Globe, Terminal } from 'lucide-react'

const skills = [
  { name: 'React', level: 95, icon: Code2, color: '#61DAFB' },
  { name: 'TypeScript', level: 90, icon: Terminal, color: '#3178C6' },
  { name: 'Tailwind', level: 92, icon: Palette, color: '#06B6D4' },
  { name: 'Node.js', level: 85, icon: Database, color: '#339933' },
  { name: 'Next.js', level: 88, icon: Layers, color: '#000000' },
  { name: 'Framer Motion', level: 87, icon: Zap, color: '#0055FF' },
]

const techStack = [
  { name: 'JavaScript', icon: Code2 },
  { name: 'CSS3', icon: Palette },
  { name: 'HTML5', icon: Layout },
  { name: 'Git', icon: Terminal },
  { name: 'Docker', icon: Database },
  { name: 'AWS', icon: Globe },
  { name: 'GraphQL', icon: Layers },
  { name: 'Three.js', icon: Zap },
]

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-body text-primary text-xs uppercase tracking-[0.5em] mb-4 block"
          >
            — 技能
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-6xl font-black"
          >
            我的<span className="text-primary">工具箱</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass rounded-2xl p-8 border border-white/5"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${skill.color}20` }}
                  >
                    <Icon size={24} style={{ color: skill.color }} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-light">
                      {skill.name}
                    </h3>
                    <p className="font-body text-light/40 text-sm">
                      熟练程度
                    </p>
                  </div>
                  <span className="ml-auto font-display text-2xl font-bold text-primary">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.1 + 0.3, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{ 
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)` 
                    }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="text-center mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl font-bold text-light mb-2"
          >
            技术栈
          </motion.h3>
          <p className="font-body text-light/50">我常用的技术和工具</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {techStack.map((tech, i) => {
            const Icon = tech.icon
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 3, 
                  y: -10,
                  borderColor: 'rgba(255, 107, 107, 0.5)',
                }}
                whileTap={{ scale: 0.95 }}
                className="glass rounded-2xl p-8 border border-white/5 text-center cursor-pointer"
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ 
                    duration: 4, 
                    delay: i * 0.2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center"
                >
                  <Icon size={32} className="text-primary" />
                </motion.div>
                <span className="font-display text-lg font-bold text-light">
                  {tech.name}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}