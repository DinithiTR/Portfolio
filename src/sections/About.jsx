import { GraduationCap, MapPin, User } from 'lucide-react'
import ProfileImg from '../assets/dinithi1.png'
import { education, highlights, profile } from '../data/portfolio'

const focusAreas = [
  'Frontend engineering',
  'User experience',
  'Interaction design',
  'Emerging web technologies',
  'Interactive 3D experiences',
  'Adaptive interfaces',
]

const dialogWork = [
  'Digital games deployed across 24 customer centres',
  'Augmented-reality promotional game',
  'Interactive 3D customer-support experiences',
  'Experimental smart-home concepts',
]

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-container">
        <div className="section-label">
          <User size={14} /> About
        </div>
        <h2 className="section-title">
          Building Digital Experiences
          <br />
          <span className="accent-line">Beyond Traditional Web Interfaces</span>
        </h2>

        <div className="about-grid">
          <div className="about-profile">
            <div className="about-photo">
              <img src={ProfileImg} alt="Dinithi Rajapaksha" />
              <span aria-hidden="true" />
            </div>

            <div>
              <h3>{profile.name}</h3>
              <p className="about-location">
                <MapPin size={14} /> {profile.location}
              </p>
            </div>

            <p className="body-copy">
              I'm a Software Engineering graduate with a BSc (Hons) in Information Technology,
              specializing in Software Engineering, graduating with a 3.1 GPA and Second Class honours.
            </p>
            <p className="body-copy">
              I gained one year of industry experience as a Software Engineer Intern at R Factory,
              where I worked on real client and experimental projects involving frontend development,
              interactive games, immersive 3D experiences, community platforms, event websites, and
              tourism experiences. I have continued working with R Factory as a Software Engineer
              after completing my internship.
            </p>
            <p className="body-copy">
              My final-year research, AURA, explored machine-learning-driven adaptive web interfaces
              for adults with visual, motor, and computer-literacy challenges. My contribution focused
              on the React frontend adaptation layer and reusable NPM package used by developers to
              make applications respond dynamically to individual personalization profiles.
            </p>

            <div className="card education-summary">
              <GraduationCap size={18} />
              <div>
                <h4>{education.degree}</h4>
                <p>{education.specialization} · {education.period}</p>
              </div>
            </div>
          </div>

          <div className="about-detail">
            <div className="highlight-grid">
              {highlights.map(({ value, label }) => (
                <div key={label} className="card highlight-card">
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <div className="card">
              <h3>Professional Focus</h3>
              <div className="tech-list">
                {focusAreas.map(item => <span key={item} className="chip">{item}</span>)}
              </div>
            </div>

            <div className="card">
              <h3>Dialog Axiata Project Work</h3>
              <ul className="clean-list">
                {dialogWork.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>

            <div className="card">
              <p className="body-copy">
                I enjoy working on projects where frontend engineering, user experience,
                interaction design, and emerging web technologies meet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
