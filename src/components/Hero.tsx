import SmartImage from './SmartImage'
import { mainSocials, EMAIL } from '../data/socials'
const d = (ms: number) => ({ '--d': `${ms}ms` } as React.CSSProperties)
export default function Hero() {
  return (
    <section id="top" className="hero wrap">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="label rise" style={d(0)}><i className="dot" />FULLSTACK DEVELOPER</p>
          <h1 className="name rise" style={d(80)}>Husan<br />Maxmarajapov</h1>
          <p className="statement rise" style={d(180)}>Building modern digital experiences <em>with code.</em></p>
          <p className="lead rise" style={d(260)}>Fullstack developer focused on building modern, responsive and practical web applications.</p>
          <div className="actions rise" style={d(340)}>
            <a href="#projects" className="btn">View Projects <span aria-hidden>→</span></a>
            <a href="#contact" className="btn ghost">Contact Me</a>
          </div>
          <ul className="soc rise" style={d(420)}>
            {mainSocials.map((s) => <li key={s.name}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.name}<span aria-hidden> ↗</span></a></li>)}
          </ul>
        </div>
        <div className="frame frame-in" style={d(200)} data-cursor>
          <div className="frame-grid" aria-hidden="true" />
          <div className="frame-glow" aria-hidden="true" />
          <div className="frame-line" aria-hidden="true" />
          <div className="photo">
            <SmartImage src="/images/profile.jpg" alt="Portrait of Husan Maxmarajapov" label="/images/profile.jpg" eager />
          </div>
          <span className="chip c1" aria-hidden="true">{'</>'}</span>
          <span className="chip c2" aria-hidden="true">React · TypeScript</span>
          <span className="chip c3" aria-hidden="true"><i className="dot" />Tashkent, UZ</span>
        </div>
      </div>
      <dl className="facts">
        <div><dt>Based in</dt><dd>Tashkent, Uzbekistan</dd></div>
        <div><dt>Role</dt><dd>Fullstack Developer</dd></div>
        <div><dt>Interests</dt><dd>Cycling • Hiking</dd></div>
        <div><dt>Email</dt><dd><a href={`mailto:${EMAIL}`}>{EMAIL}</a></dd></div>
      </dl>
      <a href="#about" className="scroll" aria-label="Scroll to About section"><span /></a>
    </section>
  )
}
