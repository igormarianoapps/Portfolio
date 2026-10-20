import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../data/site';
import { SEOHead } from '../components/SEOHead';
import {
  Linkedin,
  ArrowUpRight,
  ArrowLeft,
  Compass,
  Layers,
  TrendingUp,
  Users,
  Quote,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  const { language, t } = useLanguage();
  const about = siteConfig.aboutPage;
  const { whoIAm, experienceInPractice, methodology, competencies, representativeExperiences, motivation } =
    about.sections;

  // Icons for the 4 core competencies
  const competencyIcons = [
    <Compass key="compass" className="w-5 h-5" style={{ color: 'var(--color-accent)' }} />,
    <Layers key="layers" className="w-5 h-5" style={{ color: 'var(--color-accent)' }} />,
    <TrendingUp key="trending" className="w-5 h-5" style={{ color: 'var(--color-accent)' }} />,
    <Users key="users" className="w-5 h-5" style={{ color: 'var(--color-accent)' }} />,
  ];

  return (
    <div className="w-full bg-[#0D0F12] text-[#EDEDED] min-h-screen">
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

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="md:col-span-8">
              <span
                className="text-xs font-mono font-semibold tracking-wider uppercase mb-3 block"
                style={{ color: 'var(--color-accent)' }}
              >
                {about.eyebrow[language]}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5 text-balance">
                {about.title[language]}
              </h1>
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl text-balance">
                {about.subtitle[language]}
              </p>
            </div>

            {/* Photo preview in About header */}
            <div className="md:col-span-4 flex justify-center md:justify-end">
              <div className="relative group">
                <div
                  className="absolute -inset-1 rounded-2xl opacity-20 blur-lg transition duration-500 group-hover:opacity-40"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                />
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border border-white/[0.12] bg-zinc-900 shadow-2xl">
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
        </div>
      </section>

      {/* Main Content Body */}
      <div className="max-w-4xl mx-auto px-6 py-14 lg:py-18 space-y-16 lg:space-y-20">
        {/* Section 1: Quem sou e como penso */}
        <section className="space-y-5">
          <div className="pb-3 border-b border-white/[0.08]">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {whoIAm.title[language]}
            </h2>
          </div>
          <div className="space-y-4 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            {whoIAm.paragraphs[language].map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Section 2: Minha experiência na prática */}
        <section className="space-y-5">
          <div className="pb-3 border-b border-white/[0.08]">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {experienceInPractice.title[language]}
            </h2>
          </div>
          <div className="space-y-4 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            {experienceInPractice.paragraphs[language].map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Section 3: Como trabalho e tomo decisões */}
        <section id="metodologia" className="space-y-6 scroll-mt-20">
          <div className="pb-3 border-b border-white/[0.08]">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {methodology.title[language]}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {methodology.steps.map((step) => (
              <div
                key={step.number}
                className="p-6 rounded-2xl bg-[#13161C] border border-white/[0.08] hover:border-white/[0.18] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-xs font-mono font-bold px-2 py-0.5 rounded border border-white/[0.08] bg-white/[0.03]"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-white">
                    {step.title[language]}
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {step.desc[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Competências e diferenciais */}
        <section className="space-y-6">
          <div className="pb-3 border-b border-white/[0.08]">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {competencies.title[language]}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {competencies.items.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#13161C] border border-white/[0.08] hover:border-white/[0.18] transition-all flex flex-col"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-4 shrink-0">
                  {competencyIcons[i % competencyIcons.length]}
                </div>
                <h3 className="text-base font-bold text-white mb-2 tracking-tight">
                  {item.title[language]}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {item.desc[language]}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Experiências que representam meu trabalho */}
        <section className="space-y-6">
          <div className="pb-3 border-b border-white/[0.08] flex items-baseline justify-between">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {representativeExperiences.title[language]}
            </h2>
          </div>

          <div className="space-y-4">
            {representativeExperiences.items.map((item, i) => {
              const Content = (
                <div className="p-6 sm:p-7 rounded-2xl bg-[#13161C] border border-white/[0.08] hover:border-white/[0.22] hover:bg-[#151922] transition-all group">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span
                      className="text-xs font-mono font-medium tracking-wide uppercase px-2.5 py-0.5 rounded-full border border-white/[0.1] bg-white/[0.03]"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      {item.tag[language]}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 tracking-tight group-hover:text-white flex items-center justify-between gap-3">
                    <span>{item.title[language]}</span>
                    {item.link && (
                      <ArrowRight className="w-5 h-5 text-zinc-500 group-hover:text-white transition-transform group-hover:translate-x-1 shrink-0" />
                    )}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-4">
                    {item.desc[language]}
                  </p>
                  {item.link && item.linkText && (
                    <span
                      className="inline-flex items-center gap-1.5 text-xs font-semibold hover:underline"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      <span>{item.linkText[language]}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  )}
                </div>
              );

              return item.link ? (
                <Link key={i} to={item.link} className="block">
                  {Content}
                </Link>
              ) : (
                <div key={i}>{Content}</div>
              );
            })}
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-white/[0.08] pt-4" />

        {/* Section 6: O que me motiva */}
        <section className="space-y-6">
          <div className="pb-3 border-b border-white/[0.08]">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {motivation.title[language]}
            </h2>
          </div>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            {motivation.intro[language]}
          </p>

          {/* Impact Statement / Manifesto Card */}
          <div className="relative overflow-hidden p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#161B24] via-[#12151B] to-[#0E1015] border border-white/[0.12] shadow-2xl">
            <div
              className="absolute top-0 left-0 bottom-0 w-1.5"
              style={{ backgroundColor: 'var(--color-accent)' }}
            />
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center shrink-0 mt-1">
                <Quote className="w-5 h-5" style={{ color: 'var(--color-accent)' }} />
              </div>
              <div className="space-y-2">
                <span
                  className="text-xs font-mono font-bold tracking-wider uppercase block"
                  style={{ color: 'var(--color-accent)' }}
                >
                  {t('Minha visão de design', 'My design philosophy')}
                </span>
                <p className="text-lg sm:text-xl font-medium text-white leading-relaxed">
                  {motivation.highlight[language]}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Next Step CTA */}
        <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#14171E] to-[#171B22] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 mb-2">
              <Sparkles className="w-4 h-4" style={{ color: 'var(--color-accent)' }} />
              <span className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                {t('Próximos passos', 'Next steps')}
              </span>
            </div>
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
