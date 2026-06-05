import React from 'react';
import { portfolio } from '../data/portfolio';
import { useInView } from '../hooks/useInView';

const monoFont = { fontFamily: "'JetBrains Mono', monospace" };

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section id="skills" ref={ref as React.RefObject<HTMLElement>} className="section-pad">
      <div className="page-container">

        <div className={`section-rule reveal ${inView ? 'visible' : ''}`}>
          <span className="section-rule-label">04 / Skills</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.25rem' }}>
          {portfolio.skills.map((group, gi) => (
            <div
              key={group.category}
              className={`reveal ${inView ? 'visible' : ''}`}
              style={{ transitionDelay: `${gi * 70}ms` }}
            >
              <p style={{
                ...monoFont, fontSize: '0.62rem', letterSpacing: '0.16em',
                textTransform: 'uppercase', color: 'var(--text-muted)',
                marginBottom: '0.85rem',
              }}>
                {group.category}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {group.items.map(item => (
                  <span key={item} className="skill-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
