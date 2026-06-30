import { useEffect, useState } from 'react';

export function AnimatedCounter({ value, label, suffix = '+' }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const numeric = Number(value);
    if (Number.isNaN(numeric)) {
      return undefined;
    }

    let frame = 0;
    const duration = 1100;
    const start = performance.now();

    const tick = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(numeric * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [value]);

  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl">
      <p className="font-display text-4xl font-semibold text-white sm:text-5xl">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-slate-300">{label}</p>
    </div>
  );
}