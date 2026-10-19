import React from 'react';
import { CaseStudyExecutiveSummary as ICaseStudyExecutiveSummary } from '../types/portfolio';
import { useLanguage } from '../context/LanguageContext';
import {
  TrendingDown,
  Sparkles,
  Lightbulb,
  Layers,
  ArrowUp,
  Compass,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

interface CaseStudyExecutiveSummaryProps {
  data: ICaseStudyExecutiveSummary;
  sectionTitle?: string;
  allSections?: Array<{ id: string; title: string }>;
}

export const CaseStudyExecutiveSummary: React.FC<CaseStudyExecutiveSummaryProps> = ({
  data,
  allSections,
}) => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-10 pt-2">
      {/* 1. Impact Lead & Introduction */}
      <div className="space-y-4">
        {data.headlineLead && (
          <div className="p-5 sm:p-6 rounded-2xl bg-zinc-900 text-white border border-zinc-800 shadow-md relative overflow-hidden">
            <div
              className="absolute -right-16 -top-16 w-56 h-56 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ backgroundColor: 'var(--color-accent, #E05A47)' }}
            />
            <div className="relative z-10 space-y-2">
              <div className="flex items-center gap-2">
                <span
                  className="font-mono text-[11px] font-bold tracking-widest uppercase px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700/60"
                  style={{ color: 'var(--color-accent, #E05A47)' }}
                >
                  {t('Visão Central', 'Core Vision')}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight leading-snug">
                "{data.headlineLead}"
              </h3>
            </div>
          </div>
        )}

        <div className="space-y-3.5 text-sm sm:text-base text-zinc-700 leading-relaxed">
          {data.introParagraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </div>

      {/* 2. Highlight Metric Showcase: O impacto em números */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-900 text-white p-6 sm:p-8 border border-zinc-800/90 shadow-lg">
        {/* Decorative background grid and accent glow */}
        <div
          className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-25 pointer-events-none"
          style={{ backgroundColor: 'var(--color-accent, #E05A47)' }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

        <div className="relative z-10 space-y-6">
          {/* Top Label */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-zinc-800/80">
            <div className="flex items-center gap-2">
              <TrendingDown className="w-4 h-4" style={{ color: 'var(--color-accent, #E05A47)' }} />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-300">
                {data.impactMetric.title}
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-800/80 border border-zinc-700/80 text-xs font-semibold text-zinc-200">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: 'var(--color-accent, #E05A47)' }}
              />
              <span>{data.impactMetric.changeHighlight || '-40 p.p.'}</span>
            </div>
          </div>

          {/* Huge Stat Display */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-baseline gap-2 sm:gap-3">
              <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-mono tracking-tight text-white">
                {data.impactMetric.stat}
              </span>
            </div>

            <div className="text-base sm:text-lg font-bold text-zinc-100 tracking-tight">
              {data.impactMetric.statLabel}
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-2xl">
              {data.impactMetric.description}
            </p>
          </div>

          {/* Key Strategic Reflection */}
          <div className="pt-4 border-t border-zinc-800/80 flex items-start gap-3 bg-zinc-900/60 p-4 rounded-xl border border-zinc-800">
            <Sparkles
              className="w-5 h-5 shrink-0 mt-0.5"
              style={{ color: 'var(--color-accent, #E05A47)' }}
            />
            <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-medium italic">
              {data.impactMetric.insight}
            </p>
          </div>
        </div>
      </div>

      {/* 3. Three Learnings: Três aprendizados */}
      <div className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-zinc-200">
          <div className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5" style={{ color: 'var(--color-accent, #E05A47)' }} />
            <h3 className="text-base sm:text-lg font-bold text-zinc-900 tracking-tight">
              {data.learningsSection.title}
            </h3>
          </div>
        </div>

        <div className="space-y-4">
          {data.learningsSection.learnings.map((item, idx) => (
            <div
              key={idx}
              className="group p-5 sm:p-6 rounded-2xl bg-white border border-zinc-200/90 shadow-2xs hover:border-zinc-300 hover:shadow-xs transition-all space-y-3"
            >
              <div className="flex items-baseline gap-3">
                <span
                  className="font-mono text-xl sm:text-2xl font-bold shrink-0 tracking-tight"
                  style={{ color: 'var(--color-accent, #E05A47)' }}
                >
                  {item.number}.
                </span>
                <h4 className="text-sm sm:text-base font-bold text-zinc-900 tracking-tight leading-snug">
                  {item.title}
                </h4>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm text-zinc-700 leading-relaxed pl-0 sm:pl-9">
                {item.paragraphs.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}

                {item.takeaway && (
                  <div className="mt-3 p-3 rounded-lg bg-zinc-50 border-l-2 border-zinc-300 text-xs sm:text-sm text-zinc-900 font-medium italic">
                    {item.takeaway}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. What Endures: O que permanece & Final Conclusion */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-zinc-200">
          <Layers className="w-5 h-5" style={{ color: 'var(--color-accent, #E05A47)' }} />
          <h3 className="text-base sm:text-lg font-bold text-zinc-900 tracking-tight">
            {data.legacySection.title}
          </h3>
        </div>

        <div className="space-y-3 text-sm sm:text-base text-zinc-700 leading-relaxed">
          {data.legacySection.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Master Designer Takeaway Box */}
        <div className="mt-6 p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-zinc-50 via-white to-zinc-50/70 border border-zinc-200/90 shadow-sm relative overflow-hidden">
          <div
            className="absolute left-0 top-0 bottom-0 w-1.5"
            style={{ backgroundColor: 'var(--color-accent, #E05A47)' }}
          />

          <div className="pl-3 sm:pl-4 space-y-3">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4" style={{ color: 'var(--color-accent, #E05A47)' }} />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-900">
                {data.legacySection.coreTakeaway.label}:
              </span>
            </div>

            <p className="text-base sm:text-lg text-zinc-900 font-semibold leading-relaxed tracking-tight">
              "{data.legacySection.coreTakeaway.quote}"
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-zinc-500 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>{t('Visão de Design de Produto · Corrida Perfeita', 'Product Design Perspective · Corrida Perfeita')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Executive Deep-Dive Roadmap: Encouraging visitor to explore the entire case */}
      <div className="mt-12 p-6 sm:p-7 rounded-2xl bg-zinc-100/80 border border-zinc-200/80 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-zinc-500">
              {t('Resumo Executivo Concluído', 'Executive Summary Concluded')}
            </span>
            <h4 className="text-sm sm:text-base font-bold text-zinc-900 tracking-tight">
              {t('Deseja se aprofundar nas etapas do processo?', 'Want to explore the design process in detail?')}
            </h4>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-zinc-200 text-xs font-semibold text-zinc-800 hover:text-zinc-950 hover:border-zinc-300 shadow-2xs transition-colors self-start sm:self-auto cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>{t('Voltar ao início do case', 'Back to top of case')}</span>
          </button>
        </div>

        {allSections && allSections.length > 0 && (
          <div className="pt-3 border-t border-zinc-200/80">
            <p className="text-xs text-zinc-600 mb-3 font-medium">
              {t('Acesse diretamente os principais blocos do case:', 'Jump directly to key sections:')}
            </p>
            <div className="flex flex-wrap gap-2">
              {allSections
                .filter((s) => s.id !== 'aprendizados')
                .map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    onClick={(e) => scrollToSection(e, sec.id)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-zinc-200/90 text-xs font-medium text-zinc-700 hover:text-zinc-950 hover:border-zinc-300 transition-colors shadow-2xs"
                  >
                    <span>{sec.title}</span>
                    <ArrowRight className="w-3 h-3 text-zinc-400" />
                  </a>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
