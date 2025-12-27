'use client'

import { Mail, Github, Linkedin } from 'lucide-react'
import { ContactForm } from '@/components/ContactForm'
import { useLanguage } from '@/contexts/LanguageContext'

export default function AboutPage() {
  const { t } = useLanguage()
  return (
    <div className="container-custom py-12">
      {/* Contact */}
      <section className="max-w-4xl mx-auto">
        <div className="card text-center">
          <h2 className="text-3xl font-bold mb-6">{t.about.title}</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            {t.about.subtitle}
          </p>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <a
              href="mailto:caneerdedeoglu@gmail.com"
              className="card group hover:border-blue-500"
            >
              <Mail className="w-10 h-10 mx-auto mb-3 text-blue-400 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-1">{t.about.email}</h3>
              <p className="text-sm text-gray-400">caneerdedeoglu@gmail.com</p>
            </a>

            <a
              href="https://github.com/Canerdde"
              target="_blank"
              rel="noopener noreferrer"
              className="card group hover:border-purple-500"
            >
              <Github className="w-10 h-10 mx-auto mb-3 text-purple-400 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-1">GitHub</h3>
              <p className="text-sm text-gray-400">@Canerdde</p>
            </a>

            <a
              href="https://www.linkedin.com/in/caner-dedeo%C4%9Flu-b7228a307/"
              target="_blank"
              rel="noopener noreferrer"
              className="card group hover:border-pink-500"
            >
              <Linkedin className="w-10 h-10 mx-auto mb-3 text-pink-400 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-1">LinkedIn</h3>
              <p className="text-sm text-gray-400">Caner Dedeoğlu</p>
            </a>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </section>
    </div>
  )
}

