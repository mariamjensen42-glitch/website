import { motion } from 'framer-motion'

const skills = [
  { name: 'React', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'Tailwind', level: 92 },
  { name: 'Node.js', level: 85 },
  { name: 'Next.js', level: 88 },
  { name: 'Framer Motion', level: 87 },
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
            className="font-body text-primary text-sm uppercase tracking-widest mb-4 block"
          >
            技能
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-6xl font-bold"
          >
            我的
            <span className="text-primary">工具箱</span>
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-body text-light text-lg">
                  {skill.name}
                </span>
                <span className="font-body text-primary text-lg">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {['JavaScript', 'CSS3', 'HTML5', 'Git', 'Docker', 'AWS', 'GraphQL', 'Three.js'].map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="bg-white/5 border border-white/10 rounded-sm p-6 text-center hover:border-primary/50 transition-colors"
            >
              <span className="font-body text-light text-lg">
                {tech}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
