import { useState } from 'react'
import { Mail, MapPin, Send, MessageSquare, CheckCircle } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [focused, setFocused] = useState(null)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    // Replace with your form submission logic (Formspree, EmailJS, etc.)
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  const inputStyle = (field) => ({
    width: '100%',
    padding: '12px 16px',
    borderRadius: 10,
    border: `1px solid ${focused === field ? 'var(--border-accent)' : 'var(--border)'}`,
    background: focused === field ? 'var(--glow)' : 'var(--bg-card)',
    color: 'var(--text-primary)',
    fontSize: '0.9rem',
    fontFamily: "'DM Sans', sans-serif",
    outline: 'none',
    transition: 'all 0.2s ease',
    boxSizing: 'border-box',
  })

  return (
    <section id="contact">
      <div className="section-container">
        <div className="section-label"><MessageSquare size={14} /> Contact</div>
        <h2 className="section-title">Let's<br /><span className="accent-line">Connect</span></h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 40,
          marginTop: 48,
        }}>
          {/* Left: Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1rem' }}>
              I'm actively seeking graduate software engineering opportunities. Whether you have a position in mind,
              a project to collaborate on, or just want to connect — my inbox is always open.
            </p>

            {/* Contact cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { icon: Mail, label: 'Email', value: 'dinithitrajapaksha@gmail.com', href: 'mailto:dinithitrajapaksha@gmail.com', color: '#00d4ff' },
                { icon: FaLinkedin, label: 'LinkedIn', value: 'Dinithi Rajapaksha', href: 'https://linkedin.com', color: '#0077b5' },
                { icon: FaGithub, label: 'GitHub', value: 'DinithiTR', href: 'https://github.com', color: '#a855f7' },
                { icon: MapPin, label: 'Location', value: 'Gampaha, Sri Lanka', href: null, color: '#ff6b35' },
              ].map(({ icon: Icon, label, value, href, color }) => (
                <div key={label} className="card" style={{ padding: '14px 18px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: 9,
                      background: `${color}18`, border: `1px solid ${color}40`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: color, flexShrink: 0,
                    }}>
                      <Icon size={16} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: "'Space Mono', monospace", marginBottom: 2 }}>
                        {label}
                      </div>
                      {href ? (
                        <a href={href} target="_blank" rel="noopener noreferrer" style={{
                          color: 'var(--text-primary)', textDecoration: 'none',
                          fontSize: '0.88rem', fontWeight: 500,
                          overflow: 'hidden', textOverflow: 'ellipsis', display: 'block', whiteSpace: 'nowrap',
                        }}>
                          {value}
                        </a>
                      ) : (
                        <span style={{ fontSize: '0.88rem', fontWeight: 500 }}>{value}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Availability badge */}
            <div style={{
              padding: '14px 18px', borderRadius: 12,
              background: 'rgba(34,197,94,0.06)',
              border: '1px solid rgba(34,197,94,0.2)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{
                  width: 10, height: 10, borderRadius: '50%',
                  background: '#22c55e',
                  animation: 'pulse-glow 2s infinite',
                }} />
                <span style={{ fontSize: '0.88rem', color: '#22c55e', fontWeight: 600 }}>
                  Open to Opportunities
                </span>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: 6, lineHeight: 1.6 }}>
                Available for full-time roles from June 2026. Interested in hybrid or remote positions.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="card">
            {sent ? (
              <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                justifyContent: 'center', gap: 16, padding: '48px 24px', textAlign: 'center',
              }}>
                <div style={{
                  width: 64, height: 64, borderRadius: '50%',
                  background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <CheckCircle size={28} style={{ color: '#22c55e' }} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 6 }}>Message Sent!</h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    Thanks for reaching out. I'll get back to you shortly.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{
                  fontFamily: "'Space Mono', monospace", fontSize: '0.72rem',
                  color: 'var(--accent)', letterSpacing: '0.15em',
                  textTransform: 'uppercase', marginBottom: 4,
                }}>
                  Send a Message
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <div>
                    <label style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block', marginBottom: 6 }}>Name</label>
                    <input
                      type="text" name="name" value={form.name} onChange={handleChange}
                      placeholder="Your name" required
                      style={inputStyle('name')}
                      onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block', marginBottom: 6 }}>Email</label>
                    <input
                      type="email" name="email" value={form.email} onChange={handleChange}
                      placeholder="your@email.com" required
                      style={inputStyle('email')}
                      onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block', marginBottom: 6 }}>Subject</label>
                  <input
                    type="text" name="subject" value={form.subject} onChange={handleChange}
                    placeholder="Job opportunity / Collaboration / Say hi..."
                    style={inputStyle('subject')}
                    onFocus={() => setFocused('subject')} onBlur={() => setFocused(null)}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block', marginBottom: 6 }}>Message</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange}
                    placeholder="Tell me what's on your mind..." required rows={5}
                    style={{ ...inputStyle('message'), resize: 'vertical', minHeight: 120 }}
                    onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
