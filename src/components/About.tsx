import React from 'react';
import { portfolio } from '../data/portfolio';
import { useInView } from '../hooks/useInView';

const monoFont = { fontFamily: "'JetBrains Mono', monospace" };

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" ref={ref as React.RefObject<HTMLElement>} className="section-pad">
      <div className="page-container">

        <div className={`section-rule reveal ${inView ? 'visible' : ''}`}>
          <span className="section-rule-label">01 / About</span>
        </div>

        <div
          className={`reveal ${inView ? 'visible' : ''}`}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}
        >
          {/* ── Left: bio + terminal ── */}
          <div>
            <p style={{ fontSize: '1.02rem', lineHeight: 1.78, color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              {portfolio.about.bio}
            </p>

            <div className="terminal">
              <div style={{ display: 'flex', gap: '6px', marginBottom: '0.9rem' }}>
                <Dot color="#ff5f57" /><Dot color="#febc2e" /><Dot color="#28c840" />
              </div>
              {portfolio.about.terminalLines.map((line, i) => (
                <div key={i} style={{ lineHeight: 1.9 }}>
                  {line.prompt ? (
                    <span>
                      <span className="t-prompt">{line.prompt} </span>
                      <span className="t-cmd">{line.command}</span>
                    </span>
                  ) : (
                    <span className="t-output">{line.output}</span>
                  )}
                </div>
              ))}
              <span className="terminal-cursor">▋</span>
            </div>
          </div>

          {/* ── Right: highlight cards ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <InfoCard
              label="Education"
              lines={[
                'Lambton College — PGD, Computer Software Engineering · 2024–25',
                'London Metropolitan University — BSc Computing, First Class Honours · 2019–22',
              ]}
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
              lines={[
                portfolio.identity.openTo,
                'On-site · hybrid · remote',
              ]}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          #about .reveal > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function Dot({ color }: { color: string }) {
  return <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: color, display: 'inline-block', flexShrink: 0 }} />;
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
        <p key={i} style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginTop: i > 0 ? '0.2rem' : 0 }}>
          {line}
        </p>
      ))}
    </div>
  );
}
