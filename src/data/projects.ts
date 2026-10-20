import { Language, ProjectCardData, CaseStudy } from '../types/portfolio';
import { corridaPerfeitaProject } from './projects/corrida-perfeita';
import { candidattusProject } from './projects/candidattus';

/**
 * REGISTRO CENTRAL DE PROJETOS
 *
 * Para adicionar, remover ou reordenar projetos:
 * 1. Crie seu arquivo de case study na pasta `src/data/projects/meu-projeto.ts`
 * 2. Importe-o aqui e adicione no array `PROJECTS_REGISTRY`.
 * 3. O site atualizará automaticamente a Home, os Cards, as Rotas e os Links de Próximo Projeto!
 */
export const PROJECTS_REGISTRY = [
  corridaPerfeitaProject,
  candidattusProject,
];

/**
 * Retorna os dados essenciais para os cards da Homepage
 */
export function getProjectCardList(lang: Language): ProjectCardData[] {
  return PROJECTS_REGISTRY.map((projectEntry) => {
    const study = projectEntry[lang];
    const firstMetric = study.metrics && study.metrics.length > 0 ? study.metrics[0] : undefined;

    return {
      slug: study.slug,
      title: study.title,
      category: study.clientOrContext,
      summary: study.summary,
      designerRole: study.metadata.role,
      validatedMetric: firstMetric
        ? {
            value: firstMetric.value,
            label: firstMetric.label,
            context: firstMetric.context,
          }
        : undefined,
      tags: study.tags,
      coverImage: study.coverImage,
      isPlaceholder: study.isPlaceholder,
    };
  });
}

/**
 * Retorna o estudo de caso completo pelo slug
 */
export function getCaseStudyBySlug(slug: string, lang: Language): CaseStudy | undefined {
  const found = PROJECTS_REGISTRY.find(
    (entry) => entry.pt.slug === slug || entry.en.slug === slug
  );
  if (!found) return undefined;
  return found[lang];
}

/**
 * Retorna o próximo projeto na esteira para navegação contínua
 */
export function getAdjacentProjects(
  slug: string,
  lang: Language
): { next?: CaseStudy; prev?: CaseStudy } {
  const index = PROJECTS_REGISTRY.findIndex(
    (entry) => entry.pt.slug === slug || entry.en.slug === slug
  );
  if (index === -1) return {};

  const prevIndex = index === 0 ? PROJECTS_REGISTRY.length - 1 : index - 1;
  const nextIndex = index === PROJECTS_REGISTRY.length - 1 ? 0 : index + 1;

  return {
    prev: PROJECTS_REGISTRY[prevIndex][lang],
    next: PROJECTS_REGISTRY[nextIndex][lang],
  };
}
