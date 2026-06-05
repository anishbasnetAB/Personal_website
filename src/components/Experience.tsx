import React from 'react';
import { portfolio } from '../data/portfolio';
import { useInView } from '../hooks/useInView';

const monoFont = { fontFamily: "'JetBrains Mono', monospace" };
const displayFont = { fontFamily: "'DM Serif Display', serif" };

export default function Experience() {
  const { ref, inView } = useInView();

  return (
    <section id="experience" ref={ref as React.RefObject<HTMLElement>} className="section-pad">
      <div className="page-container">

        <div className={`section-rule reveal ${inView ? 'visible' : ''}`}>
          <span className="section-rule-label">02 / Work</span>
        </div>

        <div style={{ position: 'relative' }}>
          {/* Vertical timeline line */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: '7.5rem',
              top: '0.6rem',
              bottom: '0',
              width: '1px',
              background: 'var(--border)',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {portfolio.experience.map((job, i) => (
              <ExperienceRow key={job.company + job.period} job={job} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type Job = (typeof portfolio.experience)[number];

function ExperienceRow({ job, index, inView }: { job: Job; index: number; inView: boolean }) {
  return (
    <div
      className={`reveal ${inView ? 'visible' : ''}`}
      style={{
        transitionDelay: `${index * 90}ms`,
        display: 'flex',
        gap: '2.5rem',
        position: 'relative',
      }}
    >
      {/* Date column */}
      <div
        style={{
          ...monoFont,
          fontSize: '0.65rem',
          color: 'var(--text-muted)',
          lineHeight: 1.5,
          width: '6.5rem',
          flexShrink: 0,
          paddingTop: '0.2rem',
          textAlign: 'right',
          position: 'relative',
        }}
      >
        {job.period.split(' – ').map((part, i) => (
          <span key={i} style={{ display: 'block' }}>{part}{i === 0 ? ' –' : ''}</span>
        ))}
        {/* Dot */}
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: '-1.3rem',
            top: '0.35rem',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: 'var(--accent)',
            border: '2px solid var(--bg)',
            flexShrink: 0,
          }}
        />
      </div>

      {/* Content */}
      <div style={{ flex: 1, paddingLeft: '0.5rem' }}>
        <div style={{ marginBottom: '0.8rem', display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '0.5rem 0.75rem' }}>
          <span style={{ ...displayFont, fontSize: '1.2rem', color: 'var(--text-primary)' }}>
            {job.company}
          </span>
          <span style={{ ...monoFont, fontSize: '0.67rem', color: 'var(--accent)', letterSpacing: '0.05em' }}>
            {job.role}
          </span>
        </div>

        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {job.bullets.map((bullet, i) => (
            <li key={i} style={{ display: 'flex', gap: '0.7rem', alignItems: 'flex-start' }}>
              <span
                aria-hidden="true"
                style={{
                  flexShrink: 0,
                  marginTop: '0.6em',
                  width: '5px',
                  height: '1.5px',
                  background: 'var(--accent)',
                  display: 'block',
                  borderRadius: '1px',
                }}
              />
              <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                {bullet}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
