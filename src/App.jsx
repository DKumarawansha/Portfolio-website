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
    <div className="relative min-h-screen overflow-x-hidden bg-ink text-chalk">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(94,234,212,0.12),transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(255,107,74,0.10),transparent_30%)]" />
      <Sidebar />
      <main className="relative min-w-0 lg:pl-64">
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
