import { portfolio } from '../data/portfolio';
import AnimatedCounter from './AnimatedCounter';
import { useInView } from '../hooks/useInView';

const monoFont = { fontFamily: "'JetBrains Mono', monospace" };
const displayFont = { fontFamily: "'DM Serif Display', serif" };

export default function Hero() {
  const { ref, inView } = useInView({ threshold: 0.05 });

  return (
    <section
      id="hero"
      ref={ref as React.RefObject<HTMLElement>}
      style={{ minHeight: '100svh', display: 'flex', alignItems: 'center', paddingTop: '6rem', paddingBottom: '4rem' }}
    >
      <div className="page-container" style={{ width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '3rem', alignItems: 'center' }}
             className="hero-grid">
          {/* ── Left column ── */}
          <div>
            <p
              className="fade-up"
              style={{ ...monoFont, fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1.75rem', animationDelay: '0ms' }}
            >
              {portfolio.hero.locationLine}
            </p>

            <h1
              className="fade-up"
              style={{ ...displayFont, fontSize: 'clamp(2.8rem, 7vw, 6rem)', lineHeight: 1.0, color: 'var(--text-primary)', marginBottom: '0.9rem', animationDelay: '60ms' }}
            >
              {portfolio.identity.name}
            </h1>

            <p
              className="fade-up"
              style={{ ...displayFont, fontStyle: 'italic', fontSize: 'clamp(1rem, 2.2vw, 1.45rem)', color: 'var(--accent)', marginBottom: '1.75rem', animationDelay: '120ms' }}
            >
              C++ Systems · Backend · Full Stack
            </p>

            <p
              className="fade-up"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', lineHeight: 1.72, color: 'var(--text-secondary)', maxWidth: '500px', marginBottom: '2.25rem', animationDelay: '180ms' }}
            >
              {portfolio.hero.tagline}
            </p>

            <div className="fade-up" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', animationDelay: '240ms' }}>
              <a href="#projects" style={ctaFilled}>View Projects</a>
              <a href={portfolio.identity.cvUrl} download style={ctaOutlined}>Download CV</a>
            </div>
          </div>

          {/* ── Right column: stats ── */}
          <div
            className="fade-up hero-stats"
            style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', animationDelay: '300ms' }}
          >
            {portfolio.hero.stats.map(stat => (
              <StatCard key={stat.unit} stat={stat} active={inView} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-stats { flex-direction: row !important; flex-wrap: wrap; }
        }
      `}</style>
    </section>
  );
}

const ctaFilled: React.CSSProperties = {
  background: 'var(--accent)',
  color: 'var(--bg)',
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: '0.75rem',
  letterSpacing: '0.06em',
  fontWeight: 600,
  padding: '0.65rem 1.5rem',
  borderRadius: '5px',
  display: 'inline-block',
  transition: 'opacity 0.2s',
};

const ctaOutlined: React.CSSProperties = {
  border: '1px solid var(--accent)',
  color: 'var(--accent)',
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: '0.75rem',
  letterSpacing: '0.06em',
  fontWeight: 600,
  padding: '0.65rem 1.5rem',
  borderRadius: '5px',
  display: 'inline-block',
  transition: 'background 0.2s',
};

function StatCard({ stat, active }: { stat: { value: string; unit: string; label: string }; active: boolean }) {
  return (
    <div
      className="card"
      style={{ padding: '1.1rem 1.4rem', minWidth: '155px' }}
    >
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 'clamp(1.5rem, 2.8vw, 2rem)', fontWeight: 600, color: 'var(--accent)', lineHeight: 1.1, marginBottom: '0.2rem' }}>
        <AnimatedCounter value={stat.value} active={active} />
      </div>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: 'var(--text-primary)', letterSpacing: '0.04em', marginBottom: '0.15rem' }}>
        {stat.unit}
      </div>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '0.04em' }}>
        {stat.label}
      </div>
    </div>
  );
}

// React type needed for RefObject cast
import React from 'react';
