import React from 'react'
import SectionHeader from '../components/ui/SectionHeader'
import RevealOnScroll from '../components/ui/RevealOnScroll'
import { CERTIFICATIONS } from '../data/certifications'
import { Calendar } from 'lucide-react'

export default function Certifications() {
  return (
    <section id="certifications" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Licenses, Certifications, and Badges" subtitle="Validated expertise across the stack" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert, index) => {
            const Icon = cert.icon
            return (
              <RevealOnScroll
                key={index}
                delay={index * 100}
              >
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
  group bg-slate-900 rounded-2xl border border-slate-800
  hover:border-cyan-400/60
  transition-all hover:shadow-[0_0_25px_rgba(6,182,212,0.35)]
  hover:shadow-xl
  hover:-translate-y-2
  overflow-hidden flex flex-col cursor-pointer block
"

                >
                  {/* Image Section */}
                  <div className="h-40 w-full bg-slate-950 flex items-center justify-center overflow-hidden relative">

                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="
  max-h-full max-w-full object-contain
  opacity-80 group-hover:opacity-100
  group-hover:scale-[1.07]
  transition-all duration-700
"

                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent pointer-events-none"></div>

                    {/* Floating Icon */}
                    <div className="absolute bottom-4 right-4 
                      p-2 bg-slate-900/80 backdrop-blur 
                      rounded-lg border border-slate-700 
                      shadow-lg group-hover:border-cyan-500/40">
                      <Icon className="text-cyan-400 group-hover:text-cyan-300 transition-colors" size={20} />
                    </div>
                  </div>

                  {/* Text Section */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-white mb-2 
                     group-hover:text-cyan-400 transition-colors leading-snug">
                      {cert.name}
                    </h3>

                    <div className="mt-auto pt-4 border-t border-slate-800/50 
                      flex justify-between items-end">

                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">
                          Issued By
                        </p>
                        <p className="text-sm text-slate-300 group-hover:text-white transition-colors">
                          {cert.source}
                        </p>
                      </div>

                      <div className="flex items-center text-xs text-slate-500 gap-1 
                        bg-slate-950 px-2 py-1 rounded border border-slate-800 
                        group-hover:border-slate-700 transition-colors">
                        <Calendar size={12} /> {cert.date}
                      </div>
                    </div>
                  </div>
                </a>
              </RevealOnScroll>

            )
          })}
        </div>
      </div>
    </section>
  )
}
