import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Activities from './components/Activities'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-ink min-h-screen">
      <Sidebar />
      <main className="lg:pl-64">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Activities />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
