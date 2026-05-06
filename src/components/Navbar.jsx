import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X, Terminal } from 'lucide-react'
import { useScrollSpy } from '../hooks/useScrollSpy'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Journal', href: '#journal' },
  { label: 'Career Plan', href: '#career' },
  { label: 'CV', href: '#cv' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
]

const SECTION_IDS = ['hero', 'about', 'journal', 'career', 'cv', 'certificates', 'contact']

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeId = useScrollSpy(SECTION_IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        transition: 'all 0.3s ease',
        padding: '0 32px',
      }}>
        <div style={{
          maxWidth: 1100, margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: 64,
        }}>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}
            className="desktop-nav">
            {NAV_LINKS.map(link => {
              const id = link.href.replace('#', '')
              const isActive = activeId === id
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={e => handleNav(e, link.href)}
                  style={{
                    padding: '6px 14px', borderRadius: 6,
                    textDecoration: 'none',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.88rem', fontWeight: 500,
                    color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                    background: isActive ? 'var(--glow)' : 'transparent',
                    border: isActive ? '1px solid var(--border-accent)' : '1px solid transparent',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {link.label}
                </a>
              )
            })}
          </div>

          {/* Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button onClick={toggleTheme} style={{
              width: 38, height: 38, borderRadius: 8,
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--text-secondary)', transition: 'all 0.2s ease',
            }}>
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setMobileOpen(o => !o)}
              className="mobile-menu-btn"
              style={{
                width: 38, height: 38, borderRadius: 8,
                background: 'var(--bg-card)', border: '1px solid var(--border)',
                cursor: 'pointer', display: 'none', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-secondary)',
              }}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div style={{
            background: 'var(--nav-bg)', backdropFilter: 'blur(20px)',
            borderTop: '1px solid var(--border)',
            padding: '16px 32px 24px',
            display: 'flex', flexDirection: 'column', gap: 4,
          }}>
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={e => handleNav(e, link.href)}
                style={{
                  padding: '10px 14px', borderRadius: 8,
                  textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500,
                  color: 'var(--text-primary)',
                  border: '1px solid transparent',
                  transition: 'all 0.2s ease',
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}
