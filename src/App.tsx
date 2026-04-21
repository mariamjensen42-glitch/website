import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Noise from './components/Noise'
import CustomCursor from './components/CustomCursor'
import Particles from './components/Particles'
import { Zap, Code, Layers, Sparkles, MessageCircle } from 'lucide-react'

const sections = [
  { id: 'hero', name: '首页', icon: Zap },
  { id: 'about', name: '关于', icon: Sparkles },
  { id: 'skills', name: '技能', icon: Code },
  { id: 'projects', name: '作品', icon: Layers },
  { id: 'contact', name: '联系', icon: MessageCircle },
]

function App() {
  const { scrollYProgress } = useScroll()
  const [activeSection, setActiveSection] = useState(0)
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2
      sections.forEach((section, index) => {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(index)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative">
      <CustomCursor />
      <Noise />
      <Particles />
      
      <motion.nav 
        style={{ opacity: headerOpacity }}
        className="fixed top-0 left-0 right-0 z-50 glass"
      >
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              className="font-display text-3xl font-black bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent"
            >
              CREATIVE.DEV
            </motion.div>
            <div className="hidden md:flex gap-2">
              {sections.map((section, index) => {
                const Icon = section.icon
                return (
                  <motion.button
                    key={section.id}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                    }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(section.id)}
                    className="flex items-center gap-2 px-5 py-3 rounded-full border transition-all"
                  >
                    <Icon size={16} className={activeSection === index ? 'text-primary' : 'text-light/60'} />
                    <span className={`font-body text-xs uppercase tracking-widest ${
                      activeSection === index ? 'text-primary' : 'text-light/60'
                    }`}>
                      {section.name}
                    </span>
                  </motion.button>
                )
              })}
            </div>
          </div>
        </div>
      </motion.nav>

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden md:flex flex-col gap-5">
        {sections.map((section, index) => {
          const Icon = section.icon
          return (
            <motion.button
              key={index}
              onClick={() => scrollToSection(section.id)}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                activeSection === index 
                  ? 'bg-primary text-dark shadow-lg shadow-primary/40' 
                  : 'glass text-light/50'
              }`}>
                <Icon size={20} />
              </div>
              <motion.div 
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: activeSection === index ? 1 : 0 }}
                className="absolute right-14 top-1/2 -translate-y-1/2 bg-dark/90 px-3 py-1 rounded text-xs font-body text-light whitespace-nowrap"
              >
                {section.name}
              </motion.div>
            </motion.button>
          )
        })}
      </div>

      <footer className="py-20 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-display text-4xl font-black text-stroke mb-4">
              CREATIVE.DEV
            </p>
            <p className="font-body text-light/40 text-sm mb-8">
              用代码创造魔法 ✨
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              {['React', 'TypeScript', 'Tailwind', 'Framer'].map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="px-4 py-2 glass rounded-full text-xs font-body text-light/60"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            <p className="font-body text-light/30 text-xs mt-8">
              © 2026 Creative Dev. 保留所有权利。
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

export default App