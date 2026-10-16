import SmartImage from './SmartImage'
import { mainSocials, EMAIL } from '../data/socials'
import { useI18n } from '../i18n/LanguageContext'
const d = (ms: number) => ({ '--d': `${ms}ms` } as React.CSSProperties)
export default function Hero() {
  const { t } = useI18n()
  return (
    <section id="top" className="hero wrap">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="label rise" style={d(0)}><i className="dot" />{t.hero.role}</p>
          <h1 className="name rise" style={d(80)}>Husan<br />Maxmarajapov</h1>
          <p className="statement rise" style={d(180)}>{t.hero.statement}</p>
          <p className="lead rise" style={d(260)}>{t.hero.lead}</p>
          <div className="actions rise" style={d(340)}>
            <a href="#projects" className="btn">{t.hero.viewProjects} <span aria-hidden>→</span></a>
            <a href="#contact" className="btn ghost">{t.hero.contactMe}</a>
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
            <SmartImage src="https://drive.google.com/thumbnail?id=1-bNMc_f9LKfYoJLlfAhS7Tdh4QI0m2Mu&sz=w1200" alt="Portrait of Husan Maxmarajapov" label="/images/profile.jpg" eager />
          </div>
          <span className="chip c1" aria-hidden="true">{'</>'}</span>
          <span className="chip c2" aria-hidden="true">React · TypeScript</span>
          <span className="chip c3" aria-hidden="true"><i className="dot" />Tashkent, UZ</span>
        </div>
      </div>
      <dl className="facts">
        <div><dt>{t.hero.basedIn}</dt><dd>{t.hero.basedInValue}</dd></div>
        <div><dt>{t.hero.roleLabel}</dt><dd>{t.hero.roleValue}</dd></div>
        <div><dt>{t.hero.interests}</dt><dd>{t.hero.interestsValue}</dd></div>
        <div><dt>{t.hero.email}</dt><dd><a href={`mailto:${EMAIL}`}>{EMAIL}</a></dd></div>
      </dl>
      <a href="#about" className="scroll" aria-label={t.nav.about}><span /></a>
    </section>
  )
}
