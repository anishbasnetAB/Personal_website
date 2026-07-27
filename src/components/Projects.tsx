import type { ReactNode, RefObject } from 'react';
import { portfolio } from '../data/portfolio';
import { useInView } from '../hooks/useInView';
import { GitHubIcon } from './icons';
import { monoFont, displayFont } from '../styles/fonts';

type Project = (typeof portfolio.projects)[number];

export default function Projects() {
  const { ref, inView } = useInView();
  const featured = portfolio.projects.filter(p => p.featured);
  const rest = portfolio.projects.filter(p => !p.featured);

  return (
    <section id="projects" ref={ref as RefObject<HTMLElement>} className="section-pad">
      <div className="page-container">

        <div className={`section-rule reveal ${inView ? 'visible' : ''}`}>
          <span className="section-rule-label">03 / Projects</span>
        </div>

        <h2 className={`section-title reveal ${inView ? 'visible' : ''}`} style={{ transitionDelay: '60ms' }}>
          Selected work, treated as <em>case studies.</em>
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {featured.map(p => (
            <FeaturedCard key={p.title} project={p} inView={inView} />
          ))}

          <div className="project-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
            {rest.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .project-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 860px) {
          .featured-inner { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function FeaturedCard({ project, inView }: { project: Project; inView: boolean }) {
  return (
    <article
      className={`featured-card reveal ${inView ? 'visible' : ''}`}
      style={{ padding: 'clamp(1.5rem, 4vw, 2.75rem)', transitionDelay: '120ms' }}
    >
      <div className="featured-inner" style={{ display: 'grid', gridTemplateColumns: '1.35fr 1fr', gap: '2.5rem' }}>
        {/* ── Left: the story ── */}
        <div>
          <p style={{ ...monoFont, fontSize: '0.6rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1rem' }}>
            Featured · Case Study
          </p>

          <h3 style={{ ...displayFont, fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', color: 'var(--text-primary)', lineHeight: 1.18, marginBottom: '1.25rem' }}>
            {project.title}
          </h3>

          <FieldLabel>The problem</FieldLabel>
          <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
            {project.problem}
          </p>

          <FieldLabel>My role</FieldLabel>
          <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
            {project.role}
          </p>

          <FieldLabel>System highlights</FieldLabel>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
            {project.highlights.map((h, i) => (
              <li key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                <span aria-hidden="true" style={{ ...monoFont, color: 'var(--accent)', fontSize: '0.75rem', lineHeight: 1.7 }}>▸</span>
                <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Right: numbers, stack, links ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div className="glass" style={{ padding: '1.4rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            <p style={{ ...monoFont, fontSize: '0.58rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
              Benchmarked performance
            </p>
            {project.stats.map(stat => (
              <div key={stat.label}>
                <div style={{ ...monoFont, fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 600, color: 'var(--accent)', lineHeight: 1.1 }}>
                  {stat.value}
                </div>
                <div style={{ ...monoFont, fontSize: '0.62rem', color: 'var(--text-muted)', letterSpacing: '0.06em', marginTop: '0.2rem' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
            {project.tags.map(tag => (
              <span key={tag} className="tag-pill">{tag}</span>
            ))}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: 'auto' }}>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-filled" aria-label={`Live demo of ${project.title}`}>
                <ExternalIcon /> Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" aria-label={`GitHub repository for ${project.title}`}>
                <GitHubIcon size={12} /> Source
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project, index, inView }: { project: Project; index: number; inView: boolean }) {
  return (
    <article
      className={`card card-lift reveal ${inView ? 'visible' : ''}`}
      style={{
        transitionDelay: `${200 + index * 90}ms`,
        padding: '1.6rem 1.75rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.9rem',
      }}
    >
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
        {project.tags.map(tag => (
          <span key={tag} className="tag-pill">{tag}</span>
        ))}
      </div>

      <h3 style={{ ...displayFont, fontSize: '1.25rem', color: 'var(--text-primary)', lineHeight: 1.25 }}>
        {project.title}
      </h3>

      <p style={{ fontSize: '0.88rem', lineHeight: 1.68, color: 'var(--text-secondary)' }}>
        {project.problem}
      </p>

      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem', flex: 1 }}>
        {project.highlights.map((h, i) => (
          <li key={i} style={{ display: 'flex', gap: '0.55rem', alignItems: 'flex-start' }}>
            <span aria-hidden="true" style={{ ...monoFont, color: 'var(--accent)', fontSize: '0.7rem', lineHeight: 1.7 }}>▸</span>
            <span style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{h}</span>
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', paddingTop: '0.8rem', borderTop: '1px solid var(--border)' }}>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
             aria-label={`Live demo of ${project.title}`}
             className="link-arrow" style={{ color: 'var(--accent)' }}>
            <ExternalIcon /> Live Demo
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
             aria-label={`GitHub repository for ${project.title}`}
             className="link-arrow" style={{ color: 'var(--text-muted)' }}>
            <GitHubIcon size={12} /> Source
          </a>
        )}
      </div>
    </article>
  );
}

function FieldLabel({ children }: { children: ReactNode }) {
  return (
    <p style={{ ...monoFont, fontSize: '0.58rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
      {children}
    </p>
  );
}

function ExternalIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
