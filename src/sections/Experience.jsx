import { BriefcaseBusiness } from 'lucide-react'
import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-container">
        <div className="section-label"><BriefcaseBusiness size={14} /> Experience</div>
        <h2 className="section-title">Professional<br /><span className="accent-line">Experience</span></h2>
        <p className="section-subtitle">
          One year of industry experience at R Factory, followed by continuing work as a Software Engineer.
        </p>

        <div className="timeline">
          {experience.map(item => (
            <article key={`${item.role}-${item.period}`} className="timeline-item">
              <div className="timeline-marker" />
              <div className="card timeline-card">
                <div className="timeline-card__head">
                  <div>
                    <h3>{item.role}</h3>
                    <p>{item.company}</p>
                  </div>
                  <span className="chip">{item.period}</span>
                </div>
                <p className="body-copy">{item.summary}</p>
                {item.details ? <p className="body-copy">{item.details}</p> : null}
                {item.contributions?.length ? (
                  <ul className="clean-list">
                    {item.contributions.map(contribution => (
                      <li key={contribution}>{contribution}</li>
                    ))}
                  </ul>
                ) : null}
                {item.technologies?.length ? (
                  <div className="tech-list">
                    {item.technologies.map(tech => <span key={tech} className="chip">{tech}</span>)}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
