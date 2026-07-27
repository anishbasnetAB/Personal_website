export const prefersFinePointerAndMotion = () =>
  window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)').matches;
