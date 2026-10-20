import type { LocalizedCaseStudy } from '../../types/portfolio';

// Imagens reais do sistema Candidattus
const cockpitImage = '/images/candidattus/cockpit-default.png';
const navegacaoDashboardImage = '/images/candidattus/navegacao-e-dashboard.png';
const resultadoEleicoesImage = '/images/candidattus/resultado-das-eleicoes.png';
const macroAmbienteImage = '/images/candidattus/diagnostico-macro-ambiente.png';
const candidatoPreferidoImage = '/images/candidattus/candidato-preferido.png';
const escutaPoliticaImage = '/images/candidattus/escuta-politica.png';
const fluxoDesignOpsImage = '/images/candidattus/designops-fluxograma.png';
const estruturaFigmaImage = '/images/candidattus/designops-estrutura-figma.png';
const estruturaJiraImage = '/images/candidattus/designops-estrutura-jira.png';

export const candidattusProject: LocalizedCaseStudy = {
  pt: {
    slug: 'candidattus',
    title: 'Candidattus',
    clientOrContext: 'Plataforma SaaS de inteligência eleitoral',
    tagline: 'Estruturando uma plataforma de inteligência eleitoral, do produto ao processo.',
    summary:
      'Como único UX/UI Designer, atuei na arquitetura da informação, nos dashboards e na organização do processo de design e desenvolvimento de uma plataforma de inteligência eleitoral.',
    coverImage: cockpitImage,
    tags: [
      'Product Design',
      'UX/UI Design',
      'DesignOps',
      'Dashboards & IA',
    ],
    metadata: {
      role: 'Product Designer (Discovery, UX/UI, Arquitetura da Informação e DesignOps)',
      timeline: 'Projeto desenvolvido entre 2023 e 2024',
      team: 'Único UX/UI Designer, em colaboração com liderança e desenvolvimento',
      platform: 'Aplicação Web (SaaS B2B)',
      tools: ['Figma', 'DesignOps', 'Dashboards & IA'],
    },
    isPlaceholder: false,
    metrics: [
      {
        value: 'Mais autonomia',
        label: 'MENOS INTERVENÇÕES DA LIDERANÇA',
        context:
          'Fluxos organizados no Figma e Jira, reduzindo a necessidade de acompanhamento constante do CEO.',
        isPlaceholderMetric: false,
      },
      {
        value: 'Menos retrabalho',
        label: 'ENTREGAS MAIS CONSISTENTES',
        context:
          'Maior alinhamento entre protótipos aprovados e desenvolvimento após a implementação do DesignOps.',
        isPlaceholderMetric: false,
      },
    ],
    tableOfContents: [
      { id: 'desafio', title: '01. O desafio' },
      { id: 'discovery', title: '02. Discovery e pesquisa' },
      { id: 'arquitetura', title: '03. Arquitetura e identidade visual' },
      { id: 'dashboards-ia', title: '04. Dashboards e inteligência artificial' },
      { id: 'prototipacao', title: '05. Prototipação e validação' },
      { id: 'designops', title: '06. DesignOps' },
      { id: 'resultados', title: '07. Resultados e impactos' },
      { id: 'escalabilidade', title: '08. Desafios de escalabilidade' },
      { id: 'aprendizados', title: '09. Aprendizados' },
    ],
    sections: [
      {
        id: 'desafio',
        title: '01. O desafio',
        paragraphs: [
          'Quando entrei no Candidattus, a plataforma ainda estava no início: havia uma proposta ambiciosa de inteligência eleitoral, mas somente a tela inicial tinha sido desenhada. Faltava transformar essa visão em uma experiência de produto estruturada.',
          'Como único UX/UI Designer, meu primeiro desafio foi transformar essa ideia em uma experiência coerente e estruturada, capaz de organizar diferentes módulos, dashboards e funcionalidades para apoiar decisões estratégicas durante campanhas eleitorais.',
          'Ao mesmo tempo, o processo de trabalho era bastante centralizado na liderança. Alterações frequentes durante o design e desenvolvimento geravam retrabalho e inconsistências entre os protótipos aprovados e as funcionalidades implementadas, dificultando inclusive a validação pelo time de QA.',
          'Meu desafio era duplo: estruturar a experiência de um produto complexo e melhorar a forma como as decisões de design chegavam ao desenvolvimento.',
        ],
      },
      {
        id: 'discovery',
        title: '02. Discovery e pesquisa',
        lead: 'Entender o problema antes de desenhar a solução.',
        paragraphs: [
          'Construir uma plataforma de inteligência eleitoral exigia compreender diferentes perfis de usuários, necessidades estratégicas e um volume significativo de informações.',
          'O discovery combinava pesquisas quantitativas, análise de referências e informações obtidas em entrevistas com clientes. Por questões de confidencialidade, essas conversas eram conduzidas pela liderança, mas eu participava da preparação, levantando dúvidas e hipóteses que precisavam ser investigadas.',
          'Para complementar esse entendimento, utilizamos surveys com Hotjar no site do Candidattus e análises de benchmark, buscando identificar oportunidades e referências para a experiência do produto.',
        ],
        featureCards: [
          {
            title: 'Entrevistas e stakeholders',
            description:
              'Participação na preparação das entrevistas, estruturando perguntas e identificando pontos que precisavam ser esclarecidos com os clientes.',
            icon: 'users',
          },
          {
            title: 'Pesquisas quantitativas',
            description:
              'Utilização de surveys com Hotjar para coletar percepções dos usuários e complementar as informações obtidas nas conversas com clientes.',
            icon: 'chart',
          },
          {
            title: 'Benchmark e análise de referências',
            description:
              'Investigação de soluções e padrões de interação para orientar decisões de arquitetura, navegação e apresentação de dados.',
            icon: 'search',
          },
        ],
        closingParagraph:
          'As informações reunidas ajudavam a orientar a definição dos fluxos, a organização das funcionalidades e as primeiras propostas de interface.',
      },
      {
        id: 'arquitetura',
        title: '03. Arquitetura e identidade visual',
        lead: 'De uma ideia inicial à estrutura de uma plataforma completa.',
        decisionLog: [
          {
            challenge: 'Organizar módulos e funcionalidades diferentes sem fragmentar a experiência.',
            decision: 'Estruturar a navegação em três níveis: módulos, categorias e telas.',
            rationale: 'Criar uma organização comum para o produto, com padrões que pudessem ser reutilizados entre módulos.',
          },
        ],
                paragraphs: [
          'A primeira proposta visual se inspirava no cockpit de um carro esportivo. Questionei essa referência porque ela não ajudava a comunicar a finalidade analítica da plataforma.',
          'A partir disso, trabalhei em uma identidade visual orientada à leitura de dados, com hierarquia clara e padrões que pudessem ser aplicados aos diferentes módulos.',
          '### Organizando a complexidade',
          'O produto precisava reunir diferentes áreas, como gestão de candidatura, estratégia eleitoral, inteligência política e acompanhamento de indicadores.',
          'Para acomodar essas funcionalidades, estruturei uma navegação em três níveis, permitindo que os usuários acessassem módulos, categorias e telas específicas dentro de uma mesma plataforma.',
          'A navegação em três níveis criou uma base comum para os módulos, embora sua capacidade de acompanhar o crescimento do produto precisasse ser reavaliada mais adiante.',
          '### Uma linguagem visual consistente',
          'A evolução da interface também envolveu a definição de padrões visuais para dashboards, gráficos, formulários, indicadores e componentes de navegação.',
          'O objetivo era manter consistência entre as diferentes áreas e facilitar a interpretação de informações complexas, mesmo quando os conteúdos e as funcionalidades variavam bastante entre os módulos.',
          'Os padrões definidos orientaram as interfaces dos dashboards e dos demais fluxos do produto.',
        ],
        inlineImages: [
          {
            afterParagraph: 5,
            image: {
              url: navegacaoDashboardImage,
              alt: 'Estrutura visual da plataforma Candidattus reunindo navegação, indicadores e informações estratégicas',
              caption:
                'Estrutura visual da plataforma, reunindo navegação, indicadores e informações estratégicas.',
              presentation: 'contain',
              frameTitle:
                'Candidattus · Navegação e Dashboard (Três Níveis Estruturais)',
            },
          },
          {
            afterParagraph: 8,
            image: {
              url: resultadoEleicoesImage,
              alt: 'Aplicação da mesma estrutura de navegação em um módulo de análise eleitoral no Candidattus',
              caption:
                'Aplicação da mesma estrutura de navegação em um módulo de análise eleitoral.',
              presentation: 'contain',
              frameTitle:
                'Candidattus · Diagnóstico Político (Consistência entre Módulos)',
            },
          },
        ],
      },
      {
        id: 'dashboards-ia',
        title: '04. Dashboards e inteligência artificial',
        lead: 'Transformando informações complexas em decisões mais claras.',
        decisionLog: [
          {
            challenge: 'Apresentar muitos indicadores eleitorais sem dificultar a interpretação.',
            decision: 'Agrupar informações relacionadas e definir hierarquias visuais consistentes nos dashboards.',
            rationale: 'Ajudar os usuários a comparar dados e compreender cada cenário com mais clareza.',
          },
        ],
                paragraphs: [
          'Os dashboards precisavam reunir pesquisas, indicadores e dados eleitorais sem exigir que o usuário interpretasse informações dispersas em diferentes telas.',
          'Como responsável pelo UX/UI da plataforma, trabalhei na construção de dashboards que organizavam indicadores, pesquisas, dados históricos e análises estratégicas em interfaces voltadas à tomada de decisão.',
          '### Dados que ajudam a entender o cenário',
          'Os painéis foram estruturados para apresentar diferentes perspectivas da campanha, incluindo análises do ambiente político, resultados eleitorais, preferências do eleitorado e acompanhamento de atividades.',
          'Trabalhei a hierarquia dos indicadores, o agrupamento de informações relacionadas e a consistência entre gráficos para facilitar comparações e a leitura de cada cenário.',
          '### Inteligência artificial como apoio à estratégia',
          'A plataforma também incorporava recursos de inteligência artificial para apoiar a interpretação de informações e a análise de cenários.',
          'Durante sua evolução inicial, trabalhamos com uma experiência de chat com IA, permitindo que o candidato discutisse possibilidades e próximos passos para sua campanha.',
          'Posteriormente, a proposta evoluiu para experiências que conectavam análises e recursos de IA aos painéis da plataforma, aproximando a inteligência artificial das informações utilizadas pelos candidatos.',
          '### Do dado à decisão',
          'Cada painel precisava conectar os dados apresentados a uma pergunta prática da campanha, como compreender o ambiente político ou comparar preferências do eleitorado.',
          'As validações conduzidas com clientes trouxeram retornos positivos sobre os fluxos e as interfaces. Não tenho métricas de uso que permitam quantificar esse impacto.',
        ],
        inlineImages: [
          {
            afterParagraph: 4,
            image: {
              url: macroAmbienteImage,
              alt: 'Painel de diagnóstico do ambiente político no Candidattus com diferentes indicadores e visualizações para análise de cenário',
              caption:
                'Painel de diagnóstico do ambiente político, com diferentes indicadores e visualizações para análise de cenário.',
              presentation: 'contain',
              frameTitle:
                'Candidattus · Diagnóstico do Ambiente Político (Macro Ambiente)',
            },
          },
          {
            afterParagraph: 8,
            image: {
              url: candidatoPreferidoImage,
              alt: 'Visualização de preferências eleitorais no Candidattus facilitando a leitura e comparação de informações',
              caption:
                'Visualização de preferências eleitorais, organizada para facilitar a leitura e comparação de informações.',
              presentation: 'contain',
              frameTitle:
                'Candidattus · Preferência do Eleitorado (Arquétipos e Segmentação)',
            },
          },
          {
            afterParagraph: 8,
            image: {
              url: escutaPoliticaImage,
              alt: 'Interface de escuta política no Candidattus apresentando informações para acompanhamento e análise de candidatos',
              caption:
                'Interface de escuta política, apresentando informações para acompanhamento e análise de candidatos.',
              presentation: 'contain',
              frameTitle:
                'Candidattus · Escuta Política e Análise de Sentimento (Politica Vox®)',
            },
          },
        ],
      },
      {
        id: 'prototipacao',
        title: '05. Prototipação e validação',
        lead: 'Protótipos que precisavam funcionar além da apresentação.',
        paragraphs: [
          'Com diferentes módulos e regras de negócio, a prototipação era uma etapa essencial para transformar ideias em fluxos compreensíveis antes do desenvolvimento.',
          '### Validar mesmo sem contato direto',
          'Por questões de confidencialidade, eu não participava diretamente das reuniões com os clientes. Apresentava as telas e funcionalidades ao CEO, que conduzia as validações e retornava com as observações recebidas.',
          'Isso exigia protótipos altamente navegáveis no Figma: as interações precisavam ser claras o suficiente para que alguém com pouca familiaridade com a ferramenta conseguisse explorar os fluxos sem minha presença.',
          '### Dos fluxos à experiência funcional',
          'Ao longo do projeto, realizamos testes de fluxo e validações com clientes. As observações eram incorporadas às iterações de interface antes de avançarmos para o desenvolvimento.',
          'Com a chegada de ferramentas de desenvolvimento assistidas por IA, também passei a transformar algumas telas já validadas internamente em experiências funcionais para apoiar testes com clientes.',
          'Essa abordagem aproximou a validação do comportamento real do produto, sem substituir a necessidade de testar os fluxos com seus usuários.',
        ],
      },
      {
        id: 'designops',
        title: '06. DesignOps',
        lead: 'Organizar o processo para dar autonomia às pessoas e consistência às entregas.',
        decisionLog: [
          {
            challenge: 'Reduzir mudanças durante o desenvolvimento e divergências entre protótipos e entregas.',
            decision: 'Propor um fluxo compartilhado com etapas, status e documentação no Figma e no Jira.',
            rationale: 'Dar visibilidade às decisões validadas e mais autonomia à equipe durante a implementação.',
          },
        ],
                paragraphs: [
          'Além dos desafios de produto, havia um problema operacional: o acompanhamento constante da liderança durante design e desenvolvimento provocava mudanças frequentes, retrabalho e divergências entre o protótipo aprovado e a interface entregue.',
          'Sem PO ou PM naquele momento de transição, propus uma organização de trabalho baseada em etapas, responsáveis, estados claros e documentação acessível. Apresentei a proposta ao CEO, que concordou em testá-la.',
          '### Um fluxo compartilhado entre design e desenvolvimento',
          'Desenhei um fluxo que conectava backlog, discovery, refinamento, wireframe quando necessário, prototipação, validação e implementação. Também defini caminhos para documentação e para itens não incorporados ao produto.',
          'A proposta buscava tornar visível o estágio de cada demanda, seus critérios de passagem e o que já havia sido validado antes de chegar à engenharia.',
          '### Organização no Figma e no Jira',
          'No Figma, estruturei áreas para criação, desenvolvimento, itens implementados e documentação, com cards e status padronizados. No Jira, o trabalho seguia etapas compatíveis com o fluxo, facilitando o acompanhamento entre as equipes.',
          'Com etapas e status visíveis, o time passou a consultar o andamento das demandas sem depender de alinhamentos constantes com a liderança.',
          '### Mudança percebida no dia a dia',
          'Na rotina, observamos menos mudanças durante o desenvolvimento e maior consistência entre o que havia sido validado e o que era entregue. A liderança conseguia acompanhar o progresso pelos cards.',
          'Esses efeitos foram observados na rotina do time; não houve registro de indicadores quantitativos comparáveis para atribuir percentuais à melhoria.',
        ],
        inlineImages: [
          { afterParagraph: 4, image: { url: fluxoDesignOpsImage, alt: 'Fluxograma do processo DesignOps elaborado para o Candidattus', caption: 'Fluxo de trabalho proposto para organizar decisões, validações e passagem para desenvolvimento.', presentation: 'contain', frameTitle: 'Candidattus · Fluxograma DesignOps' } },
          { afterParagraph: 7, image: { url: estruturaFigmaImage, alt: 'Estrutura de áreas e status do trabalho no Figma', caption: 'Organização das etapas e status dos cards no Figma.', presentation: 'contain', frameTitle: 'Candidattus · Estrutura do Figma' } },
          { afterParagraph: 7, image: { url: estruturaJiraImage, alt: 'Etapas de trabalho organizadas no Jira', caption: 'Etapas do Jira para acompanhar o trabalho do backlog à implementação.', presentation: 'contain', frameTitle: 'Candidattus · Estrutura do Jira' } },
        ],
      },
      {
        id: 'resultados',
        title: '07. Resultados e impactos',
        lead: 'Mais previsibilidade no processo e uma plataforma útil para as campanhas.',
        paragraphs: [
          'O principal resultado do DesignOps foi tornar mais claras as etapas de cada demanda e os acordos feitos antes do desenvolvimento.',
          'Na prática, isso deu mais autonomia à equipe e diminuiu a necessidade de intervenções operacionais da liderança.',
          'No produto, os retornos das validações foram positivos e ajudaram a orientar os ajustes de fluxos e dashboards.',
          'Esses resultados são observações qualitativas do trabalho em equipe; não houve medição comparável para atribuir percentuais às melhorias.',
        ],
      },
      {
        id: 'escalabilidade',
        title: '08. Desafios de escalabilidade',
        lead: 'Quando a expansão das funcionalidades começou a comprometer a navegação.',
        paragraphs: [
          'Com a evolução do Candidattus, novas funcionalidades passaram a ser adicionadas rapidamente, muitas vezes a partir de solicitações recebidas durante as próprias campanhas.',
          'A navegação em três níveis, que inicialmente organizou a plataforma, começou a mostrar limites: encontrar recursos específicos ficou mais difícil para quem não conhecia profundamente o sistema.',
          'Propus investigar os caminhos de navegação dos usuários e revisitar a arquitetura da informação antes de definir uma nova solução. A proposta não avançou naquele momento, pois a liderança, já familiarizada com o sistema, não percebia a mesma dificuldade.',
          'O desafio permaneceu em aberto: o valor das funcionalidades precisava ser acompanhado por uma experiência que facilitasse encontrá-las.',
        ],
        featureCards: [
          {
            title: 'Expansão do produto',
            description: 'Novas funcionalidades eram incorporadas rapidamente para atender às demandas das campanhas.',
            icon: 'chart',
          },
          {
            title: 'Dificuldade de descoberta',
            description: 'O crescimento tornou menos evidente onde encontrar recursos na navegação existente.',
            icon: 'search',
          },
          {
            title: 'Investigação proposta',
            description: 'Sugeri pesquisar os caminhos de navegação e revisar a arquitetura. A proposta não foi implementada.',
            icon: 'users',
          },
        ],
      },
      {
        id: 'aprendizados',
        title: '09. Aprendizados',
        lead: 'Design de produto também é criar condições para que o time entregue melhor.',
        paragraphs: [
          'O Candidattus ampliou minha visão sobre o papel de Product Design: além das interfaces, foi necessário organizar informações complexas e melhorar a colaboração entre as áreas.',
          'Levo desse projeto a importância de tornar decisões claras para o time e de reconhecer quando uma solução precisa ser revista à medida que o produto evolui.',
        ],
        featureCards: [
          {
            title: 'Clareza nas decisões',
            description: 'Explicar e registrar decisões facilita o alinhamento entre design, desenvolvimento e liderança.',
            icon: 'users',
          },
          {
            title: 'Processos que dão autonomia',
            description: 'Um fluxo de trabalho compartilhado ajuda a reduzir retrabalho sem centralizar cada decisão.',
            icon: 'chart',
          },
          {
            title: 'Reavaliar o que funcionava',
            description: 'Consistência visual não substitui a revisão da arquitetura conforme o produto cresce.',
            icon: 'search',
          },
        ],
      },

    ],
  },
  en: {
    slug: 'candidattus',
    title: 'Candidattus',
    clientOrContext: 'Electoral intelligence SaaS platform',
    tagline: 'Structuring an electoral intelligence platform, from product to process.',
    summary:
      'As the sole UX/UI Designer, I worked on information architecture, dashboards, and design-to-development workflows for an electoral intelligence platform.',
    coverImage: cockpitImage,
    tags: [
      'Product Design',
      'UX/UI Design',
      'DesignOps',
      'Dashboards & AI',
    ],
    metadata: {
      role: 'Product Designer (Discovery, UX/UI, Information Architecture & DesignOps)',
      timeline: 'Project developed between 2023 and 2024',
      team: 'Sole UX/UI Designer, in collaboration with leadership and development',
      platform: 'Web Application (B2B SaaS)',
      tools: ['Figma', 'DesignOps', 'Dashboards & AI'],
    },
    isPlaceholder: false,
    metrics: [
      {
        value: 'More autonomy',
        label: 'FEWER LEADERSHIP INTERVENTIONS',
        context:
          'Workflows organized in Figma and Jira, reducing the need for constant CEO oversight.',
        isPlaceholderMetric: false,
      },
      {
        value: 'Less rework',
        label: 'MORE CONSISTENT DELIVERIES',
        context:
          'Greater alignment between approved prototypes and development following DesignOps implementation.',
        isPlaceholderMetric: false,
      },
    ],
    tableOfContents: [
      { id: 'desafio', title: '01. The challenge' },
      { id: 'discovery', title: '02. Discovery & research' },
      { id: 'arquitetura', title: '03. Architecture & visual identity' },
      { id: 'dashboards-ia', title: '04. Dashboards & artificial intelligence' },
      { id: 'prototipacao', title: '05. Prototyping & validation' },
      { id: 'designops', title: '06. DesignOps' },
      { id: 'resultados', title: '07. Results & impacts' },
      { id: 'escalabilidade', title: '08. Scalability challenges' },
      { id: 'aprendizados', title: '09. Learnings' },
    ],
    sections: [
      {
        id: 'desafio',
        title: '01. The challenge',
        paragraphs: [
          'When I joined Candidattus, the product was still taking shape. There was an ambitious vision for electoral intelligence, but only the initial screen had been designed. The experience still needed a clear structure.',
          'As the sole UX/UI Designer, my first challenge was to transform that concept into a coherent, structured experience capable of organizing diverse modules, dashboards, and features to support strategic decisions during political campaigns.',
          'At the same time, the workflow was heavily centralized around leadership. Frequent changes during design and development led to rework and discrepancies between approved prototypes and implemented features, which also complicated QA testing and validation.',
          'My challenge was twofold: structure a complex product experience and improve how design decisions moved into development.',
        ],
      },
      {
        id: 'discovery',
        title: '02. Discovery & research',
        lead: 'Understanding the problem before designing the solution.',
        paragraphs: [
          'Building an electoral intelligence platform required understanding diverse user profiles, strategic needs, and a significant volume of information.',
          'The discovery process combined quantitative research, benchmark analysis, and insights gathered from client interviews. Due to confidentiality, those interviews were conducted by leadership, but I actively participated in the preparation—framing questions and hypotheses that needed to be investigated.',
          'To complement this understanding, we deployed Hotjar surveys on the Candidattus website and conducted benchmark analyses to identify opportunities and best practices for the product experience.',
        ],
        featureCards: [
          {
            title: 'Interviews & stakeholders',
            description:
              'Active participation in interview preparation, structuring inquiry protocols and pinpointing issues that needed clarification with clients.',
            icon: 'users',
          },
          {
            title: 'Quantitative surveys',
            description:
              'Use of Hotjar surveys to capture user perceptions and enrich the qualitative findings from client discussions.',
            icon: 'chart',
          },
          {
            title: 'Benchmarking & market analysis',
            description:
              'Investigation of market solutions and interaction patterns to guide architecture, navigation, and data presentation decisions.',
            icon: 'search',
          },
        ],
        closingParagraph:
          'The gathered insights helped guide the definition of user flows, feature architecture, and the earliest interface proposals.',
      },
      {
        id: 'arquitetura',
        title: '03. Architecture & visual identity',
        lead: 'From an initial concept to the structure of a complete platform.',
        decisionLog: [
          {
            challenge: 'Organize different modules and features without fragmenting the experience.',
            decision: 'Structure navigation into three levels: modules, categories, and screens.',
            rationale: 'Provide a shared structure and reusable patterns across modules.',
          },
        ],
                paragraphs: [
          'The initial visual concept drew inspiration from a sports car cockpit. I challenged that reference because it did not clearly communicate the platform’s analytical purpose.',
          'I then worked on a visual identity centered on data readability, clear hierarchy, and reusable patterns across modules.',
          '### Organizing complexity',
          'The product needed to unite different areas, including campaign management, electoral strategy, political intelligence, and key indicator tracking.',
          'To accommodate these capabilities, I structured a three-level navigation system, allowing users to access modules, categories, and specific views seamlessly within a unified platform.',
          'The three-level navigation provided a shared structure across modules, although its ability to scale would need reassessment as the product grew.',
          '### A consistent visual language',
          'Evolving the interface also involved defining visual standards for dashboards, charts, forms, KPI indicators, and navigational components.',
          'The objective was to maintain consistency across disparate areas and facilitate the interpretation of complex information, even when content and features varied significantly between modules.',
          'These patterns informed the dashboards and other product flows.',
        ],
        inlineImages: [
          {
            afterParagraph: 5,
            image: {
              url: navegacaoDashboardImage,
              alt: 'Visual structure of Candidattus platform uniting navigation, indicators, and strategic information',
              caption:
                'Visual structure of the platform, uniting navigation, indicators, and strategic information.',
              presentation: 'contain',
              frameTitle:
                'Candidattus · Navigation & Dashboard (Three Structural Levels)',
            },
          },
          {
            afterParagraph: 8,
            image: {
              url: resultadoEleicoesImage,
              alt: 'Application of the same navigation structure within an electoral analysis module in Candidattus',
              caption:
                'Application of the same navigation structure within an electoral analysis module.',
              presentation: 'contain',
              frameTitle:
                'Candidattus · Political Diagnostic Module (Cross-Module Consistency)',
            },
          },
        ],
      },
      {
        id: 'dashboards-ia',
        title: '04. Dashboards & artificial intelligence',
        lead: 'Transforming complex information into clearer decisions.',
        decisionLog: [
          {
            challenge: 'Present a large volume of electoral indicators without making them harder to interpret.',
            decision: 'Group related information and establish consistent visual hierarchy across dashboards.',
            rationale: 'Help users compare data and understand each scenario more clearly.',
          },
        ],
                paragraphs: [
          'The dashboards needed to bring together research, indicators, and electoral data without forcing users to interpret information scattered across multiple screens.',
          'As the platform’s sole UX/UI Designer, I worked on dashboards organizing indicators, polling data, historical results, and strategic analyses.',
          '### Data that helps understand the landscape',
          'The dashboards were architected to present varied campaign dimensions, encompassing political climate diagnostics, historical election outcomes, voter preferences, and field activity tracking.',
          'I focused on indicator hierarchy, grouping related information, and consistent chart patterns to make comparisons and scenario reading easier.',
          '### Artificial intelligence as strategic support',
          'The platform also embedded artificial intelligence features to support data interpretation and scenario analysis.',
          'During early product evolution, we developed an AI chat assistant allowing candidates to explore possibilities and discuss strategic next steps for their campaigns.',
          'Subsequently, the product vision evolved toward embedding AI capabilities directly within platform dashboards, bringing contextual intelligence closer to the metrics candidates consult daily.',
          '### From data to decision',
          'Each dashboard needed to answer a practical campaign question, such as understanding the political landscape or comparing voter preferences.',
          'Client validation sessions brought positive feedback on the flows and interfaces. I do not have usage metrics to quantify their impact.',
        ],
        inlineImages: [
          {
            afterParagraph: 4,
            image: {
              url: macroAmbienteImage,
              alt: 'Political climate diagnostic dashboard in Candidattus featuring diverse indicators and scenario visualizations',
              caption:
                'Political landscape dashboard with indicators and visualizations for scenario analysis.',
              presentation: 'contain',
              frameTitle:
                'Candidattus · Macro Political Climate Diagnostic',
            },
          },
          {
            afterParagraph: 8,
            image: {
              url: candidatoPreferidoImage,
              alt: 'Voter preference and archetype visualization in Candidattus for comparative analysis',
              caption:
                'Voter preference visualization designed to support reading and comparison.',
              presentation: 'contain',
              frameTitle:
                'Candidattus · Voter Preferences & Candidate Archetypes',
            },
          },
          {
            afterParagraph: 8,
            image: {
              url: escutaPoliticaImage,
              alt: 'Political social listening interface in Candidattus with sentiment analysis and topic tracking',
              caption:
                'Political social listening interface presenting sentiment tracking and candidate intelligence.',
              presentation: 'contain',
              frameTitle:
                'Candidattus · Political Listening & Sentiment Tracking (Politica Vox®)',
            },
          },
        ],
      },
      {
        id: 'prototipacao', title: '05. Prototyping & validation',
        lead: 'Prototypes had to work beyond the presentation.',
        paragraphs: [
          'With many modules and business rules, prototyping was essential to turn ideas into understandable flows before development.',
          '### Validating without direct client access',
          'For confidentiality reasons, I did not join client meetings directly. I presented screens and features to the CEO, who led client validation sessions and relayed their feedback.',
          'This required highly navigable Figma prototypes: interactions had to be clear enough for someone with limited Figma experience to explore the flows without my assistance.',
          '### From flows to functional experiences',
          'Throughout the project, we conducted flow tests and client validations. Feedback informed interface iterations before development.',
          'As AI-assisted development tools emerged, I also began turning some internally validated screens into functional experiences to support client testing.',
          'This brought validation closer to actual product behavior, without replacing the need to test flows with users.',
        ],
      },
      {
        id: 'designops', title: '06. DesignOps',
        lead: 'Organizing the process to give teams autonomy and improve delivery consistency.',
        decisionLog: [
          {
            challenge: 'Reduce changes during development and gaps between approved prototypes and delivered interfaces.',
            decision: 'Propose a shared workflow with stages, statuses, and documentation in Figma and Jira.',
            rationale: 'Make validated decisions visible and give the team more autonomy during implementation.',
          },
        ],
                paragraphs: [
          'Beyond product challenges, there was an operational issue: constant leadership oversight during design and development led to frequent changes, rework, and gaps between approved prototypes and delivered interfaces.',
          'With no PO or PM during that transition, I proposed a workflow with clear stages, owners, statuses, and accessible documentation. I presented it to the CEO, who agreed to pilot it.',
          '### A shared flow across design and engineering',
          'I mapped a workflow connecting backlog, discovery, refinement, optional wireframes, prototyping, validation, and implementation. I also defined paths for documentation and items not incorporated into the product.',
          'The goal was to make each request’s stage, handoff criteria, and prior approvals visible before it reached engineering.',
          '### Organizing Figma and Jira',
          'In Figma, I organized creation, development, implemented items, and documentation, with standardized cards and statuses. Jira stages mirrored the workflow, making cross-team progress easier to track.',
          'With visible stages and statuses, the team could follow requests without relying on constant leadership check-ins.',
          '### Changes observed in everyday work',
          'In day-to-day work, we observed fewer changes during development and closer alignment between validated designs and delivered interfaces. Leadership could track progress through the cards.',
          'These improvements were observed in day-to-day work; no comparable quantitative tracking was retained to assign precise percentages.',
        ],
        inlineImages: [
          { afterParagraph: 4, image: { url: fluxoDesignOpsImage, alt: 'DesignOps process flowchart created for Candidattus', caption: 'Proposed workflow organizing decisions, validation, and development handoffs.', presentation: 'contain', frameTitle: 'Candidattus · DesignOps Flowchart' } },
          { afterParagraph: 7, image: { url: estruturaFigmaImage, alt: 'Figma workflow areas and status definitions', caption: 'Workflow stages and card statuses organized in Figma.', presentation: 'contain', frameTitle: 'Candidattus · Figma Structure' } },
          { afterParagraph: 7, image: { url: estruturaJiraImage, alt: 'Workflow stages in Jira', caption: 'Jira stages tracking work from backlog to implementation.', presentation: 'contain', frameTitle: 'Candidattus · Jira Structure' } },
        ],
      },
      {
        id: 'resultados', title: '07. Results & impact',
        lead: 'More predictable delivery and a platform that supported real campaign work.',
        paragraphs: [
          'The main DesignOps outcome was greater clarity around each request’s stages and the decisions made before development.',
          'In practice, the team gained autonomy and needed fewer operational interventions from leadership.',
          'On the product side, client validation feedback was positive and informed refinements to flows and dashboards.',
          'These outcomes reflect qualitative observations from the team’s work; no comparable measurements were available to assign precise percentages.',
        ],
      },
      {
        id: 'escalabilidade', title: '08. Scalability challenges',
        lead: 'When feature growth began to make navigation harder.',
        paragraphs: [
          'As Candidattus evolved, new features were added quickly, often in response to requests during active campaigns.',
          'The three-level navigation initially helped organize the platform, but its limitations became more apparent as features accumulated. Finding specific capabilities became harder for people less familiar with the system.',
          'I proposed researching users’ navigation paths and revisiting the information architecture before defining a new solution. The proposal did not move forward at the time, as leadership was already familiar with the system and did not perceive the same friction.',
          'The challenge remained unresolved: valuable features also needed to be easier to discover.',
        ],
        featureCards: [
          {
            title: 'Product expansion',
            description: 'New features were added quickly to respond to campaign needs.',
            icon: 'chart',
          },
          {
            title: 'Discoverability friction',
            description: 'As the product grew, finding specific features within the existing navigation became harder.',
            icon: 'search',
          },
          {
            title: 'Proposed research',
            description: 'I suggested researching navigation paths and revisiting the architecture. The proposal was not implemented.',
            icon: 'users',
          },
        ],
      },
      {
        id: 'aprendizados', title: '09. Learnings',
        lead: 'Product design also means enabling the team to deliver better work.',
        paragraphs: [
          'Candidattus broadened my understanding of Product Design: beyond interfaces, the work involved organizing complex information and improving collaboration across teams.',
          'I took away the importance of making decisions clear to everyone involved and recognizing when a solution needs to be revisited as the product evolves.',
        ],
        featureCards: [
          {
            title: 'Make decisions clear',
            description: 'Explaining and documenting decisions supports alignment across design, engineering, and leadership.',
            icon: 'users',
          },
          {
            title: 'Processes enable autonomy',
            description: 'A shared workflow can reduce rework without centralizing every operational decision.',
            icon: 'chart',
          },
          {
            title: 'Revisit earlier solutions',
            description: 'Visual consistency cannot replace reassessing information architecture as the product grows.',
            icon: 'search',
          },
        ],
      },

    ],
  },
};
