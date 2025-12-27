'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, Globe } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const navItemsKeys = [
  { key: 'home', href: '/' },
  { key: 'blog', href: '/blog' },
  { key: 'projects', href: '/projects' },
  { key: 'contact', href: '/about' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [showLangMenu, setShowLangMenu] = useState(false)
  const pathname = usePathname()
  const { language, setLanguage, t } = useLanguage()

  const navItems = navItemsKeys.map(item => ({
    name: t.nav[item.key as keyof typeof t.nav],
    href: item.href,
  }))

  return (
    <nav className="bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="group -ml-4 md:-ml-8">
            <span className="text-xl md:text-2xl font-bold font-mono bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent hover:from-blue-400 hover:via-purple-400 hover:to-blue-400 transition-all duration-300 bg-[length:200%_100%] animate-gradient">
              canerdev.com
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg transition-all ${
                  pathname === item.href
                    ? 'bg-gray-800 text-blue-400'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <div className="relative ml-2">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-all flex items-center gap-2"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
              </button>
              
              {showLangMenu && (
                <div className="absolute right-0 mt-2 w-32 bg-gray-800 rounded-lg shadow-lg border border-gray-700 overflow-hidden z-50">
                  <button
                    onClick={() => {
                      setLanguage('tr')
                      setShowLangMenu(false)
                    }}
                    className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                      language === 'tr'
                        ? 'bg-gray-700 text-blue-400'
                        : 'text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    Türkçe (TR)
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('en')
                      setShowLangMenu(false)
                    }}
                    className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                      language === 'en'
                        ? 'bg-gray-700 text-blue-400'
                        : 'text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    English (EN)
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('fr')
                      setShowLangMenu(false)
                    }}
                    className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                      language === 'fr'
                        ? 'bg-gray-700 text-blue-400'
                        : 'text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    Français (FR)
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('ar')
                      setShowLangMenu(false)
                    }}
                    className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                      language === 'ar'
                        ? 'bg-gray-700 text-blue-400'
                        : 'text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    العربية (AR)
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-slide-up">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg mb-1 transition-all ${
                  pathname === item.href
                    ? 'bg-gray-800 text-blue-400'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Language Switcher */}
            <div className="px-4 pt-4 border-t border-gray-800 mt-4">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-gray-400" />
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setLanguage('tr')
                      setIsOpen(false)
                    }}
                    className={`px-4 py-2 rounded-lg text-sm transition-all ${
                      language === 'tr'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-800 text-gray-300'
                    }`}
                  >
                    TR
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('en')
                      setIsOpen(false)
                    }}
                    className={`px-4 py-2 rounded-lg text-sm transition-all ${
                      language === 'en'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-800 text-gray-300'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('fr')
                      setIsOpen(false)
                    }}
                    className={`px-4 py-2 rounded-lg text-sm transition-all ${
                      language === 'fr'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-800 text-gray-300'
                    }`}
                  >
                    FR
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('ar')
                      setIsOpen(false)
                    }}
                    className={`px-4 py-2 rounded-lg text-sm transition-all ${
                      language === 'ar'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-800 text-gray-300'
                    }`}
                  >
                    AR
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Click outside to close language menu */}
      {showLangMenu && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowLangMenu(false)}
        />
      )}
    </nav>
  )
}

