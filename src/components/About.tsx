import type { RefObject } from 'react';
import { portfolio } from '../data/portfolio';
import TerminalTyper from './TerminalTyper';
import { useInView } from '../hooks/useInView';
import { monoFont, displayFont } from '../styles/fonts';

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" ref={ref as RefObject<HTMLElement>} className="section-pad">
      <div className="page-container">

        <div className={`section-rule reveal ${inView ? 'visible' : ''}`}>
          <span className="section-rule-label">01 / About</span>
        </div>

        <h2 className={`section-title reveal ${inView ? 'visible' : ''}`} style={{ transitionDelay: '60ms' }}>
          Systems-minded. <em>Full-stack capable.</em>
        </h2>

        <div
          className={`about-grid reveal ${inView ? 'visible' : ''}`}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start', transitionDelay: '120ms' }}
        >
          {/* ── Left: bio + developer profile terminal ── */}
          <div>
            <p style={{ fontSize: '1.02rem', lineHeight: 1.78, color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              {portfolio.about.bio}
            </p>
            <TerminalTyper lines={portfolio.about.terminalLines} start={inView} title="profile — zsh" />
          </div>

          {/* ── Right: info cards ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <InfoCard
              label="Education"
              lines={portfolio.education.map(e => `${e.institution} — ${e.degree} · ${e.period}`)}
            />
            <InfoCard
              label="Work Authorization"
              lines={[
                'Authorized to work full-time in Canada',
                'Post-Graduate Work Permit (PGWP) · No sponsorship required',
              ]}
              highlight
            />
            <InfoCard
              label="Open To"
              lines={[portfolio.identity.openTo, 'On-site · hybrid · remote']}
            />
            <InfoCard
              label="Location"
              lines={[portfolio.identity.location]}
            />
          </div>
        </div>

        {/* ── Focus areas ── */}
        <div
          className="focus-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', marginTop: '3rem' }}
        >
          {portfolio.about.focusAreas.map((area, i) => (
            <div
              key={area.title}
              className={`glass card-lift reveal ${inView ? 'visible' : ''}`}
              style={{ padding: '1.5rem 1.6rem', transitionDelay: `${180 + i * 80}ms` }}
            >
              <p style={{ ...monoFont, fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.6rem' }}>
                0{i + 1}
              </p>
              <h3 style={{ ...displayFont, fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '0.55rem' }}>
                {area.title}
              </h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                {area.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .focus-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function InfoCard({ label, lines, highlight = false }: { label: string; lines: string[]; highlight?: boolean }) {
  return (
    <div
      className="card"
      style={{
        padding: '1.25rem 1.4rem',
        borderColor: highlight ? 'color-mix(in srgb, var(--accent) 45%, var(--border))' : undefined,
        boxShadow: highlight ? '0 0 24px color-mix(in srgb, var(--accent) 6%, transparent)' : undefined,
      }}
    >
      <p style={{ ...monoFont, fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: highlight ? 'var(--accent)' : 'var(--text-muted)', marginBottom: '0.65rem' }}>
        {label}
      </p>
      {lines.map((line, i) => (
        <p key={i} style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginTop: i > 0 ? '0.25rem' : 0 }}>
          {line}
        </p>
      ))}
    </div>
  );
}
