import { useEffect, useState } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { portfolio } from './data/portfolio';
import Background from './components/Background';
import Cursor from './components/Cursor';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

export type Theme = 'dark' | 'light';

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const stored = localStorage.getItem('portfolio-theme');
      return stored === 'light' ? 'light' : 'dark';
    } catch {
      return 'dark';
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('portfolio-theme', theme); } catch { /* */ }
  }, [theme]);

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));

  return (
    <HelmetProvider>
      <Helmet>
        <title>{`${portfolio.identity.name} — ${portfolio.identity.title}`}</title>
        <meta name="description" content={portfolio.hero.tagline} />
        <meta property="og:title" content={`${portfolio.identity.name} — ${portfolio.identity.title}`} />
        <meta property="og:description" content={portfolio.hero.tagline} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="theme-color" content={theme === 'dark' ? '#0a0a0b' : '#f5f5f2'} />
      </Helmet>

      <Background />
      <Cursor />
      <Nav theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </HelmetProvider>
  );
}
