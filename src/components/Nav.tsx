import { useEffect, useState } from 'react';
import { portfolio } from '../data/portfolio';
import type { Theme } from '../App';

interface NavProps {
  theme: Theme;
  toggleTheme: () => void;
}

const links = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Work', href: '#experience', id: 'experience' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

const monoFont = { fontFamily: "'JetBrains Mono', monospace" };

export default function Nav({ theme, toggleTheme }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    let raf = 0;
    const update = () => {
      setScrolled(window.scrollY > 48);
      const pos = window.scrollY + window.innerHeight * 0.38;
      let current = '';
      for (const { id } of links) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= pos) current = id;
      }
      if (window.scrollY < 80) current = '';
      setActive(current);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav
        style={{
          background: scrolled ? 'var(--nav-bg)' : 'transparent',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          transition: 'background 0.3s, border-color 0.3s',
        }}
        className="fixed top-0 left-0 right-0 z-50"
        aria-label="Primary navigation"
      >
        <div
          className="page-container"
          style={{ paddingTop: '1rem', paddingBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          {/* Monogram */}
          <a
            href="#hero"
            style={{ ...monoFont, color: 'var(--accent)', fontSize: '1rem', fontWeight: 600, letterSpacing: '0.06em' }}
            aria-label="Home"
          >
            <span style={{ color: 'var(--text-muted)' }}>~/</span>{portfolio.identity.monogram.toLowerCase()}
          </a>

          {/* Desktop nav */}
          <div style={{ alignItems: 'center', gap: '1.75rem' }} className="nav-desktop">
            {links.map(l => (
              <a key={l.href} href={l.href} className={`nav-link ${active === l.id ? 'active' : ''}`}>
                {l.label}
              </a>
            ))}
            <div style={{ width: '1px', height: '14px', background: 'var(--border)' }} aria-hidden="true" />
            <a
              href={portfolio.identity.cvUrl}
              download
              className="btn btn-outlined"
              style={{ padding: '0.4rem 0.9rem', fontSize: '0.64rem' }}
            >
              Resume
            </a>
            <a
              href={portfolio.identity.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="nav-link"
              style={{ padding: '0.2rem' }}
            >
              <GitHubIcon size={17} />
            </a>
            <ThemeToggle theme={theme} toggle={toggleTheme} />
          </div>

          {/* Mobile right side */}
          <div style={{ alignItems: 'center', gap: '1rem' }} className="nav-mobile">
            <ThemeToggle theme={theme} toggle={toggleTheme} />
            <button
              onClick={() => setMenuOpen(v => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              style={{ background: 'none', border: 'none', padding: '4px', display: 'flex', flexDirection: 'column', gap: '5px' }}
            >
              {[0, 1, 2].map(i => (
                <span
                  key={i}
                  style={{
                    display: 'block', width: '20px', height: '1.5px',
                    background: 'var(--text-primary)',
                    transition: 'transform 0.2s, opacity 0.2s',
                    transform: menuOpen
                      ? i === 0 ? 'translateY(6.5px) rotate(45deg)'
                        : i === 2 ? 'translateY(-6.5px) rotate(-45deg)' : 'none'
                      : 'none',
                    opacity: menuOpen && i === 1 ? 0 : 1,
                  }}
                />
              ))}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        role="dialog"
        aria-modal="true"
        aria-hidden={!menuOpen}
        style={{
          position: 'fixed', inset: 0, zIndex: 40,
          background: 'var(--bg)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: '2.25rem',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 0.25s ease',
        }}
      >
        {links.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: '2.2rem',
              color: active === l.id ? 'var(--accent)' : 'var(--text-primary)',
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(12px)',
              transition: `opacity 0.3s ${i * 50}ms, transform 0.3s ${i * 50}ms, color 0.2s`,
            }}
          >
            {l.label}
          </a>
        ))}
        <a
          href={portfolio.identity.cvUrl}
          download
          onClick={() => setMenuOpen(false)}
          className="btn btn-outlined"
          style={{ marginTop: '0.5rem' }}
        >
          Download Resume
        </a>
      </div>
    </>
  );
}

function ThemeToggle({ theme, toggle }: { theme: Theme; toggle: () => void }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: 'var(--surface)',
        border: `1px solid ${hover ? 'var(--accent)' : 'var(--border)'}`,
        borderRadius: '6px',
        padding: '5px 8px',
        color: hover ? 'var(--accent)' : 'var(--text-muted)',
        display: 'flex',
        alignItems: 'center',
        transition: 'color 0.2s, border-color 0.2s',
      }}
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

function GitHubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}
