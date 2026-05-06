import { useState } from 'react'
import { Award, ExternalLink, Filter } from 'lucide-react'

import cert2023 from '../assets/2023.png'
import cert2024 from '../assets/2024.png'
import cert2025 from '../assets/2025.png'
import cert2025c from '../assets/2025 c.jpeg'

const CERT_IMAGES = [
  { src: cert2023, alt: 'Certificate 2023' },
  { src: cert2024, alt: 'Certificate 2024' },
  { src: cert2025, alt: 'Certificate 2025' },
  { src: cert2025c, alt: 'Certificate 2025 C' },
]

const CATEGORIES = ['All', 'Cloud', 'Web Dev', 'AI/ML', 'Programming', 'Professional']

const CERTIFICATES = [
  {
    title: 'AWS Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    date: 'Nov 2024',
    category: 'Cloud',
    color: '#ff9900',
    emoji: '☁️',
    credentialUrl: '#',
    description: 'Demonstrates expertise in designing distributed systems on AWS.',
  },
  {
    title: 'Meta Front-End Developer',
    issuer: 'Meta / Coursera',
    date: 'Aug 2024',
    category: 'Web Dev',
    color: '#1877f2',
    emoji: '⚛️',
    credentialUrl: '#',
    description: 'Professional certification in React, UX, and modern front-end practices.',
  },
  {
    title: 'Google Data Analytics',
    issuer: 'Google / Coursera',
    date: 'Jun 2024',
    category: 'AI/ML',
    color: '#4285f4',
    emoji: '📊',
    credentialUrl: '#',
    description: 'Foundations of data analysis, visualization, and SQL querying.',
  },
  {
    title: 'Python for Everybody',
    issuer: 'University of Michigan / Coursera',
    date: 'Mar 2023',
    category: 'Programming',
    color: '#3776ab',
    emoji: '🐍',
    credentialUrl: '#',
    description: 'Comprehensive Python programming from basics to data structures.',
  },
  {
    title: 'Docker & Kubernetes Fundamentals',
    issuer: 'KodeKloud',
    date: 'Jan 2024',
    category: 'Cloud',
    color: '#2496ed',
    emoji: '🐳',
    credentialUrl: '#',
    description: 'Container orchestration and deployment with Docker and Kubernetes.',
  },
  {
    title: 'Introduction to Machine Learning',
    issuer: 'Stanford Online',
    date: 'Sep 2023',
    category: 'AI/ML',
    color: '#8c1515',
    emoji: '🤖',
    credentialUrl: '#',
    description: 'Supervised learning, neural networks, and ML best practices.',
  },
  {
    title: 'Agile Project Management',
    issuer: 'PMI / Coursera',
    date: 'May 2024',
    category: 'Professional',
    color: '#00875a',
    emoji: '🗂️',
    credentialUrl: '#',
    description: 'Scrum methodology, sprint planning, and agile team dynamics.',
  },
  {
    title: 'React – The Complete Guide',
    issuer: 'Udemy',
    date: 'Dec 2022',
    category: 'Web Dev',
    color: '#61dafb',
    emoji: '💡',
    credentialUrl: '#',
    description: 'In-depth React including Hooks, Redux, and Next.js.',
  },
]

function CertificateImageCard({ src, alt }) {
  return (
    <div
      className="card"
      style={{
        padding: 12,
        overflow: 'hidden',
      }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          borderRadius: 10,
          border: '1px solid var(--border)',
          background: 'var(--bg-card)',
        }}
      />
    </div>
  )
}

function CertCard({ cert }) {
  return (
    <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 14 }}>
        <div style={{
          width: 48, height: 48, borderRadius: 12, flexShrink: 0,
          background: `${cert.color}18`,
          border: `1px solid ${cert.color}40`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.4rem',
        }}>
          {cert.emoji}
        </div>
        <div style={{ flex: 1 }}>
          <h4 style={{ fontSize: '0.92rem', fontWeight: 700, lineHeight: 1.35, marginBottom: 4 }}>
            {cert.title}
          </h4>
          <div style={{ fontSize: '0.78rem', color: cert.color, fontWeight: 600 }}>{cert.issuer}</div>
        </div>
      </div>

      {/* Description */}
      <p style={{
        fontSize: '0.83rem', color: 'var(--text-secondary)',
        lineHeight: 1.6, flex: 1, marginBottom: 16,
      }}>
        {cert.description}
      </p>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '0.68rem', color: 'var(--text-muted)',
        }}>
          {cert.date}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{
            padding: '3px 8px', borderRadius: 999, fontSize: '0.68rem',
            background: `${cert.color}15`, border: `1px solid ${cert.color}35`,
            color: cert.color, fontFamily: "'Space Mono', monospace",
          }}>
            {cert.category}
          </span>
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--text-muted)',
              display: 'flex', alignItems: 'center',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
            title="View Credential"
          >
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Certificates() {
  // const [activeCategory, setActiveCategory] = useState('All')

  // const filtered = activeCategory === 'All'
  //   ? CERTIFICATES
  //   : CERTIFICATES.filter(c => c.category === activeCategory)

  return (
    <section id="certificates" style={{ background: 'var(--bg-secondary)' }}>
    <div className="section-container">
      <div className="section-label">
        <Award size={14} /> Achievements
      </div>

      <h2 className="section-title">
        Licences &<br />
        <span className="accent-line">Certificates</span>
      </h2>

      <p className="section-subtitle" style={{ marginBottom: 40 }}>
        Professional certifications and course completions that validate my skills and commitment
        to continuous learning.
      </p>

      {/* Certificates images grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: 18,
        }}
      >
        {CERT_IMAGES.map((img, i) => (
          <div
            key={img.alt}
            style={{
              animation: `fadeInUp 0.4s ${i * 0.06}s ease forwards`,
              opacity: 0,
            }}
          >
            <CertificateImageCard src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>

      {/* Count badge */}
      <div style={{ marginTop: 32, textAlign: 'center' }}>
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            letterSpacing: '0.1em',
          }}
        >
          Showing {CERT_IMAGES.length} of {CERT_IMAGES.length} certificates
        </span>
      </div>
    </div>
  </section>
  )
}
