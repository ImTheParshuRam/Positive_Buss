'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Courses', href: '#courses' },
    { label: 'English Programs', href: '#english' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Faculty', href: '#faculty' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo */}
          <div className="bg-white dark:bg-gray-800/80 rounded-xl shadow-md p-2 flex flex-col items-center justify-center border border-gray-100 dark:border-gray-700 w-max shrink-0 transition-transform hover:scale-105">
            <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-blue-50 dark:bg-blue-900/40 rounded-full mb-1 border-2 border-blue-600 dark:border-blue-400">
              <span className="font-bold text-blue-600 dark:text-blue-400 text-xs md:text-sm">MR</span>
            </div>
            <span className="text-[10px] md:text-xs font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 uppercase text-center leading-tight">
              Positive<br />Academy
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions wrapper */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <a
              href="#contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors shadow-md shadow-blue-500/20"
            >
              Call Now
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            {/* Mobile Menu Button */}
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 mt-2 border-t border-gray-100 dark:border-gray-800 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg text-sm font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-3 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 mt-2"
              onClick={() => setIsOpen(false)}
            >
              Call Now
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
