import { motion } from 'framer-motion'
import { ArrowDown, Link, Linkedin, Twitter } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">


      <div className="absolute left-10 top-0 bottom-0 flex flex-col justify-center gap-8 hidden md:flex">
        {[Link, Twitter, Linkedin].map((Icon, i) => (
          <motion.a
            key={i}
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + i * 0.1 }}
            whileHover={{ scale: 1.2, x: 5 }}
            whileTap={{ scale: 0.9 }}
            className="text-light/40 hover:text-primary transition-colors"
          >
            <Icon size={24} />
          </motion.a>
        ))}
        <div className="w-px h-20 bg-light/10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-body text-primary text-sm uppercase tracking-[0.5em] mb-6 block">
              — 欢迎来到我的宇宙
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="font-display text-7xl md:text-9xl font-black leading-none">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-light block"
              >
                创意
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent"
              >
                开发者
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-body text-light/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            用代码构建令人惊叹的数字体验。<br />
            热爱 <span className="text-primary">React</span>，痴迷于 <span className="text-secondary">动画</span>，追求完美。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 bg-primary text-dark font-body font-bold uppercase tracking-wider rounded-sm overflow-hidden relative"
            >
              <span className="relative z-10 flex items-center gap-2">
                探索作品
                <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0"
                whileHover={{ opacity: 1 }}
              />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-light text-light font-body font-bold uppercase tracking-wider rounded-sm hover:bg-light hover:text-dark transition-all glass"
            >
              联系我
            </motion.button>
          </motion.div>

          <div className="mt-16 flex justify-center gap-8">
            {[
              { label: '年经验', value: '5+' },
              { label: '项目完成', value: '50+' },
              { label: '满意客户', value: '30+' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="text-center"
              >
                <p className="font-display text-4xl md:text-5xl font-black text-primary mb-2">
                  {stat.value}
                </p>
                <p className="font-body text-light/40 text-xs uppercase tracking-widest">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-8 h-12 border-2 border-light/20 rounded-full flex justify-center p-2">
            <motion.div 
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-2 h-2 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}