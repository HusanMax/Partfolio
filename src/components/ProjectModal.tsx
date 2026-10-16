import { useEffect, useRef } from 'react'
import type { Project } from '../types/project'
import SmartImage from './SmartImage'
import { useI18n } from '../i18n/LanguageContext'
export default function ProjectModal({ project: p, onClose }: { project: Project; onClose: () => void }) {
  const { t, lang } = useI18n()
  const box = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null
    document.body.style.overflow = 'hidden'
    box.current?.querySelector<HTMLElement>('button')?.focus()
    const key = (e: KeyboardEvent) => {
      if (e.key === 'Escape') return onClose()
      if (e.key !== 'Tab' || !box.current) return
      const f = box.current.querySelectorAll<HTMLElement>('a[href],button')
      const first = f[0], last = f[f.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', key)
    return () => { document.removeEventListener('keydown', key); document.body.style.overflow = ''; prev?.focus() }
  }, [onClose])
  const n = String(p.id).padStart(2, '0')
  const ext = (u: string) => (u === '#' ? undefined : '_blank')
  const title = p.title[lang]
  const category = t.projects.categories[p.category] ?? p.category
  return (
    <div className="overlay" onClick={onClose}>
      <div ref={box} className="modal" role="dialog" aria-modal="true" aria-labelledby="m-title" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose} aria-label={t.projects.close}>✕</button>
        <div className="media"><SmartImage src={p.image} alt={`${title} ${t.projects.screenshot}`} label={`project-${n}.jpg`} /></div>
        <div className="mbody">
          <span className="num">{n} · {category}</span>
          <h3 id="m-title">{title}</h3>
          <p>{p.description[lang]}</p>
          <ul className="tags">{p.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul>
          <div className="actions">
            <a className="btn" href={p.githubUrl} target={ext(p.githubUrl)} rel="noopener noreferrer">{t.projects.github}</a>
            <a className="btn ghost" href={p.liveUrl} target={ext(p.liveUrl)} rel="noopener noreferrer">{t.projects.live} ↗</a>
          </div>
        </div>
      </div>
    </div>
  )
}
