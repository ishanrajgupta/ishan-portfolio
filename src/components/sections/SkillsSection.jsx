import { motion } from 'framer-motion';
import { skillGroups, skillMeters } from '../../data/portfolio';
import { GlassCard } from '../ui/GlassCard';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell py-20 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Skills"
          title="A practical MERN stack, organized into clear categories."
          description="The skill cards reflect the technologies and tools shown on your resume, presented with a premium visual system."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <Reveal key={group.title} delay={index * 0.05}>
                <GlassCard className="h-full p-5 hover:border-purple-400/25 transition-colors duration-300">
                  <motion.div className="animate-float" style={{ animationDelay: `${index * 0.4}s` }}>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-400/10 text-purple-200">
                      <Icon className="text-xl" />
                    </div>
                  </motion.div>
                  <h3 className="font-display text-xl font-semibold text-white">{group.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-slate-300">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-purple-300 shadow-[0_0_12px_rgba(168,85,247,0.75)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.12}>
          <GlassCard className="p-6 sm:p-8">
            <h3 className="font-display text-2xl font-semibold text-white">Strength overview</h3>
            <div className="mt-6 space-y-5">
              {skillMeters.map((item) => (
                <div key={item.label}>
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                    <span>{item.label}</span>
                    <span>{item.value}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/8">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-secondary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}