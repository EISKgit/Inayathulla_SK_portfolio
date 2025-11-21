import React from 'react'
import SectionHeader from '../components/ui/SectionHeader'
import RevealOnScroll from '../components/ui/RevealOnScroll'
import { USER_DATA } from '../data/user'
import { SOFT_SKILLS } from '../data/softSkills'
import { User } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="About Me" subtitle="A glimpse into my professional journey and core strengths" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <RevealOnScroll className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-cyan-500/10 rounded-lg">
                <User className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Professional Summary</h3>
            </div>
            <p className="text-slate-400 leading-relaxed text-lg mb-6">
              {USER_DATA.summary}
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                Open to Remote
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                Open to Relocation
              </div>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SOFT_SKILLS.map((skill, idx) => (
              <RevealOnScroll key={idx} delay={idx * 100} className="bg-slate-800/40 p-5 rounded-xl border border-slate-800 hover:bg-slate-800/60 hover:border-cyan-500/30 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-slate-900 rounded-lg group-hover:bg-cyan-900/30 transition-colors">
                    <skill.icon className="text-slate-400 group-hover:text-cyan-400 transition-colors" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold group-hover:text-cyan-100 transition-colors">{skill.name}</h4>
                    <p className="text-xs text-slate-500 mt-1">{skill.desc}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
