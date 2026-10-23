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
import { ArrowDown, ArrowUpRight } from 'lucide-react';

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
          <picture>
            <source type="image/webp" srcSet="/optimized/hero-960.webp 960w, /optimized/hero-1600.webp 1600w, /optimized/hero-2200.webp 2200w" sizes="100vw" />
          <img
            src={siteConfig.portraitImage}
            alt={`${siteConfig.name} — Product Designer`}
            className="w-full h-full object-cover select-none object-[76%_20%] sm:object-[76%_22%] lg:object-[76%_24%]"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            referrerPolicy="no-referrer"
          />
          </picture>

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

          {/* Behance Archive CTA */}
          <div className="mt-8 sm:mt-10 lg:mt-12 relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#12151B] via-[#141822] to-[#101217] border border-white/[0.08] hover:border-white/[0.18] transition-all p-6 sm:p-8 lg:p-9 group">
            {/* Subtle radial ambient glow in the background */}
            <div
              className="absolute -right-24 -bottom-24 w-80 h-80 rounded-full pointer-events-none opacity-10 group-hover:opacity-20 blur-3xl transition-opacity"
              style={{ backgroundColor: 'var(--color-accent)' }}
              aria-hidden="true"
            />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-10">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-2.5">
                  <span
                    className="text-xs font-mono font-bold tracking-wider uppercase"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    {siteConfig.behanceCta.eyebrow[language]}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-zinc-600" />
                  <span className="text-xs font-mono text-zinc-400">behance.net/igormariano</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                  {siteConfig.behanceCta.title[language]}
                </h3>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {siteConfig.behanceCta.description[language]}
                </p>
              </div>

              <div className="shrink-0 flex items-center">
                <a
                  href={siteConfig.behanceCta.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-zinc-800/90 hover:bg-zinc-700/90 border border-white/[0.1] hover:border-white/[0.25] transition-all shadow-md focus-ring-accent cursor-pointer group/btn"
                >
                  {/* Behance Logo SVG */}
                  <svg
                    className="w-4 h-4 fill-current text-white group-hover/btn:scale-110 transition-transform"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M7.79 11.23c.9 0 1.62-.2 2.15-.6.54-.4.81-1 .81-1.8 0-.74-.25-1.3-.76-1.68-.5-.38-1.2-.57-2.09-.57H3.45v4.65h4.34zm.21 4.54c1.07 0 1.9-.24 2.5-.72.6-.48.9-1.18.9-2.1 0-.9-.3-1.6-.92-2.07-.61-.48-1.5-.72-2.65-.72H3.45v5.61H8zm5.7-4.47h6.05c-.06-.88-.34-1.57-.83-2.07-.5-.5-1.18-.75-2.06-.75-.85 0-1.54.26-2.08.77-.53.52-.89 1.2-1.08 2.05zm6.18 1.48H13.7c.05 1.05.42 1.86 1.1 2.43.68.57 1.5.85 2.45.85.73 0 1.37-.16 1.91-.48.55-.32.93-.72 1.15-1.2h2.24c-.38.98-1.03 1.76-1.95 2.34-.92.58-2.03.87-3.35.87-1.74 0-3.12-.53-4.14-1.6-1.02-1.06-1.53-2.5-1.53-4.32 0-1.84.5-3.3 1.5-4.36 1.01-1.07 2.36-1.6 4.05-1.6 1.62 0 2.92.52 3.9 1.56.98 1.04 1.47 2.44 1.47 4.2v1.71h-.01zM14.28 6.44h4.75V5.12h-4.75v1.32zM0 3.25h8.18c1.65 0 2.96.38 3.93 1.14.97.76 1.46 1.82 1.46 3.18 0 .86-.23 1.6-.7 2.22-.46.62-1.12 1.09-1.97 1.41.98.3 1.76.81 2.34 1.54.58.73.87 1.63.87 2.7 0 1.52-.52 2.73-1.56 3.63-1.04.9-2.48 1.35-4.32 1.35H0V3.25z" />
                  </svg>
                  <span>{siteConfig.behanceCta.buttonText[language]}</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" />
                </a>
              </div>
            </div>
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
