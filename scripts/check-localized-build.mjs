import { readFileSync, existsSync } from 'node:fs';
import assert from 'node:assert/strict';
import { join } from 'node:path';

const locales = ['en', 'pt', 'es'];
const suffixes = ['', '/sobre', '/contato', '/projetos/corrida-perfeita', '/projetos/candidattus', '/projetos/taskcheck-design-system'];
const root = 'https://igormariano.vercel.app';
const sitemapPath = 'dist/sitemap.xml';
assert.ok(existsSync(sitemapPath), 'Missing generated sitemap');
const sitemap = readFileSync(sitemapPath, 'utf8');
let checked = 0;
for (const locale of locales) {
  for (const suffix of suffixes) {
    const route = `/${locale}${suffix}`;
    const htmlPath = join('dist', route.slice(1), 'index.html');
    assert.ok(existsSync(htmlPath), `Missing HTML for ${route}`);
    const html = readFileSync(htmlPath, 'utf8');
    assert.ok(html.includes(`href="${root}${route}"`), `Missing canonical for ${route}`);
    assert.ok(html.includes(`hreflang="en"`), `Missing English alternate for ${route}`);
    assert.ok(html.includes(`hreflang="pt-BR"`), `Missing Portuguese alternate for ${route}`);
    assert.ok(html.includes(`hreflang="es-ES"`), `Missing Spanish alternate for ${route}`);
    assert.ok(html.includes(`hreflang="x-default"`), `Missing default alternate for ${route}`);
    assert.ok(html.includes(`<html lang="${locale === 'pt' ? 'pt-BR' : locale === 'es' ? 'es-ES' : 'en'}"`), `Wrong HTML lang for ${route}`);
    assert.ok(html.includes(`<meta property="og:url" content="${root}${route}"`), `Wrong OG URL for ${route}`);
    assert.ok(html.includes(`<meta property="og:locale" content="${locale === 'pt' ? 'pt_BR' : locale === 'es' ? 'es_ES' : 'en_US'}"`), `Wrong OG locale for ${route}`);
    assert.ok(html.includes('<meta name="description"'), `Missing description for ${route}`);
    assert.equal((html.match(/<link rel="canonical"/g) || []).length, 1, `Duplicate canonical on ${route}`);
    assert.ok(sitemap.includes(`<loc>${root}${route}</loc>`), `Missing sitemap URL for ${route}`);
    if (suffix.startsWith('/projetos/')) {
      assert.ok(html.includes('<article class="portfolio-static"'), 'Missing static case content for ' + route);
      assert.ok(html.includes('<h2>'), 'Missing static section headings for ' + route);
      assert.ok(html.includes('<strong>'), 'Missing metadata and outcomes for ' + route);
      assert.ok(html.length > 8000, 'Static case content unexpectedly short for ' + route);
    }
    if (suffix === '') {
      assert.ok(html.includes('portfolio-static'), 'Missing static project index for ' + route);
      assert.ok(html.includes('/projetos/corrida-perfeita'), 'Missing crawlable case links for ' + route);
    }
    checked++;
  }
}
assert.equal(checked, locales.length * suffixes.length);
assert.ok(sitemap.includes('<loc>https://igormariano.vercel.app/es'), 'Missing translated Spanish routes');
console.log(`Validated ${checked} localized HTML pages, canonical URLs, Open Graph, alternates and sitemap entries.`);
