import { ExternalLink, Package, Play, Radio, FileText } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

const LINK_ICONS = {
  liveDemo: ExternalLink,
  watchDemo: Play,
  github: FaGithub,
  caseStudy: FileText,
  publication: Radio,
  npm: Package,
}

const LINK_LABELS = {
  liveDemo: 'Live Demo',
  watchDemo: 'Watch Demo',
  github: 'GitHub',
  caseStudy: 'Case Study',
  publication: 'Publication',
  npm: 'NPM Package',
}

function ProjectLinks({ links = {} }) {
  const entries = Object.entries(links).filter(([, url]) => Boolean(url))

  if (!entries.length) return null

  return (
    <div className="project-links" aria-label="Project links">
      {entries.map(([key, url]) => {
        const Icon = LINK_ICONS[key] || ExternalLink
        return (
          <a key={key} href={url} className="btn btn-outline project-link" target="_blank" rel="noopener noreferrer">
            <Icon size={15} /> {LINK_LABELS[key] || key}
          </a>
        )
      })}
    </div>
  )
}

function MediaPanel({ media }) {
  if (!media?.hero && !media?.video && !media?.gallery?.length) return null

  return (
    <div className="project-media">
      {media.hero ? <img src={media.hero.src} alt={media.hero.alt || ''} loading="lazy" /> : null}
      {media.video ? (
        <video controls preload="metadata" poster={media.video.poster}>
          <source src={media.video.src} type={media.video.type || 'video/mp4'} />
        </video>
      ) : null}
      {media.gallery?.length ? (
        <div className="project-gallery">
          {media.gallery.map(item => (
            <img key={item.src} src={item.src} alt={item.alt || ''} loading="lazy" />
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default function ProjectCard({ project, compact = false }) {
  const details = [
    project.client && `Client: ${project.client}`,
    project.company && `Company Project: ${project.company}`,
    project.course && `Course: ${project.course}`,
    project.audience && `Target Audience: ${project.audience}`,
    project.focus && `Focus: ${project.focus}`,
    project.type,
    project.role && `Role: ${project.role}`,
  ].filter(Boolean)

  return (
    <article className={`project-card ${compact ? 'project-card--compact' : ''}`}>
      <MediaPanel media={project.media} />

      <div className="project-card__body">
        <div className="project-card__meta">
          {details.map(detail => (
            <span key={detail}>{detail}</span>
          ))}
        </div>

        <h3>{project.name}</h3>
        {project.subtitle ? <p className="project-card__subtitle">{project.subtitle}</p> : null}
        <p className="project-card__summary">{project.summary}</p>
        {project.description ? <p className="project-card__description">{project.description}</p> : null}

        {project.contribution ? (
          <div className="project-card__section">
            <h4>My Contribution</h4>
            <p>{project.contribution}</p>
          </div>
        ) : null}

        {project.contributions?.length ? (
          <div className="project-card__section">
            <h4>My Contribution</h4>
            <ul className="clean-list">
              {project.contributions.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {project.features?.length ? (
          <div className="project-card__section">
            <h4>{compact ? 'Highlights' : 'Key Features'}</h4>
            <ul className="clean-list clean-list--columns">
              {project.features.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {project.technologies?.length ? (
          <div className="tech-list" aria-label={`${project.name} technologies`}>
            {project.technologies.map(tech => (
              <span key={tech} className="chip">{tech}</span>
            ))}
          </div>
        ) : null}

        {project.note ? <p className="project-card__note">{project.note}</p> : null}
        <ProjectLinks links={project.links} />
      </div>
    </article>
  )
}
