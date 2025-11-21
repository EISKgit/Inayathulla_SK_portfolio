import React from 'react'
import SectionHeader from '../components/ui/SectionHeader'
import RevealOnScroll from '../components/ui/RevealOnScroll'
import { EXPERIENCE } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent -z-10"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Work History" subtitle="My professional journey and key milestones" />
        <div className="relative mt-16">
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500/50 via-slate-700 to-slate-800 transform md:-translate-x-1/2 rounded-full"></div>
          <div className="space-y-16">
            {EXPERIENCE.map((job, index) => (
              <RevealOnScroll key={index} delay={index * 100}>
                <div className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-start md:items-center`}>
                  <div className="absolute left-4 md:left-1/2 w-6 h-6 bg-slate-900 rounded-full border-4 border-cyan-500 transform -translate-x-1/2 z-10 mt-1.5 md:mt-0 shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
                  <div className="ml-16 md:ml-0 md:w-1/2 md:px-12 w-full">
                    <div className={`bg-slate-900/80 p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-all relative hover:shadow-2xl hover:-translate-y-1 group ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      <div className={`hidden md:block absolute top-1/2 w-4 h-4 bg-slate-900 border-t border-r border-slate-800 transform -translate-y-1/2 rotate-45 ${index % 2 === 0 ? '-left-2 border-r-0 border-b border-l border-slate-800 group-hover:border-cyan-500/30' : '-right-2 group-hover:border-cyan-500/30'}`}></div>

                      <span className="inline-flex items-center px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-bold rounded-full mb-4 border border-cyan-500/20">{job.period}</span>
                      <h3 className="text-xl font-bold text-white mb-1">{job.role}</h3>
                      <h4 className="text-lg text-slate-400 font-medium mb-4 flex items-center gap-2 md:inline-flex">
                         {job.company}
                      </h4>
                      <p className="text-sm text-slate-400 leading-relaxed mb-4">{job.desc}</p>
                      <div className={`text-xs text-slate-500 flex items-center gap-1 font-medium ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                         <div className="w-2 h-2 bg-slate-600 rounded-full"></div> {job.location}
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
