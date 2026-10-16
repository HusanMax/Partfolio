import { useEffect, useState } from 'react'
import { useI18n } from '../i18n/LanguageContext'
import { languages } from '../i18n/translations'

const links = [
  { id: 'about', key: 'about' },
  { id: 'skills', key: 'skills' },
  { id: 'projects', key: 'projects' },
  { id: 'process', key: 'process' },
  { id: 'contact', key: 'contact' },
] as const

export default function Navbar() {
  const { t, lang, setLang } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const f = () => setScrolled(scrollY > 24)
    f(); addEventListener('scroll', f, { passive: true })
    return () => removeEventListener('scroll', f)
  }, [])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const k = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    addEventListener('keydown', k)
    return () => removeEventListener('keydown', k)
  }, [open])
  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}${open ? ' open' : ''}`}>
      <div className="nav-in">
        <a href="#top" className="logo" onClick={() => setOpen(false)}>HUSAN<span>.</span></a>
        <nav id="menu" className="menu" aria-label={t.nav.menu}>
          {links.map((l) => <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}>{t.nav[l.key]}</a>)}
        </nav>
        <div className="nav-right">
          <div className="lang" role="group" aria-label={t.nav.lang}>
            {languages.map((l) => (
              <button
                key={l.code}
                type="button"
                className={l.code === lang ? 'on' : ''}
                aria-pressed={l.code === lang}
                aria-label={l.label}
                onClick={() => setLang(l.code)}
              >
                {l.code.toUpperCase()}
              </button>
            ))}
          </div>
          <a href="#contact" className="btn btn-sm talk">{t.nav.talk}</a>
        </div>
        <button className="burger" aria-label={open ? t.nav.closeMenu : t.nav.openMenu} aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}><i /><i /></button>
      </div>
    </header>
  )
}
