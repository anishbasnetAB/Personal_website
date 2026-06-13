import { useEffect, useRef } from 'react';

/**
 * Fixed full-viewport atmosphere: grid, noise, drifting gradient beams,
 * and a teal aura that trails the cursor (fine pointers only).
 */
export default function Background() {
  const auraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = auraRef.current;
    if (!el) return;
    const mq = window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)');
    if (!mq.matches) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight * 0.3;
    let x = targetX;
    let y = targetY;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const tick = () => {
      x += (targetX - x) * 0.07;
      y += (targetY - y) * 0.07;
      el.style.transform = `translate(${x - 320}px, ${y - 320}px)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="bg-fx" aria-hidden="true">
      <div className="bg-grid" />
      <div className="bg-beam bg-beam-1" />
      <div className="bg-beam bg-beam-2" />
      <div ref={auraRef} className="bg-aura" style={{ transform: 'translate(-50%, -50%)' }} />
      <div className="bg-noise" />
    </div>
  );
}
