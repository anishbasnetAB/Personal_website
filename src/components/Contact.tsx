import React from 'react';
import { portfolio } from '../data/portfolio';
import { useInView } from '../hooks/useInView';

const monoFont = { fontFamily: "'JetBrains Mono', monospace" };
const displayFont = { fontFamily: "'DM Serif Display', serif" };

export default function Contact() {
  const { ref, inView } = useInView();

  return (
    <section id="contact" ref={ref as React.RefObject<HTMLElement>} className="section-pad">
      <div className="page-container">

        <div className={`section-rule reveal ${inView ? 'visible' : ''}`}>
          <span className="section-rule-label">06 / Contact</span>
        </div>

        <div className={`reveal ${inView ? 'visible' : ''}`} style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ ...displayFont, fontStyle: 'italic', fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', color: 'var(--text-primary)', lineHeight: 1.05, marginBottom: '1.25rem' }}>
            {portfolio.contact.heading}
          </h2>

          <p style={{ fontSize: '0.98rem', lineHeight: 1.75, color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>
            {portfolio.contact.note}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '4rem' }}>
            <a
              href={`mailto:${portfolio.identity.email}`}
              style={{
                background: 'var(--accent)', color: 'var(--bg)',
                ...monoFont, fontSize: '0.73rem', letterSpacing: '0.05em', fontWeight: 700,
                padding: '0.7rem 1.6rem', borderRadius: '5px',
                display: 'flex', alignItems: 'center', gap: '0.4rem',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '0.85')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '1')}
            >
              <EmailIcon /> {portfolio.identity.email}
            </a>
            <IconBtn href={portfolio.identity.linkedin} label="LinkedIn"><LinkedInIcon /></IconBtn>
            <IconBtn href={portfolio.identity.github} label="GitHub"><GitHubIcon /></IconBtn>
          </div>

          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.75rem' }}>
            <p style={{ ...monoFont, fontSize: '0.62rem', letterSpacing: '0.08em', color: 'var(--text-muted)' }}>
              © 2026 Anish Basnet · Built with React + Vite
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

function IconBtn({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
      style={{
        border: '1px solid var(--border)', color: 'var(--text-secondary)',
        fontFamily: "'JetBrains Mono', monospace", fontSize: '0.73rem',
        letterSpacing: '0.05em', padding: '0.7rem 1.3rem',
        borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '0.4rem',
        transition: 'border-color 0.2s, color 0.2s',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = 'var(--accent)';
        el.style.color = 'var(--accent)';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = 'var(--border)';
        el.style.color = 'var(--text-secondary)';
      }}
    >
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

function LinkedInIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
