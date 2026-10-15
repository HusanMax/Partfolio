import { useEffect, useState, type CSSProperties } from 'react'
import Reveal from './Reveal'
import { useInViewOnce } from '../hooks/useInViewOnce'
import { skillGroups } from '../data/skills'
import type { Skill } from '../data/skills'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

function SkillBar({ skill, index, active }: { skill: Skill; index: number; active: boolean }) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!active) return
    const target = skill.percentage
    if (prefersReducedMotion()) { setValue(target); return }
    const start = performance.now() + index * 70
    const duration = 1500
    let raf = 0
    const tick = (now: number) => {
      const t = Math.min(1, Math.max(0, (now - start) / duration))
      setValue(target * easeOutCubic(t))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, index, skill.percentage])

  return (
    <li className="skillbar" style={{ '--d': `${index * 70}ms` } as CSSProperties} aria-label={`${skill.name}: ${skill.percentage}%`}>
      <span className="sic" aria-hidden="true"><svg viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: skill.icon }} /></span>
      <span className="sbody">
        <span className="stop"><b>{skill.name}</b><em aria-hidden="true">{Math.round(value)}%</em></span>
        <span className="strack"><i className="sfill" style={{ transform: `scaleX(${value / 100})` }} /></span>
      </span>
    </li>
  )
}

export default function Skills() {
  const { ref, inView } = useInViewOnce<HTMLDivElement>(0.15)
  let index = 0
  return (
    <section id="skills" className="sec wrap">
      <Reveal><p className="label"><i className="dot" />02 — Stack</p></Reveal>
      <Reveal delay={80}><h2>Tech <em>Stack</em></h2></Reveal>
      <Reveal delay={140}><p className="lead">Technologies and tools I&apos;ve learned and work with.</p></Reveal>
      <div ref={ref} className={`skills-body${inView ? ' on' : ''}`}>
        {skillGroups.map((g) => (
          <div className="sgroup" key={g.title}>
            <Reveal><h3 className="gh">{g.title}</h3></Reveal>
            <ul className="slist">
              {g.items.map((s) => { const i = index++; return <SkillBar key={s.name} skill={s} index={i} active={inView} /> })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
