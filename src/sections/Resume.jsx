import { Download, FileText, GraduationCap } from 'lucide-react'
import { education, profile } from '../data/portfolio'

export default function Resume() {
  return (
    <section id="resume">
      <div className="section-container resume-layout">
        <div>
          <div className="section-label"><FileText size={14} /> Résumé</div>
          <h2 className="section-title">My<br /><span className="accent-line">Résumé</span></h2>
          <p className="section-subtitle">
            Software Engineering graduate with industry experience in frontend development, interactive gaming applications, 3D web experiences, React applications, and published adaptive-interface research.
          </p>
          <a href={profile.resumePath} download className="btn btn-primary resume-button">
            <Download size={16} /> Download Résumé
          </a>
        </div>

        <article className="card education-card">
          <div className="section-label"><GraduationCap size={14} /> Education</div>
          <h3>{education.degree}</h3>
          <p>{education.specialization}</p>
          <dl>
            <div>
              <dt>Period</dt>
              <dd>{education.period}</dd>
            </div>
            <div>
              <dt>GPA</dt>
              <dd>{education.gpa}</dd>
            </div>
            <div>
              <dt>Classification</dt>
              <dd>{education.classification}</dd>
            </div>
          </dl>
        </article>
      </div>
    </section>
  )
}
