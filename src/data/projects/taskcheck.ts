import type { LocalizedCaseStudy } from '../../types/portfolio';

// Imagens oficiais do case TaskCheck
const heroImage = '/images/taskcheck/hero.jpg';
const visaoDoProdutoImage = '/images/taskcheck/visao-do-produto.jpg';
const foundationsImage = '/images/taskcheck/foundations.png';
const taskCardsImage = '/images/taskcheck/task-cards.jpg';

export const taskcheckProject: LocalizedCaseStudy = {
  pt: {
    slug: 'taskcheck-design-system',
    title: 'TaskCheck',
    clientOrContext: 'SaaS B2B · Gestão de Operações',
    tagline:
      'Estruturando a evolução da TaskCheck: da criação contínua de interfaces à construção de um Design System capaz de conectar padrões, componentes e experiências entre Desktop e Mobile.',
    summary:
      'Como estruturei a primeira versão do Design System da TaskCheck para organizar padrões, facilitar a reutilização de componentes e apoiar a evolução das experiências Desktop e Mobile.',
    coverImage: heroImage,
    tags: [
      'Design System',
      'Product Design',
      'UX/UI',
      'B2B SaaS',
      'DesignOps',
    ],
    metadata: {
      role: 'Product Designer — UX/UI e Design System',
      timeline: 'Design System versão 1.0',
      team: 'Colaboração direta com Produto, Desenvolvimento e QA',
      platform: 'Desktop e Mobile',
      tools: ['Figma', 'Design Tokens', 'DesignOps', 'IA'],
    },
    isPlaceholder: false,
    metrics: [
      {
        value: '12 famílias',
        label: 'COMPONENTES PADRONIZADOS',
        context:
          'Organização de 12 famílias de componentes na versão 1.0 do Design System.',
      },
    ],
    tableOfContents: [
      { id: 'contexto', title: '01. Contexto' },
      { id: 'desafio', title: '02. O desafio' },
      { id: 'solucao', title: '03. A solução' },
      { id: 'foundations', title: '04. Foundations' },
      { id: 'componentes', title: '05. Componentes e reutilização' },
      { id: 'documentacao', title: '06. Documentação e IA' },
      { id: 'evolucao', title: '07. Evolução do sistema' },
      { id: 'aprendizados', title: '08. Aprendizados' },
    ],
    sections: [
      {
        id: 'contexto',
        title: '01. Contexto',
        lead: 'Um produto, diferentes necessidades.',
        paragraphs: [
          'A TaskCheck é uma plataforma de gestão operacional que conecta equipes administrativas e colaboradores em campo.',
        ],
        featureCards: [
          {
            title: 'Desktop — Gestão',
            description:
              'Criação e distribuição de tarefas, configuração de checklists, acompanhamento de execuções e consulta de resultados e evidências operacionais.',
            icon: 'desktop',
          },
          {
            title: 'Mobile — Execução',
            description:
              'Acesso às tarefas atribuídas, execução de atividades e checklists em campo, registro de evidências fotográficas e acompanhamento de entregas.',
            icon: 'mobile',
          },
        ],
        closingParagraph:
          'Duas experiências com necessidades diferentes, mas que precisavam compartilhar a mesma identidade visual e manter consistência conforme o produto evoluía.',
        image: {
          url: visaoDoProdutoImage,
          alt: 'Composição mostrando a tela administrativa Desktop e a experiência Mobile da TaskCheck',
          caption:
            'Visão geral do ecossistema TaskCheck: plataforma web administrativa para gestão e aplicativo móvel para execução em campo.',
          presentation: 'contain',
          frameTitle: 'TaskCheck · Ecossistema Web Desktop & App Mobile',
        },
      },
      {
        id: 'desafio',
        title: '02. O desafio',
        lead: 'Quando criar novas telas deixou de ser suficiente.',
        paragraphs: [
          'A TaskCheck evoluía rapidamente, com novas funcionalidades e fluxos sendo desenvolvidos em paralelo. Como principal responsável pelo design, eu precisava acompanhar as entregas e colaborar diretamente com produto, desenvolvimento e QA.',
          'Já existiam alguns componentes reutilizáveis, mas a estrutura oferecia pouco controle. Conforme o produto crescia, manter a consistência exigia revisitar decisões que poderiam estar padronizadas.',
        ],
        featureCards: [
          {
            title: 'Reutilização',
            description:
              'Reduzir a reconstrução de elementos recorrentes e tornar os padrões mais fáceis de reaproveitar no dia a dia.',
            icon: 'reuse',
          },
          {
            title: 'Consistência',
            description:
              'Estabelecer uma linguagem compartilhada entre interfaces, estados visuais e plataformas.',
            icon: 'consistency',
          },
          {
            title: 'Colaboração',
            description:
              'Facilitar o entendimento das decisões visuais e o alinhamento técnico entre design e desenvolvimento.',
            icon: 'collab',
          },
        ],
        quote: {
          text: 'O desafio não era apenas entregar novas interfaces, mas criar uma estrutura capaz de acompanhar a evolução do produto.',
          author: 'Igor Mariano',
          role: 'Product Designer',
        },
      },
      {
        id: 'solucao',
        title: '03. A solução',
        lead: 'Uma base construída para evoluir.',
        paragraphs: [
          'Decidi reconstruir os principais componentes do zero, mantendo a identidade visual que já vinha utilizando na TaskCheck.',
          'A intenção não era redesenhar o produto, mas organizar os padrões existentes e estabelecer uma estrutura que oferecesse mais controle sobre as decisões de interface.',
        ],
        stepCards: [
          {
            number: '01',
            title: 'Identificar padrões',
            description:
              'Analisar elementos recorrentes e decisões utilizadas nas interfaces.',
          },
          {
            number: '02',
            title: 'Estruturar fundamentos',
            description:
              'Organizar cores, tipografia, espaçamento e regras visuais.',
          },
          {
            number: '03',
            title: 'Criar componentes',
            description:
              'Transformar padrões em elementos reutilizáveis para Desktop e Mobile.',
          },
          {
            number: '04',
            title: 'Aplicar e evoluir',
            description:
              'Utilizar a biblioteca em paralelo à evolução do produto.',
          },
        ],
        closingParagraph:
          'A versão 1.0 foi pensada como uma base enxuta e funcional, capaz de trazer consistência sem interromper as entregas do produto.',
      },
      {
        id: 'foundations',
        title: '04. Foundations',
        lead: 'Consistência começa nos fundamentos.',
        paragraphs: [
          'Organizei os principais fundamentos visuais da TaskCheck para reduzir decisões isoladas e manter uma referência compartilhada entre as interfaces.',
        ],
        conceptualTags: [
          'Color Styles',
          'Typography',
          'Spacing',
          'Layout Rules',
        ],
        image: {
          url: foundationsImage,
          alt: 'Captura vertical da documentação de Foundations do Design System TaskCheck',
          caption:
            'Documentação dos fundamentos visuais da TaskCheck: paleta cromática, escala tipográfica Poppins, sistema de espaçamento de 4px e grids de layout.',
          presentation: 'contain',
          scrollable: true,
          viewportHeight: '540px',
          frameTitle: 'TaskCheck · Foundations & Design Tokens (Figma)',
        },
      },
      {
        id: 'componentes',
        title: '05. Componentes e reutilização',
        lead: 'Consistência não significa interfaces iguais.',
        paragraphs: [
          'Desktop e Mobile compartilhavam os mesmos princípios visuais, mas atendiam contextos diferentes.',
          'Os Task Cards são um exemplo dessa decisão.',
        ],
        featureCards: [
          {
            title: 'Desktop — Acompanhamento',
            description:
              'Prioriza informações administrativas, indicadores operacionais, prazos e ações diretas de gestão.',
            icon: 'desktop',
          },
          {
            title: 'Mobile — Execução',
            description:
              'Prioriza identificação imediata da tarefa, andamento, prazo e próxima ação prática do colaborador.',
            icon: 'mobile',
          },
        ],
        image: {
          url: taskCardsImage,
          alt: 'Composição com Task Cards Desktop e Mobile da TaskCheck demonstrando decisões compartilhadas',
          caption:
            'Anatomia e comportamento dos Task Cards: mesmas decisões estruturais adaptadas aos contextos de gestão (Desktop) e operação (Mobile).',
          presentation: 'contain',
          frameTitle: 'TaskCheck · Componente Task Card (Desktop vs. Mobile)',
        },
        conceptualTags: [
          'Identificação',
          'Flags',
          'Status',
          'Prazo',
          'Ações',
        ],
        closingParagraph:
          'Os componentes passaram a concentrar decisões que antes precisavam ser consideradas individualmente em cada interface.',
      },
      {
        id: 'documentacao',
        title: '06. Documentação e IA',
        lead: 'Componentes precisam de regras, não apenas de aparência.',
        paragraphs: [
          'Além de organizar os componentes, estruturei orientações de utilização, composição de interfaces e comportamento de estados, criando uma referência prática para design e desenvolvimento.',
        ],
        featureCardsLayout: '2x2',
        featureCards: [
          {
            title: '01 — Getting Started',
            description: 'Como começar a utilizar a biblioteca.',
            icon: 'book',
          },
          {
            title: '02 — Component Recipes',
            description: 'Como configurar e reutilizar os componentes.',
            icon: 'recipes',
          },
          {
            title: '03 — Interface Patterns',
            description:
              'Como combinar elementos e construir interfaces consistentes.',
            icon: 'patterns',
          },
          {
            title: '04 — Developer Handoff & QA',
            description:
              'Como orientar a implementação e validar os resultados.',
            icon: 'handoff',
          },
        ],
        aiHighlight: {
          title: 'IA como apoio ao processo de design.',
          text: 'Utilizei IA como apoio à análise de padrões, à organização das definições e à estruturação da documentação. As ferramentas ajudaram a explorar alternativas e revisar orientações, mantendo a curadoria e as decisões de design sob minha responsabilidade.',
          badge: 'Apoio ao Processo',
        },
      },
      {
        id: 'evolucao',
        title: '07. Evolução do sistema',
        lead: 'Uma versão 1.0 com espaço para crescer.',
        paragraphs: [
          'A primeira versão priorizou os fundamentos e os componentes mais recorrentes. Outras estruturas foram identificadas como oportunidades de expansão, permitindo que o sistema acompanhasse novas necessidades do produto.',
        ],
        systemComparison: {
          left: {
            title: 'Versão 1.0 — Base estruturada',
            badge: 'Versão 1.0 Entregue',
            items: [
              'Foundations',
              'Buttons e Fields',
              'Selection Controls',
              'Status Badge',
              'Modal e ícones',
              'Task Cards',
              'Attachments',
            ],
          },
          right: {
            title: 'V2 — Oportunidades de evolução',
            badge: 'Oportunidades de Expansão',
            items: [
              'Navegação completa',
              'Header',
              'Fluxo de criação de tarefas',
              'Cards do Feed',
              'Filtros e busca',
              'Tabelas e listagens',
              'Padrões de relatórios',
            ],
          },
        },
      },
      {
        id: 'aprendizados',
        title: '08. Aprendizados',
        lead: 'Mais do que organizar componentes.',
        paragraphs: [
          'Conciliar entregas contínuas com a necessidade de estruturar um produto em crescimento mudou minha forma de pensar design.',
          'Passei a observar com mais atenção os padrões recorrentes, a reutilização e a maneira como decisões visuais poderiam facilitar o trabalho de outras pessoas.',
          'O principal aprendizado foi entender que um Design System não começa pela quantidade de componentes, mas pela capacidade de transformar decisões em uma estrutura útil e consistente para o produto.',
        ],
        learningHighlights: {
          headline:
            'Um Design System não começa pela quantidade de componentes, mas pela capacidade de transformar decisões em uma estrutura útil e consistente para o produto.',
          title: 'Três aprendizados centrais deste projeto',
          learnings: [
            {
              number: '01',
              title: 'Decisões antes de componentes',
              paragraphs: [
                'Padronizar a linguagem e os fundamentos é mais valioso do que construir bibliotecas gigantes que não se conectam ao ritmo de entrega do time.',
              ],
            },
            {
              number: '02',
              title: 'Consistência com respeito ao contexto',
              paragraphs: [
                'Interfaces Desktop e Mobile compartilham os mesmos princípios visuais, mas devem priorizar densidades e ações adequadas a cada ambiente de uso.',
              ],
            },
            {
              number: '03',
              title: 'Documentação como ponte com engenharia',
              paragraphs: [
                'Regras claras de uso, receitas de componentes e critérios de handoff reduzem retrabalho e constroem autonomia na equipe.',
              ],
            },
          ],
        },
      },
    ],
  },
  en: {
    slug: 'taskcheck-design-system',
    title: 'TaskCheck',
    clientOrContext: 'B2B SaaS · Operations Management',
    tagline:
      'Structuring TaskCheck’s evolution: from continuous interface delivery to building a Design System connecting patterns, components, and experiences across Desktop and Mobile.',
    summary:
      'How I structured the first version of TaskCheck’s Design System to standardize patterns, accelerate component reuse, and support Desktop and Mobile product evolution.',
    coverImage: heroImage,
    tags: [
      'Design System',
      'Product Design',
      'UX/UI',
      'B2B SaaS',
      'DesignOps',
    ],
    metadata: {
      role: 'Product Designer — UX/UI & Design System',
      timeline: 'Design System version 1.0',
      team: 'Direct collaboration with Product, Engineering, and QA',
      platform: 'Desktop & Mobile',
      tools: ['Figma', 'Design Tokens', 'DesignOps', 'AI'],
    },
    isPlaceholder: false,
    metrics: [
      {
        value: '12 families',
        label: 'STANDARDIZED COMPONENTS',
        context:
          'Organization of 12 component families in Design System version 1.0.',
      },
    ],
    tableOfContents: [
      { id: 'contexto', title: '01. Context' },
      { id: 'desafio', title: '02. The challenge' },
      { id: 'solucao', title: '03. The solution' },
      { id: 'foundations', title: '04. Foundations' },
      { id: 'componentes', title: '05. Components & reuse' },
      { id: 'documentacao', title: '06. Documentation & AI' },
      { id: 'evolucao', title: '07. System evolution' },
      { id: 'aprendizados', title: '08. Learnings' },
    ],
    sections: [
      {
        id: 'contexto',
        title: '01. Context',
        lead: 'One product, different needs.',
        paragraphs: [
          'TaskCheck is an operational management platform connecting administrative teams with field workers.',
        ],
        featureCards: [
          {
            title: 'Desktop — Management',
            description:
              'Task creation and dispatch, checklist configuration, real-time execution tracking, and review of operational evidence.',
            icon: 'desktop',
          },
          {
            title: 'Mobile — Execution',
            description:
              'Access to assigned tasks, field execution of checklists, photo evidence capture, and delivery tracking.',
            icon: 'mobile',
          },
        ],
        closingParagraph:
          'Two experiences with distinct contextual needs, yet requiring a shared visual identity and cohesive behavior as the product expanded.',
        image: {
          url: visaoDoProdutoImage,
          alt: 'Composition showing TaskCheck Desktop administrative console and Mobile application experience',
          caption:
            'TaskCheck ecosystem overview: administrative web platform for management and mobile app for on-site execution.',
          presentation: 'contain',
          frameTitle: 'TaskCheck · Web Desktop & Mobile App Ecosystem',
        },
      },
      {
        id: 'desafio',
        title: '02. The challenge',
        lead: 'When creating new screens was no longer enough.',
        paragraphs: [
          'TaskCheck was evolving rapidly, with new features and workflows being developed concurrently. As lead designer, I needed to keep pace with delivery while collaborating directly with Product, Engineering, and QA.',
          'A few reusable components already existed, but the setup offered limited control. As the product expanded, preserving consistency required continually revisiting decisions that should have been standardized.',
        ],
        featureCards: [
          {
            title: 'Reuse',
            description:
              'Minimize recurring element reconstruction and make core patterns seamless to leverage daily.',
            icon: 'reuse',
          },
          {
            title: 'Consistency',
            description:
              'Establish a unified language across screens, interactive states, and device form factors.',
            icon: 'consistency',
          },
          {
            title: 'Collaboration',
            description:
              'Facilitate visual decision comprehension and streamline technical handoff with engineering.',
            icon: 'collab',
          },
        ],
        quote: {
          text: 'The challenge was not merely delivering new interfaces, but establishing a framework capable of scaling alongside the product.',
          author: 'Igor Mariano',
          role: 'Product Designer',
        },
      },
      {
        id: 'solucao',
        title: '03. The solution',
        lead: 'A foundation built to evolve.',
        paragraphs: [
          'I decided to rebuild the primary components from scratch, preserving the visual identity already established across TaskCheck.',
          'The goal was not to redesign the product, but to structure existing patterns into a robust framework that afforded greater control over interface decisions.',
        ],
        stepCards: [
          {
            number: '01',
            title: 'Identify patterns',
            description:
              'Analyze recurring elements and established interface decisions.',
          },
          {
            number: '02',
            title: 'Structure foundations',
            description:
              'Standardize color tokens, typography, spacing, and visual rules.',
          },
          {
            number: '03',
            title: 'Create components',
            description:
              'Transform patterns into reusable components for Desktop and Mobile.',
          },
          {
            number: '04',
            title: 'Apply & evolve',
            description:
              'Leverage the component library in parallel with product evolution.',
          },
        ],
        closingParagraph:
          'Version 1.0 was designed as a lean, pragmatic foundation capable of driving consistency without halting active product delivery.',
      },
      {
        id: 'foundations',
        title: '04. Foundations',
        lead: 'Consistency begins in the foundations.',
        paragraphs: [
          'I organized TaskCheck’s core visual foundations to eliminate ad-hoc styling and provide a reliable, shared baseline across every screen.',
        ],
        conceptualTags: [
          'Color Styles',
          'Typography',
          'Spacing',
          'Layout Rules',
        ],
        image: {
          url: foundationsImage,
          alt: 'Vertical documentation capture of TaskCheck Design System Foundations',
          caption:
            'TaskCheck visual foundations documentation: color palette, Poppins typographic scale, 4px spacing matrix, and responsive layout grids.',
          presentation: 'contain',
          scrollable: true,
          viewportHeight: '540px',
          frameTitle: 'TaskCheck · Foundations & Design Tokens (Figma)',
        },
      },
      {
        id: 'componentes',
        title: '05. Components & reuse',
        lead: 'Consistency does not mean identical interfaces.',
        paragraphs: [
          'Desktop and Mobile shared identical visual principles, but served distinct operational realities.',
          'The Task Cards illustrate this deliberate architectural decision.',
        ],
        featureCards: [
          {
            title: 'Desktop — Oversight',
            description:
              'Prioritizes administrative data density, operational progress indicators, deadlines, and direct management actions.',
            icon: 'desktop',
          },
          {
            title: 'Mobile — Execution',
            description:
              'Prioritizes instant task recognition, completion progress, deadline proximity, and next actionable steps for the worker.',
            icon: 'mobile',
          },
        ],
        image: {
          url: taskCardsImage,
          alt: 'Composition of TaskCheck Desktop and Mobile Task Cards highlighting shared architectural decisions',
          caption:
            'Task Card anatomy and responsive behavior: unified design decisions tailored to administrative management (Desktop) and on-site operation (Mobile).',
          presentation: 'contain',
          frameTitle: 'TaskCheck · Task Card Component (Desktop vs. Mobile)',
        },
        conceptualTags: [
          'Identification',
          'Flags',
          'Status',
          'Deadline',
          'Actions',
        ],
        closingParagraph:
          'The components concentrated design logic that previously had to be re-evaluated individually on every single screen.',
      },
      {
        id: 'documentacao',
        title: '06. Documentation & AI',
        lead: 'Components require guidelines, not merely appearance.',
        paragraphs: [
          'Beyond building components, I structured comprehensive usage guidelines, composition rules, and state behaviors, providing an actionable reference for both design and engineering.',
        ],
        featureCardsLayout: '2x2',
        featureCards: [
          {
            title: '01 — Getting Started',
            description: 'How to get started using the component library.',
            icon: 'book',
          },
          {
            title: '02 — Component Recipes',
            description: 'How to configure and reuse components.',
            icon: 'recipes',
          },
          {
            title: '03 — Interface Patterns',
            description:
              'How to combine elements to build consistent interfaces.',
            icon: 'patterns',
          },
          {
            title: '04 — Developer Handoff & QA',
            description:
              'How to guide implementation and audit visual quality.',
            icon: 'handoff',
          },
        ],
        aiHighlight: {
          title: 'AI as process support in design.',
          text: 'I leveraged AI to accelerate pattern analysis, streamline definition frameworks, and structure documentation. The tools helped explore design alternatives and refine guidelines, while keeping curation and final design decisions entirely under my responsibility.',
          badge: 'Process Support',
        },
      },
      {
        id: 'evolucao',
        title: '07. System evolution',
        lead: 'A version 1.0 with room to grow.',
        paragraphs: [
          'Version 1 focused on foundations and high-frequency components. Additional structures were documented as expansion opportunities, allowing the system to scale alongside evolving product demands.',
        ],
        systemComparison: {
          left: {
            title: 'Version 1.0 — Structured Foundation',
            badge: 'Shipped Version 1.0',
            items: [
              'Foundations',
              'Buttons & Fields',
              'Selection Controls',
              'Status Badge',
              'Modal & Icons',
              'Task Cards',
              'Attachments',
            ],
          },
          right: {
            title: 'V2 — Expansion Opportunities',
            badge: 'Roadmap Opportunities',
            items: [
              'Complete Navigation System',
              'Global Header',
              'Task Creation Flow',
              'Feed Cards',
              'Filters & Search',
              'Tables & Data Lists',
              'Report Patterns',
            ],
          },
        },
      },
      {
        id: 'aprendizados',
        title: '08. Learnings',
        lead: 'More than organizing components.',
        paragraphs: [
          'Balancing continuous sprint deliveries with the necessity of structuring a growing digital product transformed my design mindset.',
          'I began paying closer attention to recurring patterns, systemic reuse, and how deliberate visual decisions streamline cross-functional collaboration.',
          'The primary takeaway was understanding that a Design System is not defined by its sheer component count, but by its capacity to translate decisions into a useful, cohesive baseline for the product.',
        ],
        learningHighlights: {
          headline:
            'A Design System is not defined by its component count, but by its capacity to translate decisions into a useful, cohesive baseline for the product.',
          title: 'Three core takeaways from this initiative',
          learnings: [
            {
              number: '01',
              title: 'Decisions before components',
              paragraphs: [
                'Standardizing visual language and foundational tokens yields greater leverage than constructing sprawling component libraries disconnected from real sprint velocity.',
              ],
            },
            {
              number: '02',
              title: 'Consistency respectful of context',
              paragraphs: [
                'Desktop and Mobile share cohesive visual principles, but must optimize data density and interactions specifically tailored to each environment.',
              ],
            },
            {
              number: '03',
              title: 'Documentation as an engineering bridge',
              paragraphs: [
                'Actionable recipes, clear states, and standardized handoff criteria dramatically cut rework and foster genuine team autonomy.',
              ],
            },
          ],
        },
      },
    ],
  },
};
