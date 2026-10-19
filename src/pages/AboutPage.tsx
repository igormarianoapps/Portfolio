import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../data/site';
import { SEOHead } from '../components/SEOHead';
import { Linkedin, ArrowUpRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  const { language, t } = useLanguage();
  const about = siteConfig.aboutPage;

  return (
    <div className="w-full bg-[#0D0F12] text-[#EDEDED]">
      <SEOHead
        title={about.title[language]}
        description={about.subtitle[language]}
      />

      {/* Editorial Header with Portrait */}
      <section className="pt-12 pb-14 lg:pt-20 lg:pb-18 border-b border-white/[0.08] bg-gradient-to-b from-[#111419] to-[#0D0F12]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t('Voltar para o início', 'Back to home')}</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <span
                className="text-xs font-mono font-semibold tracking-wider uppercase mb-2 block"
                style={{ color: 'var(--color-accent)' }}
              >
                {t('Trajetória & Filosofia', 'Background & Philosophy')}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 text-balance">
                {about.title[language]}
              </h1>
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl">
                {about.subtitle[language]}
              </p>
            </div>

            {/* Photo preview in About header */}
            <div className="md:col-span-4 flex justify-center md:justify-end">
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border border-white/[0.1] bg-zinc-900 shadow-xl">
                <img
                  src={siteConfig.portraitImage}
                  alt={siteConfig.name}
                  className="w-full h-full object-cover object-[76%_25%]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="max-w-4xl mx-auto px-6 py-14 lg:py-18 space-y-16">
        {/* Block 1: Positioning */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight pb-2 border-b border-white/[0.08]">
            {about.sections.positioning.title[language]}
          </h2>
          <div className="space-y-3.5 text-sm sm:text-base text-zinc-300 leading-relaxed">
            {about.sections.positioning.content[language].map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Block 2: Professional Trajectory */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight pb-2 border-b border-white/[0.08]">
            {about.sections.trajectory.title[language]}
          </h2>
          <div className="space-y-3.5 text-sm sm:text-base text-zinc-300 leading-relaxed">
            {about.sections.trajectory.content[language].map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Block 3: Methodology */}
        <section id="metodologia" className="space-y-6 scroll-mt-20">
          <div className="pb-2 border-b border-white/[0.08]">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {about.sections.methodology.title[language]}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {about.sections.methodology.steps.map((step) => (
              <div
                key={step.number}
                className="p-5 rounded-xl bg-[#13161C] border border-white/[0.07] flex flex-col justify-between"
              >
                <div>
                  <span
                    className="text-xs font-mono font-semibold block mb-2"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    {step.number}
                  </span>
                  <h3 className="text-base font-bold text-white mb-1.5 tracking-tight">
                    {step.title[language]}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {step.desc[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Block 4: Differentiators */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight pb-2 border-b border-white/[0.08]">
            {about.sections.differentiators.title[language]}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {about.sections.differentiators.items.map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-[#13161C] border border-white/[0.07]"
              >
                <h3 className="text-sm font-bold text-white mb-1.5">
                  {item.title[language]}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {item.desc[language]}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Block 5: Documented Initiatives */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight pb-2 border-b border-white/[0.08]">
            {about.sections.initiatives.title[language]}
          </h2>
          <div className="space-y-3.5">
            {about.sections.initiatives.items.map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-[#13161C] border border-white/[0.06] flex flex-col sm:flex-row sm:items-baseline justify-between gap-3"
              >
                <div>
                  <span
                    className="text-xs font-mono font-semibold uppercase tracking-wider block mb-1"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    {item.year}
                  </span>
                  <h3 className="text-sm font-bold text-white mb-1">
                    {item.title[language]}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-2xl">
                    {item.desc[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Block 6: Next Step CTA */}
        <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#14171E] to-[#171B22] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-white mb-1">
              {t('Pronto para conversar sobre um projeto?', 'Ready to discuss a product challenge?')}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400">
              {t('Conecte-se comigo no LinkedIn para trocarmos ideias.', 'Connect with me on LinkedIn to explore opportunities.')}
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={siteConfig.contacts.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-white font-semibold text-xs transition-colors shadow-sm"
              style={{ backgroundColor: 'var(--color-accent)' }}
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <Link
              to="/#projetos"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-zinc-800 text-zinc-200 hover:bg-zinc-700 text-xs font-semibold transition-colors border border-white/[0.08]"
            >
              <span>{t('Ver Projetos', 'View Projects')}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
