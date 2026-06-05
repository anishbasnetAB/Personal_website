import React from 'react';
import { portfolio } from '../data/portfolio';
import { useInView } from '../hooks/useInView';

const monoFont = { fontFamily: "'JetBrains Mono', monospace" };
const displayFont = { fontFamily: "'DM Serif Display', serif" };

export default function Education() {
  const { ref, inView } = useInView();

  return (
    <section id="education" ref={ref as React.RefObject<HTMLElement>} className="section-pad">
      <div className="page-container">

        <div className={`section-rule reveal ${inView ? 'visible' : ''}`}>
          <span className="section-rule-label">05 / Education</span>
        </div>

        <div
          className={`reveal ${inView ? 'visible' : ''}`}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}
        >
          {portfolio.education.map(edu => (
            <div
              key={edu.institution}
              className="card"
              style={{ padding: '1.75rem 2rem' }}
            >
              <p style={{ ...monoFont, fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.9rem' }}>
                {edu.period}
              </p>
              <h3 style={{ ...displayFont, fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                {edu.institution}
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                {edu.degree}
              </p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 600px) {
          #education .reveal > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
