import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getCaseStudyBySlug, getAdjacentProjects } from '../data/projects';
import { ReadingProgressBar } from '../components/ReadingProgressBar';
import { SEOHead } from '../components/SEOHead';
import { CaseStudyVisual } from '../components/CaseStudyVisual';
import { CaseStudyProcessFlow } from '../components/CaseStudyProcessFlow';
import { CaseStudyExecutiveSummary } from '../components/CaseStudyExecutiveSummary';
import { CaseStudyQuickSummary } from '../components/CaseStudyQuickSummary';
import { ImageLightboxModal } from '../components/ImageLightboxModal';
import { siteConfig } from '../data/site';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  AlertCircle,
  List,
  Maximize2,
  Users,
  BarChart2,
  Search,
  Monitor,
  Smartphone,
  RefreshCw,
  Layers,
  BookOpen,
  Sparkles,
  Box,
} from 'lucide-react';

// Links externos dos protótipos; o controle de acesso é feito pelo Figma.
const prototypeUrls: Record<string, string> = {
  candidattus: 'https://www.figma.com/proto/YbNiUS5OSX5hnobsOVTxwI/Candidattus?node-id=0-6805&p=f&viewport=-5084%2C12080%2C0.47&t=pSdVJeLhrYdp0l4l-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1',
  'corrida-perfeita': 'https://www.figma.com/proto/GO0OxkHXBMJsV7wMm6D3yY/Discovery---Criar-Setup--Copy-?node-id=105-351&p=f&viewport=513%2C61%2C0.05&t=MIc1jX0tHqqZz6QP-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=105%3A351&page-id=105%3A146',
  'taskcheck-design-system': 'https://www.figma.com/proto/ywdKoynIEJGIaT4SHcdbTC/Design-System---TaskCheck?node-id=31-1591&p=f&t=1Cm1YLJltC5mSv2V-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=31%3A1591&page-id=6%3A3',
};

function renderCardIcon(icon?: string, fallbackIndex = 0) {
  switch (icon) {
    case 'users':
    case 'messages':
    case 'collab':
    case 'collaboration':
      return <Users className="w-4 h-4" style={{ color: 'var(--color-accent)' }} />;
    case 'chart':
    case 'survey':
      return <BarChart2 className="w-4 h-4" style={{ color: 'var(--color-accent)' }} />;
    case 'search':
    case 'benchmark':
      return <Search className="w-4 h-4" style={{ color: 'var(--color-accent)' }} />;
    case 'monitor':
    case 'desktop':
      return <Monitor className="w-4 h-4" style={{ color: 'var(--color-accent)' }} />;
    case 'smartphone':
    case 'mobile':
      return <Smartphone className="w-4 h-4" style={{ color: 'var(--color-accent)' }} />;
    case 'refresh':
    case 'reuse':
      return <RefreshCw className="w-4 h-4" style={{ color: 'var(--color-accent)' }} />;
    case 'layers':
    case 'consistency':
      return <Layers className="w-4 h-4" style={{ color: 'var(--color-accent)' }} />;
    case 'book':
    case 'documentation':
    case 'recipes':
    case 'patterns':
    case 'handoff':
      return <BookOpen className="w-4 h-4" style={{ color: 'var(--color-accent)' }} />;
    case 'sparkles':
    case 'ai':
      return <Sparkles className="w-4 h-4" style={{ color: 'var(--color-accent)' }} />;
    case 'box':
    case 'components':
      return <Box className="w-4 h-4" style={{ color: 'var(--color-accent)' }} />;
    default:
      if (fallbackIndex === 0) return <Users className="w-4 h-4" style={{ color: 'var(--color-accent)' }} />;
      if (fallbackIndex === 1) return <BarChart2 className="w-4 h-4" style={{ color: 'var(--color-accent)' }} />;
      return <Search className="w-4 h-4" style={{ color: 'var(--color-accent)' }} />;
  }
}

function renderFormattedParagraph(text: string) {
  if (text.startsWith('### ')) {
    return (
      <span className="block text-base sm:text-lg font-bold text-zinc-900 tracking-tight pt-3 pb-1">
        {text.slice(4)}
      </span>
    );
  }
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-6 border-t border-white/[0.08] text-xs">
            <div>
              <span className="text-zinc-400 block mb-1">{t('Meu Papel', 'My Role')}</span>
              <span className="text-zinc-200 font-medium">{project.metadata.role}</span>
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

      {/* Image-first editorial hero, without simulated browser or card */}
      <div className="relative max-w-5xl mx-auto px-6 -mt-8 mb-10">
        <button type="button" className="group block w-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black" onClick={() => setCoverLightboxOpen(true)} aria-label={t('Ampliar imagem de capa', 'Expand cover image')}>
          <img src={project.coverImage} alt={project.title} className="block w-full h-auto max-h-[560px] object-contain mx-auto" referrerPolicy="no-referrer" />
        </button>
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

        <CaseStudyQuickSummary project={project} />

        {/* Layout with Sticky Table of Contents and Main Editorial Column */}
        {((project.sections && project.sections.length > 0) || (project.tableOfContents && project.tableOfContents.length > 0)) && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Table of Contents (Sticky on Desktop) */}
            <aside className="lg:col-span-4 sticky top-24 hidden lg:block p-5 rounded-xl bg-white border border-zinc-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-900 mb-3 pb-2 border-b border-zinc-100">
                <List className="w-3.5 h-3.5 text-zinc-500" />
                <span>{t('Neste estudo de caso', 'In this case study')}</span>
              </div>
              <nav className="space-y-1.5 text-xs font-medium">
                {(project.tableOfContents || project.sections.map((s) => ({ id: s.id, title: s.title }))).map((item) => {
                  const hasContent = project.sections.some((s) => s.id === item.id);
                  const isActive = activeSection === item.id;

                  if (hasContent) {
                    return (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`block py-1 transition-colors leading-snug pl-2 border-l-2 ${
                          isActive
                            ? 'font-bold text-zinc-950'
                            : 'text-zinc-500 hover:text-zinc-900 border-transparent'
                        }`}
                        style={{
                          borderColor: isActive ? 'var(--color-accent)' : 'transparent',
                        }}
                      >
                        {item.title}
                      </a>
                    );
                  }

                  return (
                    <span
                      key={item.id}
                      className="block py-1 leading-snug pl-2 border-l-2 border-transparent text-zinc-400 select-none cursor-default"
                    >
                      {item.title}
                    </span>
                  );
                })}
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
                      {section.learningHighlights && (
                        <div className="space-y-10 pt-2">
                          <div className="p-5 sm:p-6 rounded-2xl bg-zinc-900 text-white border border-zinc-800 shadow-md relative overflow-hidden">
                            <div
                              className="absolute -right-16 -top-16 w-56 h-56 rounded-full blur-3xl opacity-20 pointer-events-none"
                              style={{ backgroundColor: 'var(--color-accent, #E05A47)' }}
                            />
                            <div className="relative z-10 space-y-2">
                              <span
                                className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700/60"
                                style={{ color: 'var(--color-accent, #E05A47)' }}
                              >
                                {t('Visão Central', 'Core Vision')}
                              </span>
                              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight leading-snug">
                                "{section.learningHighlights.headline}"
                              </h3>
                            </div>
                          </div>
                          <div className="space-y-4">
                            <div className="flex items-center gap-2 pb-2 border-b border-zinc-200">
                              <span className="text-xl" aria-hidden="true">✦</span>
                              <h3 className="text-base sm:text-lg font-bold text-zinc-900 tracking-tight">
                                {section.learningHighlights.title}
                              </h3>
                            </div>
                            <div className="space-y-4">
                              {section.learningHighlights.learnings.map((item) => (
                                <div
                                  key={item.number}
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
                                    {item.paragraphs.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {section.lead && (
                        <p className="text-sm sm:text-base font-medium text-zinc-800 leading-relaxed">
                          {section.lead}
                        </p>
                      )}

                      {slug === 'candidattus' && section.id === 'resultados' && (
                        <div className="rounded-xl border border-zinc-200 bg-white p-4 sm:p-5 my-6">
                          <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-4">
                            {t('O que mudou no processo', 'What changed in the workflow')}
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="rounded-lg bg-zinc-100 p-4">
                              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3">
                                {t('Antes', 'Before')}
                              </h3>
                              <ul className="space-y-3 text-sm text-zinc-700 leading-relaxed">
                                <li>{t('Decisões operacionais concentradas na liderança', 'Operational decisions concentrated in leadership')}</li>
                                <li>{t('Mudanças frequentes durante o desenvolvimento', 'Frequent changes during development')}</li>
                                <li>{t('Diferenças entre protótipos aprovados e entregas', 'Gaps between approved prototypes and delivered interfaces')}</li>
                              </ul>
                            </div>
                            <div className="rounded-lg border border-zinc-200 p-4">
                              <h3 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--color-accent)' }}>
                                {t('Depois', 'After')}
                              </h3>
                              <ul className="space-y-3 text-sm text-zinc-800 leading-relaxed">
                                <li>{t('Mais autonomia para a equipe', 'Greater team autonomy')}</li>
                                <li>{t('Menos alterações durante a implementação', 'Fewer changes during implementation')}</li>
                                <li>{t('Maior consistência entre validação e entrega', 'Closer alignment between validation and delivery')}</li>
                              </ul>
                            </div>
                          </div>
                          <p className="text-xs text-zinc-500 mt-4 leading-relaxed">
                            {t('Mudanças observadas qualitativamente, sem métricas comparáveis.', 'Qualitative observations, without comparable quantitative metrics.')}
                          </p>
                        </div>
                      )}

                      <div className="space-y-3.5 text-sm sm:text-base text-zinc-700 leading-relaxed">
                        {section.paragraphs.map((p, pIdx) => {
                          const matchingInlineImages = [
                            ...(section.inlineImage && section.inlineImage.afterParagraph === pIdx ? [section.inlineImage.image] : []),
                            ...(section.inlineImages?.filter((item) => item.afterParagraph === pIdx).map((item) => item.image) || []),
                          ];

                          const isHeading = p.startsWith('### ');

                          return (
                            <React.Fragment key={pIdx}>
                              {isHeading ? (
                                <h3 className="text-base sm:text-lg font-bold text-zinc-900 tracking-tight pt-5 pb-1">
                                  {p.slice(4)}
                                </h3>
                              ) : (
                                <p>{renderFormattedParagraph(p)}</p>
                              )}
                              {matchingInlineImages.map((imgSpec, imgIdx) => (
                                <div key={imgIdx} className="my-6">
                                  <CaseStudyVisual imageSpec={imgSpec} projectSlug={project.slug} />
                                </div>
                              ))}
                            </React.Fragment>
                          );
                        })}
                      </div>

                      {/* Feature Cards (e.g. Three Investigation Fronts, Context Cards, Documentation) */}
                      {section.featureCards && section.featureCards.length > 0 && (
                        <div
                          className={`grid grid-cols-1 ${
                            section.featureCardsLayout === '2x2'
                              ? 'md:grid-cols-2'
                              : section.featureCardsLayout === '4-col'
                              ? 'sm:grid-cols-2 lg:grid-cols-4'
                              : section.featureCards.length === 2
                              ? 'sm:grid-cols-2'
                              : section.featureCards.length === 4
                              ? 'sm:grid-cols-2 lg:grid-cols-4'
                              : 'md:grid-cols-3'
                          } gap-4 my-6`}
                        >
                          {section.featureCards.map((card, cIdx) => (
                            <div
                              key={cIdx}
                              className="p-5 rounded-xl bg-white border border-zinc-200/90 shadow-2xs hover:border-zinc-300 transition-all flex flex-col justify-between"
                            >
                              <div>
                                <div className="w-8 h-8 rounded-lg bg-zinc-100 border border-zinc-200/70 flex items-center justify-center mb-3.5">
                                  {renderCardIcon(card.icon, cIdx)}
                                </div>
                                <h4 className="text-sm font-bold text-zinc-900 tracking-tight mb-2">
                                  {card.title}
                                </h4>
                                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                                  {card.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Step Cards Horizontal Flow (e.g. 4 horizontal cards in Solution) */}
                      {section.stepCards && section.stepCards.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 my-6">
                          {section.stepCards.map((step, sIdx) => (
                            <div
                              key={sIdx}
                              className="h-full p-4 sm:p-5 rounded-xl bg-white border border-zinc-200/90 shadow-2xs hover:border-zinc-300 transition-all flex flex-col justify-between"
                            >
                              <div>
                                <span
                                  className="font-mono text-xs font-bold tracking-wider block mb-2"
                                  style={{ color: 'var(--color-accent)' }}
                                >
                                  {step.number}
                                </span>
                                <h4 className="text-sm font-bold text-zinc-900 tracking-tight leading-snug mb-1.5">
                                  {step.title}
                                </h4>
                                <p className="text-xs text-zinc-600 leading-relaxed">
                                  {step.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Conceptual Tags (e.g. Foundations categories, shared elements) */}
                      {section.conceptualTags && section.conceptualTags.length > 0 && (
                        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 my-5">
                          {section.conceptualTags.map((tag, tIdx) => (
                            <div
                              key={tIdx}
                              className="px-3.5 py-2 rounded-xl bg-white border border-zinc-200/90 shadow-2xs text-xs font-semibold text-zinc-800 tracking-tight flex items-center gap-2 hover:border-zinc-300 transition-colors"
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-full shrink-0"
                                style={{ backgroundColor: 'var(--color-accent)' }}
                              />
                              <span>{tag}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* System Comparison (e.g. V1 Base estruturada vs V2 Oportunidades de evolução) */}
                      {section.systemComparison && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-zinc-200/90 shadow-2xs space-y-4">
                            <div className="flex items-center justify-between gap-2 pb-3 border-b border-zinc-100">
                              <div>
                                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-100 text-zinc-700">
                                  {section.systemComparison.left.badge || 'V1'}
                                </span>
                                <h3 className="text-base font-bold text-zinc-900 tracking-tight mt-1.5">
                                  {section.systemComparison.left.title}
                                </h3>
                              </div>
                            </div>
                            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-700">
                              {section.systemComparison.left.items.map((item, iIdx) => (
                                <li key={iIdx} className="flex items-center gap-2.5">
                                  <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-emerald-500" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="p-5 sm:p-6 rounded-2xl bg-zinc-50/70 border border-dashed border-zinc-300 shadow-2xs space-y-4">
                            <div className="flex items-center justify-between gap-2 pb-3 border-b border-zinc-200/70">
                              <div>
                                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200/60">
                                  {section.systemComparison.right.badge || 'V2'}
                                </span>
                                <h3 className="text-base font-bold text-zinc-900 tracking-tight mt-1.5">
                                  {section.systemComparison.right.title}
                                </h3>
                              </div>
                            </div>
                            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-600">
                              {section.systemComparison.right.items.map((item, iIdx) => (
                                <li key={iIdx} className="flex items-center gap-2.5">
                                  <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-zinc-400" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}

                      {/* AI Process Highlight */}
                      {section.aiHighlight && (
                        <div className="p-5 sm:p-6 rounded-2xl bg-zinc-900 text-white border border-zinc-800 shadow-sm relative overflow-hidden my-6">
                          <div
                            className="absolute -right-12 -top-12 w-44 h-44 rounded-full blur-3xl opacity-20 pointer-events-none"
                            style={{ backgroundColor: 'var(--color-accent, #E05A47)' }}
                          />
                          <div className="relative z-10 space-y-2.5">
                            <div className="flex items-center gap-2">
                              <Sparkles className="w-4 h-4" style={{ color: 'var(--color-accent, #E05A47)' }} />
                              <span
                                className="font-mono text-[11px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700/60"
                                style={{ color: 'var(--color-accent, #E05A47)' }}
                              >
                                {section.aiHighlight.badge || t('Apoio ao Processo', 'Process Support')}
                              </span>
                            </div>
                            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                              {section.aiHighlight.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-2xl">
                              {section.aiHighlight.text}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Closing Paragraph after cards */}
                      {section.closingParagraph && (
                        <p className="text-sm sm:text-base text-zinc-700 leading-relaxed mt-4">
                          {renderFormattedParagraph(section.closingParagraph)}
                        </p>
                      )}

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
                        <CaseStudyVisual imageSpec={section.image} projectSlug={project.slug} />
                      )}
                    </>
                  )}
                </section>
              ))}

              {/* Bloco "Resumo Executivo Concluído" (sempre abaixo de todo o conteúdo editorial) */}
              {!project.sections.some((s) => s.executiveSummary) && (
                <div className="mt-12 p-6 sm:p-7 rounded-2xl bg-zinc-100/80 border border-zinc-200/80 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                        {t('Resumo Executivo Concluído', 'Executive Summary Concluded')}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-zinc-900 tracking-tight">
                        {t(
                          'Deseja se aprofundar nas etapas do processo?',
                          'Want to explore the design process in detail?'
                        )}
                      </h4>
                    </div>

                    <button
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-zinc-200 text-xs font-semibold text-zinc-800 hover:text-zinc-950 hover:border-zinc-300 shadow-2xs transition-colors self-start sm:self-auto cursor-pointer"
                    >
                      <ArrowUp className="w-3.5 h-3.5" />
                      <span>{t('Voltar ao início do case', 'Back to top of case')}</span>
                    </button>
                  </div>

                  {project.sections && project.sections.length > 0 && (
                    <div className="pt-3 border-t border-zinc-200/80">
                      <p className="text-xs text-zinc-600 mb-3 font-medium">
                        {t('Acesse diretamente os principais blocos do case:', 'Jump directly to key sections:')}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.sections.map((sec) => (
                          <a
                            key={sec.id}
                            href={`#${sec.id}`}
                            onClick={(e) => {
                              e.preventDefault();
                              const el = document.getElementById(sec.id);
                              if (el) {
                                el.scrollIntoView({ behavior: 'smooth' });
                                window.history.pushState(null, '', `#${sec.id}`);
                              }
                            }}
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
              )}
            </div>
          </div>
        )}

        {/* Prototype access card: case stays public; Figma manages permissions. */}
        {prototypeUrls[project.slug] && (
          <section className="mt-12 rounded-2xl bg-[#111318] text-white border border-white/10 p-6 sm:p-8">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-zinc-400 mb-4">
              <span aria-hidden="true">{project.slug === 'taskcheck-design-system' ? '❖' : '🔒'}</span>
              <span>
                {project.slug === 'taskcheck-design-system'
                  ? 'Design System · Figma'
                  : t('Protótipo com acesso restrito', 'Restricted-access prototype')}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-3">
              {project.slug === 'taskcheck-design-system'
                ? t('Explore o Design System na prática.', 'Explore the Design System in practice.')
                : t('Explore a experiência na prática.', 'Explore the experience in practice.')}
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl mb-6">
              {project.slug === 'taskcheck-design-system'
                ? t(
                    'Acesse a apresentação completa da versão 1.0 do Design System no Figma para navegar pelas foundations, componentes, estados e regras de documentação.',
                    'Access the full Design System version 1.0 presentation on Figma to explore foundations, components, states, and documentation guidelines.'
                  )
                : t(
                    'Por questões de confidencialidade, o protótipo deste projeto possui acesso restrito. Ao abrir o Figma, você poderá solicitar permissão para explorar os fluxos e interações.',
                    'For confidentiality reasons, this project’s prototype has restricted access. When you open Figma, you can request permission to explore its flows and interactions.'
                  )}
            </p>
            <a
              href={prototypeUrls[project.slug]}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#111318] hover:bg-zinc-200 transition-colors focus-ring-accent"
            >
              <span>
                {project.slug === 'taskcheck-design-system'
                  ? t('Ver Design System no Figma', 'View Design System in Figma')
                  : t('Solicitar acesso no Figma', 'Request access on Figma')}
              </span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </section>
        )}

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
