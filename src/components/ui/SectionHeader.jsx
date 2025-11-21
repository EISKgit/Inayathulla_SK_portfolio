import React from 'react'
import RevealOnScroll from './RevealOnScroll'

export default function SectionHeader({ title, subtitle }) {
  return (
    <RevealOnScroll className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
      <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full mb-4"></div>
      <p className="text-slate-400 max-w-2xl mx-auto text-lg">{subtitle}</p>
    </RevealOnScroll>
  )
}
