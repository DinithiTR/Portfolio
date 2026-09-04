import { useTheme } from './hooks/useTheme'
import Navbar       from './components/Navbar'
import Footer       from './components/Footer'
import Hero         from './sections/Hero'
import About        from './sections/About'
import Experience   from './sections/Experience'
import ProfessionalWork from './sections/ProfessionalWork'
import Research     from './sections/Research'
import UniversityProjects from './sections/UniversityProjects'
import Skills       from './sections/Skills'
import Resume       from './sections/Resume'
import Certificates from './sections/Certificates'
import Contact      from './sections/Contact'

function Divider() {
  return (
    <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent" />
  )
}

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Experience />
        <Divider />
        <ProfessionalWork />
        <Divider />
        <Research />
        <Divider />
        <UniversityProjects />
        <Divider />
        <Skills />
        <Divider />
        <Resume />
        <Divider />
        <Certificates />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
