import { AnimatePresence, motion } from 'framer-motion';

export function PageLoader({ isVisible }) {
  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[#050816]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm tracking-[0.28em] text-white"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.35 }}
          >
            ISHAN'S PORTFOLIO
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}