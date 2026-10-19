# Guia de Manutenção e Modelo de Projetos — Portfólio Igor Mariano

Este documento é o guia definitivo para você manter, atualizar, adicionar e publicar novos projetos no seu portfólio.

---

## 1. Visão Geral da Arquitetura de Dados

O portfólio foi desenhado com **separação estrita de responsabilidades**:

```text
/src
  /data
    site.ts               <-- Nome, foto oficial, contatos (WhatsApp, LinkedIn, Email), textos gerais
    projects.ts           <-- Registro central dos projetos e ordem de exibição na Home
    /projects
      candidattus.ts      <-- Estudo de caso 01 (PT e EN)
      corrida-perfeita.ts <-- Estudo de caso 02 (PT e EN)
      autoforce.ts        <-- Estudo de caso 03 (PT e EN)
      taskcheck.ts        <-- Estudo de caso 04 (PT e EN)
      novo-projeto.ts     <-- (Modelo para novos cases)
  /assets/images          <-- Imagens de capas, mockups e retrato
  /index.css              <-- Tokens centralizados de cores (Grafite, Terracota, etc.)
```

---

## 2. Checklist de Personalização Rápida

Para personalizar o site com seus dados oficiais antes da publicação:

### 1. Sua Fotografia (Hero e Sobre)
- Coloque seu arquivo de foto em `public/images/` ou `src/assets/images/` (ex: `minha-foto.jpg`).
- Abra `src/data/site.ts` e altere a propriedade:
  ```typescript
  portraitImage: "/src/assets/images/minha-foto.jpg",
  ```
- O layout do Desktop e do Mobile se ajustará automaticamente com os devidos recortes de contraste.

### 2. Número de WhatsApp
- Configurado com o seu número oficial: `+5562999036078`.
- No arquivo `src/data/site.ts`:
  ```typescript
  url: "https://wa.me/5562999036078?text=...",
  isPlaceholder: false,
  ```

### 3. Tokens de Cor (Terracota, Grafite, etc.)
- As cores da aplicação estão centralizadas em `src/index.css`:
  ```css
  :root {
    --color-bg-dark: #0D0F12;      /* Fundo grafite profundo */
    --color-accent: #E15B38;       /* Terracota / Laranja queimado de destaque */
    --color-accent-hover: #C84B29; /* Hover do terracota */
  }
  ```
- Se desejar mudar a cor de destaque do site no futuro, basta alterar `--color-accent` neste arquivo e todo o site atualizará instantaneamente.

---

## 3. Passo a Passo: Como Adicionar um Novo Projeto

Adicionar um novo projeto leva menos de 5 minutos e requer apenas **dois passos**:

### Passo 1: Criar o arquivo do projeto
Crie um novo arquivo em `src/data/projects/nome-do-projeto.ts` usando o modelo abaixo.

### Passo 2: Registrar no índice central
Abra `src/data/projects.ts`, importe seu novo arquivo e adicione-o ao array `PROJECTS_REGISTRY`:

```typescript
import { novoProjeto } from './projects/nome-do-projeto';

export const PROJECTS_REGISTRY = [
  candidattusProject,
  corridaPerfeitaProject,
  autoforceProject,
  taskcheckProject,
  novoProjeto, // <-- A ordem aqui define a ordem dos cards na Home!
];
```

Pronto! A homepage gerará o card automaticamente, criará a rota `/projetos/nome-do-projeto`, os metadados de SEO e a navegação de próximo/anterior no rodapé.

---

## 4. Modelo de Referência para um Estudo de Caso

Copie este código para criar um novo arquivo em `src/data/projects/novo-case.ts`:

```typescript
import { CaseStudy } from '../../types/portfolio';
import { LocalizedCaseStudy } from './candidattus';

export const meuNovoProjeto: LocalizedCaseStudy = {
  // VERSÃO EM PORTUGUÊS
  pt: {
    slug: 'meu-novo-projeto',
    title: 'Nome do Produto ou Empresa',
    clientOrContext: 'Segmento ou Tipo de Solução (Ex: B2B SaaS, FinTech, E-Commerce)',
    tagline: 'Uma frase de impacto resumindo a entrega de valor do projeto.',
    summary: 'Resumo conciso de até duas linhas para os cards da homepage.',
    coverImage: '/src/assets/images/minha-capa.jpg',
    tags: ['Product Discovery', 'Design System', 'UX Research', 'B2B'],
    metadata: {
      role: 'Lead Product Designer (Discovery, UX/UI, Prototipagem)',
      timeline: '4 meses (Q1 2026)',
      team: '1 PM, 1 Tech Lead, 3 Engenheiros, 1 Designer',
      platform: 'Web Desktop & Mobile Responsivo',
      tools: ['Figma', 'Miro', 'Hotjar', 'Mixpanel'],
    },
    isPlaceholder: false, // Mude para true se ainda estiver usando dados demonstrativos
    placeholderNotice: undefined,
    metrics: [
      {
        value: '+25%',
        label: 'Aumento na conversão',
        context: 'Validação no teste A/B pós-lançamento da nova esteira',
        isPlaceholderMetric: false,
      },
    ],
    sections: [
      {
        id: 'contexto',
        title: '01. Contexto do Produto e do Negócio',
        lead: 'Parágrafo introdutório com a visão macro do desafio de negócio.',
        paragraphs: [
          'Descrição detalhada do momento da empresa e da dor enfrentada pelos usuários.',
          'Dados iniciais que motivaram a iniciativa.',
        ],
      },
      {
        id: 'problema',
        title: '02. O Problema e a Oportunidade',
        lead: 'Qual era o gargalo crítico que precisava ser resolvido?',
        paragraphs: [
          'Detalhamento do problema descoberto na fase de imersão.',
        ],
        bulletPoints: [
          'Ponto de atrito 01 identificado nas entrevistas.',
          'Ponto de atrito 02 no funil de abandono.',
        ],
      },
      {
        id: 'decisoes',
        title: '03. Decisões Estratégicas de Design',
        lead: 'Justificativas racionais para cada escolha de arquitetura e interface.',
        paragraphs: [
          'Como as decisões foram tomadas em conjunto com engenharia e produto.',
        ],
        decisionLog: [
          {
            challenge: 'Alta taxa de erro no preenchimento de formulário longo.',
            decision: 'Divisão em esteira multi-etapas com salvamento automático.',
            rationale: 'Reduziu a carga cognitiva e permitiu retomar o fluxo sem perda de dados.',
          },
        ],
      },
      {
        id: 'solucao',
        title: '04. A Solução Construída',
        lead: 'Apresentação da interface final e das interações projetadas.',
        paragraphs: [
          'Visão geral das telas, padrões de componentes e acessibilidade.',
        ],
        image: {
          url: '/src/assets/images/minha-tela.jpg',
          alt: 'Tela do fluxo principal',
          caption: 'Visão da nova esteira responsiva com suporte a atalhos de teclado.',
        },
      },
      {
        id: 'aprendizados',
        title: '05. Validação e Aprendizados',
        lead: 'O que funcionou, o que foi ajustado e lições para o próximo ciclo.',
        paragraphs: [
          'Reflexão sobre os resultados alcançados e próximos passos planejados.',
        ],
      },
    ],
  },

  // VERSÃO EM INGLÊS (Mantenha paridade de slugs e estrutura)
  en: {
    slug: 'meu-novo-projeto',
    title: 'Product or Company Name',
    clientOrContext: 'B2B SaaS / FinTech / E-Commerce',
    tagline: 'High-impact value proposition sentence summarizing project delivery.',
    summary: 'Concise summary of up to two lines for the homepage cards.',
    coverImage: '/src/assets/images/minha-capa.jpg',
    tags: ['Product Discovery', 'Design System', 'UX Research', 'B2B'],
    metadata: {
      role: 'Lead Product Designer (Discovery, UX/UI, Prototyping)',
      timeline: '4 months (Q1 2026)',
      team: '1 PM, 1 Tech Lead, 3 Engineers, 1 Designer',
      platform: 'Responsive Web Desktop & Mobile',
      tools: ['Figma', 'Miro', 'Hotjar', 'Mixpanel'],
    },
    isPlaceholder: false,
    metrics: [
      {
        value: '+25%',
        label: 'Conversion rate lift',
        context: 'A/B test outcome following new checkout rollout',
        isPlaceholderMetric: false,
      },
    ],
    sections: [
      {
        id: 'contexto',
        title: '01. Business & Product Context',
        lead: 'Introductory paragraph outlining the strategic business landscape.',
        paragraphs: [
          'Detailed explanation of company objectives and acute user pain points.',
        ],
      },
      {
        id: 'problema',
        title: '02. Problem & Opportunity',
        lead: 'What was the core bottleneck demanding resolution?',
        paragraphs: [
          'Analysis of discoveries made during qualitative and quantitative immersion.',
        ],
      },
      {
        id: 'decisoes',
        title: '03. Strategic Design Decisions',
        lead: 'Logical rationale governing architectural and interface choices.',
        paragraphs: [
          'How trade-offs were balanced with engineering and product management.',
        ],
        decisionLog: [
          {
            challenge: 'High drop-off rate on complex legacy intake forms.',
            decision: 'Modularized multi-step flow with background auto-save.',
            rationale: 'Decreased cognitive fatigue and enabled seamless cross-session recovery.',
          },
        ],
      },
      {
        id: 'solucao',
        title: '04. The Delivered Solution',
        lead: 'Showcase of the production interface and system components.',
        paragraphs: [
          'Overview of component standards, responsive layouts, and WCAG AA contrast.',
        ],
      },
      {
        id: 'aprendizados',
        title: '05. Retrospective & Learnings',
        lead: 'What succeeded, iterations made, and key takeaways for future squads.',
        paragraphs: [
          'Reflections on quantifiable outcomes and next roadmap iterations.',
        ],
      },
    ],
  },
};
```

---

## 5. Como Testar Localmente e Publicar na Vercel

```bash
# Iniciar o servidor de desenvolvimento local
npm run dev

# Checar validação TypeScript
npm run lint

# Testar build de produção
npm run build
```

### Publicar na Vercel:
1. Suba as alterações para o seu repositório no GitHub (`git push origin main`).
2. A Vercel executará o deploy automaticamente através do arquivo `vercel.json` configurado.
