import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import gsap from 'gsap';
import { FiMenu, FiX } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi2';

export function Navbar({ items, activeSection, isScrolled, onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navbarRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    if (!navbarRef.current) {
      return;
    }

    gsap.fromTo(
      navbarRef.current,
      { y: -24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.85, ease: 'power3.out' },
    );
  }, []);

  useEffect(() => {
    if (!panelRef.current) {
      return;
    }

    if (mobileOpen) {
      gsap.fromTo(
        panelRef.current,
        { y: -18, opacity: 0, scale: 0.98 },
        { y: 0, opacity: 1, scale: 1, duration: 0.28, ease: 'power3.out' },
      );
    }
  }, [mobileOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const glassClasses = useMemo(
    () =>
      isScrolled
        ? 'border-white/12 bg-slate-950/72 shadow-[0_20px_60px_rgba(0,0,0,0.32)]'
        : 'border-white/10 bg-white/8 shadow-[0_16px_50px_rgba(15,23,42,0.28)]',
    [isScrolled],
  );

  const linkClasses = (isActive) =>
    [
      'relative inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors',
      isActive
        ? 'border-purple-400/45 bg-purple-400/15 text-white shadow-[0_0_24px_rgba(168,85,247,0.38)]'
        : 'border-transparent bg-transparent text-slate-200/85 hover:border-purple-400/25 hover:bg-purple-400/10 hover:text-white',
    ].join(' ');

  const handleNavigate = (id) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  return (
    <motion.header
      ref={navbarRef}
      className="fixed inset-x-0 top-4 z-50 px-4 sm:top-6 sm:px-6 lg:px-8"
      initial={false}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-[1.75rem] border px-4 py-3 backdrop-blur-2xl transition-colors duration-300 sm:px-6 ${glassClasses}`}
      >
        <button
          type="button"
          onClick={() => handleNavigate('about')}
          className="group flex items-center gap-3 rounded-full border border-transparent px-2 py-1 text-left text-white transition-all duration-300 hover:scale-[1.02]"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-purple-400/35 bg-purple-400/15 text-purple-200 shadow-[0_0_28px_rgba(168,85,247,0.28)] transition-transform duration-300 group-hover:scale-105">
            <HiSparkles size={18} />
          </span>
          <div>
            <p className="text-sm font-semibold tracking-[0.24em] uppercase text-white/90">
              Portfolio
            </p>
            <p className="text-xs text-slate-300">Glassmorphism Navbar</p>
          </div>
        </button>

        <nav className="hidden items-center gap-2 md:flex">
          {items.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => handleNavigate(item.id)}
                className={linkClasses(isActive)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                animate={{
                  boxShadow: isActive
                    ? '0 0 24px rgba(168, 85, 247, 0.38)'
                    : '0 0 0 rgba(0, 0, 0, 0)',
                }}
                transition={{ type: 'spring', stiffness: 380, damping: 24 }}
              >
                {item.label}
                {isActive ? (
                  <span className="h-2 w-2 rounded-full bg-purple-300 shadow-[0_0_14px_rgba(216,180,254,0.95)]" />
                ) : null}
              </motion.button>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:scale-105 hover:border-purple-400/30 hover:bg-purple-400/12 md:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            ref={panelRef}
            className="mx-auto mt-3 max-w-6xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/88 px-4 py-4 shadow-2xl shadow-black/40 backdrop-blur-2xl md:hidden"
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <div className="grid gap-2">
              {items.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <motion.button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavigate(item.id)}
                    className={`${linkClasses(isActive)} w-full justify-between px-4 py-3 text-left text-base`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${
                        isActive ? 'bg-purple-300 shadow-[0_0_14px_rgba(216,180,254,0.95)]' : 'bg-white/20'
                      }`}
                    />
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
