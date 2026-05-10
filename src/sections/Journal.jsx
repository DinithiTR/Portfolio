import {
  BookOpen,
  BriefcaseBusiness,
  FileText,
  Mail,
  MessageSquareText,
  Presentation,
  Sparkles,
  Target,
  UserCheck,
} from 'lucide-react'

const REFLECTIONS = [
  {
    title: 'Understanding Professional Responsibility',
    icon: UserCheck,
    color: '#00d4ff',
    summary: 'Preporation for the Professional World module changed my view of professionalism from a future requirement into a daily habit.',
    paragraphs: [
      'Before this module, I mostly connected professional growth with technical ability. I now understand that responsibility, punctuality, communication, and consistency are equally important in a workplace.',
      'This made me more aware of small habits such as checking updates, managing deadlines, attending sessions properly, and being prepared. These habits reflect reliability, and reliability is something I need to build before entering the industry.',
    ],
  },
  {
    title: 'Improving Presentation Skills',
    icon: Presentation,
    color: '#a855f7',
    summary: 'I learned that a presentation should support communication, not hide weak preparation.',
    paragraphs: [
      'I realised that I used to put too much information on slides because I thought it made the work look complete. Now I see that clear slides, simple wording, readable visuals, and confident explanation are more effective.',
      'This reflection will help me in research presentations, internship discussions, and project demonstrations. I want to focus more on guiding the audience clearly instead of depending on slides to carry the whole message.',
    ],
  },
  {
    title: 'Developing Clear Business Writing',
    icon: MessageSquareText,
    color: '#ff6b35',
    summary: 'I became more careful about writing in a way that is clear, polite, and purposeful.',
    paragraphs: [
      'The module made me think differently about workplace writing. Unlike academic writing, professional writing should get to the point quickly while still sounding respectful.',
      'I also reflected on my use of digital and AI tools. Even when I use support tools, I am responsible for the final message. I need to proofread, check accuracy, and make sure my writing represents me professionally.',
    ],
  },
  {
    title: 'Learning Professional Email and Memo Etiquette',
    icon: Mail,
    color: '#22c55e',
    summary: 'I learned that even a simple message can affect how professional I appear.',
    paragraphs: [
      'Email and memo writing made me realise that professional communication is not only about grammar. It is also about clarity, tone, structure, and respect for the reader’s time.',
      'I now pay more attention to subject lines, recipients, attachments, and the purpose of a message. These small details can prevent confusion and create a better impression when communicating with lecturers, employers, or team members.',
    ],
  },
  {
    title: 'Preparing for Interviews and Professional Communication',
    icon: BriefcaseBusiness,
    color: '#f59e0b',
    summary: 'I started seeing interviews as a chance to show attitude, preparation, and fit, not only knowledge.',
    paragraphs: [
      'I used to think interviews were mainly about answering technical questions. PPW helped me understand that employers also look at communication, confidence, problem-solving, attitude, and whether a candidate can work well with others.',
      'This pushed me to prepare better examples from my own experiences, especially related to teamwork, learning, and handling challenges. I also became more aware of my online identity, including LinkedIn, GitHub, and my portfolio.',
    ],
  },
  {
    title: 'Understanding CV and Career Presentation',
    icon: Target,
    color: '#00d4ff',
    summary: 'I now see my CV and portfolio as active career tools, not documents to finish once.',
    paragraphs: [
      'I reflected on how quickly an employer may form an impression from a CV or portfolio. A clear structure, relevant projects, and simple formatting can communicate professionalism before an interview even begins.',
      'This encouraged me to treat my CV, portfolio, and professional profiles as living documents. As I complete projects, gain certificates, and improve skills, I should keep updating them instead of waiting until the last moment.',
    ],
  },
  {
    title: 'Strengthening Report Writing Skills',
    icon: FileText,
    color: '#a855f7',
    summary: 'I learned to think about reports as tools for decision-making, not just assignments.',
    paragraphs: [
      'Report writing helped me understand the importance of structure, relevance, and evidence. In the workplace, reports can support decisions, track progress, and communicate problems clearly.',
      'This reflection reminded me to avoid unnecessary details and focus on the purpose of the report. I need to write for the audience, keep the tone neutral, and organise information so the reader can understand it quickly.',
    ],
  },
  {
    title: 'Building a Professional Mindset',
    icon: Sparkles,
    color: '#ff6b35',
    summary: 'The main lesson I gained is that professionalism is shown through consistent behaviour.',
    paragraphs: [
      'Overall, PPW helped me understand that becoming a software engineer is not only about coding. I also need to communicate clearly, manage time, present ideas, prepare for opportunities, and behave responsibly.',
      'The module gave me a clearer idea of the kind of graduate I want to become: someone who is technically capable, organised, respectful, confident, and willing to keep improving.',
    ],
  },
]

const SUMMARY_POINTS = [
  'Professional responsibility',
  'Presentation and interview readiness',
  'Business writing, email, memo, and report skills',
  'CV, portfolio, LinkedIn, and career development',
]

function ReflectionBlock({ reflection, index }) {
  const Icon = reflection.icon

  return (
    <article className="journal-reflection">
      <div className="journal-reflection__header">
        <div
          className="journal-reflection__icon"
          style={{
            background: `${reflection.color}18`,
            borderColor: `${reflection.color}40`,
            color: reflection.color,
          }}
        >
          <Icon size={20} />
        </div>
        <div>
          <div className="journal-reflection__index">Reflection {String(index + 1).padStart(2, '0')}</div>
          <h3>{reflection.title}</h3>
        </div>
      </div>

      <p className="journal-reflection__summary">{reflection.summary}</p>

      <div className="journal-reflection__body">
        {reflection.paragraphs.map((paragraph, paragraphIndex) => (
          <p key={paragraphIndex}>{paragraph}</p>
        ))}
      </div>
    </article>
  )
}

export default function Journal() {
  return (
    <section id="journal">
      <div className="section-container">
        <div className="section-label">
          <BookOpen size={14} /> Reflective Journal
        </div>
        <h2 className="section-title">
        Preporation for the<br /><span className="accent-line"> Professional World</span>
        </h2>
        <p className="section-subtitle">
          A short reflection on how the Preparing for Professional World module changed my thinking,
          habits, and career preparation as a future software engineer.
        </p>

        <div className="journal-overview">
          <div>
            <span className="chip">Preporation for the Professional World</span>
            <h3>From technical student to workplace-ready graduate</h3>
            <p>
              This journal focuses on personal learning and growth rather than summarising each
              lecture. It highlights the professional habits I need to continue developing.
            </p>
          </div>
          <div className="journal-overview__points">
            {SUMMARY_POINTS.map(point => (
              <div key={point} className="journal-overview__point">
                <span />
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="journal-reflections">
          {REFLECTIONS.map((reflection, index) => (
            <ReflectionBlock
              key={reflection.title}
              reflection={reflection}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
