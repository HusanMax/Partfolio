import Reveal from './Reveal'
const items = [
  { n: '01', t: 'Cycling', icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="31" r="7"/><circle cx="37" cy="31" r="7"/><path d="M11 31l7-15h9l10 15M18 16l9 15M16 12h5M27 16l-2-4h5"/></svg> },
  { n: '02', t: 'Hiking', icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 38l14-22 7 11 5-7 16 18z"/><path d="M13 22l4 3 3-4"/></svg> },
]
export default function OutsideCode() {
  return (
    <section className="sec wrap outside" aria-labelledby="outside-h">
      <Reveal><h2 id="outside-h">Outside the <em>Code</em></h2></Reveal>
      <Reveal delay={80}><p className="lead">When I&apos;m away from the screen, I enjoy cycling and hiking.</p></Reveal>
      <div className="out-grid">
        {items.map((it, i) => (
          <Reveal key={it.n} delay={120 + i * 100}>
            <div className="out-card" data-cursor><span className="num">{it.n}</span><div className="out-ic" aria-hidden="true">{it.icon}</div><h3>{it.t}</h3></div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
