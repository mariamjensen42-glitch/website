import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-body text-primary text-sm uppercase tracking-widest mb-4 block">
              联系
            </span>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-8">
              让我们
              <span className="text-primary">合作</span>
            </h2>
            <p className="font-body text-light/70 text-lg mb-12 leading-relaxed">
              有想法想要实现？或者只是想打个招呼？无论如何，我都很乐意收到你的来信。
            </p>

            <div className="space-y-6">
              {[
                { icon: '📧', title: '邮箱', value: 'hello@example.com' },
                { icon: '📱', title: '电话', value: '+86 123 4567 8900' },
                { icon: '📍', title: '位置', value: '中国，北京' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-sm flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-body text-light/50 text-sm uppercase tracking-wider">
                      {item.title}
                    </p>
                    <p className="font-body text-light text-lg">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 flex gap-4">
              {['GitHub', 'LinkedIn', 'Twitter', 'Instagram'].map((social, index) => (
                <motion.button
                  key={social}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center font-body text-sm hover:border-primary hover:bg-primary/10 transition-colors"
                >
                  {social[0]}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-sm p-8"
          >
            <form className="space-y-6">
              <div>
                <label className="font-body text-light/70 text-sm uppercase tracking-wider mb-2 block">
                  姓名
                </label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 font-body text-light focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  placeholder="你的名字"
                />
              </div>
              <div>
                <label className="font-body text-light/70 text-sm uppercase tracking-wider mb-2 block">
                  邮箱
                </label>
                <input
                  type="email"
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 font-body text-light focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="font-body text-light/70 text-sm uppercase tracking-wider mb-2 block">
                  消息
                </label>
                <textarea
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 font-body text-light focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="你的消息..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-primary text-dark font-body font-bold uppercase tracking-wider rounded-sm hover:bg-primary/90 transition-colors"
              >
                发送消息
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
