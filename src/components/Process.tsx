import Reveal from './Reveal'
const steps = [
  { n: '01', t: 'Think', d: 'Understand the problem.' },
  { n: '02', t: 'Build', d: 'Turn ideas into working products.' },
  { n: '03', t: 'Refine', d: 'Improve usability, performance and details.' },
  { n: '04', t: 'Ship', d: 'Deploy and deliver the product.' },
]
export default function Process() {
  return (
    <section id="process" className="sec wrap">
      <Reveal><p className="label"><i className="dot" />04 — Process</p></Reveal>
      <Reveal delay={80}><h2>How I <em>Build</em></h2></Reveal>
      <ol className="steps">
        {steps.map((s, i) => (
          <li key={s.n}><Reveal delay={i * 120}><span className="node" aria-hidden="true" /><span className="num">{s.n}</span><h3>{s.t}</h3><p>{s.d}</p></Reveal></li>
        ))}
      </ol>
    </section>
  )
}
