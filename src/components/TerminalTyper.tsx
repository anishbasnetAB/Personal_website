import { useEffect, useState } from 'react';
import type { TermLine } from '../data/portfolio';

interface Props {
  lines: TermLine[];
  start: boolean;
  title?: string;
}

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Terminal window that types command lines character by character and
 * prints output lines whole. Renders everything instantly when the user
 * prefers reduced motion.
 */
export default function TerminalTyper({ lines, start, title = 'anish@dev — zsh' }: Props) {
  const [skipTyping] = useState(prefersReducedMotion);
  const [pos, setPos] = useState(() =>
    skipTyping ? { line: lines.length, char: 0 } : { line: 0, char: 0 }
  );
  const done = pos.line >= lines.length;

  useEffect(() => {
    if (!start || skipTyping || done) return;

    let line = pos.line;
    let char = pos.char;
    let timer: ReturnType<typeof setTimeout>;

    const step = () => {
      const current = lines[line];
      if (!current) return;
      if (current.type === 'cmd' && char < current.text.length) {
        char += 1;
        setPos({ line, char });
        timer = setTimeout(step, 26 + Math.random() * 38);
      } else {
        line += 1;
        char = 0;
        setPos({ line, char });
        timer = setTimeout(step, current.type === 'cmd' ? 280 : 110);
      }
    };

    timer = setTimeout(step, 450);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start, skipTyping]);

  return (
    <div className="terminal" role="img" aria-label="Terminal showing developer summary">
      <div className="terminal-bar">
        <Dot color="#ff5f57" /><Dot color="#febc2e" /><Dot color="#28c840" />
        <span className="terminal-title">{title}</span>
      </div>
      <div className="terminal-body">
        {lines.map((l, i) => {
          if (i > pos.line) return null;
          const partial = i === pos.line;
          if (l.type === 'cmd') {
            const text = partial ? l.text.slice(0, pos.char) : l.text;
            return (
              <div key={i}>
                <span className="t-prompt">$ </span>
                <span className="t-cmd">{text}</span>
                {partial && <span className="terminal-cursor">▋</span>}
              </div>
            );
          }
          if (partial) return null;
          return (
            <div key={i}>
              <Output text={l.text} />
            </div>
          );
        })}
        {done && (
          <div>
            <span className="t-prompt">$ </span>
            <span className="terminal-cursor">▋</span>
          </div>
        )}
      </div>
    </div>
  );
}

function Output({ text }: { text: string }) {
  if (text === '') return <span className="t-output">&nbsp;</span>;
  if (text.startsWith('●')) {
    return (
      <span className="t-output">
        <span className="t-accent">●</span>
        {text.slice(1)}
      </span>
    );
  }
  return <span className="t-output">{text}</span>;
}

function Dot({ color }: { color: string }) {
  return (
    <span
      style={{ width: '10px', height: '10px', borderRadius: '50%', background: color, display: 'inline-block', flexShrink: 0 }}
    />
  );
}
