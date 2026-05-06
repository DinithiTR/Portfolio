import { useState } from 'react'
import { BookOpen, ChevronDown, ChevronUp, Star, Tag } from 'lucide-react'

const JOURNAL_ENTRIES = [
  {
    week: 1,
    date: 'Week 1 — Feb 3, 2025',
    title: 'Introduction to Professional Development',
    summary: 'Explored the importance of professional identity and self-branding in the tech industry.',
    reflection: `This week introduced us to the concept of professional identity and why it matters more than we typically realise as students. We discussed how our online presence — GitHub, LinkedIn, portfolios — shape how potential employers perceive us before we even enter a room. I found myself reflecting on how little attention I had paid to curating my digital footprint. The key takeaway was that professional development isn't a switch you flip at graduation; it's a continuous, intentional practice.`,
    keyLearnings: ['Professional identity & personal branding', 'Importance of LinkedIn optimization', 'Digital footprint awareness'],
    tag: 'Self Branding',
    color: '#00d4ff',
  },
  {
    week: 2,
    date: 'Week 2 — Feb 10, 2025',
    title: 'CV Writing & Personal Statements',
    summary: 'Deep dive into crafting a compelling CV and articulating your value proposition.',
    reflection: `Today's session reshaped how I think about a CV. It's not just a list of experiences — it's a curated narrative. We explored the difference between duties and achievements, and how quantifying impact (e.g., "reduced load time by 40%") is far more compelling than generic descriptions. I completely restructured my CV draft after this session, focusing on outcomes rather than tasks. The personal statement workshop was particularly challenging — condensing who you are into three sentences is deceptively hard.`,
    keyLearnings: ['Achievement-focused CV writing', 'Quantifying impact with metrics', 'Crafting personal statements'],
    tag: 'CV & Applications',
    color: '#a855f7',
  },
  {
    week: 3,
    date: 'Week 3 — Feb 17, 2025',
    title: 'Interview Techniques & Preparation',
    summary: 'Practical mock interviews and strategies for technical and behavioural rounds.',
    reflection: `The mock interview exercise was both humbling and enlightening. I realised I'd been underestimating behavioural interviews — I thought technical ability was all that mattered. The STAR method (Situation, Task, Action, Result) gave me a structured framework to organise my experiences into coherent stories. We also covered technical interview strategies, including how to think aloud, which I find genuinely difficult. Practice is the only cure for interview anxiety, and this session made me commit to weekly mock sessions with peers.`,
    keyLearnings: ['STAR method for behavioural interviews', 'Technical interview thinking aloud strategies', 'Managing interview anxiety'],
    tag: 'Interview Skills',
    color: '#ff6b35',
  },
  {
    week: 4,
    date: 'Week 4 — Feb 24, 2025',
    title: 'Networking & Professional Relationships',
    summary: 'Building authentic professional connections and leveraging networks effectively.',
    reflection: `Networking always felt transactional and forced to me, but this week reframed it entirely. We explored the idea that genuine networking is about being curious about other people and creating mutual value — not collecting business cards. The session on informational interviews was particularly practical. I reached out to two alumni on LinkedIn this week using the template we practised, and both responded positively. The lesson: people are generally willing to help if you're genuine and specific in your ask.`,
    keyLearnings: ['Authentic networking principles', 'LinkedIn outreach etiquette', 'Informational interview strategies'],
    tag: 'Networking',
    color: '#22c55e',
  },
  {
    week: 5,
    date: 'Week 5 — Mar 3, 2025',
    title: 'Workplace Dynamics & Professional Ethics',
    summary: 'Navigating team environments, workplace culture, and ethical responsibilities.',
    reflection: `This week explored what it actually means to be a professional in a workplace setting — beyond technical skills. We discussed psychological safety in teams, how to disagree constructively, and the ethical responsibilities that come with building software. The case studies on data privacy and AI ethics particularly resonated with me. As engineers, our decisions have real-world consequences, and this module reminded me that technical expertise must be paired with moral judgement. I've started thinking about ethics more deliberately in my project work.`,
    keyLearnings: ['Team dynamics & psychological safety', 'Constructive disagreement', 'Engineering ethics & responsibility'],
    tag: 'Workplace Ethics',
    color: '#f59e0b',
  },
  {
    week: 6,
    date: 'Week 6 — Mar 10, 2025',
    title: 'Career Planning & Goal Setting',
    summary: 'Structured frameworks for short, medium, and long-term career planning.',
    reflection: `This week helped me bring structure to something I'd been thinking about vaguely — my career path. Using the SMART goals framework, I mapped out a 5-year plan for the first time. What surprised me was how clarifying this exercise was: once I committed specific targets to paper, the steps to reach them became more obvious. I identified a skills gap in cloud architecture and have since started a free AWS course. The session also discussed pivoting and how careers rarely go in straight lines — which was reassuring and liberating.`,
    keyLearnings: ['SMART goal framework', '5-year career mapping', 'Identifying and closing skills gaps'],
    tag: 'Career Planning',
    color: '#00d4ff',
  },
  {
    week: 7,
    date: 'Week 7 — Mar 17, 2025',
    title: 'Personal Finance & Salary Negotiation',
    summary: 'Understanding compensation, negotiation tactics, and financial planning as a new graduate.',
    reflection: `One of the most practically useful sessions so far. We were given data on typical graduate salaries in Sri Lanka and abroad, and then walked through negotiation role-plays. The core message: never accept the first offer without negotiating, and always negotiate with data, not emotion. I found the section on understanding full compensation (benefits, leave, growth opportunities, equity) particularly eye-opening — I'd previously fixated on base salary alone. This changed how I'm approaching my job applications and what questions I'm asking at the end of interviews.`,
    keyLearnings: ['Salary negotiation tactics', 'Understanding total compensation', 'Graduate market salary benchmarks'],
    tag: 'Finance',
    color: '#a855f7',
  },
  {
    week: 8,
    date: 'Week 8 — Mar 24, 2025',
    title: 'Entrepreneurship & Innovation Mindset',
    summary: 'Cultivating an entrepreneurial mindset regardless of career path.',
    reflection: `Even if you're not planning to start a company, thinking like an entrepreneur makes you a better employee, collaborator, and innovator. That was the central thesis of this week's session, and I found it genuinely compelling. We discussed intrapreneurship — entrepreneurial thinking within organisations — and explored case studies of engineers who drove innovation from inside corporations. This session reignited my interest in side projects. I brainstormed three app ideas and have started building one as a portfolio project. The lesson: initiative is the rarest and most valued skill.`,
    keyLearnings: ['Entrepreneurial vs. employee mindset', 'Intrapreneurship in organisations', 'Identifying opportunity through observation'],
    tag: 'Innovation',
    color: '#ff6b35',
  },
]

function JournalCard({ entry, isOpen, onToggle }) {
  return (
    <div
      className="card"
      style={{
        cursor: 'pointer',
        borderColor: isOpen ? 'var(--border-accent)' : 'var(--border)',
        transition: 'all 0.3s ease',
      }}
      onClick={onToggle}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, flex: 1 }}>
          {/* Week number */}
          <div style={{
            minWidth: 48, height: 48, borderRadius: 12,
            background: `${entry.color}18`,
            border: `1px solid ${entry.color}40`,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: entry.color, letterSpacing: '0.05em' }}>WK</span>
            <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '1rem', color: entry.color, lineHeight: 1 }}>{entry.week}</span>
          </div>

          <div style={{ flex: 1 }}>
            <div style={{
              fontFamily: "'Space Mono', monospace", fontSize: '0.7rem',
              color: 'var(--text-muted)', marginBottom: 4, letterSpacing: '0.05em',
            }}>
              {entry.date}
            </div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 6 }}>{entry.title}</h4>
            <p style={{ fontSize: '0.87rem', color: 'var(--text-secondary)' }}>{entry.summary}</p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
          <span style={{
            padding: '3px 10px', borderRadius: 999,
            background: `${entry.color}15`, border: `1px solid ${entry.color}35`,
            fontSize: '0.7rem', color: entry.color,
            fontFamily: "'Space Mono', monospace",
            display: 'flex', alignItems: 'center', gap: 5,
            whiteSpace: 'nowrap',
          }}>
            <Tag size={10} /> {entry.tag}
          </span>
          <div style={{ color: 'var(--text-muted)', flexShrink: 0 }}>
            {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </div>
        </div>
      </div>

      {/* Expanded content */}
      {isOpen && (
        <div style={{
          marginTop: 24, paddingTop: 24,
          borderTop: '1px solid var(--border)',
          animation: 'fadeInUp 0.3s ease forwards',
        }}>
          <div style={{ marginBottom: 20 }}>
            <div style={{
              fontFamily: "'Space Mono', monospace", fontSize: '0.68rem',
              color: 'var(--accent)', letterSpacing: '0.15em',
              textTransform: 'uppercase', marginBottom: 10,
            }}>
              Reflection
            </div>
            <p style={{
              color: 'var(--text-secondary)', lineHeight: 1.85,
              fontSize: '0.92rem',
            }}>
              {entry.reflection}
            </p>
          </div>

          <div>
            <div style={{
              fontFamily: "'Space Mono', monospace", fontSize: '0.68rem',
              color: 'var(--accent)', letterSpacing: '0.15em',
              textTransform: 'uppercase', marginBottom: 10,
            }}>
              Key Learnings
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {entry.keyLearnings.map((learning, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <Star size={13} style={{ color: entry.color, marginTop: 3, flexShrink: 0 }} />
                  <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>{learning}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Journal() {
  const [openIdx, setOpenIdx] = useState(null)

  return (
    <section id="journal">
      <div className="section-container">
        <div className="section-label">
          <BookOpen size={14} /> Reflective Journal
        </div>
        <h2 className="section-title">Preparing for the<br /><span className="accent-line">Professional World</span></h2>
        <p className="section-subtitle" style={{ marginBottom: 48 }}>
          Weekly reflections from the Preparing for Professional World module — documenting insights,
          challenges, and growth throughout the semester.
        </p>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: 23, top: 0, bottom: 0, width: 2,
            background: 'linear-gradient(180deg, var(--accent), var(--accent-2), transparent)',
            opacity: 0.3,
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, paddingLeft: 20 }}>
            {JOURNAL_ENTRIES.map((entry, i) => (
              <JournalCard
                key={entry.week}
                entry={entry}
                isOpen={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
