import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getCaseStudyBySlug, getAdjacentProjects } from '../data/projects';
import { ReadingProgressBar } from '../components/ReadingProgressBar';
import { SEOHead } from '../components/SEOHead';
import { CaseStudyVisual } from '../components/CaseStudyVisual';
import { CaseStudyProcessFlow } from '../components/CaseStudyProcessFlow';
import { CaseStudyExecutiveSummary } from '../components/CaseStudyExecutiveSummary';
import { ImageLightboxModal } from '../components/ImageLightboxModal';
import { siteConfig } from '../data/site';
import {
  ArrowLeft,
  ArrowUpRight,
  AlertCircle,
  List,
  Maximize2,
} from 'lucide-react';

function renderFormattedParagraph(text: string) {
  if (!text.includes('**')) {
    return text;
  }
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={index} className="font-semibold text-zinc-900">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>('');
  const [coverLightboxOpen, setCoverLightboxOpen] = useState(false);

  const project = slug ? getCaseStudyBySlug(slug, language) : undefined;
  const { next: nextProject, prev: prevProject } = slug
    ? getAdjacentProjects(slug, language)
    : {};

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Track active section for Table of Contents
  useEffect(() => {
    if (!project) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    project.sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center bg-[#0D0F12]">
        <h1 className="text-3xl font-bold text-white mb-4">
          {t('Projeto não encontrado', 'Project not found')}
        </h1>
        <p className="text-zinc-400 mb-8 max-w-md text-sm">
          {t(
            'O estudo de caso solicitado não existe ou foi movido.',
            'The requested case study could not be found or has been relocated.'
          )}
        </p>
        <Link
          to="/#projetos"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t('Voltar para projetos', 'Back to all projects')}</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#F8F9FA] text-[#121417] case-study-canvas transition-colors">
      <SEOHead
        title={`${project.title} — Estudo de Caso`}
        description={project.summary}
        ogImage={project.coverImage}
      />
      <ReadingProgressBar />

      {/* Hero Header on deep graphite surface */}
      <header className="w-full bg-[#0D0F12] text-white pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-white/[0.08]">
        <div className="max-w-5xl mx-auto px-6">
          {/* Back Link */}
          <div className="mb-6">
            <Link
              to="/#projetos"
              className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t('Voltar para todos os projetos', 'Back to all projects')}</span>
            </Link>
          </div>

          {/* Context & Tags */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400 font-medium mb-3">
            <span
              className="font-semibold font-mono"
              style={{ color: 'var(--color-accent)' }}
            >
              {project.clientOrContext}
            </span>
            <span aria-hidden="true">·</span>
            {project.tags.map((tag, idx) => (
              <React.Fragment key={tag}>
                <span>{tag}</span>
                {idx < project.tags.length - 1 && <span aria-hidden="true">·</span>}
              </React.Fragment>
            ))}
          </div>

          {/* Title & Tagline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 text-balance">
            {project.title}
          </h1>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal max-w-3xl mb-8">
            {project.tagline}
          </p>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 pt-6 border-t border-white/[0.08] text-xs">
            <div>
              <span className="text-zinc-400 block mb-1">{t('Meu Papel', 'My Role')}</span>
              <span className="text-zinc-200 font-medium">{project.metadata.role}</span>
            </div>
            <div>
              <span className="text-zinc-400 block mb-1">{t('Prazo & Ciclo', 'Timeline')}</span>
              <span className="text-zinc-200 font-medium">{project.metadata.timeline}</span>
            </div>
            <div>
              <span className="text-zinc-400 block mb-1">{t('Equipe', 'Team')}</span>
              <span className="text-zinc-200 font-medium">{project.metadata.team}</span>
            </div>
            <div>
              <span className="text-zinc-400 block mb-1">{t('Plataforma', 'Platform')}</span>
              <span className="text-zinc-200 font-medium">{project.metadata.platform}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Cover Showcase Visual */}
      <div className="max-w-5xl mx-auto px-6 -mt-8 mb-10">
        <div
          className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-b from-[#141720] via-[#0E1015] to-[#0A0C0F] p-4 sm:p-8 flex items-center justify-center relative group cursor-zoom-in"
          onClick={() => setCoverLightboxOpen(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') setCoverLightboxOpen(true);
          }}
          aria-label={t('Ampliar imagem de capa', 'Expand cover image')}
        >
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full max-h-[520px] object-contain mx-auto rounded-lg shadow-xl drop-shadow-2xl select-none group-hover:scale-[1.01] transition-transform duration-200"
            referrerPolicy="no-referrer"
          />

          <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            <Maximize2 className="w-3.5 h-3.5" />
            <span>{t('Ampliar', 'Expand')}</span>
          </div>
        </div>
      </div>

      {/* Editorial Content Container (Light Canvas for High Readability) */}
      <main className="max-w-5xl mx-auto px-6 py-6 pb-20">
        {/* Transparent Placeholder Notice Banner */}
        {project.isPlaceholder && (
          <div className="mb-10 p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-3 text-xs text-amber-900">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-semibold block">
                {t('Aviso de Transparência de Dados', 'Data Transparency Notice')}
              </span>
              <p className="leading-relaxed">
                {project.placeholderNotice ||
                  t(
                    'As métricas e cenários neste case servem como demonstração estrutural da metodologia de Product Design e devem ser atualizadas pelo proprietário antes da publicação final.',
                    'Metrics and sample scenarios in this case study serve as structural demonstrations of Product Design methodology and should be updated with verified outcomes prior to launch.'
                  )}
              </p>
            </div>
          </div>
        )}

        {/* Highlight Metrics Strip (Terracotta styled values) */}
        {project.metrics && project.metrics.length > 0 && (
          <div
            className={`grid grid-cols-1 ${
              project.metrics.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'
            } gap-5 mb-14 p-5 rounded-xl bg-white border border-zinc-200/80 shadow-xs`}
          >
            {project.metrics.map((metric, i) => (
              <div key={i} className="flex flex-col justify-between">
                <div>
                  <span
                    className="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight tabular-nums block mb-1"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    {metric.value}
                  </span>
                  <span className="text-xs font-bold text-zinc-900 uppercase tracking-wider block mb-1">
                    {metric.label}
                  </span>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {metric.context}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Layout with Sticky Table of Contents and Main Editorial Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Table of Contents (Sticky on Desktop) */}
          <aside className="lg:col-span-4 sticky top-24 hidden lg:block p-5 rounded-xl bg-white border border-zinc-200/80 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-900 mb-3 pb-2 border-b border-zinc-100">
              <List className="w-3.5 h-3.5 text-zinc-500" />
              <span>{t('Neste estudo de caso', 'In this case study')}</span>
            </div>
            <nav className="space-y-1.5 text-xs font-medium">
              {project.sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`block py-1 transition-colors leading-snug pl-2 border-l-2 ${
                    activeSection === section.id
                      ? 'font-bold text-zinc-950'
                      : 'text-zinc-500 hover:text-zinc-900 border-transparent'
                  }`}
                  style={{
                    borderColor: activeSection === section.id ? 'var(--color-accent)' : 'transparent',
                  }}
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Deep Editorial Body */}
          <div className="lg:col-span-8 space-y-12">
            {project.sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-24 space-y-4"
              >
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
                  {section.title}
                </h2>

                {section.executiveSummary ? (
                  <CaseStudyExecutiveSummary
                    data={section.executiveSummary}
                    sectionTitle={section.title}
                    allSections={project.sections.map((s) => ({ id: s.id, title: s.title }))}
                  />
                ) : (
                  <>
                    {section.lead && (
                      <p className="text-sm sm:text-base font-medium text-zinc-800 leading-relaxed">
                        {section.lead}
                      </p>
                    )}

                    <div className="space-y-3.5 text-sm sm:text-base text-zinc-700 leading-relaxed">
                      {section.paragraphs.map((p, pIdx) => {
                        const matchingInlineImages = [
                          ...(section.inlineImage && section.inlineImage.afterParagraph === pIdx ? [section.inlineImage.image] : []),
                          ...(section.inlineImages?.filter((item) => item.afterParagraph === pIdx).map((item) => item.image) || []),
                        ];

                        return (
                          <React.Fragment key={pIdx}>
                            <p>{renderFormattedParagraph(p)}</p>
                            {matchingInlineImages.map((imgSpec, imgIdx) => (
                              <div key={imgIdx} className="my-6">
                                <CaseStudyVisual imageSpec={imgSpec} />
                              </div>
                            ))}
                          </React.Fragment>
                        );
                      })}
                    </div>

                    {/* Bullet Points */}
                    {section.bulletPoints && section.bulletPoints.length > 0 && (
                      <ul className="space-y-2 my-3 pt-1">
                        {section.bulletPoints.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-800 leading-relaxed">
                            <span
                              className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                              style={{ backgroundColor: 'var(--color-accent)' }}
                              aria-hidden="true"
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Pull Quote */}
                    {section.quote && (
                      <blockquote className="my-6 p-5 rounded-xl bg-zinc-100 border border-zinc-200">
                        <p className="text-sm sm:text-base font-medium text-zinc-900 italic leading-relaxed mb-2">
                          "{section.quote.text}"
                        </p>
                        <footer className="text-xs text-zinc-600">
                          <span className="font-semibold text-zinc-900">{section.quote.author}</span>
                          {' — '}
                          <span>{section.quote.role}</span>
                        </footer>
                      </blockquote>
                    )}

                    {/* Decision Log Cards */}
                    {section.decisionLog && section.decisionLog.length > 0 && (
                      <div className="space-y-3 my-5">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900">
                          {t('Registro de Decisões e Justificativas', 'Key Design Decisions & Trade-Offs')}
                        </h3>
                        <div className="space-y-2.5">
                          {section.decisionLog.map((log, lIdx) => (
                            <div
                              key={lIdx}
                              className="p-4 rounded-xl bg-white border border-zinc-200 shadow-2xs space-y-1.5"
                            >
                              <div className="text-xs">
                                <span className="font-semibold text-zinc-900">{t('Desafio', 'Challenge')}:</span>{' '}
                                <span className="text-zinc-600">{log.challenge}</span>
                              </div>
                              <div className="text-xs">
                                <span className="font-semibold text-zinc-900">{t('Decisão', 'Decision')}:</span>{' '}
                                <span className="text-zinc-800 font-medium">{log.decision}</span>
                              </div>
                              <div className="text-xs text-zinc-600 pt-1 border-t border-zinc-100">
                                <span className="font-semibold text-zinc-900">{t('Justificativa', 'Rationale')}:</span>{' '}
                                <span>{log.rationale}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Process Flow Diagram */}
                    {section.processFlow && (
                      <CaseStudyProcessFlow flow={section.processFlow} />
                    )}

                    {/* Visual Artifact Presentation */}
                    {section.image && (
                      <CaseStudyVisual imageSpec={section.image} />
                    )}
                  </>
                )}
              </section>
            ))}
          </div>
        </div>

        {/* Case Study Bottom Navigator */}
        <div className="mt-16 pt-8 border-t border-zinc-200 flex flex-col sm:flex-row items-stretch justify-between gap-5">
          {prevProject ? (
            <Link
              to={`/projetos/${prevProject.slug}`}
              className="flex-1 p-5 rounded-xl bg-white border border-zinc-200 hover:border-zinc-400 transition-colors group flex flex-col justify-between"
            >
              <span className="text-xs text-zinc-500 block mb-1">
                ← {t('Projeto anterior', 'Previous project')}
              </span>
              <span className="text-base font-bold text-zinc-900 group-hover:text-zinc-700">
                {prevProject.title}
              </span>
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          {nextProject ? (
            <Link
              to={`/projetos/${nextProject.slug}`}
              className="flex-1 p-5 rounded-xl bg-white border border-zinc-200 hover:border-zinc-400 transition-colors group flex flex-col justify-between text-right"
            >
              <span className="text-xs text-zinc-500 block mb-1">
                {t('Próximo projeto', 'Next project')} →
              </span>
              <span className="text-base font-bold text-zinc-900 group-hover:text-zinc-700">
                {nextProject.title}
              </span>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </main>

      <ImageLightboxModal
        isOpen={coverLightboxOpen}
        onClose={() => setCoverLightboxOpen(false)}
        imageUrl={project.coverImage}
        imageAlt={project.title}
        title={project.title}
        caption={project.tagline}
      />
    </div>
  );
};
