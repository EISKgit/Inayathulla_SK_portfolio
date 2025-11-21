import React from 'react'
import SectionHeader from '../components/ui/SectionHeader'
import RevealOnScroll from '../components/ui/RevealOnScroll'
import ContactForm from '../components/ui/ContactForm'
import { Mail, Phone, Linkedin, Github } from 'lucide-react'
import { USER_DATA } from '../data/user'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Get In Touch" subtitle="Ready to build something amazing?" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <RevealOnScroll className="space-y-8">
            <p className="text-lg text-slate-400 leading-relaxed">I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
            <div className="space-y-4">
              {[
                { icon: Mail, text: USER_DATA.email, href: `mailto:${USER_DATA.email}` },
                { icon: Phone, text: USER_DATA.phone, href: `tel:${USER_DATA.phone}` },
                { icon: Linkedin, text: "linkedin.com/in/eisk", href: USER_DATA.links.linkedin },
                { icon: Github, text: "github.com/eisk", href: USER_DATA.links.github }
              ].map((contact, idx) => (
                <a key={idx} href={contact.href} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-slate-900 rounded-xl border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all">
                  <div className="p-2 bg-slate-950 rounded-lg">
                    <contact.icon className="text-slate-400" size={20} />
                  </div>
                  <span className="text-slate-300 font-medium">{contact.text}</span>
                </a>
              ))}
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={200} className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-2xl">
            <ContactForm />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
