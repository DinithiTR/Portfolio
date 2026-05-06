import { FileText, Download, Briefcase, GraduationCap, Code2, Award } from 'lucide-react'

const EXPERIENCE = [
  {
    role: 'Software Engineering Intern',
    company: 'R-Factory PVT.LTD',
    period: 'Mar 2025 – Mar 2026',
    location: 'Malabe, Sri Lanka',
    bullets: [
      'Developed and maintained RESTful APIs using Spring Boot, reducing response time by 35%',
      'Built React dashboards for internal data visualization used by 50+ staff members',
      'Participated in Agile sprints, code reviews, and CI/CD pipeline management',
    ],
    color: '#00d4ff',
  },
  {
    role: 'Freelance Web Developer',
    company: 'Self-Employed',
    period: 'Jan 2023 – Present',
    location: 'Remote',
    bullets: [
      'Designed and delivered 4 client websites using React and Tailwind CSS',
      'Managed client communication, project scoping, and delivery timelines independently',
    ],
    color: '#a855f7',
  },
]

const EDUCATION = [
  {
    degree: 'BSc. (Hons) Software Engineering',
    institution: 'Sti Lanka Institute of Information Technology',
    period: '2022 – 2026',
    gpa: 'GPA: 3.7 / 4.0',
    color: '#22c55e',
  },
  {
    degree: 'Advanced Level (Mathematics)',
    institution: 'Rathnavali Balika Vidyalaya Gampaha',
    period: '2012 – 2021',
    gpa: 'B B C (Com.Maths, Physics, Chemistry)',
    color: '#f59e0b',
  },
]

const PROJECTS = [
  {
    name: 'Smart Campus Management System',
    tech: 'React · Spring Boot · PostgreSQL · Docker',
    desc: 'Full-stack web app for managing university facilities, bookings, and attendance with real-time notifications.',
  },
  {
    name: 'AI-Powered Resume Analyzer',
    tech: 'Python · FastAPI · OpenAI API · React',
    desc: 'Tool that analyses CVs against job descriptions and provides targeted improvement suggestions.',
  },
  {
    name: 'E-Commerce Mobile App',
    tech: 'React Native · Node.js · MongoDB · Stripe',
    desc: 'Cross-platform mobile application with product management, cart, and payment integration.',
  },
]

function TimelineItem({ children, color }) {
  return (
    <div style={{ display: 'flex', gap: 16, position: 'relative' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
        <div style={{
          width: 12, height: 12, borderRadius: '50%',
          background: color, marginTop: 5,
          boxShadow: `0 0 8px ${color}80`,
        }} />
        <div style={{ width: 1, flex: 1, background: 'var(--border)', marginTop: 6 }} />
      </div>
      <div style={{ flex: 1, paddingBottom: 28 }}>{children}</div>
    </div>
  )
}

export default function CV() {
  return (
    <section id="cv">
      <div className="section-container">
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20, marginBottom: 48 }}>
          <div>
            <div className="section-label"><FileText size={14} /> Curriculum Vitae</div>
            <h2 className="section-title">My <span className="accent-line">Résumé</span></h2>
            <p className="section-subtitle">A comprehensive view of my academic background, professional experience, and technical projects.</p>
          </div>
          <a
            href="../../cv.pdf"
            download
            className="btn btn-primary"
            style={{ alignSelf: 'flex-start', marginTop: 8 }}
          >
            <Download size={16} /> Download PDF
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
          {/* Left column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {/* Experience */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
                <Briefcase size={16} style={{ color: 'var(--accent)' }} />
                <span style={{
                  fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1.1rem',
                }}>Experience</span>
              </div>
              {EXPERIENCE.map((exp, i) => (
                <TimelineItem key={i} color={exp.color}>
                  <div className="card" style={{ padding: '16px 20px' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{exp.role}</div>
                    <div style={{ color: exp.color, fontSize: '0.85rem', fontWeight: 600, marginTop: 2 }}>{exp.company}</div>
                    <div style={{ display: 'flex', gap: 12, marginTop: 4, marginBottom: 12 }}>
                      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', color: 'var(--text-muted)' }}>{exp.period}</span>
                      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', color: 'var(--text-muted)' }}>📍 {exp.location}</span>
                    </div>
                    {exp.bullets.map((b, j) => (
                      <div key={j} style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
                        <span style={{ color: exp.color, fontSize: '0.7rem', marginTop: 4, flexShrink: 0 }}>▸</span>
                        <span style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{b}</span>
                      </div>
                    ))}
                  </div>
                </TimelineItem>
              ))}
            </div>

            {/* Education */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
                <GraduationCap size={16} style={{ color: 'var(--accent)' }} />
                <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1.1rem' }}>Education</span>
              </div>
              {EDUCATION.map((edu, i) => (
                <TimelineItem key={i} color={edu.color}>
                  <div className="card" style={{ padding: '16px 20px' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.93rem' }}>{edu.degree}</div>
                    <div style={{ color: edu.color, fontSize: '0.85rem', fontWeight: 600, marginTop: 2 }}>{edu.institution}</div>
                    <div style={{ display: 'flex', gap: 12, marginTop: 4 }}>
                      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', color: 'var(--text-muted)' }}>{edu.period}</span>
                      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', color: 'var(--text-muted)' }}>{edu.gpa}</span>
                    </div>
                  </div>
                </TimelineItem>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {/* Projects */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
                <Code2 size={16} style={{ color: 'var(--accent)' }} />
                <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1.1rem' }}>Key Projects</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {PROJECTS.map((proj, i) => (
                  <div key={i} className="card" style={{ padding: '18px 20px' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.93rem', marginBottom: 6 }}>{proj.name}</div>
                    <div style={{
                      fontFamily: "'Space Mono', monospace", fontSize: '0.68rem',
                      color: 'var(--accent)', marginBottom: 8, lineHeight: 1.6,
                    }}>
                      {proj.tech}
                    </div>
                    <p style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{proj.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div className="card">
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                <Award size={16} style={{ color: 'var(--accent)' }} />
                <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1rem' }}>Technical Skills</span>
              </div>
              {[
                { category: 'Languages', items: 'JavaScript, TypeScript, Python, Java, SQL' },
                { category: 'Frontend', items: 'React, HTML, CSS, Tailwind CSS, Three.js (Basics)' },
                { category: 'Backend', items: 'Node.js, Express.js, REST APIs, JWT Authentication' },
                { category: 'Tools', items: 'Git, Docker, Postman, VS Code, Figma' },
                { category: 'Cloud & Services', items: 'Firebase, AWS (Basics), Stripe API' },
                { category: 'Databases', items: 'MongoDB, MySQL, PostgreSQL' },
                { category: 'Other', items: 'NPM Package Development, API Design, Agile' },
                { category: 'Soft Skills', items: 'Problem Solving, Communication, Team Collaboration, Research Thinking' },
              ].map(({ category, items }) => (
                <div key={category} style={{
                  display: 'flex', gap: 12, padding: '10px 0',
                  borderBottom: '1px solid var(--border)',
                }}>
                  <span style={{
                    fontFamily: "'Space Mono', monospace", fontSize: '0.7rem',
                    color: 'var(--accent)', minWidth: 90, flexShrink: 0, lineHeight: 1.6,
                  }}>{category}</span>
                  <span style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{items}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
