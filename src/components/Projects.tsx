import { useCallback, useState } from 'react'
import Reveal from './Reveal'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { useInViewOnce } from '../hooks/useInViewOnce'
import { projects } from '../data/projects'
import type { Project } from '../types/project'
// To remove filtering later: delete the `filters` block and the `cat` state.
const cats = ['All', 'Frontend', 'Fullstack', 'Backend'] as const
export default function Projects() {
  const [cat, setCat] = useState<(typeof cats)[number]>('All')
  const [sel, setSel] = useState<Project | null>(null)
  const { ref, inView } = useInViewOnce<HTMLDivElement>(0.08)
  const close = useCallback(() => setSel(null), [])
  const list = cat === 'All' ? projects : projects.filter((p) => p.category === cat)
  return (
    <section id="projects" className="sec wrap">
      <Reveal><p className="label"><i className="dot" />03 — Work</p></Reveal>
      <Reveal delay={80}><h2>Selected <em>Projects</em></h2></Reveal>
      <Reveal delay={140}><p className="lead">A collection of things I&apos;ve built.</p></Reveal>
      <div className="filters" role="group" aria-label="Filter projects by category">
        {cats.map((c) => <button key={c} className={c === cat ? 'on' : ''} aria-pressed={c === cat} onClick={() => setCat(c)}>{c}</button>)}
      </div>
      <div ref={ref} className={`pgrid-wrap${inView ? ' in' : ''}`}>
        <div className="pgrid" key={cat}>
          {list.map((p, i) => <ProjectCard key={p.id} project={p} index={i} onOpen={() => setSel(p)} />)}
          {list.length === 0 && <p className="empty">No projects in this category yet.</p>}
        </div>
      </div>
      {sel && <ProjectModal project={sel} onClose={close} />}
    </section>
  )
}
