import React, { useState } from 'react'
import { Send } from 'lucide-react'

export default function ContactForm() {
  const [status, setStatus] = useState('idle')
  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('submitting')
    setTimeout(() => {
      setStatus('success')
      e.target.reset()
    }, 1200)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-400 mb-1">Name</label>
        <input type="text" name="name" required className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 outline-none transition-all focus:border-transparent" placeholder="Your Name" />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-400 mb-1">Email</label>
        <input type="email" name="email" required className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 outline-none transition-all focus:border-transparent" placeholder="your@email.com" />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-400 mb-1">Message</label>
        <textarea name="message" rows="4" required className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 outline-none resize-none transition-all focus:border-transparent" placeholder="How can we work together?"></textarea>
      </div>
      <button type="submit" disabled={status === 'submitting' || status === 'success'} className={`w-full py-3 px-6 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 ${status === 'success' ? 'bg-green-600' : 'bg-cyan-600 hover:bg-cyan-500 hover:shadow-lg hover:shadow-cyan-500/25'}`}>
        {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent!' : <>Send Message <Send size={18} /></>}
      </button>
    </form>
  )
}
