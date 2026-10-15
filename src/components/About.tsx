import Reveal from './Reveal'
import SmartImage from './SmartImage'
// Edit this text freely.
const ABOUT_TEXT = "I'm Husan, a Fullstack Developer focused on building modern and practical web applications. I enjoy turning ideas into functional digital products and continuously improving my development skills."
export default function About() {
  return (
    <section id="about" className="sec wrap about">
      <Reveal>
        <div className="tile" data-cursor>
          <SmartImage src="/images/profile.jpg" alt="Husan Maxmarajapov" label="secondary image" style={{ objectPosition: '50% 20%' }} />
          <span className="tag">Tashkent · UZ</span>
        </div>
      </Reveal>
      <div>
        <Reveal><p className="label"><i className="dot" />01 — About</p></Reveal>
        <Reveal delay={80}><h2>A little about <em>me.</em></h2></Reveal>
        <Reveal delay={160}><p className="big">{ABOUT_TEXT}</p></Reveal>
        <Reveal delay={240}>
          <ul className="pills"><li>Fullstack</li><li>React</li><li>TypeScript</li><li>Node.js</li></ul>
        </Reveal>
      </div>
    </section>
  )
}
