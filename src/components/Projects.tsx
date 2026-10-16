import { useCallback, useState } from 'react'
import Reveal from './Reveal'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { useInViewOnce } from '../hooks/useInViewOnce'
import { projects } from '../data/projects'
import type { Category, Project } from '../types/project'
import { useI18n } from '../i18n/LanguageContext'
// To remove filtering later: delete the `cats` block and the `cat` state.
const cats: ('All' | Category)[] = ['All', ...Array.from(new Set(projects.map((p) => p.category)))]
export default function Projects() {
  const { t } = useI18n()
  const [cat, setCat] = useState<(typeof cats)[number]>('All')
  const [sel, setSel] = useState<Project | null>(null)
  const { ref, inView } = useInViewOnce<HTMLDivElement>(0.08)
  const close = useCallback(() => setSel(null), [])
  const list = cat === 'All' ? projects : projects.filter((p) => p.category === cat)
  const label = (c: (typeof cats)[number]) => (c === 'All' ? t.projects.all : t.projects.categories[c] ?? c)
  return (
    <section id="projects" className="sec wrap">
      <Reveal><p className="label"><i className="dot" />{t.projects.label}</p></Reveal>
      <Reveal delay={80}><h2>{t.projects.title}<em>{t.projects.titleEm}</em></h2></Reveal>
      <Reveal delay={140}><p className="lead">{t.projects.lead}</p></Reveal>
      <div className="filters" role="group" aria-label={t.projects.filter}>
        {cats.map((c) => <button key={c} className={c === cat ? 'on' : ''} aria-pressed={c === cat} onClick={() => setCat(c)}>{label(c)}</button>)}
      </div>
      <div ref={ref} className={`pgrid-wrap${inView ? ' in' : ''}`}>
        <div className="pgrid" key={cat}>
          {list.map((p, i) => <ProjectCard key={p.id} project={p} index={i} onOpen={() => setSel(p)} />)}
          {list.length === 0 && <p className="empty">{t.projects.empty}</p>}
        </div>
      </div>
      {sel && <ProjectModal project={sel} onClose={close} />}
    </section>
  )
}
