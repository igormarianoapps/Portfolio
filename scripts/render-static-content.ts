import type { CaseStudy } from '../src/types/portfolio';

// Static semantic fallback for crawlers, AI readers and visitors with JavaScript disabled.
// React owns #root when JavaScript runs; the fallback is hidden without affecting the SPA.
const esc = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const ignoredKeys = new Set(['id','slug','url','alt','icon','image','inlineImage','inlineImages','coverImage','isPlaceholder','isPlaceholderMetric','presentation','deviceFrame','frameTitle','scrollable','viewportHeight','aspectRatio','badge','afterParagraph','type','number']);

function meaningfulText(value: unknown, depth = 0): string[] {
  if (typeof value === 'string') return value.trim() ? [value.trim()] : [];
  if (Array.isArray(value)) return value.flatMap(item => meaningfulText(item, depth + 1));
  if (!value || typeof value !== 'object' || depth > 8) return [];
  return Object.entries(value as Record<string, unknown>)
    .filter(([key]) => !ignoredKeys.has(key))
    .flatMap(([, item]) => meaningfulText(item, depth + 1));
}
const paragraph = (value: string) => '<p>' + esc(value) + '</p>';
export function renderStaticCase(study: CaseStudy, locale: string): string {
  const sections = study.sections.map(section => {
    const { id, title, ...content } = section;
    const paragraphs = meaningfulText(content);
    return '<section id="static-' + esc(id) + '"><h2>' + esc(title) + '</h2>' + paragraphs.map(paragraph).join('') + '</section>';
  }).join('');
  const labels = locale === 'pt'
    ? ['Meu papel','Equipe','Plataforma','Ferramentas','Resultados','Projetos']
    : locale === 'es'
      ? ['Mi función','Equipo','Plataforma','Herramientas','Resultados','Proyectos']
      : ['My role','Team','Platform','Tools','Outcomes','Projects'];
  const meta = [
    [labels[0], study.metadata.role],
    [labels[1], study.metadata.team],
    [labels[2], study.metadata.platform],
    [labels[3], (study.metadata.tools || []).join(', ')]
  ].map(([label, value]) => '<p><strong>' + esc(label) + ':</strong> ' + esc(value) + '</p>').join('');
  const metrics = (study.metrics || []).map(metric => '<p><strong>' + esc(metric.value) + ' — ' + esc(metric.label) + '</strong> ' + esc(metric.context) + '</p>').join('');
  const notice = study.isPlaceholder ? paragraph(study.placeholderNotice || 'Illustrative case study; figures are not verified.') : '';
  return '<article class="portfolio-static" id="portfolio-static" lang="' + esc(locale) + '"><nav><a href="/' + esc(locale) + '">' + esc(labels[5]) + '</a></nav><h1>' + esc(study.title) + '</h1>' +
    paragraph(study.clientOrContext) + paragraph(study.tagline) + paragraph(study.summary) +
    meta + (metrics ? '<section><h2>' + esc(labels[4]) + '</h2>' + metrics + '</section>' : '') + notice + sections + '</article>';
}
export function renderStaticIndex(locale: string, projects: CaseStudy[]): string {
  const heading = locale === 'pt' ? 'Projetos de Product Design' : locale === 'es' ? 'Proyectos de Product Design' : 'Product Design projects';
  return '<article class="portfolio-static" id="portfolio-static" lang="' + esc(locale) + '"><h1>Igor Mariano — Product Designer</h1><h2>' + heading + '</h2>' +
    projects.map(p => '<section><h3><a href="/' + esc(locale) + '/projetos/' + esc(p.slug) + '">' + esc(p.title) + '</a></h3>' + paragraph(p.summary) + '</section>').join('') + '</article>';
}
export function includeStaticFallback(html: string, content: string): string {
  // Put the real document content in the initial root. A browser renders it immediately
  // without JavaScript; React's createRoot replaces it with the interactive application.
  // Never hide the crawler-readable content with CSS or a JavaScript-controlled class.
  const css = '<style>.portfolio-static{max-width:860px;margin:0 auto;padding:40px 24px;font:16px/1.7 system-ui,sans-serif;background:white;color:#161616}.portfolio-static h1,.portfolio-static h2,.portfolio-static h3{line-height:1.25;margin:1.5em 0 .6em}.portfolio-static section{margin:2.5em 0}.portfolio-static a{color:#164b98;text-decoration:underline}</style>';
  const marker = '<div id="root"></div>';
  if (!html.includes(marker)) throw new Error('Expected Vite root element is missing');
  return html.replace('</head>', css + '</head>').replace(marker, '<div id="root">' + content + '</div>');
}

export function renderStaticAbout(locale: 'pt' | 'en' | 'es', config: typeof import('../src/data/site').siteConfig): string {
  const about = config.aboutPage;
  const s = about.sections;
  const section = (title: string, paragraphs: string[]) => '<section><h2>' + esc(title) + '</h2>' + paragraphs.map(paragraph).join('') + '</section>';
  const method = section(s.methodology.title[locale], s.methodology.steps.flatMap(step => [step.title[locale], step.desc[locale]]));
  const skills = section(s.competencies.title[locale], s.competencies.items.flatMap(item => [item.title[locale], item.desc[locale]]));
  const experience = section(s.representativeExperiences.title[locale], s.representativeExperiences.items.flatMap(item => [item.title[locale], item.desc[locale]]));
  return '<article class="portfolio-static" id="portfolio-static" lang="' + esc(locale) + '"><h1>' + esc(about.title[locale]) + '</h1>' + paragraph(about.subtitle[locale]) +
    section(s.whoIAm.title[locale], s.whoIAm.paragraphs[locale]) +
    section(s.experienceInPractice.title[locale], s.experienceInPractice.paragraphs[locale]) +
    method + skills + experience +
    section(s.motivation.title[locale], [s.motivation.intro[locale], s.motivation.highlight[locale]]) + '</article>';
}
export function renderStaticContact(locale: 'pt' | 'en' | 'es', config: typeof import('../src/data/site').siteConfig): string {
  const c = config.contactPage;
  return '<article class="portfolio-static" id="portfolio-static" lang="' + esc(locale) + '"><h1>' + esc(c.title[locale]) + '</h1>' + paragraph(c.subtitle[locale]) +
    '<h2>LinkedIn</h2>' + paragraph(c.linkedinIntro[locale]) + '<p><a href="' + esc(config.contacts.linkedin.url) + '">LinkedIn</a></p>' +
    '<h2>WhatsApp</h2>' + paragraph(c.whatsappIntro[locale]) + '<p><a href="' + esc(config.contacts.whatsapp.url) + '">WhatsApp</a></p>' +
    '<h2>Email</h2>' + paragraph(c.emailIntro[locale]) + '<p><a href="mailto:' + esc(config.contacts.email.address) + '">' + esc(config.contacts.email.address) + '</a></p></article>';
}

/** Machine-readable Markdown generated from the same case-study source as the website. */
export function renderMarkdownCase(study: CaseStudy): string {
  const lines = ['# ' + study.title, '', study.summary, '', study.tagline, '',
    '- Role: ' + study.metadata.role,
    '- Team: ' + study.metadata.team,
    '- Platform: ' + study.metadata.platform,
    '- Tools: ' + (study.metadata.tools || []).join(', '), ''];
  if (study.isPlaceholder) lines.push('Data transparency: ' + (study.placeholderNotice || 'Illustrative information, not independently validated.'), '');
  for (const metric of study.metrics || []) lines.push('Outcome: ' + metric.value + ' — ' + metric.label + '. ' + metric.context, '');
  for (const section of study.sections) {
    lines.push('## ' + section.title, '');
    const { id: _id, title: _title, ...content } = section;
    for (const item of meaningfulText(content)) lines.push(item.replace(/\*\*/g, ''), '');
  }
  return lines.join('\n');
}
