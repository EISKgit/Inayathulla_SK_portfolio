import React from 'react'
import SectionHeader from '../components/ui/SectionHeader'
import RevealOnScroll from '../components/ui/RevealOnScroll'
import TechLogo from '../components/ui/TechLogo'
import { SKILLS } from '../data/skills'
import { Code, Terminal, Cpu, Cloud } from 'lucide-react'

export default function Skills() {
  const categories = [
    { title: 'Frontend', icon: Code, skills: SKILLS.frontend, color: 'text-cyan-400' },
    { title: 'Backend', icon: Terminal, skills: SKILLS.backend, color: 'text-green-400' },
    { title: 'AI & ML', icon: Cpu, skills: SKILLS.ai_ml, color: 'text-purple-400' },
    { title: 'DevOps', icon: Cloud, skills: SKILLS.devops, color: 'text-orange-400' }
  ]

  return (
    <section id="skills" className="py-24 bg-slate-900/30 border-y border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Technical Arsenal" subtitle="My stack for building robust applications" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Frontend', icon: Code, skills: SKILLS.frontend, color: 'text-cyan-400' },
            { title: 'Backend', icon: Terminal, skills: SKILLS.backend, color: 'text-green-400' },
            { title: 'AI & ML', icon: Cpu, skills: SKILLS.ai_ml, color: 'text-purple-400' },
            { title: 'DevOps', icon: Cloud, skills: SKILLS.devops, color: 'text-orange-400' }
          ].map((category, idx) => (
            <RevealOnScroll key={idx} delay={idx * 100} className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] group h-full">
              <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
                <div className={`p-3 rounded-xl bg-slate-950 ${category.color.replace('text', 'bg')}/10`}>
                  <category.icon className={category.color} size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-200">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <div key={skill} className="flex items-center gap-2 px-3 py-1.5 bg-slate-950 rounded-lg border border-slate-800 group-hover:border-slate-700 transition-all hover:bg-slate-800">
                    <TechLogo name={skill} className="w-4 h-4" />
                    <span className="text-sm text-slate-400 group-hover:text-slate-200">{skill}</span>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
