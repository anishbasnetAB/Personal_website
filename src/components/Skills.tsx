import type { RefObject } from 'react';
import { portfolio } from '../data/portfolio';
import { useInView } from '../hooks/useInView';
import { monoFont } from '../styles/fonts';

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section id="skills" ref={ref as RefObject<HTMLElement>} className="section-pad">
      <div className="page-container">

        <div className={`section-rule reveal ${inView ? 'visible' : ''}`}>
          <span className="section-rule-label">04 / Skills</span>
        </div>

        <h2 className={`section-title reveal ${inView ? 'visible' : ''}`} style={{ transitionDelay: '60ms' }}>
          The <em>toolbox</em> — and the concepts behind it.
        </h2>

        <div
          className="skills-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '1.25rem' }}
        >
          {portfolio.skills.map((group, gi) => (
            <div
              key={group.category}
              className={`glass card-lift reveal ${inView ? 'visible' : ''}`}
              style={{ transitionDelay: `${100 + gi * 70}ms`, padding: '1.4rem 1.5rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <p style={{ ...monoFont, fontSize: '0.64rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                  {group.category}
                </p>
                <span style={{ ...monoFont, fontSize: '0.58rem', color: 'var(--text-muted)' }} aria-hidden="true">
                  {String(group.items.length).padStart(2, '0')}
                </span>
              </div>
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
