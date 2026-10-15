import { useEffect, useState } from 'react'
const links = ['About', 'Skills', 'Projects', 'Process', 'Contact']
export default function Navbar() {
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
        <nav id="menu" className="menu" aria-label="Main">
          {links.map((l) => <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>)}
        </nav>
        <a href="#contact" className="btn btn-sm talk">Let&apos;s Talk</a>
        <button className="burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}><i /><i /></button>
      </div>
    </header>
  )
}
