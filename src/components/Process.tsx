import Reveal from './Reveal'
import { useI18n } from '../i18n/LanguageContext'
const nums = ['01', '02', '03', '04']
export default function Process() {
  const { t } = useI18n()
  return (
    <section id="process" className="sec wrap">
      <Reveal><p className="label"><i className="dot" />{t.process.label}</p></Reveal>
      <Reveal delay={80}><h2>{t.process.title}<em>{t.process.titleEm}</em></h2></Reveal>
      <ol className="steps">
        {t.process.steps.map((s, i) => (
          <li key={nums[i]}><Reveal delay={i * 120}><span className="node" aria-hidden="true" /><span className="num">{nums[i]}</span><h3>{s.t}</h3><p>{s.d}</p></Reveal></li>
        ))}
      </ol>
    </section>
  )
}
