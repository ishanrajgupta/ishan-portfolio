import { motion } from 'framer-motion';

export function ScrollProgressBar({ progress }) {
  return (
    <div className="fixed left-0 top-0 z-[60] h-1 w-full bg-white/5">
      <motion.div
        className="h-full origin-left bg-gradient-to-r from-primary via-accent to-secondary"
        style={{ scaleX: progress / 100 }}
      />
    </div>
  );
}