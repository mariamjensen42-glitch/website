import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX - window.innerWidth / 2)
      y.set(e.clientY - window.innerHeight / 2)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [x, y])

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitSuccess(false), 3000)
    }, 1500)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactInfos = [
    { icon: Mail, title: '邮箱', value: 'hello@example.com', color: '#FF6B6B' },
    { icon: Phone, title: '电话', value: '+86 123 4567 8900', color: '#4ECDC4' },
    { icon: MapPin, title: '位置', value: '中国，北京', color: '#FFD93D' },
  ]

  const socialLinks = [
    { icon: Github, name: 'GitHub' },
    { icon: Linkedin, name: 'LinkedIn' },
    { icon: Twitter, name: 'Twitter' },
    { icon: Instagram, name: 'Instagram' },
  ]

  return (
    <section id="contact" className="min-h-screen py-32 relative">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/3 right-1/3 w-[800px] h-[800px] bg-gradient-to-br from-secondary/5 to-transparent rounded-full blur-3xl"
          style={{ 
            x: useTransform(mouseXSpring, [-200, 200], [-50, 50]),
            y: useTransform(mouseYSpring, [-200, 200], [-50, 50]),
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/3 w-[600px] h-[600px] bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl"
          style={{ 
            x: useTransform(mouseXSpring, [-200, 200], [50, -50]),
            y: useTransform(mouseYSpring, [-200, 200], [50, -50]),
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-body text-primary text-xs uppercase tracking-[0.5em] mb-4 block"
          >
            — 联系
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-black mb-4"
          >
            让我们<span className="text-primary">合作</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-light/50 text-lg max-w-xl mx-auto"
          >
            有想法想要实现？或者只是想打个招呼？我都很乐意收到你的来信。
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 mb-12">
              {contactInfos.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="glass rounded-2xl p-6 border border-white/5 flex items-center gap-4"
                  >
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${info.color}20` }}
                    >
                      <Icon size={28} style={{ color: info.color }} />
                    </div>
                    <div>
                      <p className="font-body text-light/40 text-xs uppercase tracking-widest mb-1">
                        {info.title}
                      </p>
                      <p className="font-display text-xl font-bold text-light">
                        {info.value}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-light mb-6">
                关注我
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={index}
                      href="#"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.15, y: -8, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-14 h-14 glass rounded-xl flex items-center justify-center border border-white/10 hover:border-primary/50 transition-colors"
                    >
                      <Icon size={24} className="text-light/70 hover:text-primary transition-colors" />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-10 border border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="font-body text-light/60 text-xs uppercase tracking-widest mb-3 block">
                  姓名
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 font-body text-light placeholder-light/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  placeholder="你的名字"
                  required
                />
              </div>
              <div>
                <label className="font-body text-light/60 text-xs uppercase tracking-widest mb-3 block">
                  邮箱
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 font-body text-light placeholder-light/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="font-body text-light/60 text-xs uppercase tracking-widest mb-3 block">
                  消息
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 font-body text-light placeholder-light/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="你的消息..."
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-gradient-to-r from-primary to-secondary text-dark font-body font-bold uppercase tracking-widest rounded-xl hover:from-primary/90 hover:to-secondary/90 transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-dark border-t-transparent rounded-full"
                    />
                    发送中...
                  </div>
                ) : submitSuccess ? (
                  '✓ 发送成功！'
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    发送消息 <Send size={18} />
                  </div>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}