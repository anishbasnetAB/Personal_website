import type { ReactNode, RefObject } from 'react';
import { portfolio } from '../data/portfolio';
import Magnetic from './Magnetic';
import { useInView } from '../hooks/useInView';
import { GitHubIcon } from './icons';
import { monoFont, displayFont } from '../styles/fonts';

export default function Contact() {
  const { ref, inView } = useInView();

  return (
    <section id="contact" ref={ref as RefObject<HTMLElement>} className="section-pad">
      <div className="page-container">

        <div className={`section-rule reveal ${inView ? 'visible' : ''}`}>
          <span className="section-rule-label">06 / Contact</span>
        </div>

        <div className={`reveal ${inView ? 'visible' : ''}`} style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center', transitionDelay: '80ms' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <span className="status-pill">
              <span className="status-dot" aria-hidden="true" />
              {portfolio.hero.availability}
            </span>
          </div>

          <h2 style={{ ...displayFont, fontStyle: 'italic', fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', color: 'var(--text-primary)', lineHeight: 1.05, marginBottom: '1.25rem' }}>
            {portfolio.contact.heading}
          </h2>

          <p style={{ fontSize: '0.98rem', lineHeight: 1.75, color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>
            {portfolio.contact.note}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <Magnetic>
              <a href={`mailto:${portfolio.identity.email}`} className="btn btn-filled">
                <EmailIcon /> {portfolio.identity.email}
              </a>
            </Magnetic>
            <Magnetic>
              <a href={portfolio.identity.cvUrl} download className="btn btn-outlined">
                Download Resume
              </a>
            </Magnetic>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '4rem' }}>
            <IconBtn href={portfolio.identity.linkedin} label="LinkedIn"><LinkedInIcon /></IconBtn>
            <IconBtn href={portfolio.identity.github} label="GitHub"><GitHubIcon size={13} /></IconBtn>
            <IconBtn href={portfolio.identity.blog} label="Blog"><BlogIcon /></IconBtn>
          </div>

          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.75rem' }}>
            <p style={{ ...monoFont, fontSize: '0.62rem', letterSpacing: '0.08em', color: 'var(--text-muted)' }}>
              © 2026 Anish Basnet · Built with React + Vite · {portfolio.identity.location}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

function IconBtn({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="btn btn-ghost">
      {children} {label}
    </a>
  );
}

function EmailIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function BlogIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
    </svg>
  );
}
