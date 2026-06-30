import { motion } from 'framer-motion';

export function CustomCursor({ mouse }) {
  if (!mouse.active) {
    return null;
  }

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[70] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-300/45 bg-purple-400/12 shadow-[0_0_35px_rgba(168,85,247,0.35)] backdrop-blur md:block"
        animate={{ x: mouse.x, y: mouse.y }}
        transition={{ type: 'spring', stiffness: 180, damping: 20, mass: 0.2 }}
      />
      <motion.div
        className="pointer-events-none fixed z-[69] hidden h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.14),transparent_68%)] blur-xl md:block"
        animate={{ x: mouse.x, y: mouse.y }}
        transition={{ type: 'spring', stiffness: 90, damping: 22, mass: 0.5 }}
      />
    </>
  );
}