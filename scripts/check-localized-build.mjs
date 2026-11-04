import { readFileSync, existsSync } from 'node:fs';
import assert from 'node:assert/strict';
import { join } from 'node:path';

const locales = ['en', 'pt'];
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
    assert.ok(html.includes(`hreflang="x-default"`), `Missing default alternate for ${route}`);
    assert.ok(html.includes(`<html lang="${locale === 'pt' ? 'pt-BR' : 'en'}"`), `Wrong HTML lang for ${route}`);
    assert.ok(html.includes(`<meta property="og:url" content="${root}${route}"`), `Wrong OG URL for ${route}`);
    assert.ok(html.includes(`<meta property="og:locale" content="${locale === 'pt' ? 'pt_BR' : 'en_US'}"`), `Wrong OG locale for ${route}`);
    assert.ok(html.includes('<meta name="description"'), `Missing description for ${route}`);
    assert.equal((html.match(/<link rel="canonical"/g) || []).length, 1, `Duplicate canonical on ${route}`);
    assert.ok(sitemap.includes(`<loc>${root}${route}</loc>`), `Missing sitemap URL for ${route}`);
    checked++;
  }
}
assert.equal(checked, locales.length * suffixes.length);
assert.ok(!sitemap.includes('<loc>https://igormariano.vercel.app/es'), 'Untranslated Spanish routes must not be indexed');
console.log(`Validated ${checked} localized HTML pages, canonical URLs, Open Graph, alternates and sitemap entries.`);
