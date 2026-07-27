import type { RefObject } from 'react';
import { portfolio } from '../data/portfolio';
import { useInView } from '../hooks/useInView';
import { monoFont, displayFont } from '../styles/fonts';

export default function Education() {
  const { ref, inView } = useInView();

  return (
    <section id="education" ref={ref as RefObject<HTMLElement>} className="section-pad">
      <div className="page-container">

        <div className={`section-rule reveal ${inView ? 'visible' : ''}`}>
          <span className="section-rule-label">05 / Education</span>
        </div>

        <div
          className="edu-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}
        >
          {portfolio.education.map((edu, i) => (
            <div
              key={edu.institution}
              className={`card card-lift reveal ${inView ? 'visible' : ''}`}
              style={{ padding: '1.75rem 2rem', transitionDelay: `${i * 80}ms` }}
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

        {/* Certifications */}
        <div
          className={`reveal ${inView ? 'visible' : ''}`}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1.25rem', transitionDelay: '180ms' }}
        >
          {portfolio.certifications.map(cert => (
            <div
              key={cert.name}
              className="card"
              style={{ padding: '0.85rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}
            >
              <span aria-hidden="true" style={{ ...monoFont, color: 'var(--accent)', fontSize: '0.8rem' }}>✓</span>
              <div>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-primary)', lineHeight: 1.3 }}>{cert.name}</p>
                <p style={{ ...monoFont, fontSize: '0.58rem', letterSpacing: '0.06em', color: 'var(--text-muted)', marginTop: '0.15rem' }}>
                  {cert.issuer} · {cert.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .edu-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
