import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { spotlightStars } from '../../constants/site';

export function BackgroundEffects({ mouse }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.16),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_28%),linear-gradient(180deg,rgba(5,8,22,0.96),rgba(2,6,23,1))]" />

      <motion.div
        className="absolute left-1/2 top-0 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.22),transparent_58%)] blur-3xl"
        animate={{ opacity: [0.4, 0.75, 0.45], scale: [1, 1.05, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute left-1/4 top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.24),transparent_60%)] blur-3xl"
        animate={{ x: [0, 24, 0], y: [0, -12, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:90px_90px] opacity-20" />

      <div className="absolute inset-0 opacity-90">
        {spotlightStars.map((star) => (
          <span
            key={star.id}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
          />
        ))}
      </div>

      {mounted ? (
        <motion.div
          className="absolute h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.16),transparent_60%)] blur-[80px]"
          animate={{ x: mouse.x - 144, y: mouse.y - 144, opacity: mouse.active ? 1 : 0 }}
          transition={{ type: 'spring', stiffness: 60, damping: 22, mass: 0.3 }}
        />
      ) : null}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,transparent_0%,transparent_38%,rgba(5,8,22,0.85)_100%)]" />
    </div>
  );
}