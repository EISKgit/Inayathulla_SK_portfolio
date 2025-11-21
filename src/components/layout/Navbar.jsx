import React, { useEffect, useState } from 'react'
import { Terminal, Download, Menu, X } from 'lucide-react'
import { USER_DATA } from '../../data/user'

export default function Navbar({ scrollTo }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    } catch (e) {
      return 'light'
    }
  })

  useEffect(() => {
    if (theme === 'dark') document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
    try { localStorage.setItem('theme', theme) } catch (e) { }
  }, [theme])

  const navItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact']

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300
      for (const section of navItems) {
        const id = section.toLowerCase()
        const element = document.getElementById(id)
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(id)
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-950/80 backdrop-blur-lg z-50 border-b border-slate-800/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollTo('home')}>
            <span className="text-2xl font-bold text-slate-100 tracking-tighter flex items-center gap-2">
              <Terminal className="text-cyan-500" size={28} />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">Software Developer</span>
            </span>
          </div>

          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === item.toLowerCase()
                    ? 'text-cyan-400 bg-cyan-950/30 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                    }`}
                >
                  {item}
                </button>
              ))}
              <a href={USER_DATA.links.resume} className="px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-sm font-bold transition-all shadow-lg flex items-center gap-2 hover:scale-105">
                <Download size={16} /> Download CV
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* <button onClick={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')} className="px-3 py-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors text-slate-300">
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button> */}

            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-300 hover:text-white p-2 hover:bg-slate-800 rounded-lg transition-colors">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 animate-in slide-in-from-top-5 shadow-2xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'].map(item => (
              <button key={item} onClick={() => { scrollTo(item.toLowerCase()); setIsMenuOpen(false) }} className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800">
                {item}
              </button>
            ))}
            <a href={USER_DATA.links.resume} className="block w-full text-center mt-4 px-4 py-3 rounded-lg bg-cyan-600 text-white font-bold">
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
