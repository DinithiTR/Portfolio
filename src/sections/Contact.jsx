import { CheckCircle, MapPin, MessageSquare } from 'lucide-react'
import { profile } from '../data/portfolio'

export default function Contact() {
  return (
    <section id="contact">
      <div className="section-container">
        <div className="section-label"><MessageSquare size={14} /> Contact</div>
        <h2 className="section-title">Let's<br /><span className="accent-line">Connect</span></h2>

        <div className="contact-grid">
          <div>
            <p className="section-subtitle">
              I'm currently open to graduate and early-career Software Engineering opportunities,
              particularly roles involving frontend development, React, interactive web applications,
              and modern web technologies.
            </p>
            <p className="body-copy contact-copy">
              I'm also interested in opportunities where I can apply my experience in user-centered
              interfaces, 3D web experiences, adaptive interfaces, and full-stack web development.
            </p>
          </div>

          <div className="contact-cards">
            <article className="card contact-card">
              <MapPin size={18} />
              <div>
                <span>Location</span>
                <strong>{profile.location}</strong>
              </div>
            </article>

            <article className="card contact-card">
              <CheckCircle size={18} />
              <div>
                <span>Availability</span>
                <strong>Open to suitable full-time, hybrid, remote, and software engineering opportunities.</strong>
              </div>
            </article>

            <article className="card empty-state contact-note">
              <h3>Verified contact links needed</h3>
              <p>
                Email, LinkedIn, and GitHub URLs were not provided in the source content, so placeholder
                links have been removed.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
