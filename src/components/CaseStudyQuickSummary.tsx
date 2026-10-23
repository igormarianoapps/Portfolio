import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import type { CaseStudy } from '../types/portfolio';

const summaries: Record<string, {pt: string[]; en: string[]}> = {
  'corrida-perfeita': {
    pt: ['Abandono elevado após o primeiro acesso à home do aplicativo.', 'Atuei no discovery, na experiência do onboarding e no redesign da home e do site.', 'Priorizar a comunicação do valor do produto e organizar a jornada inicial.', 'O abandono observado caiu de pouco mais de 60% para aproximadamente 20% entre os períodos analisados; dado histórico aproximado, sem teste controlado.'],
    en: ['High drop-off after users first reached the app home screen.', 'I worked on discovery, onboarding experience, and the redesign of the home screen and website.', 'Make the product value clearer and reorganize the first-use journey.', 'Observed drop-off went from just over 60% to around 20% across the periods analyzed; approximate historical data, not a controlled experiment.']
  },
  candidattus: {
    pt: ['Uma plataforma de inteligência eleitoral com desafios de navegação, complexidade de dados e alinhamento nas entregas.', 'Atuei como único UX/UI Designer, em pesquisa, arquitetura, dashboards e organização do processo de design.', 'Organizar fluxos e instituir práticas de DesignOps conectando Figma, desenvolvimento e acompanhamento.', 'Maior autonomia no processo e melhor alinhamento entre protótipos e entregas; impactos qualitativos, sem percentual validado.'],
    en: ['An electoral intelligence platform facing navigation, data complexity and delivery alignment challenges.', 'As the sole UX/UI Designer, I worked on research, architecture, dashboards and design process organization.', 'Structure flows and introduce DesignOps practices across Figma, development and delivery.', 'More autonomy and better alignment between prototypes and delivery; qualitative outcomes without a verified percentage.']
  },
  'taskcheck-design-system': {
    pt: ['Interfaces Desktop e Mobile precisavam de uma base de padrões consistente e reutilizável.', 'O TaskCheck marcou meu início em UX; a estruturação posterior da primeira versão do Design System consolidou esse aprendizado.', 'Começar por Foundations e pelos componentes recorrentes, documentando regras de uso e oportunidades futuras.', 'Versão 1.0 estruturada com 12 famílias de componentes; sem alegar ganhos de produtividade ainda não medidos.'],
    en: ['Desktop and mobile interfaces needed a consistent, reusable foundation.', 'TaskCheck was my first UX project; the later organization of the first Design System version consolidated that learning.', 'Start with foundations and recurring components, documenting usage rules and future opportunities.', 'Version 1.0 organized into 12 component families; no unmeasured productivity gains are claimed.']
  }
};

export function CaseStudyQuickSummary({project}: {project: CaseStudy}) {
  const {language, t} = useLanguage();
  const items = summaries[project.slug]?.[language];
  if (!items) return null;
  const labels = language === 'pt'
    ? ['O problema', 'Minha atuação', 'Decisão principal', 'Resultado / entrega']
    : ['The problem', 'My role', 'Key decision', 'Outcome / deliverable'];
  return <section aria-labelledby="quick-summary-title" className="mb-12 rounded-2xl bg-white border border-zinc-200 p-6 sm:p-8 shadow-sm">
    <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
      <h2 id="quick-summary-title" className="text-lg font-bold tracking-tight text-zinc-950">{t('Resumo executivo', 'Executive summary')}</h2>
      <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">{t('Leitura de 30 segundos', '30-second read')}</span>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
      {items.map((item,i)=><div key={labels[i]} className="space-y-1.5">
        <h3 className="text-xs uppercase tracking-wider font-bold" style={{color:'var(--color-accent)'}}>{labels[i]}</h3>
        <p className="text-sm leading-relaxed text-zinc-700">{item}</p>
      </div>)}
    </div>
  </section>;
}
