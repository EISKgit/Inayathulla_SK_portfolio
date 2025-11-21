import React from 'react'
import SectionHeader from '../components/ui/SectionHeader'
import RevealOnScroll from '../components/ui/RevealOnScroll'
import { PROJECTS } from '../data/projects'
import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-900/30 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Featured Projects" subtitle="Solving real problems with code and AI" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project, index) => (
            <RevealOnScroll key={index} delay={index * 150} className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl flex flex-col h-full">
              <div className="h-60 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 bg-slate-950/90 text-xs font-bold text-cyan-400 rounded-full border border-slate-700">{project.category}</span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                </div>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-1">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs text-slate-400 bg-slate-800/50 px-3 py-1.5 rounded-full border border-slate-700">#{t}</span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto pt-6 border-t border-slate-800">
                  <a href={project.link} className="flex-1 py-2 rounded-lg bg-cyan-600/10 text-cyan-400 hover:bg-cyan-600 hover:text-white text-sm font-bold flex items-center justify-center gap-2 transition-all border border-cyan-500/20 hover:border-cyan-500"><ExternalLink size={16} /> Live Demo</a>
                  <a href={project.github} className="flex-1 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white text-sm font-bold flex items-center justify-center gap-2 transition-all border border-slate-700"><Github size={16} /> Code</a>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
