import React from 'react'
import { Terminal } from 'lucide-react'
import { USER_DATA } from '../../data/user'

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-10 border-t border-slate-900 text-center text-slate-500 text-sm">
      <div className="flex justify-center items-center gap-2 mb-4">
         <div className="h-px w-12 bg-slate-800"></div>
         <Terminal size={16} className="text-cyan-900" />
         <div className="h-px w-12 bg-slate-800"></div>
      </div>
      <p>&copy; {new Date().getFullYear()} {USER_DATA.name}. All rights reserved.</p>
      <p className="mt-2 text-slate-600">Designed & Built with React, Tailwind CSS & Lucide Icons.</p>
    </footer>
  )
}
