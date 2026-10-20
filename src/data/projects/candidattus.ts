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
    tagline: 'Transformando dados eleitorais em decisões estratégicas.',
    summary:
      'Plataforma SaaS de inteligência eleitoral que reúne dados, dashboards e recursos de inteligência artificial para apoiar decisões estratégicas em campanhas.',
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
          'Quando entrei no Candidattus, a plataforma ainda estava em estágio inicial. Existia uma proposta complexa de inteligência eleitoral, mas apenas a tela inicial havia sido desenhada, com uma abordagem visual inspirada no cockpit de um carro esportivo, pouco conectada à finalidade do produto.',
          'Como único UX/UI Designer, meu primeiro desafio foi transformar essa ideia em uma experiência coerente e estruturada, capaz de organizar diferentes módulos, dashboards e funcionalidades para apoiar decisões estratégicas durante campanhas eleitorais.',
          'Ao mesmo tempo, o processo de trabalho era bastante centralizado na liderança. Alterações frequentes durante o design e desenvolvimento geravam retrabalho e inconsistências entre os protótipos aprovados e as funcionalidades implementadas, dificultando inclusive a validação pelo time de QA.',
          'O desafio, portanto, não era apenas construir uma plataforma complexa, mas também estabelecer uma maneira mais organizada de projetar, validar e entregar suas funcionalidades.',
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
        paragraphs: [
          'Quando entrei no Candidattus, a única interface existente era a página inicial, inspirada visualmente no cockpit de um carro esportivo. Embora fosse uma referência interessante para a liderança, percebi que essa abordagem não representava adequadamente a proposta de inteligência eleitoral do produto.',
          'Meu primeiro trabalho foi questionar essa direção e reestruturar a identidade visual, buscando uma linguagem mais coerente com uma plataforma voltada à análise de dados e à tomada de decisões.',
          '### Organizando a complexidade',
          'O produto precisava reunir diferentes áreas, como gestão de candidatura, estratégia eleitoral, inteligência política e acompanhamento de indicadores.',
          'Para acomodar essas funcionalidades, estruturei uma navegação em três níveis, permitindo que os usuários acessassem módulos, categorias e telas específicas dentro de uma mesma plataforma.',
          'A proposta buscava criar uma organização consistente, que pudesse acompanhar a expansão das funcionalidades sem exigir uma navegação completamente diferente a cada novo módulo.',
          '### Uma linguagem visual consistente',
          'A evolução da interface também envolveu a definição de padrões visuais para dashboards, gráficos, formulários, indicadores e componentes de navegação.',
          'O objetivo era manter consistência entre as diferentes áreas e facilitar a interpretação de informações complexas, mesmo quando os conteúdos e as funcionalidades variavam bastante entre os módulos.',
          'Essa estrutura serviu como base para a construção das interfaces apresentadas nas próximas etapas do projeto.',
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
        paragraphs: [
          'Um dos principais desafios do Candidattus era reunir diferentes fontes de informações eleitorais e apresentá-las de maneira que os candidatos conseguissem interpretar o cenário e identificar oportunidades para suas campanhas.',
          'Como responsável pelo UX/UI da plataforma, trabalhei na construção de dashboards que organizavam indicadores, pesquisas, dados históricos e análises estratégicas em interfaces voltadas à tomada de decisão.',
          '### Dados que ajudam a entender o cenário',
          'Os painéis foram estruturados para apresentar diferentes perspectivas da campanha, incluindo análises do ambiente político, resultados eleitorais, preferências do eleitorado e acompanhamento de atividades.',
          'O desafio de design estava em organizar essas informações, estabelecer hierarquias visuais e facilitar a leitura dos dados, evitando que a quantidade de indicadores comprometesse a compreensão de cada tela.',
          '### Inteligência artificial como apoio à estratégia',
          'A plataforma também incorporava recursos de inteligência artificial para apoiar a interpretação de informações e a análise de cenários.',
          'Durante sua evolução inicial, trabalhamos com uma experiência de chat com IA, permitindo que o candidato discutisse possibilidades e próximos passos para sua campanha.',
          'Posteriormente, a proposta evoluiu para experiências que conectavam análises e recursos de IA aos painéis da plataforma, aproximando a inteligência artificial das informações utilizadas pelos candidatos.',
          '### Do dado à decisão',
          'Mais do que apresentar gráficos, o objetivo era criar experiências que ajudassem os usuários a compreender informações relevantes para suas campanhas.',
          'Os fluxos e as interfaces foram bem recebidos nas validações com clientes, e a plataforma passou a desempenhar um papel importante no acompanhamento estratégico das campanhas atendidas.',
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
        paragraphs: [
          'Além dos desafios de produto, havia um problema operacional: o acompanhamento constante da liderança durante design e desenvolvimento provocava mudanças frequentes, retrabalho e divergências entre o protótipo aprovado e a interface entregue.',
          'Sem PO ou PM naquele momento de transição, propus uma organização de trabalho baseada em etapas, responsáveis, estados claros e documentação acessível. Apresentei a proposta ao CEO, que concordou em testá-la.',
          '### Um fluxo compartilhado entre design e desenvolvimento',
          'Desenhei um fluxo que conectava backlog, discovery, refinamento, wireframe quando necessário, prototipação, validação e implementação. Também defini caminhos para documentação e para itens não incorporados ao produto.',
          'A proposta buscava tornar visível o estágio de cada demanda, seus critérios de passagem e o que já havia sido validado antes de chegar à engenharia.',
          '### Organização no Figma e no Jira',
          'No Figma, estruturei áreas para criação, desenvolvimento, itens implementados e documentação, com cards e status padronizados. No Jira, o trabalho seguia etapas compatíveis com o fluxo, facilitando o acompanhamento entre as equipes.',
          'Essa estrutura reduziu a necessidade de intervenções a cada etapa e ajudou a preservar as decisões aprovadas até a implementação.',
          '### Mudança percebida no dia a dia',
          'Depois da adoção do processo, percebemos entregas mais rápidas e consistentes, menos alterações durante o desenvolvimento e mais liberdade para a equipe trabalhar. A liderança passou a acompanhar o andamento pelos cards, com menos necessidade de participar de todas as decisões operacionais.',
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
          'A implementação do DesignOps trouxe uma mudança perceptível na rotina de trabalho: as demandas chegavam mais bem definidas ao desenvolvimento e as entregas ficaram mais consistentes com os protótipos validados.',
          'A equipe ganhou autonomia para executar, enquanto a liderança pôde acompanhar o progresso sem intervir continuamente na construção de cada tela.',
          'Do lado do produto, os dashboards e fluxos foram bem recebidos nas validações. A plataforma passou a ser utilizada como apoio recorrente para acompanhamento e decisões estratégicas dos candidatos atendidos.',
          'Os ganhos de velocidade, consistência e autonomia são resultados qualitativos observados durante o projeto. Não disponho de medições históricas que permitam quantificá-los com precisão.',
        ],
      },
      {
        id: 'escalabilidade',
        title: '08. Desafios de escalabilidade',
        lead: 'Quando a expansão das funcionalidades começou a comprometer a navegação.',
        paragraphs: [
          'Com a evolução do Candidattus, novas funcionalidades passaram a ser adicionadas rapidamente, muitas vezes a partir de solicitações recebidas durante as próprias campanhas.',
          'Embora as telas individualmente resolvessem necessidades relevantes, encontrar um recurso específico ficou cada vez mais difícil. A navegação em três níveis, que inicialmente ajudou a organizar a plataforma, começou a mostrar limites diante do crescimento do produto.',
          '### Um problema que ainda precisava ser investigado',
          'Propus revisitar a arquitetura de informação e realizar uma pesquisa mais aprofundada sobre os caminhos de navegação dos usuários, antes de definir uma nova solução.',
          'A proposta não avançou naquele momento. A liderança conhecia profundamente a estrutura existente e não percebia a mesma dificuldade enfrentada por usuários menos familiarizados com o sistema.',
          'Esse foi um desafio que permaneceu em aberto: havia valor nas funcionalidades, mas a descoberta e o acesso a elas precisavam evoluir junto com o produto.',
        ],
      },
      {
        id: 'aprendizados',
        title: '09. Aprendizados',
        lead: 'Design de produto também é criar condições para que o time entregue melhor.',
        paragraphs: [
          'O Candidattus reforçou minha visão de que atuar de ponta a ponta não significa apenas desenhar interfaces. Foi necessário questionar a direção visual inicial, organizar informações complexas, validar fluxos e estruturar a colaboração entre áreas.',
          'A experiência com DesignOps mostrou como processos claros podem reduzir retrabalho e dar autonomia ao time sem afastar a liderança das decisões importantes.',
          'Também ficou evidente que consistência visual não resolve, sozinha, os desafios de um produto em expansão. Quando novas funcionalidades se acumulam, a arquitetura da informação precisa ser reavaliada com base no uso real.',
          'Levo desse projeto dois aprendizados centrais: tornar as decisões de design compreensíveis para todos os envolvidos e continuar questionando soluções que funcionaram no início, mas podem deixar de funcionar conforme o produto cresce.',
        ],
      },

    ],
  },
  en: {
    slug: 'candidattus',
    title: 'Candidattus',
    clientOrContext: 'Electoral intelligence SaaS platform',
    tagline: 'Transforming electoral data into strategic decisions.',
    summary:
      'Electoral intelligence SaaS platform that brings together data, dashboards, and AI capabilities to support strategic campaign decisions.',
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
          'When I joined Candidattus, the platform was still in its early stages. There was an ambitious vision for electoral intelligence, but only the initial screen had been designed, with a visual approach inspired by a sports car cockpit that had little connection to the product’s actual purpose.',
          'As the sole UX/UI Designer, my first challenge was to transform that concept into a coherent, structured experience capable of organizing diverse modules, dashboards, and features to support strategic decisions during political campaigns.',
          'At the same time, the workflow was heavily centralized around leadership. Frequent changes during design and development led to rework and discrepancies between approved prototypes and implemented features, which also complicated QA testing and validation.',
          'The challenge, therefore, was not only to architect a complex platform, but also to establish a structured, disciplined way to design, validate, and ship product features.',
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
        paragraphs: [
          'When I joined Candidattus, the only existing interface was the homepage, visually inspired by a sports car cockpit. While it was an interesting reference point for leadership, I realized that approach did not adequately represent the product’s electoral intelligence purpose.',
          'My first responsibility was to challenge that direction and restructure the visual identity, creating a design language far more coherent with a platform dedicated to data analytics and strategic decision-making.',
          '### Organizing complexity',
          'The product needed to unite different areas, including campaign management, electoral strategy, political intelligence, and key indicator tracking.',
          'To accommodate these capabilities, I structured a three-level navigation system, allowing users to access modules, categories, and specific views seamlessly within a unified platform.',
          'The proposal aimed to establish a consistent organization that could support feature expansion without requiring a completely new navigation model for every module.',
          '### A consistent visual language',
          'Evolving the interface also involved defining visual standards for dashboards, charts, forms, KPI indicators, and navigational components.',
          'The objective was to maintain consistency across disparate areas and facilitate the interpretation of complex information, even when content and features varied significantly between modules.',
          'This foundational structure served as the baseline for constructing the interfaces featured in subsequent stages of the project.',
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
        paragraphs: [
          'One of Candidattus’ core challenges was aggregating disparate electoral data sources and presenting them so that campaign teams could readily interpret landscape dynamics and uncover strategic opportunities.',
          'As lead UX/UI designer for the platform, I designed dashboards that structured KPIs, polling benchmarks, historical election results, and strategic intelligence into decision-oriented interfaces.',
          '### Data that helps understand the landscape',
          'The dashboards were architected to present varied campaign dimensions, encompassing political climate diagnostics, historical election outcomes, voter preferences, and field activity tracking.',
          'The design challenge lay in organizing this data volume, establishing clear visual hierarchies, and streamlining scanning so that metric density never hindered comprehension.',
          '### Artificial intelligence as strategic support',
          'The platform also embedded artificial intelligence features to support data interpretation and scenario analysis.',
          'During early product evolution, we developed an AI chat assistant allowing candidates to explore possibilities and discuss strategic next steps for their campaigns.',
          'Subsequently, the product vision evolved toward embedding AI capabilities directly within platform dashboards, bringing contextual intelligence closer to the metrics candidates consult daily.',
          '### From data to decision',
          'Beyond displaying graphs, the objective was crafting experiences that helped users distill actionable insights relevant to their electoral race.',
          'The workflows and interfaces were positively validated with clients, establishing the platform as an indispensable asset for strategic campaign oversight.',
        ],
        inlineImages: [
          {
            afterParagraph: 4,
            image: {
              url: macroAmbienteImage,
              alt: 'Political climate diagnostic dashboard in Candidattus featuring diverse indicators and scenario visualizations',
              caption:
                'Political climate diagnostic dashboard featuring diverse indicators and scenario modeling visualizations.',
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
                'Voter preference visualization structured for effortless scanning and comparative analysis.',
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
        paragraphs: [
          'Beyond product challenges, there was an operational issue: constant leadership oversight during design and development led to frequent changes, rework, and gaps between approved prototypes and delivered interfaces.',
          'With no PO or PM during that transition, I proposed a workflow with clear stages, owners, statuses, and accessible documentation. I presented it to the CEO, who agreed to pilot it.',
          '### A shared flow across design and engineering',
          'I mapped a workflow connecting backlog, discovery, refinement, optional wireframes, prototyping, validation, and implementation. I also defined paths for documentation and items not incorporated into the product.',
          'The goal was to make each request’s stage, handoff criteria, and prior approvals visible before it reached engineering.',
          '### Organizing Figma and Jira',
          'In Figma, I organized creation, development, implemented items, and documentation, with standardized cards and statuses. Jira stages mirrored the workflow, making cross-team progress easier to track.',
          'This structure reduced the need for intervention at every stage and helped preserve approved decisions through implementation.',
          '### Changes observed in everyday work',
          'After adoption, we observed faster and more consistent delivery, fewer changes during development, and greater team autonomy. Leadership could follow progress through cards instead of joining every operational decision.',
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
          'DesignOps brought a noticeable change to the team’s daily work: requests reached engineering with clearer definitions, and delivered interfaces aligned more closely with validated prototypes.',
          'The team gained more autonomy while leadership could track progress without continuously intervening in the design of each screen.',
          'On the product side, dashboards and flows received positive feedback during validation. The platform became a recurring tool for candidates to monitor campaigns and support strategic decisions.',
          'Improvements in speed, consistency, and autonomy are qualitative observations from the project. I do not have historical measurements that would support precise figures.',
        ],
      },
      {
        id: 'escalabilidade', title: '08. Scalability challenges',
        lead: 'When feature growth began to make navigation harder.',
        paragraphs: [
          'As Candidattus evolved, new features were added quickly, often in response to requests arising during active campaigns.',
          'Although individual screens addressed relevant needs, finding a particular feature became increasingly difficult. The three-level navigation that initially organized the platform began to show its limits as the product grew.',
          '### A problem that still needed research',
          'I proposed revisiting the information architecture and conducting deeper research into users’ navigation paths before choosing a replacement solution.',
          'That proposal did not move forward at the time. Leadership was deeply familiar with the existing structure and did not perceive the same friction experienced by less familiar users.',
          'This remained an open challenge: features delivered value, but discovering and accessing them needed to evolve alongside the product.',
        ],
      },
      {
        id: 'aprendizados', title: '09. Learnings',
        lead: 'Product design also means enabling the team to deliver better work.',
        paragraphs: [
          'Candidattus reinforced my view that end-to-end design goes beyond creating interfaces. I had to challenge the initial visual direction, organize complex information, validate flows, and structure cross-functional collaboration.',
          'DesignOps showed me how clear processes can reduce rework and give teams autonomy while keeping leadership involved in meaningful decisions.',
          'It also became clear that visual consistency alone does not solve the challenges of a growing product. As features accumulate, information architecture must be reassessed based on real usage.',
          'I took away two key lessons: make design decisions understandable to everyone involved, and keep questioning solutions that worked early on but may no longer work as the product scales.',
        ],
      },

    ],
  },
};
