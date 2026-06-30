import { experiences } from '../../data/portfolio';
import { GlassCard } from '../ui/GlassCard';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function ExperienceSection() {
  return (
    <section id="experience" className="section-shell py-20 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Experience"
          title="Education and internship history in a clean vertical timeline."
          description="The timeline mirrors the resume structure: education, internship, and practical project experience."
        />
      </Reveal>

      <div className="mt-12 space-y-6">
        {experiences.map((item, index) => (
          <Reveal key={item.role} delay={index * 0.08}>
            <GlassCard className="relative overflow-hidden p-6 sm:p-8">
              <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-purple-400/30 via-white/10 to-transparent" />
              <div className="relative pl-6">
                <p className="text-xs uppercase tracking-[0.28em] text-purple-200">{item.time}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-white">{item.role}</h3>
                <p className="mt-1 text-sm text-slate-400">{item.company}</p>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">{item.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}