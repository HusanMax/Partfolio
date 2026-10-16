import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { translations, type Dict, type Lang } from './translations'

interface I18nValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Dict
}

const Ctx = createContext<I18nValue | null>(null)

const isLang = (v: string | null): v is Lang => v === 'uz' || v === 'en' || v === 'ru'

function initialLang(): Lang {
  if (typeof window === 'undefined') return 'en'
  const stored = localStorage.getItem('lang')
  if (isLang(stored)) return stored
  const nav = navigator.language.slice(0, 2).toLowerCase()
  if (nav === 'uz') return 'uz'
  if (nav === 'ru') return 'ru'
  return 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang)
  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])
  return <Ctx.Provider value={{ lang, setLang, t: translations[lang] }}>{children}</Ctx.Provider>
}

export function useI18n() {
  const value = useContext(Ctx)
  if (!value) throw new Error('useI18n must be used within a LanguageProvider')
  return value
}
