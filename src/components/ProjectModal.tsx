import { useEffect, useRef } from 'react'
import type { Project } from '../types/project'
import SmartImage from './SmartImage'
export default function ProjectModal({ project: p, onClose }: { project: Project; onClose: () => void }) {
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
  return (
    <div className="overlay" onClick={onClose}>
      <div ref={box} className="modal" role="dialog" aria-modal="true" aria-labelledby="m-title" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose} aria-label="Close project details">✕</button>
        <div className="media"><SmartImage src={p.image} alt={`${p.title} screenshot`} label={`project-${n}.jpg`} /></div>
        <div className="mbody">
          <span className="num">{n} · {p.category}</span>
          <h3 id="m-title">{p.title}</h3>
          <p>{p.description}</p>
          <ul className="tags">{p.technologies.map((t) => <li key={t}>{t}</li>)}</ul>
          <div className="actions">
            <a className="btn" href={p.githubUrl} target={ext(p.githubUrl)} rel="noopener noreferrer">GitHub</a>
            <a className="btn ghost" href={p.liveUrl} target={ext(p.liveUrl)} rel="noopener noreferrer">Live Demo ↗</a>
          </div>
        </div>
      </div>
    </div>
  )
}
