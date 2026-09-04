import { ArrowDown, Download, Layers } from 'lucide-react'
import HeroImg from '../assets/dinithi-hero1.png'
import { featuredOrder, profile } from '../data/portfolio'

export default function Hero() {
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
              {profile.availability}
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
            <h1 style={{
              fontSize: 'clamp(2.8rem, 6vw, 6rem)',
              fontWeight: 800,
              lineHeight: 1.0,
              marginBottom: 16,
              letterSpacing: '-0.03em',
            }}>
              {profile.name}
            </h1>
          </div>

          <div style={{
            animation: 'fadeInUp 0.6s 0.2s ease forwards', opacity: 0,
            marginBottom: 24,
          }}>
            <div style={{
              fontSize: 'clamp(1.1rem, 2.6vw, 1.65rem)',
              color: 'var(--text-secondary)',
              fontWeight: 500,
              display: 'flex', alignItems: 'center', gap: 2,
            }}>
              <span style={{ color: 'var(--accent)', fontWeight: 600 }}>&gt; </span>
              <span>{profile.title}</span>
            </div>
          </div>

          {/* Description */}
          <div style={{ animation: 'fadeInUp 0.6s 0.3s ease forwards', opacity: 0, marginBottom: 40 }}>
            <p style={{
              fontSize: '1.05rem', color: 'var(--text-secondary)',
              maxWidth: 520, lineHeight: 1.75,
            }}>
              {profile.summary} {profile.intro}
            </p>
          </div>

          {/* CTA Buttons */}
          <div style={{
            animation: 'fadeInUp 0.6s 0.4s ease forwards', opacity: 0,
            display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28,
          }}>
            <a href="#professional-work" className="btn btn-primary"
              onClick={e => { e.preventDefault(); document.getElementById('professional-work')?.scrollIntoView({ behavior: 'smooth' }) }}>
              <Layers size={16} /> View My Work
            </a>
            <a href="#resume" className="btn btn-outline"
              onClick={e => { e.preventDefault(); document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' }) }}>
              <Download size={16} /> View Résumé
            </a>
          </div>

          <div className="hero-featured" style={{ animation: 'fadeInUp 0.6s 0.5s ease forwards', opacity: 0 }}>
            <span>Featured Work</span>
            <div>
              {featuredOrder.map(item => <em key={item}>{item}</em>)}
            </div>
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
