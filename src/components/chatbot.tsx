'use client'

import { useState, useEffect } from 'react'
import { XMarkIcon, ChatBubbleOvalLeftEllipsisIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid'
import { motion, AnimatePresence } from 'framer-motion'

const responses = {
  greeting: [
    "Hello! I'm here to help you learn about Vuba Stone flood-resistant surfaces. What would you like to know?",
    "Welcome to The Workshop Surface Company! How can I assist you with your flooring project today?"
  ],
  pricing: "Our Vuba Stone products range from $12-40 per square foot. VubaMac Base System starts at $12-15/sq ft, Classic Series at $18-22/sq ft, Premium at $25-30/sq ft, and Ultra at $35-40/sq ft. Would you like a custom quote for your project?",
  installation: "Professional installation typically takes 48-72 hours for most residential projects. The surface is ready for use 24 hours after installation. Our certified installers handle everything from surface preparation to final sealing.",
  warranty: "All Vuba Stone products come with industry-leading warranties: 10 years for Base System, 15 years for Classic, 20 years for Premium, and 25 years for Ultra Series. Coverage includes flood damage, UV resistance, and structural integrity.",
  floodResistance: "Vuba Stone surfaces are 100% flood-resistant thanks to our patented VubaMac base layer technology. The non-porous surface prevents water penetration, making it ideal for Florida's flood-prone areas. It has been tested to withstand Category 5 hurricane conditions.",
  samples: "We offer free sample kits! You'll receive 4x4 inch samples of our most popular colors and textures. Samples typically arrive within 3-5 business days. Would you like me to arrange a sample kit for you?",
  colors: "We offer 8 standard colors in Classic Series, 12 in Premium, and unlimited custom colors in Ultra. Popular choices include Coastal Pearl, Miami Sand, Gulf Grey, and Sunrise Gold. All colors are UV-resistant and won't fade.",
  grants: "Yes! Vuba Stone qualifies for federal and state flood mitigation grants. Florida homeowners can receive up to 40% project cost coverage through FEMA's Flood Mitigation Assistance program. We help with all documentation.",
  default: "I can help you with pricing, installation, warranties, flood resistance features, samples, colors, and grant eligibility. What specific information would you like?"
}

function getResponse(message: string): string {
  const lowerMessage = message.toLowerCase()

  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
    return responses.greeting[Math.floor(Math.random() * responses.greeting.length)]
  }
  if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('$')) {
    return responses.pricing
  }
  if (lowerMessage.includes('install') || lowerMessage.includes('time') || lowerMessage.includes('long')) {
    return responses.installation
  }
  if (lowerMessage.includes('warranty') || lowerMessage.includes('guarantee')) {
    return responses.warranty
  }
  if (lowerMessage.includes('flood') || lowerMessage.includes('water') || lowerMessage.includes('resistant')) {
    return responses.floodResistance
  }
  if (lowerMessage.includes('sample') || lowerMessage.includes('see') || lowerMessage.includes('touch')) {
    return responses.samples
  }
  if (lowerMessage.includes('color') || lowerMessage.includes('design') || lowerMessage.includes('style')) {
    return responses.colors
  }
  if (lowerMessage.includes('grant') || lowerMessage.includes('fema') || lowerMessage.includes('financing')) {
    return responses.grants
  }

  return responses.default
}

export function ChatBot() {
  const [isMounted, setIsMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Array<{text: string, isUser: boolean}>>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const timer = setTimeout(() => {
      if (!isOpen && messages.length === 0) {
        setIsOpen(true)
        setMessages([{
          text: "Welcome! I'm here to help you find the perfect Vuba Stone solution for your property. How can I assist you today?",
          isUser: false
        }])
      }
    }, 5000)

    return () => clearTimeout(timer)
  }, [isMounted, isOpen, messages.length])

  const sendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage = inputValue
    setMessages(prev => [...prev, { text: userMessage, isUser: true }])
    setInputValue('')
    setIsTyping(true)

    setTimeout(() => {
      const response = getResponse(userMessage)
      setMessages(prev => [...prev, { text: response, isUser: false }])
      setIsTyping(false)
    }, 1000)
  }

  if (!isMounted) {
    return null
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden"
          >
            <div className="bg-gradient-to-br from-stone-800 to-stone-900 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-white/10 backdrop-blur rounded-full flex items-center justify-center">
                  <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6 text-white/90" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white">Vuba Stone Assistant</h3>
                  <p className="text-xs text-stone-300">Typically replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-stone-300 hover:text-white transition-colors"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>

            <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-stone-50/50 to-white">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: message.isUser ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                      message.isUser
                        ? 'bg-gradient-to-br from-stone-700 to-stone-800 text-white shadow-sm'
                        : 'bg-white border border-stone-200 text-stone-700 shadow-sm'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white border border-stone-200 px-4 py-3 rounded-2xl shadow-sm">
                    <div className="flex gap-1">
                      <span className="h-2 w-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="h-2 w-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="h-2 w-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            <div className="p-4 border-t border-stone-200 bg-stone-50/50">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  sendMessage()
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2.5 bg-white border border-stone-300 rounded-xl text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-transparent transition-all"
                />
                <button
                  type="submit"
                  className="p-2.5 bg-gradient-to-br from-stone-700 to-stone-800 text-white rounded-xl hover:from-stone-800 hover:to-stone-900 transition-all shadow-sm hover:shadow-md"
                >
                  <PaperAirplaneIcon className="h-5 w-5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 h-14 w-14 bg-gradient-to-br from-stone-700 to-stone-900 text-white rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center justify-center border border-stone-600/20"
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" />
        )}
      </motion.button>
    </>
  )
}