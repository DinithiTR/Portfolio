import { useEffect, useState } from 'react'
import { ArrowDown, Mail, Download } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import HeroImg from '../assets/dinithi-hero1.png'

const ROLES = [
  'Software Engineer',
  'Full Stack Developer',
  'Problem Solver',
  'Tech Enthusiast',
]

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const role = ROLES[roleIdx]
    let i = typing ? 0 : role.length
    const interval = setInterval(() => {
      if (typing) {
        setDisplayed(role.slice(0, i + 1))
        i++
        if (i === role.length) {
          clearInterval(interval)
          setTimeout(() => setTyping(false), 1800)
        }
      } else {
        setDisplayed(role.slice(0, i - 1))
        i--
        if (i === 0) {
          clearInterval(interval)
          setRoleIdx(r => (r + 1) % ROLES.length)
          setTyping(true)
        }
      }
    }, typing ? 75 : 45)
    return () => clearInterval(interval)
  }, [roleIdx, typing])

  const scrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="grid-bg"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '0 32px',
      }}
    >
      {/* Glow orbs */}
      <div style={{
        position: 'absolute', top: '15%', left: '60%',
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '20%', right: '10%',
        width: 300, height: 300, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(123,47,255,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="hero-layout">
        <div className="hero-image-wrap" style={{ animation: 'fadeInUp 0.6s ease forwards', opacity: 0 }}>
          <img
            src={HeroImg}
            alt="Dinithi Rajapaksha"
            className="hero-image"
          />
        </div>

        <div className="hero-content">
          {/* Status badge */}
          <div style={{ marginBottom: 28, animation: 'fadeInUp 0.5s ease forwards', opacity: 0 }}>
            <span className="chip" style={{ fontSize: '0.75rem' }}>
              <span style={{
                width: 7, height: 7, borderRadius: '50%',
                background: '#22c55e',
                display: 'inline-block',
                animation: 'pulse-glow 2s infinite',
              }} />
              Available for Opportunities
            </span>
          </div>

          {/* Main heading */}
          <div style={{ animation: 'fadeInUp 0.6s 0.1s ease forwards', opacity: 0 }}>
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.78rem', letterSpacing: '0.18em',
              color: 'var(--text-muted)', marginBottom: 12,
              textTransform: 'uppercase',
            }}>
              Hello, World. I'm
            </div>
            <h2 style={{
              fontSize: 'clamp(2.8rem, 6vw, 6rem)',
              fontWeight: 800,
              lineHeight: 1.0,
              marginBottom: 16,
              letterSpacing: '-0.03em',
            }}>
              Dinithi Rajapaksha
            </h2>
          </div>

          {/* Typewriter role */}
          <div style={{
            animation: 'fadeInUp 0.6s 0.2s ease forwards', opacity: 0,
            marginBottom: 24,
          }}>
            <div style={{
              fontSize: 'clamp(1.3rem, 3vw, 2rem)',
              color: 'var(--text-secondary)',
              fontWeight: 300,
              display: 'flex', alignItems: 'center', gap: 2,
            }}>
              <span style={{ color: 'var(--accent)', fontWeight: 600 }}>&gt; </span>
              <span>{displayed}</span>
              <span style={{
                width: 3, height: '1.2em', background: 'var(--accent)',
                display: 'inline-block', marginLeft: 2,
                animation: 'blink 1s step-end infinite',
              }} />
            </div>
          </div>

          {/* Description */}
          <div style={{ animation: 'fadeInUp 0.6s 0.3s ease forwards', opacity: 0, marginBottom: 40 }}>
            <p style={{
              fontSize: '1.05rem', color: 'var(--text-secondary)',
              maxWidth: 520, lineHeight: 1.75,
            }}>
              4th-year Software Engineering undergraduate passionate about building
              elegant solutions to complex problems. Exploring the intersection of
              technology, design, and human experience.
            </p>
          </div>

          {/* CTA Buttons */}
          <div style={{
            animation: 'fadeInUp 0.6s 0.4s ease forwards', opacity: 0,
            display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 56,
          }}>
            <a href="#cv" className="btn btn-primary"
              onClick={e => { e.preventDefault(); document.getElementById('cv')?.scrollIntoView({ behavior: 'smooth' }) }}>
              <Download size={16} /> View CV
            </a>
            <a href="#contact" className="btn btn-outline"
              onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
              <Mail size={16} /> Get in Touch
            </a>
          </div>

          {/* Social links */}
          <div style={{
            animation: 'fadeInUp 0.6s 0.5s ease forwards', opacity: 0,
            display: 'flex', gap: 16, alignItems: 'center',
          }}>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.12em' }}>
              FIND ME ON
            </span>
            {[
              { Icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
              { Icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              { Icon: Mail, href: 'mailto:your@email.com', label: 'Email' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: 'var(--bg-card)', border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-secondary)', textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = 'var(--accent)'
                  e.currentTarget.style.borderColor = 'var(--border-accent)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'var(--text-secondary)'
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        style={{
          position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)',
          background: 'none', border: 'none', cursor: 'pointer',
          color: 'var(--text-muted)', display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: 6,
          fontFamily: "'Space Mono', monospace", fontSize: '0.65rem',
          letterSpacing: '0.15em', textTransform: 'uppercase',
          animation: 'float 2.5s ease-in-out infinite',
        }}
      >
        scroll
        <ArrowDown size={16} />
      </button>
    </section>
  )
}
