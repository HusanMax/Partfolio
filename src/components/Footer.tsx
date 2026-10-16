import { mainSocials } from '../data/socials'
import { useI18n } from '../i18n/LanguageContext'
export default function Footer() {
  const { t } = useI18n()
  return (
    <footer className="foot">
      <div className="wrap foot-in">
        <div><strong>Husan Maxmarajapov</strong><p>{t.footer.role}</p></div>
        <ul className="soc">{mainSocials.map((s) => <li key={s.name}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a></li>)}</ul>
        <div className="foot-r"><p>{t.footer.rights}</p><a href="#top" className="top">{t.footer.backToTop} <span aria-hidden>↑</span></a></div>
      </div>
    </footer>
  )
}
