import { MonitorPlay } from 'lucide-react'
import ProjectCard from '../components/ProjectCard'
import { professionalProjects } from '../data/portfolio'

export default function ProfessionalWork() {
  return (
    <section id="professional-work">
      <div className="section-container">
        <div className="section-label"><MonitorPlay size={14} /> Professional Work</div>
        <h2 className="section-title">Selected Industry<br /><span className="accent-line">Projects</span></h2>
        <p className="section-subtitle">
          Commercial and experimental work completed during my time at R Factory, with source-code links omitted where projects are private client work.
        </p>

        <div className="project-grid project-grid--featured">
          {professionalProjects.map(project => (
            <ProjectCard key={project.name} project={project} compact={!project.featured} />
          ))}
        </div>
      </div>
    </section>
  )
}
