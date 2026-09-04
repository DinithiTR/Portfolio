import { Terminal } from 'lucide-react'
import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <div className="footer-brand" aria-hidden="true">
          <Terminal size={13} color="#080c14" strokeWidth={2.5} />
        </div>
        <span>© 2026 {profile.name}</span>
      </div>
      <p>{profile.footer}</p>
    </footer>
  )
}
