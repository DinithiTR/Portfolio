import { Award } from 'lucide-react'

export default function Certificates() {
  return (
    <section id="certificates" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-container">
        <div className="section-label">
          <Award size={14} /> Certificates
        </div>

        <h2 className="section-title">
          Licences &<br />
          <span className="accent-line">Certificates</span>
        </h2>

        <p className="section-subtitle">
          Professional certifications and course completions supporting continued learning and technical development.
        </p>

        <div className="card empty-state">
          <h3>Verified certificate details needed before publishing</h3>
          <p>
            Certificate names, issuers, years, and credential URLs were not provided in the source content.
            Unnamed certificate images and placeholder credential links have been removed.
          </p>
        </div>
      </div>
    </section>
  )
}
