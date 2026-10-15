import { mainSocials } from '../data/socials'
export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot-in">
        <div><strong>Husan Maxmarajapov</strong><p>Fullstack Developer</p></div>
        <ul className="soc">{mainSocials.map((s) => <li key={s.name}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a></li>)}</ul>
        <div className="foot-r"><p>© 2026 Husan Maxmarajapov</p><a href="#top" className="top">Back to Top <span aria-hidden>↑</span></a></div>
      </div>
    </footer>
  )
}
