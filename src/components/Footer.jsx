import { Terminal, Heart, Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border)',
      padding: '32px',
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: 16,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 7,
            background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Terminal size={13} color="#080c14" strokeWidth={2.5} />
          </div>
          <span style={{
            fontFamily: "'Space Mono', monospace", fontSize: '0.78rem',
            color: 'var(--text-muted)',
          }}>
            © 2026 Dinithi Rajapaksha — Built with{' '}
            <Heart size={11} style={{ display: 'inline', color: '#ff6b35', verticalAlign: 'middle' }} />
            {' & React'}
          </span>
        </div>

        <div style={{ display: 'flex', gap: 12 }}>
          {[
            { Icon: FaGithub, href: 'https://github.com' },
            { Icon: FaLinkedin, href: 'https://linkedin.com' },
            { Icon: Mail, href: 'mailto:youremail@example.com' },
          ].map(({ Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--text-muted)',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
