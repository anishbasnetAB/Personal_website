import { useRef, type ReactNode, type PointerEvent } from 'react';

/**
 * Wraps a button/link so it leans gently toward the cursor.
 * No-op on touch devices and when reduced motion is preferred.
 */
export default function Magnetic({ children, strength = 0.2 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  const onMove = (e: PointerEvent<HTMLSpanElement>) => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)').matches) return;
    const rect = el.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0, 0)';
  };

  return (
    <span
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ display: 'inline-block', transition: 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)' }}
    >
      {children}
    </span>
  );
}
