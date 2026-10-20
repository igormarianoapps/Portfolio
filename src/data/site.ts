import { SkillGroup, SocialLinks } from '../types/portfolio';

export interface DifferentialPillar {
  id: string;
  number: string;
  title: { pt: string; en: string };
  desc: { pt: string; en: string };
}

export interface SiteConfig {
  name: string;
  portraitImage: string;
  portraitPlaceholderNote: string;
  tags: string[];
  role: {
    pt: string;
    en: string;
  };
  headline: {
    pt: string;
    en: string;
  };
  subheadline: {
    pt: string;
    en: string;
  };
  aboutStatement: {
    pt: string;
    en: string;
  };
  contacts: SocialLinks;
  heroCtas: {
    explore: { pt: string; en: string };
    talk: { pt: string; en: string };
  };
  pillars: DifferentialPillar[];
  finalCta: {
    title: { pt: string; en: string };
    text: { pt: string; en: string };
    linkedinAction: { pt: string; en: string };
  };
  behanceCta: {
    eyebrow: { pt: string; en: string };
    title: { pt: string; en: string };
    description: { pt: string; en: string };
    buttonText: { pt: string; en: string };
    url: string;
  };
  nav: {
    home: { pt: string; en: string };
    projects: { pt: string; en: string };
    about: { pt: string; en: string };
    contact: { pt: string; en: string };
  };
  skills: {
    pt: SkillGroup[];
    en: SkillGroup[];
  };
  aboutPage: {
    eyebrow: { pt: string; en: string };
    title: { pt: string; en: string };
    subtitle: { pt: string; en: string };
    sections: {
      whoIAm: {
        title: { pt: string; en: string };
        paragraphs: { pt: string[]; en: string[] };
      };
      experienceInPractice: {
        title: { pt: string; en: string };
        paragraphs: { pt: string[]; en: string[] };
      };
      methodology: {
        title: { pt: string; en: string };
        steps: {
          number: string;
          title: { pt: string; en: string };
          desc: { pt: string; en: string };
        }[];
      };
      competencies: {
        title: { pt: string; en: string };
        items: {
          title: { pt: string; en: string };
          desc: { pt: string; en: string };
        }[];
      };
      representativeExperiences: {
        title: { pt: string; en: string };
        items: {
          tag: { pt: string; en: string };
          title: { pt: string; en: string };
          desc: { pt: string; en: string };
          link?: string;
          linkText?: { pt: string; en: string };
        }[];
      };
      motivation: {
        title: { pt: string; en: string };
        intro: { pt: string; en: string };
        highlight: { pt: string; en: string };
      };
    };
  };
  contactPage: {
    title: { pt: string; en: string };
    subtitle: { pt: string; en: string };
    whatsappIntro: { pt: string; en: string };
    linkedinIntro: { pt: string; en: string };
    emailIntro: { pt: string; en: string };
  };
}

export const siteConfig: SiteConfig = {
  name: "Igor Mariano",
  // Fotografia original de Igor Mariano
  portraitImage: "/Background.jpg",
  portraitPlaceholderNote: "Fotografia original de Igor Mariano.",
  tags: ["Product Designer", "UX/UI", "Design Systems", "Product Strategy", "Data-Informed"],
  role: {
    pt: "Product Designer · UX/UI · Design Systems",
    en: "Product Designer · UX/UI · Design Systems",
  },
  headline: {
    pt: "Transformando dados em decisões de negócio.",
    en: "Transforming data into business decisions.",
  },
  subheadline: {
    pt: "Conecto pesquisa, experiência e estratégia para transformar problemas complexos em decisões de design.",
    en: "Connecting research, experience, and strategy to turn complex problems into design decisions.",
  },
  aboutStatement: {
    pt: "Conecto pesquisa, experiência e estratégia para transformar problemas complexos em decisões de design.",
    en: "Connecting research, experience, and strategy to turn complex problems into design decisions.",
  },
  contacts: {
    whatsapp: {
      label: "WhatsApp",
      url: "https://wa.me/5562999036078?text=Ol%C3%A1%20Igor,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar!",
      isPlaceholder: false,
      note: "Canal oficial no WhatsApp (+55 62 99903-6078)",
    },
    linkedin: {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/uxigormariano/",
      isPlaceholder: false,
      note: "Perfil oficial no LinkedIn (uxigormariano)",
    },
    email: {
      label: "E-mail",
      address: "ux.igormariano@gmail.com",
      isPlaceholder: false,
      note: "Canal profissional de contato (ux.igormariano@gmail.com)",
    },
    behance: {
      label: "Behance",
      url: "https://www.behance.net/igormariano",
      isPlaceholder: false,
      note: "Portfólio no Behance (igormariano)",
    },
  },
  heroCtas: {
    explore: {
      pt: "Conhecer projetos",
      en: "Explore projects",
    },
    talk: {
      pt: "Vamos conversar",
      en: "Let's talk",
    },
  },
  // Faixa compacta de diferenciais editoriais (substitui os antigos cards grandes)
  pillars: [
    {
      id: "data-decisions",
      number: "01",
      title: {
        pt: "Decisões orientadas por dados",
        en: "Data-informed decisions",
      },
      desc: {
        pt: "Mapeamento analítico de funis combinado a pesquisas qualitativas para priorizar dores reais com impacto mensurável.",
        en: "Quantitative funnel analysis paired with qualitative user research to eliminate guesswork and target validated pain points.",
      },
    },
    {
      id: "user-experience",
      number: "02",
      title: {
        pt: "Experiências centradas no usuário",
        en: "User-centered experiences",
      },
      desc: {
        pt: "Arquitetura da informação clara e usabilidade ergonômica, desenhadas para reduzir o esforço cognitivo e acelerar fluxos.",
        en: "Sharp information architecture and ergonomic usability engineered to reduce cognitive strain and streamline user workflows.",
      },
    },
    {
      id: "scalable-systems",
      number: "03",
      title: {
        pt: "Sistemas de design escaláveis",
        en: "Scalable design systems",
      },
      desc: {
        pt: "Tokens semânticos, governança viva e padrões consistentes que aceleram a entrega entre equipes de Design e Engenharia.",
        en: "Semantic tokens, living governance, and reusable components that multiply delivery velocity across squads.",
      },
    },
  ],
  finalCta: {
    title: {
      pt: "Vamos nos conectar?",
      en: "Let's connect?",
    },
    text: {
      pt: "",
      en: "",
    },
    linkedinAction: {
      pt: "Conectar no LinkedIn ↗",
      en: "Connect on LinkedIn ↗",
    },
  },
  behanceCta: {
    eyebrow: {
      pt: "Arquivo & Explorações Visuais",
      en: "Archive & Visual Explorations",
    },
    title: {
      pt: "Quer ver mais projetos que já criei?",
      en: "Want to explore more projects I've created?",
    },
    description: {
      pt: "Além dos cases estratégicos detalhados neste portfólio, mantenho no Behance outros projetos de interfaces, estudos visuais e identidades que desenvolvi ao longo da minha trajetória.",
      en: "Beyond the detailed product cases featured in this portfolio, I keep an archive on Behance with additional interface designs, visual explorations, and creative projects from throughout my journey.",
    },
    buttonText: {
      pt: "Ver mais projetos no Behance",
      en: "View more projects on Behance",
    },
    url: "https://www.behance.net/igormariano",
  },
  nav: {
    home: { pt: "Home", en: "Home" },
    projects: { pt: "Projetos", en: "Projects" },
    about: { pt: "Sobre", en: "About" },
    contact: { pt: "Contato", en: "Contact" },
  },
  skills: {
    pt: [
      {
        id: "strategy",
        title: "Estratégia e Produto",
        skills: [
          "Product Discovery",
          "Estratégia de produto",
          "Pesquisa com usuários",
          "Análise de dados & métricas",
        ],
      },
      {
        id: "experience",
        title: "Experiência e Interface",
        skills: [
          "UX Research",
          "UX/UI Design",
          "Usabilidade e Heurísticas",
          "Arquitetura da informação",
          "Design responsivo & acessível",
        ],
      },
      {
        id: "systems",
        title: "Design Systems",
        skills: [
          "Criação e evolução de Design Systems",
          "Componentes e padrões reutilizáveis",
          "Governança e documentação viva",
          "Design Tokens & Design Ops",
        ],
      },
      {
        id: "collaboration",
        title: "Colaboração",
        skills: [
          "Facilitação de dinâmicas e workshops",
          "Validação de hipóteses",
          "Alinhamento com Engenharia e PMs",
          "Métricas e critérios de aceite",
        ],
      },
    ],
    en: [
      {
        id: "strategy",
        title: "Strategy & Product",
        skills: [
          "Product Discovery",
          "Product Strategy",
          "User Research",
          "Data Analysis & Product Metrics",
        ],
      },
      {
        id: "experience",
        title: "Experience & Interface",
        skills: [
          "UX Research",
          "UX/UI Design",
          "Usability & Heuristic Evaluation",
          "Information Architecture",
          "Accessible Responsive Design",
        ],
      },
      {
        id: "systems",
        title: "Design Systems",
        skills: [
          "Design System Architecture & Scale",
          "Reusable Components & Patterns",
          "Governance & Living Documentation",
          "Design Tokens & Design Ops",
        ],
      },
      {
        id: "collaboration",
        title: "Collaboration & Delivery",
        skills: [
          "Workshop Facilitation & Ideation",
          "Hypothesis Validation",
          "Engineering & PM Partnership",
          "Metrics & Acceptance Criteria",
        ],
      },
    ],
  },
  aboutPage: {
    eyebrow: {
      pt: "TRAJETÓRIA & EXPERIÊNCIA",
      en: "CAREER & EXPERIENCE",
    },
    title: {
      pt: "Sobre mim e minha atuação",
      en: "About me & my design practice",
    },
    subtitle: {
      pt: "Sou Product Designer com experiência na criação e evolução de produtos digitais. Meu trabalho conecta necessidades dos usuários, objetivos de negócio e soluções que fazem sentido na prática.",
      en: "I am a Product Designer experienced in creating and evolving digital products. My work connects user needs, business goals, and practical solutions.",
    },
    sections: {
      whoIAm: {
        title: {
          pt: "Quem sou e como penso",
          en: "Who I am and how I think",
        },
        paragraphs: {
          pt: [
            "Minha trajetória começou pelo design visual, mas foi no UX/UI e no Product Design que encontrei a oportunidade de participar de algo maior: entender problemas, explorar possibilidades e contribuir para decisões que realmente impactam um produto.",
            "Gosto de entender o contexto antes de começar a desenhar. Saber quem vai utilizar a solução, quais dificuldades existem e o que a empresa precisa alcançar faz diferença no resultado.",
            "Ao longo da minha carreira, aprendi que uma boa experiência não depende apenas de uma interface bem construída. Ela precisa ser simples para quem utiliza, viável para quem desenvolve e relevante para o negócio.",
          ],
          en: [
            "My path began in visual design, but it was in UX/UI and Product Design that I found the opportunity to be part of something bigger: understanding problems, exploring possibilities, and contributing to decisions that truly impact a product.",
            "I like to understand context before starting to design. Knowing who will use the solution, what challenges exist, and what the business needs to achieve makes all the difference in the outcome.",
            "Throughout my career, I've learned that a great experience doesn't just depend on a well-crafted interface. It must be simple for users, feasible for developers, and meaningful for the business.",
          ],
        },
      },
      experienceInPractice: {
        title: {
          pt: "Minha experiência na prática",
          en: "My hands-on experience",
        },
        paragraphs: {
          pt: [
            "Já trabalhei com produtos de diferentes segmentos, incluindo plataformas SaaS, inteligência eleitoral, soluções para o mercado automotivo e aplicativos voltados à saúde e ao esporte.",
            "Em alguns projetos, participei desde as primeiras conversas sobre o produto, conduzindo pesquisas, estruturando jornadas e criando interfaces do zero. Em outros, meu desafio foi evoluir experiências existentes, identificar problemas de usabilidade e encontrar oportunidades de melhoria.",
            "Também tenho experiência na criação e evolução de Design Systems, organizando componentes, padrões e documentação para facilitar o trabalho dos times e manter a consistência dos produtos.",
            "Essa diversidade me ensinou a adaptar meu processo a diferentes realidades, trabalhar próximo de profissionais de produto e tecnologia e equilibrar qualidade, prazo e necessidades de negócio.",
          ],
          en: [
            "I have worked with products across diverse industries, including SaaS platforms, electoral intelligence, automotive market solutions, and health & sports applications.",
            "In some projects, I was involved from the earliest product discussions—conducting research, structuring journeys, and designing interfaces from scratch. In others, my challenge was evolving existing experiences, diagnosing usability bottlenecks, and discovering opportunities for improvement.",
            "I also have practical experience creating and scaling Design Systems—organizing components, patterns, and documentation to streamline team velocity and preserve consistency across products.",
            "This diversity taught me how to adapt my process to different realities, work closely alongside product and tech professionals, and balance quality, delivery deadlines, and business needs.",
          ],
        },
      },
      methodology: {
        title: {
          pt: "Como trabalho e tomo decisões",
          en: "How I work and make decisions",
        },
        steps: [
          {
            number: "01",
            title: {
              pt: "Entender antes de desenhar",
              en: "Understand before designing",
            },
            desc: {
              pt: "Começo buscando compreender o problema. Analiso dados disponíveis, comportamento dos usuários, necessidades do negócio e converso com as pessoas envolvidas para identificar o que realmente precisa ser resolvido.",
              en: "I start by seeking to understand the problem. I analyze available data, user behavior, and business needs, engaging stakeholders to uncover what truly needs solving.",
            },
          },
          {
            number: "02",
            title: {
              pt: "Explorar e validar possibilidades",
              en: "Explore and validate possibilities",
            },
            desc: {
              pt: "Com o problema mais claro, estruturo fluxos, jornadas, wireframes e protótipos. Sempre que possível, valido as hipóteses com usuários ou dados, evitando tomar decisões apenas por percepção pessoal.",
              en: "With the problem clarified, I structure flows, journeys, wireframes, and prototypes. Whenever possible, I validate hypotheses with users or data, avoiding decisions driven purely by personal assumptions.",
            },
          },
          {
            number: "03",
            title: {
              pt: "Construir junto com o time",
              en: "Build together with the team",
            },
            desc: {
              pt: "Acredito que bons produtos são construídos em conjunto. Trabalho próximo de desenvolvedores, Product Managers e outras áreas para discutir alternativas, entender limitações e encontrar soluções viáveis.",
              en: "I believe great products are built together. I work closely with developers, Product Managers, and other teams to discuss alternatives, understand constraints, and find viable solutions.",
            },
          },
          {
            number: "04",
            title: {
              pt: "Evoluir continuamente",
              en: "Evolve continuously",
            },
            desc: {
              pt: "Uma entrega não significa que o trabalho terminou. Gosto de acompanhar os resultados, identificar oportunidades de melhoria e utilizar o aprendizado para orientar as próximas decisões.",
              en: "A release doesn't mean the work is done. I like tracking results, identifying areas for improvement, and leveraging key learnings to guide future product decisions.",
            },
          },
        ],
      },
      competencies: {
        title: {
          pt: "Competências e diferenciais",
          en: "Competencies & Key Strengths",
        },
        items: [
          {
            title: {
              pt: "Product Discovery e estratégia",
              en: "Product Discovery & Strategy",
            },
            desc: {
              pt: "Experiência em pesquisa com usuários, entrevistas, análise de comportamento, identificação de oportunidades e definição de soluções alinhadas aos objetivos do produto.",
              en: "Experience in user research, interviews, behavioral analytics, opportunity discovery, and defining solutions closely aligned with product outcomes.",
            },
          },
          {
            title: {
              pt: "UX/UI e Design Systems",
              en: "UX/UI & Design Systems",
            },
            desc: {
              pt: "Atuação prática em arquitetura da informação, fluxos, prototipação, interfaces responsivas e criação de bibliotecas de componentes, padrões visuais e documentação.",
              en: "Hands-on experience in information architecture, user flows, prototyping, responsive interfaces, and component libraries with visual standards and documentation.",
            },
          },
          {
            title: {
              pt: "Dados e melhoria contínua",
              en: "Data & Continuous Improvement",
            },
            desc: {
              pt: "Utilização de ferramentas como Google Analytics e Hotjar para compreender o comportamento dos usuários, identificar pontos de abandono e apoiar decisões de design.",
              en: "Proficiency in tools like Google Analytics and Hotjar to understand user behavior, pinpoint drop-off friction points, and support data-informed design decisions.",
            },
          },
          {
            title: {
              pt: "Colaboração e visão de produto",
              en: "Collaboration & Product Vision",
            },
            desc: {
              pt: "Facilidade para conectar necessidades de usuários, negócio e tecnologia, participando de discussões estratégicas sem perder a proximidade com a execução.",
              en: "Skill in bridging user needs, business strategy, and technology feasibility—contributing to strategic roadmaps while staying closely connected to execution.",
            },
          },
        ],
      },
      representativeExperiences: {
        title: {
          pt: "Experiências que representam meu trabalho",
          en: "Experiences that showcase my work",
        },
        items: [
          {
            tag: {
              pt: "UX/UI • Otimização de experiência",
              en: "UX/UI • Experience Optimization",
            },
            title: {
              pt: "Redução do abandono no onboarding",
              en: "Reducing onboarding drop-off",
            },
            desc: {
              pt: "No Corrida Perfeita, participei da evolução da experiência de entrada do aplicativo. A partir da análise de comportamento e da revisão do fluxo, conseguimos reduzir o abandono de pouco mais de 60% para aproximadamente 20%.",
              en: "At Corrida Perfeita, I contributed to evolving the app's onboarding experience. Through behavioral analysis and flow restructuring, we reduced drop-off from over 60% to approximately 20%.",
            },
            link: "/projetos/corrida-perfeita",
            linkText: {
              pt: "Ver case Corrida Perfeita",
              en: "View Corrida Perfeita case",
            },
          },
          {
            tag: {
              pt: "Product Discovery • SaaS B2B",
              en: "Product Discovery • B2B SaaS",
            },
            title: {
              pt: "Construção de experiências para inteligência eleitoral",
              en: "Building electoral intelligence experiences",
            },
            desc: {
              pt: "Na Candidattus, trabalhei na estruturação de experiências para uma plataforma de inteligência eleitoral, participando de pesquisas, definição de fluxos e construção das interfaces, além de desenvolver um Design System desde o início.",
              en: "At Candidattus, I worked on shaping experiences for an electoral intelligence platform—conducting research, defining user journeys, designing interfaces, and establishing a Design System from the start.",
            },
            link: "/projetos/candidattus",
            linkText: {
              pt: "Ver case Candidattus",
              en: "View Candidattus case",
            },
          },
          {
            tag: {
              pt: "UX/UI • Design Systems",
              en: "UX/UI • Design Systems",
            },
            title: {
              pt: "Experiências digitais para o setor automotivo",
              en: "Digital experiences for the automotive sector",
            },
            desc: {
              pt: "Na AutoForce, trabalhei na criação e evolução de interfaces para diferentes marcas do setor automotivo, equilibrando identidade visual, usabilidade, consistência e necessidades comerciais.",
              en: "At AutoForce, I designed and evolved digital experiences for various automotive brands, balancing visual identity, usability, consistency, and commercial requirements.",
            },
            link: "/projetos/autoforce",
            linkText: {
              pt: "Ver case AutoForce",
              en: "View AutoForce case",
            },
          },
        ],
      },
      motivation: {
        title: {
          pt: "O que me motiva",
          en: "What motivates me",
        },
        intro: {
          pt: "Gosto de trabalhar em produtos que apresentam desafios reais, onde existe espaço para questionar, propor melhorias e acompanhar os resultados.",
          en: "I enjoy working on products that present real challenges—environments where there is room to question assumptions, propose improvements, and track concrete outcomes.",
        },
        highlight: {
          pt: "Para mim, design é justamente isso: transformar informações, necessidades e problemas em decisões que geram valor para as pessoas e para o negócio.",
          en: "For me, that is precisely what design is: transforming data, needs, and complex problems into decisions that create value for people and business.",
        },
      },
    },
  },
  contactPage: {
    title: {
      pt: "Vamos conversar sobre seus desafios de Produto?",
      en: "Let's discuss your next product design challenge",
    },
    subtitle: {
      pt: "Seja para estruturar um Design System escalável, acelerar um Discovery ou liderar o design de novas experiências digitais, estou à disposição.",
      en: "Whether you need to architect a scalable Design System, accelerate Product Discovery, or lead digital product design, I would love to connect.",
    },
    whatsappIntro: {
      pt: "Ideal para alinhamentos rápidos, mensagens diretas e convites para conversas iniciais.",
      en: "Best for quick conversations, immediate direct messages, and introductory chat.",
    },
    linkedinIntro: {
      pt: "Conecte-se para acompanhar artigos, atualizações de projetos e detalhes da trajetória profissional.",
      en: "Connect to explore career background, recommendations, design discussions, and network.",
    },
    emailIntro: {
      pt: "Canal formal para propostas detalhadas, documentações ou convites institucionais.",
      en: "Formal channel for detailed project briefs, institutional inquiries, or proposals.",
    },
  },
};
