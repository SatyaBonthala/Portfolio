'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [text, setText] = useState('')
  const fullText = 'Full Stack Developer'
  
  useEffect(() => {
    let index = 0
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(intervalId)
      }
    }, 100)
    
    return () => clearInterval(intervalId)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-dark-light to-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff4110_1px,transparent_1px),linear-gradient(to_bottom,#00ff4110_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-primary animate-glow">Satya Bonthala</span>
          </h1>
          
          <div className="text-2xl md:text-4xl text-gray-400 mb-8 font-mono h-12">
            <span className="text-primary">&gt;</span> {text}
            <span className="animate-pulse text-primary">_</span>
          </div>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Building innovative solutions with AI, Python, and modern web technologies
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-black font-semibold hover:bg-primary-light transition-all duration-300 rounded hover:shadow-lg hover:shadow-primary/50"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300 rounded"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-primary/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 border border-primary/20 rounded-full animate-pulse"></div>
    </section>
  )
}
