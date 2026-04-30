import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Education from './components/Education'

export default function App() {
  return (
    <div className="bg-[#0a0a0f] text-[#e8e6f0] font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}
