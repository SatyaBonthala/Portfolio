'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-primary/20' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary animate-glow">
            &lt;SB /&gt;
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-primary hover:text-primary-light transition-colors duration-300 hover:underline underline-offset-8"
              >
                {item}
              </Link>
            ))}
          </div>
          
          <a
            href="https://github.com/SatyaBonthala"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border-2 border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300 rounded"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  )
}
