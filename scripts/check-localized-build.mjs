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
    assert.ok(sitemap.includes(`<loc>${root}${route}</loc>`), `Missing sitemap URL for ${route}`);
    checked++;
  }
}
console.log(`Validated ${checked} localized HTML pages, canonical URLs, alternates and sitemap entries.`);
