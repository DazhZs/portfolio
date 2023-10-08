import Footer from './components/organismos/footer'
import Navbar from './components/organismos/navbar'
import styles from './page.module.css'
import About from './components/organismos/about'
import Skills from './components/organismos/skills'
import Hero from './components/organismos/hero'
import Projects from './components/organismos/projects'
import Contact from './components/organismos/contact'

export default function Home () {
  return (
    <main className={styles.main}>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
  )
}
