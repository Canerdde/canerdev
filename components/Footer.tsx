'use client'

import { Github, Linkedin, Mail, ArrowUp, Code2, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [footerParticles, setFooterParticles] = useState<Array<{
    id: number
    size: number
    left: number
    top: number
    delay: number
    duration: number
  }>>([])

  useEffect(() => {
    // Only generate random values on client-side
    setFooterParticles(
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        size: Math.random() * 3 + 2,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 4,
        duration: Math.random() * 6 + 8,
      }))
    )

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 border-t border-gray-800 mt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      {/* Animated Grid Lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] animate-grid-move" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {footerParticles.length > 0 && footerParticles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full opacity-20 animate-footer-particle"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              background: `radial-gradient(circle, rgba(59, 130, 246, 0.6), rgba(139, 92, 246, 0.4))`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Animated Gradient Lines */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-30 animate-gradient-line" />
      
      {/* Subtle Orb Effects */}
      <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-footer-orb" />
      <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-footer-orb" style={{ animationDelay: '2s' }} />

      <div className="container-custom py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-mono bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                canerdev.com
              </h3>
            </div>
            <p className="text-gray-400 text-sm mb-6 max-w-md leading-relaxed">
              {t.footer.description}
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://github.com/Canerdde"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              >
                <Github className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  GitHub
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/caner-dedeo%C4%9Flu-b7228a307/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              >
                <Linkedin className="w-5 h-5 group-hover:text-blue-500 transition-colors" />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  LinkedIn
                </span>
              </a>
              <a
                href="mailto:caneerdedeoglu@gmail.com"
                className="group relative bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              >
                <Mail className="w-5 h-5 group-hover:text-purple-400 transition-colors" />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Email
                </span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-400" />
              {t.footer.navigation}
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-blue-400 transition-colors" />
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-purple-400 transition-colors" />
                  {t.nav.blog}
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-400 hover:text-pink-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-pink-400 transition-colors" />
                  {t.nav.projects}
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-blue-400 transition-colors" />
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Mail className="w-4 h-4 text-purple-400" />
              {t.footer.contact}
            </h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:caneerdedeoglu@gmail.com"
                  className="text-gray-400 hover:text-purple-400 transition-colors text-sm break-all"
                >
                  caneerdedeoglu@gmail.com
                </a>
              </li>
              <li className="text-gray-500 text-sm">
                {t.footer.alwaysOpen}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} <span className="text-blue-400 font-semibold">canerdev.com</span>. {t.footer.rights}
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-4 rounded-full shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-110 animate-slide-up"
          aria-label={t.footer.scrollToTop}
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  )
}

