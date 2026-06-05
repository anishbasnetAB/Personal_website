import { useEffect, useRef, useState } from 'react';

interface Props {
  value: string;
  active: boolean;
}

function parseNumber(str: string): { prefix: string; num: number; suffix: string } | null {
  const match = str.match(/^([^0-9]*)([0-9,]+(?:\.[0-9]+)?)([^0-9]*)$/);
  if (!match) return null;
  return {
    prefix: match[1],
    num: parseFloat(match[2].replace(/,/g, '')),
    suffix: match[3],
  };
}

export default function AnimatedCounter({ value, active }: Props) {
  const parsed = parseNumber(value);
  const [display, setDisplay] = useState(parsed ? '0' : value);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!active || !parsed) return;

    const duration = 1400;
    const start = performance.now();
    const target = parsed.num;

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const rawCurrent = eased * target;
      let formatted: string;
      if (target >= 10000) {
        formatted = Math.round(rawCurrent).toLocaleString('en-US');
      } else if (target < 10 && !Number.isInteger(target)) {
        formatted = rawCurrent.toFixed(1);
      } else {
        formatted = Math.round(rawCurrent).toString();
      }

      setDisplay(formatted);
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      }
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [active, value]);

  if (!parsed) return <span>{value}</span>;

  return (
    <span>
      {parsed.prefix}{display}{parsed.suffix}
    </span>
  );
}
