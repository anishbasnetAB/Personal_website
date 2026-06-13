import { useEffect } from 'react';

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    if (!cursor) return;
    // CSS hides the custom cursor in these cases too; skip the listeners entirely.
    if (!window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)').matches) return;

    const move = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const addHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [data-hover]')) {
        cursor.classList.add('hovering');
      }
    };

    const removeHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('a, button, [data-hover]')) {
        cursor.classList.remove('hovering');
      }
    };

    document.addEventListener('mousemove', move, { passive: true });
    document.addEventListener('mouseover', addHover);
    document.addEventListener('mouseout', removeHover);

    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', addHover);
      document.removeEventListener('mouseout', removeHover);
    };
  }, []);

  return <div id="cursor" aria-hidden="true" />;
}
