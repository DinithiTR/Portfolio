import { GraduationCap } from 'lucide-react'
import ProjectCard from '../components/ProjectCard'
import { universityProjects } from '../data/portfolio'

export default function UniversityProjects() {
  return (
    <section id="university-projects">
      <div className="section-container">
        <div className="section-label"><GraduationCap size={14} /> University Projects</div>
        <h2 className="section-title">Academic<br /><span className="accent-line">Project Work</span></h2>
        <p className="section-subtitle">
          Coursework projects covering backend APIs, frontend applications, distributed systems, and secure software development.
        </p>

        <div className="project-grid">
          {universityProjects.map(project => <ProjectCard key={project.name} project={project} compact />)}
        </div>
      </div>
    </section>
  )
}
