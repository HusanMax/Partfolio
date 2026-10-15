import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import OutsideCode from './components/OutsideCode'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Cursor from './components/Cursor'

export default function App() {
  return (
    <>
      <a href="#about" className="skip">Skip to content</a>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <OutsideCode />
        <Skills />
        <Projects />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
