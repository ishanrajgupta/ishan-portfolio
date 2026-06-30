import { useEffect, useMemo, useRef, useState } from 'react';
import Lenis from 'lenis';
import { BackgroundEffects } from './components/layout/BackgroundEffects';
import { CustomCursor } from './components/layout/CustomCursor';
import { Navbar } from './components/layout/Navbar';
import { PageLoader } from './components/layout/PageLoader';
import { ScrollProgressBar } from './components/layout/ScrollProgressBar';
import { AboutSection } from './components/sections/AboutSection';
import { AchievementsSection } from './components/sections/AchievementsSection';
import { ContactSection } from './components/sections/ContactSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { Footer } from './components/sections/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { useActiveSection } from './hooks/useActiveSection';
import { useMousePosition } from './hooks/useMousePosition';
import { useScrollProgress } from './hooks/useScrollProgress';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lenisRef = useRef(null);
  const mouse = useMousePosition();
  const progress = useScrollProgress();
  const [activeSection] = useActiveSection(['hero', 'about', 'skills', 'projects', 'experience', 'achievements', 'contact']);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      smoothTouch: false,
      lerp: 0.09,
    });

    lenisRef.current = lenis;

    let rafId = 0;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 12);
    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);

  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (!target) {
      return;
    }

    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, { offset: -96 });
      return;
    }

    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleNavigate = useMemo(() => (id) => scrollToSection(id), []);

  return (
    <div className="relative isolate overflow-hidden font-sans">
      <PageLoader isVisible={isLoading} />
      <BackgroundEffects mouse={mouse} />
      <ScrollProgressBar progress={progress} />
      <CustomCursor mouse={mouse} />
      <Navbar activeSection={activeSection} isScrolled={isScrolled} onNavigate={handleNavigate} />

      <main>
        <HeroSection onNavigate={handleNavigate} />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
        <Footer onNavigate={handleNavigate} />
      </main>
    </div>
  );
}
