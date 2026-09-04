import { BookOpenCheck } from 'lucide-react'
import { researchProject } from '../data/portfolio'

export default function Research() {
  return (
    <section id="research" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-container">
        <div className="section-label"><BookOpenCheck size={14} /> Research</div>
        <h2 className="section-title">AURA<br /><span className="accent-line">Adaptive UI Research</span></h2>
        <p className="section-subtitle">{researchProject.summary}</p>

        <article className="research-panel">
          <div className="research-panel__intro">
            <div>
              <div className="project-card__meta">
                <span>{researchProject.type}</span>
                <span>Research Grade: {researchProject.grade}</span>
                <span>Presented: {researchProject.presented}</span>
                <span>Published: {researchProject.published}</span>
              </div>
              <h3>{researchProject.subtitle}</h3>
              <p>{researchProject.description}</p>
            </div>
          </div>

          <div className="research-steps">
            {researchProject.workflow.map((step, index) => (
              <section key={step.title} className="research-step">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h4>{step.title}</h4>
                <p>{step.body}</p>
              </section>
            ))}
          </div>

          <div className="research-columns">
            <div>
              <h4>My Contribution</h4>
              <ul className="clean-list">
                {researchProject.contribution.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div>
              <h4>Research Outcome</h4>
              <ul className="clean-list">
                {researchProject.outcomes.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>

          <div className="tech-list">
            {researchProject.technologies.map(tech => <span key={tech} className="chip">{tech}</span>)}
          </div>
        </article>
      </div>
    </section>
  )
}
