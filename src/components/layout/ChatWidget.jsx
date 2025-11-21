import React, { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { Bot } from 'lucide-react'

export default function ChatWidget() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isChatOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-slate-800 p-4 border-b border-slate-700 flex justify-between items-center">
                <h3 className="font-bold text-white flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    AI Assistant
                </h3>
                <button onClick={() => setIsChatOpen(false)} className="text-slate-400 hover:text-white">
                    <X size={18} />
                </button>
            </div>
            <div className="p-4 h-64 bg-slate-900/50 flex flex-col justify-center items-center text-center space-y-3">
                <div className="p-3 bg-slate-800 rounded-full">
                    <Bot size={32} className="text-cyan-400" />
                </div>
                <p className="text-slate-400 text-sm">
                    My AI clone is currently being trained! Check back soon to chat with "Digital Inayath".
                </p>
            </div>
        </div>
      )}

      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="p-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
        aria-label="Chat with me"
      >
        {isChatOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  )
}
