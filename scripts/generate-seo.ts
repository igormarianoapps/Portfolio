import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { PROJECTS_REGISTRY } from '../src/data/projects';
import { siteConfig } from '../src/data/site';
import { includeStaticFallback, renderStaticCase, renderStaticIndex, renderStaticAbout, renderStaticContact, renderMarkdownCase } from './render-static-content';

const root = 'https://igormariano.vercel.app';
const template = readFileSync('dist/index.html', 'utf8');
const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const absolute = (s: string) => new URL(s, root).href;
type Locale = 'pt' | 'en' | 'es';
type Page = { path: string; title: string; description: string; image?: string; locale: Locale; suffix: string };
const locales: Locale[] = ['en', 'pt', 'es'];
const pages: Page[] = locales.flatMap(locale => [
  { path: `/${locale}`, title: 'Igor Mariano — Product Designer · UX/UI · Design Systems', description: locale === 'pt' ? 'Portfólio de Igor Mariano: Product Design, UX Research e Design Systems orientados por dados.' : locale === 'es' ? 'Portfolio de Igor Mariano: Product Design, investigación UX y Design Systems basados en datos.' : 'Igor Mariano portfolio: data-informed Product Design, UX Research and Design Systems.', locale, suffix: '' },
  { path: `/${locale}/sobre`, title: `${siteConfig.aboutPage.title[locale]} · Igor Mariano`, description: siteConfig.aboutPage.subtitle[locale], locale, suffix: '/sobre' },
  { path: `/${locale}/contato`, title: `${siteConfig.contactPage.title[locale]} · Igor Mariano`, description: siteConfig.contactPage.subtitle[locale], locale, suffix: '/contato' },
  ...PROJECTS_REGISTRY.map(entry => {
    const study = entry[locale];
    return { path: `/${locale}/projetos/${study.slug}`, title: `${study.title} — ${locale === 'pt' ? 'Estudo de Caso' : locale === 'es' ? 'Caso de estudio' : 'Case Study'} · Igor Mariano`, description: study.summary, image: study.coverImage, locale, suffix: `/projetos/${study.slug}` };
  }),
]);
function replaceMeta(html: string, attr: 'name' | 'property', key: string, value: string) {
  const re = new RegExp(`<meta\\s+${attr}="${key}"\\s+content="[^"]*"\\s*\\/?>`, 'i');
  const tag = `<meta ${attr}="${key}" content="${escape(value)}" />`;
  return re.test(html) ? html.replace(re, tag) : html.replace('</head>', `    ${tag}\n  </head>`);
}
for (const page of pages) {
  const canonical = root + page.path;
  const image = absolute(page.image || '/og-image.jpg');
  let html = template.replace(/<html lang="[^"]*"/, `<html lang="${page.locale === 'pt' ? 'pt-BR' : page.locale === 'es' ? 'es-ES' : 'en'}"`);
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escape(page.title)}</title>`);
  for (const [attr, key, value] of [
    ['name', 'description', page.description], ['property', 'og:type', page.suffix.startsWith('/projetos/') ? 'article' : 'website'],
    ['property', 'og:title', page.title], ['property', 'og:description', page.description],
    ['property', 'og:image', image], ['property', 'og:image:alt', page.title], ['property', 'og:url', canonical],
    ['property', 'og:locale', page.locale === 'pt' ? 'pt_BR' : page.locale === 'es' ? 'es_ES' : 'en_US'],
    ['name', 'twitter:title', page.title], ['name', 'twitter:description', page.description], ['name', 'twitter:image', image]
  ] as const) html = replaceMeta(html, attr, key, value);
  html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${escape(canonical)}" />`);
  html = html.replace('</head>', `    <link rel="alternate" hreflang="en" href="${root}/en${page.suffix}" />\n    <link rel="alternate" hreflang="pt-BR" href="${root}/pt${page.suffix}" />\n    <link rel="alternate" hreflang="es-ES" href="${root}/es${page.suffix}" />\n    <link rel="alternate" hreflang="x-default" href="${root}/en${page.suffix}" />\n  </head>`);
  if (page.image) html = html.replace(/\s*<meta property="og:image:(?:width|height|type)"[^>]*>/g, '');
  const folder = join('dist', page.path.slice(1));
  mkdirSync(folder, { recursive: true });
  const project = page.suffix.startsWith('/projetos/')
    ? PROJECTS_REGISTRY.map(entry => entry[page.locale]).find(study => study.slug === page.suffix.split('/').pop())
    : undefined;
  if (project) html = includeStaticFallback(html, renderStaticCase(project, page.locale));
  else if (page.suffix === '') html = includeStaticFallback(html, renderStaticIndex(page.locale, PROJECTS_REGISTRY.map(entry => entry[page.locale])));
  else if (page.suffix === '/sobre') html = includeStaticFallback(html, renderStaticAbout(page.locale, siteConfig));
  else if (page.suffix === '/contato') html = includeStaticFallback(html, renderStaticContact(page.locale, siteConfig));
  writeFileSync(join(folder, 'index.html'), html, 'utf8');
}

/** The root URL is where most AI tools begin. Serve readable links and project details there too. */
const rootProjects = PROJECTS_REGISTRY.map(entry => entry.en);
const languageLinks = '<nav aria-label="Languages"><p>Languages: <a href="/en">English</a> · <a href="/pt">Português</a> · <a href="/es">Español</a></p></nav>';
const rootCaseLinks = locales.map(locale =>
  '<section><h2>' + (locale === 'pt' ? 'Estudos de caso em português' : locale === 'es' ? 'Casos de estudio en español' : 'Case studies in English') + '</h2>' +
  PROJECTS_REGISTRY.map(entry => '<p><a href="/' + locale + '/projetos/' + entry[locale].slug + '">' + escape(entry[locale].title) + '</a></p>').join('') + '</section>'
).join('');
// Put the complete case studies on the *shared homepage URL*.
// Many AI readers fetch only the submitted URL and will not follow links.
const fullCaseStudies = rootProjects.map(project => renderStaticCase(project, 'en')
  .replace('<article class="portfolio-static" id="portfolio-static" lang="en">', '<section class="portfolio-case-full" lang="en">')
  .replace('</article>', '</section>')).join('');
const rootContent = renderStaticIndex('en', rootProjects).replace('</article>', languageLinks +
  '<p>Full portfolio text: <a href="/portfolio.md">Read complete cases in English, Portuguese and Spanish</a>.</p>' +
  '<p><a href="/en/sobre">About</a> · <a href="/en/contato">Contact</a></p>' +
  rootCaseLinks + '<main aria-label="Complete project case studies"><h2>Full project case studies</h2>' +
  fullCaseStudies + '</main></article>');
const rootHtml = includeStaticFallback(template, rootContent)
  .replace(/<link rel="canonical" href="[^"]*"\s*\/>/, '<link rel="canonical" href="' + root + '/en" />');
writeFileSync('dist/index.html', rootHtml
  .replace('</head>', '  <link rel="alternate" type="text/markdown" title="Complete Product Design portfolio" href="/portfolio.md" />\\n</head>'), 'utf8');
const markdown = ['# Igor Mariano — Product Designer', '',
  'Portfolio website: ' + root + '/', '',
  'LinkedIn: ' + siteConfig.contacts.linkedin.url, '',
  'Contact: ' + siteConfig.contacts.email.address, '',
  '## Projects by language', ''];
for (const locale of locales) {
  const label = locale === 'pt' ? 'Português' : locale === 'es' ? 'Español' : 'English';
  markdown.push('# ' + label, '');
  for (const entry of PROJECTS_REGISTRY) {
    markdown.push('Source: ' + root + '/' + locale + '/projetos/' + entry[locale].slug, '',
      renderMarkdownCase(entry[locale]), '');
  }
}
writeFileSync('dist/portfolio.md', markdown.join('\n'), 'utf8');
writeFileSync('dist/llms.txt',
  '# Igor Mariano — Product Designer\n\n' +
  'Full text portfolio (Portuguese, English, Spanish): ' + root + '/portfolio.md\n\n' +
  'Project case studies:\n' + locales.flatMap(locale => PROJECTS_REGISTRY.map(entry => '- ' + entry[locale].title + ': ' + root + '/' + locale + '/projetos/' + entry[locale].slug)).join('\n') + '\n',
  'utf8');

const urls = pages.map(page => `  <url><loc>${root}${page.path}</loc>${locales.map(locale => `<xhtml:link rel="alternate" hreflang="${locale === 'pt' ? 'pt-BR' : locale === 'es' ? 'es-ES' : 'en'}" href="${root}/${locale}${page.suffix}"/>`).join('')}<xhtml:link rel="alternate" hreflang="x-default" href="${root}/en${page.suffix}"/></url>`).join('\n');
writeFileSync('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`, 'utf8');
console.log(`Generated localized metadata and sitemap for ${pages.length} routes.`);
