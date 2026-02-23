'use client'

import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { getTranslation, type Locale } from '../data/translations'

const STORAGE_KEY = 'skydental-locale'

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  isRtl: boolean
  t: (section: 'nav' | 'hero' | 'footer' | 'lang', key: string) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === 'undefined') return 'en'
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null
    return stored === 'ar' ? 'ar' : 'en'
  })

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    localStorage.setItem(STORAGE_KEY, next)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr')
    root.setAttribute('lang', locale === 'ar' ? 'ar' : 'en')
  }, [locale])

  const t = useCallback(
    (section: 'nav' | 'hero' | 'footer' | 'lang', key: string) => getTranslation(locale, section, key),
    [locale]
  )

  const value: LanguageContextValue = {
    locale,
    setLocale,
    isRtl: locale === 'ar',
    t,
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
