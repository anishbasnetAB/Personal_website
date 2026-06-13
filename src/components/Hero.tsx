import React from 'react';
import { portfolio } from '../data/portfolio';
import AnimatedCounter from './AnimatedCounter';
import Magnetic from './Magnetic';
import TerminalTyper from './TerminalTyper';
import { useInView } from '../hooks/useInView';

const monoFont = { fontFamily: "'JetBrains Mono', monospace" };
const displayFont = { fontFamily: "'DM Serif Display', serif" };

export default function Hero() {
  const { ref, inView } = useInView({ threshold: 0.05 });

  return (
    <section
      id="hero"
      ref={ref as React.RefObject<HTMLElement>}
      style={{ minHeight: '100svh', display: 'flex', alignItems: 'center', paddingTop: '6.5rem', paddingBottom: '4rem', position: 'relative' }}
    >
      <div className="page-container" style={{ width: '100%' }}>
        <div
          className="hero-grid"
          style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: '3.5rem', alignItems: 'center' }}
        >
          {/* ── Left column ── */}
          <div>
            <div className="fade-up" style={{ marginBottom: '1.6rem', animationDelay: '0ms' }}>
              <span className="status-pill">
                <span className="status-dot" aria-hidden="true" />
                {portfolio.hero.availability}
              </span>
            </div>

            <h1
              className="fade-up"
              style={{ ...displayFont, fontSize: 'clamp(2.8rem, 6.5vw, 5.4rem)', lineHeight: 1.0, color: 'var(--text-primary)', marginBottom: '0.9rem', animationDelay: '60ms' }}
            >
              {portfolio.identity.name}
            </h1>

            <p
              className="fade-up"
              style={{ ...displayFont, fontStyle: 'italic', fontSize: 'clamp(1rem, 2.2vw, 1.4rem)', color: 'var(--accent)', marginBottom: '1.6rem', animationDelay: '120ms' }}
            >
              {portfolio.hero.roleLine}
            </p>

            <p
              className="fade-up"
              style={{ fontSize: '1rem', lineHeight: 1.72, color: 'var(--text-secondary)', maxWidth: '500px', marginBottom: '2.25rem', animationDelay: '180ms' }}
            >
              {portfolio.hero.tagline}
            </p>

            <div className="fade-up" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', animationDelay: '240ms' }}>
              <Magnetic><a href="#projects" className="btn btn-filled">View Projects</a></Magnetic>
              <Magnetic><a href={portfolio.identity.cvUrl} download className="btn btn-outlined">Download Resume</a></Magnetic>
              <Magnetic><a href="#contact" className="btn btn-ghost">Contact Me</a></Magnetic>
            </div>

            <p
              className="fade-up"
              style={{ ...monoFont, fontSize: '0.64rem', letterSpacing: '0.1em', color: 'var(--text-muted)', marginTop: '1.75rem', animationDelay: '300ms' }}
            >
              {portfolio.hero.locationLine} · {portfolio.identity.workAuth}
            </p>
          </div>

          {/* ── Right column: live terminal + stats ── */}
          <div className="fade-up" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', animationDelay: '320ms' }}>
            <TerminalTyper lines={portfolio.hero.terminal} start={inView} />
            <div className="hero-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
              {portfolio.hero.stats.map(stat => (
                <StatCard key={stat.unit} stat={stat} active={inView} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="scroll-hint"
        style={{
          ...monoFont,
          position: 'absolute', bottom: '1.75rem', left: '50%', transform: 'translateX(-50%)',
          fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase',
          color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
        }}
      >
        scroll
        <span aria-hidden="true" style={{ width: '1px', height: '28px', background: 'linear-gradient(to bottom, var(--accent), transparent)', display: 'block' }} />
      </a>

      <style>{`
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .scroll-hint { display: none !important; }
        }
        @media (max-width: 420px) {
          .hero-stats { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function StatCard({ stat, active }: { stat: { value: string; unit: string; label: string }; active: boolean }) {
  return (
    <div className="glass card-lift" style={{ padding: '1rem 1.1rem' }}>
      <div style={{ ...monoFont, fontSize: 'clamp(1.25rem, 2.4vw, 1.7rem)', fontWeight: 600, color: 'var(--accent)', lineHeight: 1.1, marginBottom: '0.25rem' }}>
        <AnimatedCounter value={stat.value} active={active} />
      </div>
      <div style={{ ...monoFont, fontSize: '0.62rem', color: 'var(--text-primary)', letterSpacing: '0.04em', marginBottom: '0.15rem' }}>
        {stat.unit}
      </div>
      <div style={{ ...monoFont, fontSize: '0.56rem', color: 'var(--text-muted)', letterSpacing: '0.04em' }}>
        {stat.label}
      </div>
    </div>
  );
}
