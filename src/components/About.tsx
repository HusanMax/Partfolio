import Reveal from './Reveal'
import SmartImage from './SmartImage'
import { useI18n } from '../i18n/LanguageContext'
export default function About() {
  const { t } = useI18n()
  return (
    <section id="about" className="sec wrap about">
      <Reveal>
        <div className="tile" data-cursor>
          <SmartImage src="/images/profile.jpg" alt="Husan Maxmarajapov" label="secondary image" style={{ objectPosition: '50% 20%' }} />
          <span className="tag">Tashkent · UZ</span>
        </div>
      </Reveal>
      <div>
        <Reveal><p className="label"><i className="dot" />{t.about.label}</p></Reveal>
        <Reveal delay={80}><h2>{t.about.title}<em>{t.about.titleEm}</em></h2></Reveal>
        <Reveal delay={160}><p className="big">{t.about.text}</p></Reveal>
        <Reveal delay={240}>
          <ul className="pills"><li>Fullstack</li><li>React</li><li>TypeScript</li><li>Node.js</li></ul>
        </Reveal>
      </div>
    </section>
  )
}
