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
    title: { pt: string; en: string };
    subtitle: { pt: string; en: string };
    sections: {
      positioning: {
        title: { pt: string; en: string };
        content: { pt: string[]; en: string[] };
      };
      trajectory: {
        title: { pt: string; en: string };
        content: { pt: string[]; en: string[] };
      };
      methodology: {
        title: { pt: string; en: string };
        steps: {
          number: string;
          title: { pt: string; en: string };
          desc: { pt: string; en: string };
        }[];
      };
      differentiators: {
        title: { pt: string; en: string };
        items: {
          title: { pt: string; en: string };
          desc: { pt: string; en: string };
        }[];
      };
      initiatives: {
        title: { pt: string; en: string };
        items: {
          year: string;
          title: { pt: string; en: string };
          desc: { pt: string; en: string };
        }[];
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
    title: {
      pt: "Sobre mim e minha atuação",
      en: "About me & my design practice",
    },
    subtitle: {
      pt: "Investigando problemas complexos, estruturando sistemas e gerando clareza para decisões de produto.",
      en: "Investigating complex problems, structuring systems, and bringing clarity to product decisions.",
    },
    sections: {
      positioning: {
        title: {
          pt: "Posicionamento e Propósito",
          en: "Positioning & Purpose",
        },
        content: {
          pt: [
            "Minha trajetória como Product Designer é pautada na crença de que design não é ornamentação visual posterior, mas sim a disciplina fundamental de compreender profundamente o problema antes de propor a solução.",
            "Trabalho na interseção entre estratégia de produto, pesquisa centrada no usuário e rigor arquitetural de Design Systems. Essa postura me permite transitar confortavelmente entre discussões de viabilidade técnica com engenheiros, alinhamentos de roadmap com Product Managers e conversas estratégicas de retorno sobre investimento com lideranças executivas.",
          ],
          en: [
            "My path as a Product Designer is rooted in the conviction that design is never mere aesthetic afterthought, but the core discipline of deeply understanding the problem before committing to a solution.",
            "I operate at the intersection of product strategy, user-centered research, and the systematic rigor of Design Systems. This enables me to navigate comfortably between technical feasibility discussions with engineers, roadmap prioritization with PMs, and strategic ROI dialogues with executive leadership.",
          ],
        },
      },
      trajectory: {
        title: {
          pt: "Trajetória e Vivência Prática",
          en: "Career Journey & Hands-On Practice",
        },
        content: {
          pt: [
            "Ao longo dos anos, atuei no desenho e na evolução de produtos digitais em segmentos como SaaS B2B, plataformas de recrutamento inteligente, ecossistemas esportivos com biofeedback e soluções de alta conversão para o setor automotivo.",
            "Essa diversidade de contextos consolidou uma capacidade crítica de lidar com cenários de alta ambiguidade: diagnosticar fluxos ineficientes, traduzir requisitos complexos em arquiteturas de informação legíveis e construir linguagens visuais sustentáveis a longo prazo.",
          ],
          en: [
            "Over the years, I have shaped and scaled digital products across B2B SaaS, recruitment intelligence systems, sports performance ecosystems with real-time biofeedback, and high-conversion automotive marketing platforms.",
            "This breadth of industry exposure sharpened my ability to operate within ambiguous environments: diagnosing friction-heavy journeys, translating multifaceted operational requirements into intuitive information architecture, and establishing sustainable visual languages built to last.",
          ],
        },
      },
      methodology: {
        title: {
          pt: "Como trabalho e tomo decisões",
          en: "How I think, work and make decisions",
        },
        steps: [
          {
            number: "01",
            title: {
              pt: "Imersão e Diagnóstico de Dados",
              en: "Immersion & Quantitative Baseline",
            },
            desc: {
              pt: "Mapeio o cenário atual a partir de métricas do produto, funis de conversão, gravações de sessão e entrevistas qualitativas. O objetivo é isolar a causa-raiz do gargalo, não apenas o sintoma visível.",
              en: "I map the status quo using product telemetry, conversion funnels, session analytics, and user interviews to isolate the root cause rather than reacting to surface symptoms.",
            },
          },
          {
            number: "02",
            title: {
              pt: "Formulação e Teste de Hipóteses",
              en: "Hypothesis Formulation & Testing",
            },
            desc: {
              pt: "Defino critérios claros de sucesso antes de desenhar telas. Cada decisão visual e de fluxo responde a uma hipótese testável com critérios mensuráveis para o negócio e para o usuário.",
              en: "I establish unambiguous success criteria before drawing screens. Every layout and journey choice answers a testable hypothesis tied to measurable business and user outcomes.",
            },
          },
          {
            number: "03",
            title: {
              pt: "Prototipagem Ágil e Co-criação",
              en: "Agile Prototyping & Co-Creation",
            },
            desc: {
              pt: "Trabalho próximo a desenvolvedores e PMs desde os primeiros wireframes. Isso antecipa restrições técnicas, acelera o ciclo de entrega e garante que a intenção de design seja viável no código.",
              en: "I partner tightly with engineers and PMs starting from initial wireframes. This anticipates technical constraints, accelerates delivery velocity, and ensures design intent translates faithfully into code.",
            },
          },
          {
            number: "04",
            title: {
              pt: "Sistematização e Documentação Viva",
              en: "Systematization & Living Documentation",
            },
            desc: {
              pt: "Toda nova solução é incorporada aos padrões do Design System com tokens, acessibilidade validada e diretrizes de uso, garantindo consistência para as próximas iterações do time.",
              en: "Every validated solution is codified into the Design System with design tokens, audited accessibility, and clear usage guidelines, protecting consistency across future squad iterations.",
            },
          },
        ],
      },
      differentiators: {
        title: {
          pt: "Competências e Diferenciais",
          en: "Core Competencies & Key Strengths",
        },
        items: [
          {
            title: {
              pt: "Visão Orientada a Negócio",
              en: "Business-Aligned Perspective",
            },
            desc: {
              pt: "Compreensão de métricas financeiras, CAC, LTV, churn e tempo de ciclo operacional, alinhando propostas de design diretamente aos objetivos da empresa.",
              en: "Deep understanding of unit economics, CAC, LTV, churn, and operational cycle times, connecting design initiatives directly to strategic company targets.",
            },
          },
          {
            title: {
              pt: "Rigor em Design Systems & Ops",
              en: "Design Systems & Design Ops Rigor",
            },
            desc: {
              pt: "Experiência prática na estruturação de tokens semânticos, componentização em Figma, documentação de padrões e sincronização com repositórios front-end.",
              en: "Practical experience defining semantic tokens, modular Figma architecture, living component documentation, and alignment with front-end codebases.",
            },
          },
          {
            title: {
              pt: "Acessibilidade e Usabilidade Real",
              en: "Real-World Accessibility & Usability",
            },
            desc: {
              pt: "Atenção a contraste WCAG AA, navegação por teclado, hierarquia de leitura e testes com usuários reais para assegurar produtos inclusivos e intuitivos.",
              en: "Consistent adherence to WCAG AA contrast, keyboard navigability, typographic hierarchy, and genuine usability testing for inclusive, intuitive products.",
            },
          },
        ],
      },
      initiatives: {
        title: {
          pt: "Iniciativas e Contribuições Documentadas",
          en: "Documented Initiatives & Contributions",
        },
        items: [
          {
            year: "Design Systems",
            title: {
              pt: "Evolução de Tokens e Padrões Multiplataforma",
              en: "Multi-Platform Tokens & Pattern Evolution",
            },
            desc: {
              pt: "Reestruturação de bibliotecas de componentes, eliminando retrabalho entre squads e reduzindo o tempo de entrega de novas features.",
              en: "Overhauled component libraries, eliminated cross-squad UI redundancy, and substantially reduced delivery cycle times for new features.",
            },
          },
          {
            year: "Product Discovery",
            title: {
              pt: "Reestruturação de Funis de Conversão e Onboarding",
              en: "Conversion Funnel & Onboarding Overhauls",
            },
            desc: {
              pt: "Condução de pesquisas qualitativas com clientes e análise de abandono de etapas, gerando recomendações aplicadas e validadas.",
              en: "Led qualitative customer interviews and drop-off analytics, synthesizing findings into validated layout and workflow interventions.",
            },
          },
          {
            year: "Liderança de Design",
            title: {
              pt: "Facilitação de Alinhamentos e Critérios de Aceite",
              en: "Cross-Functional Alignment & Acceptance Criteria",
            },
            desc: {
              pt: "Condução de dinâmicas com stakeholders técnicos e de negócio para transformar requisitos vagos em histórias de usuário objetivas e priorizadas.",
              en: "Facilitated structured alignment workshops with engineering and business stakeholders, transforming ambiguous requests into prioritized user stories.",
            },
          },
        ],
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
