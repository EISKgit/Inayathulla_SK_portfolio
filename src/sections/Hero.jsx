import React from 'react'
import RevealOnScroll from '../components/ui/RevealOnScroll'
import Typewriter from '../components/ui/Typewriter'
import { USER_DATA } from '../data/user'
import { Github, Linkedin, Mail, Terminal, Download } from 'lucide-react'

export default function Hero({ scrollTo }) {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="md:w-1/2 text-center md:text-left z-10">
        <RevealOnScroll>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6 backdrop-blur-sm">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Available for new opportunities
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
              {USER_DATA.name.split(' ')[0]} SK
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-400 font-light mb-8 h-12 flex items-center justify-center md:justify-start gap-2">
            I build <Typewriter words={['Scalable AI Solutions.', 'Full Stack Systems.', 'Secure APIs.', 'System Design and Architecture', 'Cloud Architectures.']} />
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
            {USER_DATA.summary.split(' ').slice(0, 40).join(' ')}...
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button onClick={() => scrollTo('projects')} className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold shadow-lg transition-all transform hover:-translate-y-1 hover:scale-105">
              View My Work
            </button>
            <button onClick={() => scrollTo('contact')} className="px-8 py-4 rounded-full bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 text-white font-bold transition-all">
              Contact Me
            </button>
          </div>

          <div className="mt-12 flex items-center justify-center md:justify-start space-x-6">
            <a href={USER_DATA.links.github} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-slate-900/50 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-all"><Github size={24} /></a>
            <a href={USER_DATA.links.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-slate-900/50 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-all"><Linkedin size={24} /></a>
            <a href={`mailto:${USER_DATA.email}`} className="p-3 rounded-full bg-slate-900/50 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-all"><Mail size={24} /></a>
          </div>
        </RevealOnScroll>
      </div>

      <div className="md:w-1/2 relative flex justify-center items-center z-10">
        <RevealOnScroll delay={200}>
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-cyan-500/20 to-transparent rounded-2xl rotate-6 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-tl from-blue-600/20 to-transparent rounded-2xl -rotate-6 animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-700/50 bg-slate-900 shadow-2xl group hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 opacity-80"></div>
              <img src={USER_DATA.images.profile} alt={USER_DATA.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute bottom-6 left-6 z-20 bg-slate-950/80 backdrop-blur-md px-5 py-3 rounded-xl border border-slate-800 shadow-xl">
                <p className="text-xs text-cyan-400 uppercase tracking-wider font-bold mb-1">Currently at</p>
                <p className="text-white font-bold text-lg">DTskill AI</p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
