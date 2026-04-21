import { motion, useScroll, useTransform } from 'framer-motion'

export default function About() {
  const { scrollYProgress } = useScroll({
    target: document.getElementById('about'),
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const x = useTransform(scrollYProgress, [0, 0.2], [-100, 0])
  const x2 = useTransform(scrollYProgress, [0, 0.2], [100, 0])

  return (
    <section id="about" className="min-h-screen py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div style={{ opacity, x }}>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-sm overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-9xl font-display text-primary/30">
                    你好
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-sm" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/20 rounded-sm" />
            </div>
          </motion.div>

          <motion.div style={{ opacity, x: x2 }}>
            <span className="font-body text-primary text-sm uppercase tracking-widest mb-4 block">
              关于我
            </span>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-8">
              用代码
              <span className="text-primary">构建</span>
              <br />
              未来
            </h2>
            <div className="space-y-6">
              <p className="font-body text-light/70 text-lg leading-relaxed">
                我是一名热爱技术的前端开发者，专注于创造优美且功能性强大的用户界面。
                我相信好的设计和代码是不可分割的，它们共同构成了卓越的用户体验。
              </p>
              <p className="font-body text-light/70 text-lg leading-relaxed">
                在过去的几年里，我不断探索新技术，从 React 到 Vue，从 TypeScript 到 WebGL，
                每一次学习都让我对数字世界有了更深的理解。
              </p>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8">
              {[
                { number: '5+', label: '年经验' },
                { number: '50+', label: '项目' },
                { number: '30+', label: '客户' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="font-display text-4xl md:text-5xl font-bold text-primary mb-2"
                  >
                    {stat.number}
                  </motion.div>
                  <p className="font-body text-light/50 text-sm uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
