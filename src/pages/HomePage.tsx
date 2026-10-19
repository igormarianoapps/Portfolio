import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../data/site';
import { getProjectCardList } from '../data/projects';
import { DifferentialPillars } from '../components/DifferentialPillars';
import { ProjectCard } from '../components/ProjectCard';
import { SkillsSection } from '../components/SkillsSection';
import { AboutHomeBlock } from '../components/AboutHomeBlock';
import { SEOHead } from '../components/SEOHead';
import { ArrowDown } from 'lucide-react';

export const HomePage: React.FC = () => {
  const { language, t } = useLanguage();
  const location = useLocation();
  const projects = getProjectCardList(language);

  // Smooth scroll to projects section if URL contains ?section=projetos or #projetos
  useEffect(() => {
    if (location.search.includes('section=projetos') || location.hash === '#projetos') {
      const el = document.getElementById('projetos');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('projetos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-[#0D0F12] text-[#EDEDED]">
      <SEOHead />

      {/* Hero Section — Full-Bleed Background Image taking full viewport height with Editorial Scrim & Scroll Indicator */}
      <section className="relative w-full border-b border-white/[0.08] overflow-hidden min-h-[calc(100dvh-4rem)] sm:min-h-[calc(100dvh-4.5rem)] flex flex-col justify-between bg-[#0D0F12]">
        {/* Full-Bleed Background Photograph */}
        <div className="absolute inset-0 z-0">
          <img
            src={siteConfig.portraitImage}
            alt={`${siteConfig.name} — Product Designer`}
            className="w-full h-full object-cover select-none object-[76%_20%] sm:object-[76%_22%] lg:object-[76%_24%]"
            loading="eager"
            referrerPolicy="no-referrer"
          />

          {/* Editorial Gradient Scrims:
              1. Desktop/Tablet Horizontal Scrim: solid graphite over text on the left, feathering smoothly to reveal Igor's portrait on the right.
              2. Mobile Vertical Scrim: prioritizes facial visibility at the top while securing contrast for typography at the bottom.
              3. Ambient blends with adjacent sections.
          */}
          {/* Desktop/Tablet Horizontal Scrim */}
          <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-[#0D0F12] via-[#0D0F12]/90 via-48% lg:via-52% to-transparent" />

          {/* Mobile Vertical Scrim */}
          <div className="absolute inset-0 md:hidden bg-gradient-to-t from-[#0D0F12] via-[#0D0F12]/92 via-55% to-transparent" />

          {/* Ambient Top & Bottom Seamless Blends */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0D0F12] via-[#0D0F12]/80 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#0D0F12]/70 to-transparent" />
        </div>

        {/* Content Overlaid onto Photograph (Centered in first fold) */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12 sm:pt-16 lg:pt-20 pb-8 w-full my-auto">
          <div className="max-w-2xl lg:max-w-3xl flex flex-col justify-center">
            {/* Compact unboxed tags */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-4 sm:mb-5">
              <span>Product Designer</span>
              <span aria-hidden="true" style={{ color: 'var(--color-accent)' }}>·</span>
              <span>UX/UI</span>
              <span aria-hidden="true" style={{ color: 'var(--color-accent)' }}>·</span>
              <span>Design Systems</span>
            </div>

            {/* Main Name Heading (Primary Typographic Element) */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-4 sm:mb-5 text-balance">
              {siteConfig.name}
            </h1>

            {/* Concise Positioning Concept */}
            <p className="text-base sm:text-xl text-zinc-200 font-medium tracking-tight mb-8 sm:mb-9 max-w-xl text-balance leading-relaxed">
              {siteConfig.headline[language]}
            </p>

            {/* Highlighted CTA Button */}
            <div>
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white transition-all shadow-lg focus-ring-accent cursor-pointer group"
                style={{ backgroundColor: 'var(--color-accent)' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-accent-hover)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-accent)')}
              >
                <span>{siteConfig.heroCtas.explore[language]}</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Availability Status & Scroll Indicator (valenafit style) */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-8 sm:pb-12 w-full flex items-end justify-between gap-6">
          <div className="hidden sm:flex items-center gap-2.5 text-[11px] font-mono text-zinc-400">
          </div>

          {/* Valenafit-style Scroll Indicator */}
          <a
            href="#projetos"
            onClick={scrollToProjects}
            className="flex items-center gap-4 font-mono text-[9px] uppercase tracking-[0.35em] text-zinc-400 font-light pb-1 hover:text-white transition-colors group cursor-pointer ml-auto"
            aria-label={t('Rolar para os projetos', 'Scroll to projects')}
          >
            <span className="group-hover:text-white transition-colors">SCROLL</span>
            <div className="w-[1px] h-10 bg-white/20 relative overflow-hidden group-hover:bg-white/40 transition-colors">
              <div
                className="w-full h-full scroll-pulse-line"
                style={{ backgroundColor: 'var(--color-accent)' }}
              />
            </div>
          </a>
        </div>
      </section>

      {/* Section 2: Compact Editorial Differential Pillars */}
      <DifferentialPillars />

      {/* Section 3: Selected Projects (Compact, balanced 2-column grid) */}
      <section id="projetos" className="w-full py-16 lg:py-20 scroll-mt-18">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <p
                className="text-xs font-mono font-semibold tracking-wider uppercase mb-1.5"
                style={{ color: 'var(--color-accent)' }}
              >
                {t('Portfólio', 'Portfolio')}
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {t('Projetos selecionados', 'Selected projects')}
              </h2>
            </div>

            <p className="text-xs text-zinc-400">
              {t(
                'Problemas reais, decisões fundamentadas e resultados documentados.',
                'Real-world problems, reasoned decisions, and documented outcomes.'
              )}
            </p>
          </div>

          {/* 2-column Compact Balanced Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Competencies Breakdown */}
      <SkillsSection />

      {/* Section 5: Compact Editorial About Block with Photo & Positioning Quote */}
      <AboutHomeBlock />
    </div>
  );
};
