import { useEffect, useState } from 'react';

export function useMousePosition() {
  const [mouse, setMouse] = useState({ x: 0, y: 0, active: false });

  useEffect(() => {
    const onMove = (event) => {
      setMouse({ x: event.clientX, y: event.clientY, active: true });
    };

    const onLeave = () => setMouse((current) => ({ ...current, active: false }));

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerleave', onLeave);

    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return mouse;
}