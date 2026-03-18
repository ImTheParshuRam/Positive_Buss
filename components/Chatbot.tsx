'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'
import faqData from '@/data/faq.json'

type Message = {
  id: string
  text: string
  sender: 'user' | 'bot'
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      text: 'Hi! How can I help you today? You can ask me about fees, timings, subjects, etc.',
      sender: 'bot',
    },
  ])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const findAnswer = (question: string) => {
    const qLower = question.toLowerCase()
    for (const item of faqData) {
      if (item.keywords.some((kw) => qLower.includes(kw))) {
        return item.answer
      }
    }
    return 'Please contact us at 9811743645 for more details.'
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMsg: Message = { id: Date.now().toString(), text: input, sender: 'user' }
    setMessages((prev) => [...prev, userMsg])
    setInput('')

    // Simulate small delay
    setTimeout(() => {
      const answer = findAnswer(userMsg.text)
      const botMsg: Message = { id: (Date.now() + 1).toString(), text: answer, sender: 'bot' }
      setMessages((prev) => [...prev, botMsg])
    }, 500)
  }

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-24 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-transform duration-300 z-50 flex items-center justify-center ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-5 w-[90vw] sm:w-[350px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform transition-all duration-300 origin-bottom-right z-50 flex flex-col ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}
        style={{ maxHeight: 'calc(100vh - 120px)' }}
      >
        {/* Header */}
        <div className="bg-blue-600 p-4 text-white flex justify-between items-center">
          <div>
            <h3 className="font-bold">Positive Academy</h3>
            <p className="text-xs text-blue-100">Online Support</p>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:bg-blue-700 p-1 rounded-full text-white/90 hover:text-white transition">
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-3 min-h-[300px] max-h-[400px]">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                msg.sender === 'user' ? 'bg-blue-600 text-white rounded-br-none self-end' : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none self-start shadow-sm'
              }`}
            >
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-gray-100 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question..."
            className="flex-1 min-h-[44px] bg-gray-50 border border-gray-200 rounded-full px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors shrink-0"
            aria-label="Send message"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </>
  )
}
