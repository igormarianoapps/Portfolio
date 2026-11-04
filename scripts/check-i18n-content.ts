import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { siteConfig } from '../src/data/site';
import { PROJECTS_REGISTRY, getCaseStudyBySlug, getProjectCardList } from '../src/data/projects';
import { spanishUi } from '../src/data/ui-es';

const languages = ['pt', 'en', 'es'] as const;
const navbar = readFileSync('src/components/Navbar.tsx', 'utf8');
const groups = [...navbar.matchAll(/role="group"[\s\S]*?<\/div>/g)];
assert.equal(groups.length, 2, 'Language switcher must appear once for desktop and once for mobile');
for (const [index, group] of groups.entries()) {
  const buttons = [...group[0].matchAll(/>\s*(PT|EN|ES)\s*<\/button>/g)].map(match => match[1]);
  assert.deepEqual(buttons, ['PT', 'EN', 'ES'], `Incorrect language labels in switcher ${index + 1}`);
  for (const lang of languages) {
    assert.ok(group[0].includes(`setLanguage('${lang}')`), `Missing ${lang} selection`);
    assert.ok(group[0].includes(`aria-pressed={language === '${lang}'}`), `Missing active state for ${lang}`);
  }
}

let localizedFields = 0;
const untranslated: string[] = [];
function audit(value: unknown, path: string) {
  if (!value || typeof value !== 'object') return;
  const record = value as Record<string, unknown>;
  if ('pt' in record && 'en' in record) {
    assert.ok('es' in record, `Missing Spanish translation: ${path}`);
    localizedFields++;
    if (typeof record.en === 'string') {
      assert.equal(typeof record.es, 'string', `Invalid Spanish type: ${path}`);
      const en = record.en.trim();
      const es = (record.es as string).trim();
      if (en && en.length >= 32 && en === es && path !== 'role') {
        untranslated.push(path);
      }
    } else if (Array.isArray(record.en)) {
      assert.ok(Array.isArray(record.es), `Missing Spanish array: ${path}`);
    }
  }
  for (const [key, child] of Object.entries(record)) {
    if (key === 'pt' || key === 'en' || key === 'es') continue;
    if (Array.isArray(child)) child.forEach((item, index) => audit(item, `${path}.${key}[${index}]`));
    else audit(child, `${path}.${key}`);
  }
}
audit(siteConfig, 'siteConfig');
assert.deepEqual(untranslated, [], `English editorial copy remains in Spanish: ${untranslated.join(', ')}`);

let translatedLabels = 0;
for (const path of [
  'src/pages/HomePage.tsx',
  'src/pages/AboutPage.tsx',
  'src/pages/ContactPage.tsx',
  'src/pages/CaseStudyPage.tsx',
  'src/pages/NotFoundPage.tsx',
  'src/components/SkillsSection.tsx',
  'src/components/AboutHomeBlock.tsx',
  'src/components/ProjectCard.tsx',
]) {
  const source = readFileSync(path, 'utf8');
  const matches = [...source.matchAll(/\bt\(\s*(?:'[^']*'|"[^"]*")\s*,\s*('([^']*)'|"([^"]*)")/g)];
  for (const match of matches) {
    const en = match[2] ?? match[3];
    assert.ok(spanishUi[en], `Untranslated UI text in ${path}: ${en}`);
    translatedLabels++;
  }
}

assert.equal(PROJECTS_REGISTRY.length, 3, 'Expected three complete published projects');
const counts = [10, 9, 8];
PROJECTS_REGISTRY.forEach((project, index) => {
  const expectedSlug = project.pt.slug;
  for (const language of languages) {
    const caseStudy = getCaseStudyBySlug(expectedSlug, language);
    assert.ok(caseStudy, `Missing case study ${expectedSlug}/${language}`);
    assert.equal(caseStudy.slug, expectedSlug);
    assert.equal(caseStudy.isPlaceholder, false);
    assert.equal(caseStudy.sections.length, counts[index], `Unexpected section count in ${expectedSlug}/${language}`);
    assert.deepEqual(caseStudy.sections.map(s => s.id), project.en.sections.map(s => s.id));
    assert.ok(caseStudy.sections.every(s => s.title.trim().length > 0));
  }
});
languages.forEach(lang => {
  const cards = getProjectCardList(lang);
  assert.equal(cards.length, 3);
  assert.ok(cards.every(card => card.summary.trim().length > 0 && card.category.trim().length > 0));
});
console.log(`Editorial checks passed: ${localizedFields} localized fields, ${translatedLabels} translated UI labels, two accurate PT/EN/ES switchers and 27 aligned case sections across all three languages.`);
