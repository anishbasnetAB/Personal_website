import React, { useState } from 'react';
import { portfolio } from '../data/portfolio';
import { useInView } from '../hooks/useInView';

const monoFont = { fontFamily: "'JetBrains Mono', monospace" };
const displayFont = { fontFamily: "'DM Serif Display', serif" };

export default function Projects() {
  const { ref, inView } = useInView();
  const featured = portfolio.projects.filter(p => p.featured);
  const rest = portfolio.projects.filter(p => !p.featured);

  return (
    <section id="projects" ref={ref as React.RefObject<HTMLElement>} className="section-pad">
      <div className="page-container">

        <div className={`section-rule reveal ${inView ? 'visible' : ''}`}>
          <span className="section-rule-label">03 / Projects</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {featured.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} inView={inView} fullWidth />
          ))}

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }} className="project-grid">
            {rest.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={featured.length + i} inView={inView} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .project-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

type Project = (typeof portfolio.projects)[number];

function ProjectCard({ project, index, inView, fullWidth = false }: {
  project: Project; index: number; inView: boolean; fullWidth?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className={`reveal ${inView ? 'visible' : ''}`}
      style={{
        transitionDelay: `${index * 75}ms`,
        background: 'var(--surface)',
        border: `1px solid ${hovered ? 'color-mix(in srgb, var(--accent) 55%, var(--border))' : 'var(--border)'}`,
        borderRadius: '10px',
        padding: fullWidth ? '2rem 2.25rem' : '1.6rem 1.75rem',
        boxShadow: hovered ? '0 4px 24px color-mix(in srgb, var(--accent) 8%, transparent)' : 'var(--card-shadow)',
        transition: 'border-color 0.22s, box-shadow 0.22s',
        display: 'flex', flexDirection: 'column', gap: '1rem',
        position: 'relative',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {project.featured && (
        <span
          style={{
            position: 'absolute', top: '1.25rem', right: '1.25rem',
            ...monoFont, fontSize: '0.58rem', letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--bg)', background: 'var(--accent)',
            padding: '0.22rem 0.6rem', borderRadius: '3px', fontWeight: 700,
          }}
        >
          Featured
        </span>
      )}

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
        {project.tags.map(tag => (
          <span key={tag} className="tag-pill">{tag}</span>
        ))}
      </div>

      {/* Title */}
      <h3 style={{ ...displayFont, fontSize: fullWidth ? '1.55rem' : '1.2rem', color: 'var(--text-primary)', lineHeight: 1.2, paddingRight: project.featured ? '5rem' : 0 }}>
        {project.title}
      </h3>

      {/* Stats */}
      {project.stats.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.75rem' }}>
          {project.stats.map(stat => (
            <div key={stat.label}>
              <div style={{ ...monoFont, fontSize: fullWidth ? '1.4rem' : '1.1rem', fontWeight: 600, color: 'var(--accent)', lineHeight: 1.1 }}>
                {stat.value}
              </div>
              <div style={{ ...monoFont, fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '0.06em', marginTop: '0.15rem' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Description */}
      <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--text-secondary)', flex: 1 }}>
        {project.description}
      </p>

      {/* Links */}
      <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', paddingTop: '0.25rem', borderTop: '1px solid var(--border)', marginTop: 'auto' }}>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
             aria-label={`Live demo of ${project.title}`}
             style={{ ...monoFont, fontSize: '0.68rem', letterSpacing: '0.05em', color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '0.35rem', transition: 'opacity 0.2s' }}
             onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '0.7')}
             onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '1')}>
            <ExternalIcon /> Live Demo
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
             aria-label={`GitHub — ${project.title}`}
             style={{ ...monoFont, fontSize: '0.68rem', letterSpacing: '0.05em', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem', transition: 'color 0.2s' }}
             onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text-primary)')}
             onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text-muted)')}>
            <GitHubIcon /> GitHub
          </a>
        )}
      </div>
    </article>
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

function GitHubIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
