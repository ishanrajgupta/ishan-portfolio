import { achievements } from '../../data/portfolio';
import { GlassCard } from '../ui/GlassCard';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function AchievementsSection() {
  return (
    <section id="achievements" className="section-shell py-20 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Achievements"
          title="Positions of responsibility and leadership highlights."
          description="This section now reflects the leadership roles listed in your resume instead of generic achievement placeholders."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {achievements.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.06}>
            <GlassCard className="h-full p-5 sm:p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-purple-200">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="mt-3 font-display text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.detail}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}