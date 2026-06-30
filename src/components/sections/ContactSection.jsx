import { FaEnvelope } from 'react-icons/fa6';
import { contactChannels, socialLinks } from '../../data/portfolio';
import { GlassCard } from '../ui/GlassCard';
import { MagneticButton } from '../ui/MagneticButton';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function ContactSection() {
  return (
    <section id="contact" className="section-shell py-20 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Contact"
          title="Your actual contact details, presented in a clean glass card layout."
          description="Email, phone, GitHub, and LinkedIn are now wired from the resume details you shared."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <GlassCard className="p-6 sm:p-8">
            <form className="space-y-5">
              {['Your Name', 'Email Address', 'Project Brief'].map((label, index) => (
                <label key={label} className="group block">
                  <span className="mb-2 block text-sm text-slate-300">{label}</span>
                  {index === 2 ? (
                    <textarea
                      rows="5"
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-purple-400/40 focus:bg-white/8"
                      placeholder="Tell me about your project..."
                    />
                  ) : (
                    <input
                      type={index === 1 ? 'email' : 'text'}
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-purple-400/40 focus:bg-white/8"
                      placeholder={label}
                    />
                  )}
                </label>
              ))}

              <MagneticButton href="mailto:ishan1004@gmail.com" className="w-full justify-center">
                Email Ishan <FaEnvelope />
              </MagneticButton>
            </form>
          </GlassCard>
        </Reveal>

        <div className="grid gap-6">
          <Reveal delay={0.05}>
            <GlassCard className="p-6 sm:p-8">
              <h3 className="font-display text-2xl font-semibold text-white">Direct links</h3>
              <div className="mt-5 space-y-3">
                {contactChannels.map((channel) => {
                  const Icon = channel.icon;
                  return (
                    <a
                      key={channel.label}
                      href={channel.href}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:border-purple-400/25 hover:bg-purple-400/10"
                    >
                      <span className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-950/60 text-purple-200">
                          <Icon />
                        </span>
                        <span>
                          <span className="block font-medium text-white">{channel.label}</span>
                          <span className="text-slate-400">{channel.value}</span>
                        </span>
                      </span>
                    </a>
                  );
                })}
              </div>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.1}>
            <GlassCard className="p-6 sm:p-8">
              <h3 className="font-display text-2xl font-semibold text-white">Resume links</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:scale-105 hover:border-purple-400/30 hover:bg-purple-400/10"
                    >
                      <Icon /> {link.label}
                    </a>
                  );
                })}
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}