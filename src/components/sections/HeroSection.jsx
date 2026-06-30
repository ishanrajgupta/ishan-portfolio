import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { heroMetrics, heroRoles, orbitTechnologies, resumeUrl } from '../../data/portfolio';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { GlassCard } from '../ui/GlassCard';
import { MagneticButton } from '../ui/MagneticButton';
import { OrbitRing } from '../ui/OrbitRing';
import { TypingHeadline } from '../ui/TypingHeadline';
import { profileName, profileSummary, profileTagline } from '../../data/portfolio';

export function HeroSection({ onNavigate }) {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-28 sm:pt-32">
      <div className="section-shell relative z-10 grid min-h-[calc(100vh-7rem)] items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="max-w-2xl">
          <motion.p
            className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-purple-200"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {profileTagline}
          </motion.p>

          <motion.h1
            className="font-display text-5xl font-semibold leading-[1.03] tracking-tight text-white sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
          >
            Hello, I&apos;m <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">{profileName}</span>.
          </motion.h1>

          <motion.div
            className="mt-6 text-2xl font-semibold text-purple-100 sm:text-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
          >
            <span className="text-slate-300">I build</span>{' '}
            <TypingHeadline words={heroRoles} className="text-white" />
          </motion.div>

          <motion.p
            className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
          >
            {profileSummary}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
          >
            <MagneticButton href="#projects" onClick={() => onNavigate('projects')}>
              View Projects <FiArrowRight />
            </MagneticButton>
            <MagneticButton href={resumeUrl} variant="secondary" download="resume.pdf">
              Download Resume
            </MagneticButton>
          </motion.div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {heroMetrics.map((metric) => (
              <AnimatedCounter key={metric.label} value={metric.value} label={metric.label} suffix={metric.suffix} />
            ))}
          </div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-[700px]"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.16 }}
        >
          <div className="absolute inset-x-1/2 top-0 h-24 w-24 -translate-x-1/2 rounded-full bg-purple-500/35 blur-2xl" />
          <GlassCard className="relative overflow-hidden p-5 sm:p-7">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.14),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_36%)]" />
            <div className="relative">
              <div className="mb-5 flex items-center justify-between">
                {/* <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Tech Orbit</p>
                  <h2 className="mt-2 font-display text-xl font-semibold text-white">Cosmic stack rotation</h2>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                  Live motion
                </div> */}
              </div>
              <OrbitRing icons={orbitTechnologies.map((item) => item.icon)} />
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {orbitTechnologies.map((item) => (
                  <span
                    key={item.label}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                  >
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}