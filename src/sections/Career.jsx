import { Target, Zap, Rocket, Globe, CheckCircle2, Clock } from 'lucide-react'

const GOALS = [
  {
    phase: 'Short Term',
    timeframe: '0 – 12 Months',
    icon: Zap,
    color: '#00d4ff',
    goals: [
      { text: 'Secure a graduate software engineering role', done: false },
      { text: 'Complete AWS Solutions Architect certification', done: false },
      { text: 'Grow LinkedIn network to 500+ connections', done: false },
      { text: 'Complete final year research project with a working AI-based personalization system', done: true },
      { text: 'Secure a Software Engineer (Full-Stack / Frontend) role', done: false },
      { text: 'Publish and maintain a production-ready NPM package', done: true },
      { text: 'Strengthen core problem-solving and system design basics', done: false },
    ],
  },
  {
    phase: 'Mid Term',
    timeframe: '1 – 3 Years',
    icon: Rocket,
    color: '#a855f7',
    goals: [
      { text: 'Progress to mid-level / senior engineer role', done: false },
      { text: 'Lead a team project or mentor junior developers', done: false },
      { text: 'Speak at a local tech conference or meetup', done: false },
      { text: 'Specialize in AI-driven web applications or personalization systems', done: false },
      { text: 'Lead a feature or module in a production-level system', done: false },
      { text: 'Contribute to impactful open-source projects', done: false },
    ],
  },
  {
    phase: 'Long Term',
    timeframe: '3 – 7 Years',
    icon: Globe,
    color: '#ff6b35',
    goals: [
      { text: 'Reach a principal / lead engineer or CTO-track role', done: false },
      { text: 'Establish a personal brand in the tech community', done: false },
      { text: 'Mentor the next generation of engineers', done: false },
      { text: 'Work internationally or in a global remote team', done: false },
      { text: 'Build a SaaS product or startup around personalization or UX intelligence', done: false },
    ],
  },
]

const SKILLS_TO_DEVELOP = [
  { skill: 'System Design', level: 45, color: '#00d4ff' },
  { skill: 'Cloud (AWS/GCP)', level: 65, color: '#a855f7' },
  { skill: 'Machine Learning', level: 30, color: '#ff6b35' },
  { skill: 'DevOps / CI-CD', level: 55, color: '#22c55e' },
  { skill: 'Technical Leadership', level: 35, color: '#f59e0b' },
  { skill: 'Communication', level: 70, color: '#00d4ff' },
  { skill: 'Advanced React Architecture', level: 60, color: '#ff6b35' },
  { skill: 'Data Analysis & Visualization', level: 50, color: '#f59e0b' },
]

function ProgressBar({ label, level, color }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <span style={{ fontSize: '0.88rem', fontWeight: 500 }}>{label}</span>
        <span style={{
          fontFamily: "'Space Mono', monospace", fontSize: '0.72rem',
          color: color,
        }}>{level}%</span>
      </div>
      <div style={{
        height: 6, borderRadius: 99,
        background: 'var(--border)', overflow: 'hidden',
      }}>
        <div style={{
          height: '100%', borderRadius: 99,
          width: `${level}%`,
          background: `linear-gradient(90deg, ${color}, ${color}99)`,
          boxShadow: `0 0 8px ${color}60`,
          transition: 'width 1s ease',
        }} />
      </div>
    </div>
  )
}

export default function Career() {
  return (
    <section id="career" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-container">
        <div className="section-label">
          <Target size={14} /> Career Development
        </div>
        <h2 className="section-title">My Career<br /><span className="accent-line">Development Plan</span></h2>
        <p className="section-subtitle" style={{ marginBottom: 56 }}>
          A structured roadmap mapping my professional aspirations, skill development priorities,
          and milestones across three phases of my career journey.
        </p>

        {/* Goals grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 20,
          marginBottom: 56,
        }}>
          {GOALS.map(({ phase, timeframe, icon: Icon, color, goals }) => (
            <div key={phase} className="card">
              {/* Phase header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: `${color}18`,
                  border: `1px solid ${color}40`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: color,
                }}>
                  <Icon size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1rem' }}>{phase}</div>
                  <div style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.68rem', color: 'var(--text-muted)',
                    display: 'flex', alignItems: 'center', gap: 4, marginTop: 2,
                  }}>
                    <Clock size={10} /> {timeframe}
                  </div>
                </div>
              </div>

              {/* Goals list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {goals.map((goal, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <CheckCircle2
                      size={16}
                      style={{
                        color: goal.done ? color : 'var(--border)',
                        flexShrink: 0,
                        marginTop: 2,
                        fill: goal.done ? `${color}20` : 'transparent',
                      }}
                    />
                    <span style={{
                      fontSize: '0.87rem',
                      color: goal.done ? 'var(--text-primary)' : 'var(--text-secondary)',
                      textDecoration: goal.done ? 'none' : 'none',
                    }}>
                      {goal.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Progress count */}
              <div style={{
                marginTop: 20, paddingTop: 16,
                borderTop: '1px solid var(--border)',
                display: 'flex', justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: "'Space Mono', monospace" }}>
                  {goals.filter(g => g.done).length}/{goals.length} completed
                </span>
                <div style={{ height: 4, flex: 1, marginLeft: 12, borderRadius: 99, background: 'var(--border)' }}>
                  <div style={{
                    height: '100%', borderRadius: 99,
                    width: `${(goals.filter(g => g.done).length / goals.length) * 100}%`,
                    background: color,
                  }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills development */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 24,
        }}>
          <div className="card">
            <div style={{
              fontFamily: "'Space Mono', monospace", fontSize: '0.72rem',
              letterSpacing: '0.15em', color: 'var(--accent)',
              textTransform: 'uppercase', marginBottom: 24,
            }}>
              Skills to Develop
            </div>
            {SKILLS_TO_DEVELOP.map(({ skill, level, color }) => (
              <ProgressBar key={skill} label={skill} level={level} color={color} />
            ))}
          </div>

          <div className="card" style={{
            background: 'linear-gradient(135deg, rgba(0,212,255,0.04), rgba(168,85,247,0.04))',
          }}>
            <div style={{
              fontFamily: "'Space Mono', monospace", fontSize: '0.72rem',
              letterSpacing: '0.15em', color: 'var(--accent)',
              textTransform: 'uppercase', marginBottom: 20,
            }}>
              Target Industries
            </div>

            {[
              { label: 'AI-Powered Web Applications', icon: '🤖' },
              { label: 'SaaS & Developer Tools', icon: '🛠️' },
              { label: 'UX Personalization & HCI Systems', icon: '🧠' },
              { label: 'Cloud-Based Platforms', icon: '☁️' },
              { label: 'Mental Health & Behavioral Tech', icon: '💡' },
            ].map(({ label, icon }) => (
              <div key={label} style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '10px 0',
                borderBottom: '1px solid var(--border)',
              }}>
                <span style={{ fontSize: '1.2rem' }}>{icon}</span>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{label}</span>
              </div>
            ))}

            <div style={{
              marginTop: 24, padding: '16px', borderRadius: 12,
              background: 'var(--glow)', border: '1px solid var(--border-accent)',
            }}>
              <div style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                <span style={{ color: 'var(--accent)', fontWeight: 600 }}>Core objective: </span>
                Become a well-rounded software engineer with deep cloud expertise,
                capable of leading teams and driving technical strategy within 5 years.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
