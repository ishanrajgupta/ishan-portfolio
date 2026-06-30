import { motion } from 'framer-motion';
import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { projects } from '../../data/portfolio';
import { GlassCard } from '../ui/GlassCard';
import { MagneticButton } from '../ui/MagneticButton';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell py-20 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Projects"
          title="Projects pulled from your resume, plus one flexible placeholder."
          description="The featured work highlights your expense manager and chatbot experience while keeping a spot for future additions."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.name} delay={index * 0.06}>
            <motion.div whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 260, damping: 24 }}>
              <GlassCard className="group h-full overflow-hidden p-5 sm:p-6">
                <div
                  className="relative h-56 overflow-hidden rounded-[1.35rem] border border-white/10"
                  style={{ background: project.image }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.28),transparent_30%),linear-gradient(180deg,transparent,rgba(2,6,23,0.7))]" />
                  <div className="absolute inset-x-5 bottom-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/15 bg-slate-950/50 px-3 py-1 text-xs text-white">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5">
                  <h3 className="font-display text-2xl font-semibold text-white">{project.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">{project.description}</p>

                  <ul className="mt-5 space-y-2 text-sm text-slate-300">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-purple-300" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <MagneticButton href="https://github.com" variant="secondary">
                      <FaGithub /> GitHub
                    </MagneticButton>
                    <MagneticButton href="https://example.com">
                      Live Demo <FaArrowUpRightFromSquare />
                    </MagneticButton>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}