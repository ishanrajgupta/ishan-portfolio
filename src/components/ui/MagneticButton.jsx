import { motion } from 'framer-motion';

export function MagneticButton({ children, className = '', variant = 'primary', ...props }) {
  const base =
    variant === 'secondary'
      ? 'border border-white/12 bg-white/5 text-white hover:border-purple-400/30 hover:bg-white/10'
      : 'border border-purple-400/35 bg-gradient-to-r from-primary/85 to-secondary/85 text-white shadow-[0_0_28px_rgba(124,58,237,0.32)] hover:shadow-[0_0_35px_rgba(124,58,237,0.45)]';

  return (
    <motion.a
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ${base} ${className}`}
      {...props}
    >
      {children}
    </motion.a>
  );
}