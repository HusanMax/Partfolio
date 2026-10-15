import type { Project } from '../types/project'
import SmartImage from './SmartImage'
const ext = (u: string) => (u === '#' ? {} : { target: '_blank', rel: 'noopener noreferrer' })
export default function ProjectCard({ project: p, index = 0, onOpen }: { project: Project; index?: number; onOpen: () => void }) {
  const v = ((p.id - 1) % 6) + 1 // each slot has its own layout
  const n = String(p.id).padStart(2, '0')
  return (
    <article className={`pcard v${v}`} style={{ '--d': `${Math.min(index, 6) * 80}ms` } as React.CSSProperties} data-cursor onClick={onOpen}>
      <div className="media">
        <SmartImage src={p.image} alt={`${p.title} screenshot`} label={`project-${n}.jpg`} />
        <span className="arrow" aria-hidden="true">↗</span>
      </div>
      <div className="pbody">
        <span className="num">{n}{p.featured && <em> · Featured</em>}</span>
        <h3><button className="tbtn" onClick={(e) => { e.stopPropagation(); onOpen() }} aria-haspopup="dialog">{p.title}</button></h3>
        <p>{p.description}</p>
        <ul className="tags">{p.technologies.map((t) => <li key={t}>{t}</li>)}</ul>
        <div className="plinks">
          <a href={p.githubUrl} {...ext(p.githubUrl)} onClick={(e) => e.stopPropagation()}>GitHub</a>
          <a href={p.liveUrl} {...ext(p.liveUrl)} onClick={(e) => e.stopPropagation()}>Live Demo <span aria-hidden>↗</span></a>
        </div>
      </div>
    </article>
  )
}
