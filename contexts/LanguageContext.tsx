'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { Language, getTranslations } from '@/lib/translations'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: ReturnType<typeof getTranslations>
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('tr')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check for saved language preference or default to Turkish
    const savedLang = localStorage.getItem('language') as Language | null
    if (savedLang === 'tr' || savedLang === 'en' || savedLang === 'fr' || savedLang === 'ar') {
      setLanguageState(savedLang)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
    // Update HTML lang and dir attributes
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang
      // Set RTL for Arabic
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    }
  }

  // Update HTML lang and dir attributes when language changes
  useEffect(() => {
    if (mounted && typeof document !== 'undefined') {
      document.documentElement.lang = language
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    }
  }, [language, mounted])

  const t = getTranslations(language)

  if (!mounted) {
    // Return default translations during SSR
    return (
      <LanguageContext.Provider value={{ language: 'tr', setLanguage, t: getTranslations('tr') }}>
        {children}
      </LanguageContext.Provider>
    )
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

