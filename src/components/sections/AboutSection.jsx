import { motion } from 'framer-motion';
import { education, profileTimeline } from '../../data/portfolio';
import { profileName, profileSummary, profileTagline } from '../../data/portfolio';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { GlassCard } from '../ui/GlassCard';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

const stats = [
  { value: '1', label: 'Years' },
  { value: '5', label: 'Projects' },
  { value: '10', label: 'Stacks' },
];

export function AboutSection() {
  return (
    <section id="about" className="section-shell py-20 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="About"
          title="A concise snapshot of your background, focus, and technical direction."
          description={profileSummary}
        />
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <Reveal>
          <GlassCard className="relative overflow-hidden p-6 sm:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.16),transparent_38%)]" />
            <div className="relative flex flex-col items-center gap-5 text-center">
              <motion.div
                className="h-40 w-40 rounded-full border border-white/10 bg-[radial-gradient(circle,rgba(168,85,247,0.24),rgba(59,130,246,0.12),rgba(255,255,255,0.04))] shadow-[0_0_45px_rgba(168,85,247,0.25)] animate-float"
                whileHover={{ scale: 1.05 }}
              />
              <div>
                <h3 className="font-display text-2xl font-semibold text-white">{profileName}</h3>
                <p className="mt-2 text-sm text-slate-300">{profileTagline} •</p>
              </div>
              <div className="grid w-full gap-3 sm:grid-cols-3">
                {stats.map((stat) => (
                  <AnimatedCounter key={stat.label} value={stat.value} label={stat.label} suffix="+" />
                ))}
              </div>
            </div>
          </GlassCard>
        </Reveal>

        <div className="grid gap-6">
          <Reveal delay={0.05}>
            <GlassCard className="p-6 sm:p-8">
              <h3 className="font-display text-2xl font-semibold text-white">Introduction</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                {profileSummary} I enjoy building responsive interfaces, clean REST workflows, and product-focused
                web experiences that feel polished on every screen.
              </p>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.1}>
            <GlassCard className="p-6 sm:p-8">
              <h3 className="font-display text-2xl font-semibold text-white">Education</h3>
              <div className="mt-4 grid gap-3">
                {education.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="font-medium text-white">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-300">{item.meta}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.15}>
            <GlassCard className="p-6 sm:p-8">
              <h3 className="font-display text-2xl font-semibold text-white">Timeline</h3>
              <div className="mt-6 space-y-5 border-l border-purple-400/20 pl-5">
                {profileTimeline.map((item) => (
                  <div key={item.year} className="relative">
                    <span className="absolute -left-[1.55rem] top-1 h-3 w-3 rounded-full bg-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.75)]" />
                    <p className="text-xs uppercase tracking-[0.28em] text-purple-200">{item.year}</p>
                    <h4 className="mt-1 text-lg font-semibold text-white">{item.title}</h4>
                    <p className="text-sm text-slate-400">{item.company}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}