import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import gsap from 'gsap';
import { FiMenu, FiX } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi2';
import { navigation } from '../../constants/site';
import { profileName, profileTagline } from '../../data/portfolio';
import { cn } from '../../utils/cn';

export function Navbar({ activeSection, isScrolled, onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      '.nav-shell',
      { y: -24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
    );
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const shellClasses = useMemo(
    () =>
      isScrolled
        ? 'border-white/12 bg-slate-950/78 shadow-[0_20px_60px_rgba(0,0,0,0.35)]'
        : 'border-white/10 bg-white/6 shadow-[0_18px_60px_rgba(15,23,42,0.22)]',
    [isScrolled],
  );

  const handleNavigate = (id) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  const navLink = (active) =>
    cn(
      'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition duration-300',
      active
        ? 'border-purple-400/45 bg-purple-400/15 text-white shadow-[0_0_26px_rgba(168,85,247,0.35)]'
        : 'border-transparent text-slate-200/80 hover:border-purple-400/20 hover:bg-white/6 hover:text-white',
    );

  return (
    <motion.header className="fixed inset-x-0 top-4 z-50 px-4 sm:top-6 sm:px-6 lg:px-8" initial={false}>
      <div
        className={cn(
          'nav-shell glass-panel mx-auto flex max-w-7xl items-center justify-between rounded-[1.65rem] px-4 py-3 backdrop-blur-2xl transition-colors duration-300 sm:px-6',
          shellClasses,
        )}
      >
        <button
          type="button"
          onClick={() => handleNavigate('hero')}
          className="group flex items-center gap-3 rounded-full border border-transparent px-2 py-1 text-left transition-transform duration-300 hover:scale-[1.02]"
          aria-label="Go to top"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-purple-400/30 bg-purple-400/15 text-purple-200 shadow-[0_0_26px_rgba(168,85,247,0.28)] transition duration-300 group-hover:scale-105">
            <HiSparkles size={18} />
          </span>
          <div>
            <p className="font-display text-sm font-semibold tracking-[0.26em] text-white uppercase">
              {profileName}
            </p>
            <p className="text-xs text-slate-300">{profileTagline}</p>
          </div>
        </button>

        <nav className="hidden items-center gap-2 md:flex">
          {navigation.map((item) => {
            const active = activeSection === item.id;

            return (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => handleNavigate(item.id)}
                className={navLink(active)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.label}
                {active ? <span className="h-2 w-2 rounded-full bg-purple-300 shadow-[0_0_16px_rgba(216,180,254,0.95)]" /> : null}
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
            className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/90 px-4 py-4 shadow-2xl shadow-black/45 backdrop-blur-2xl md:hidden"
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
          >
            <div className="grid gap-2">
              {navigation.map((item) => {
                const active = activeSection === item.id;

                return (
                  <motion.button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavigate(item.id)}
                    className={cn(navLink(active), 'w-full justify-between px-4 py-3 text-left text-base')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                    <span
                      className={cn(
                        'h-2.5 w-2.5 rounded-full',
                        active ? 'bg-purple-300 shadow-[0_0_16px_rgba(216,180,254,0.95)]' : 'bg-white/20',
                      )}
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