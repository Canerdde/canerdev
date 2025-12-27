'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export function ContactForm() {
  const { t } = useLanguage()
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/mjkpbqqe', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
        // 5 saniye sonra formu tekrar göster
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="max-w-2xl mx-auto text-center py-12 animate-fade-in">
        <div className="card border-green-500/50">
          <div className="w-16 h-16 mx-auto mb-4 bg-green-500/20 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-2 text-green-400">{t.contact.success}</h3>
          <p className="text-gray-400">
            {t.contact.successDesc}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder={t.contact.name}
            required
            disabled={status === 'loading'}
            className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
          />
          <input
            type="email"
            name="email"
            placeholder={t.contact.email}
            required
            disabled={status === 'loading'}
            className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
          />
        </div>
        <input
          type="text"
          name="subject"
          placeholder={t.contact.subject}
          required
          disabled={status === 'loading'}
          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
        />
        <textarea
          name="message"
          placeholder={t.contact.message}
          rows={6}
          required
          disabled={status === 'loading'}
          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors resize-none disabled:opacity-50"
        />
        <input type="hidden" name="_replyto" value="caneerdedeoglu@gmail.com" />
        <input type="hidden" name="_subject" value="Yeni İletişim Formu Mesajı - canerdev.com" />
        
        {status === 'error' && (
          <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 text-red-400">
            {t.contact.error}
          </div>
        )}

        <button 
          type="submit" 
          disabled={status === 'loading'}
          className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? t.contact.sending : t.contact.send}
        </button>
      </form>
    </div>
  )
}

