import { Code2 } from 'lucide-react'
import { skillGroups } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-container">
        <div className="section-label"><Code2 size={14} /> Skills</div>
        <h2 className="section-title">Technical<br /><span className="accent-line">Skills</span></h2>
        <p className="section-subtitle">
          Technologies and practices used across professional work, university projects, and research.
        </p>

        <div className="skills-grid">
          {skillGroups.map(group => (
            <article key={group.category} className="card skill-card">
              <h3>{group.category}</h3>
              <div className="tech-list">
                {group.skills.map(skill => <span key={skill} className="chip">{skill}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
