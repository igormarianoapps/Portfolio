import type { LocalizedCaseStudy } from '../../types/portfolio';

// Coloque as imagens em src/assets/images/corrida-perfeita/.
// Os caminhos seguem o padrão utilizado no projeto de referência.
const img = '/src/assets/images/corrida-perfeita/';

export const corridaPerfeitaProject: LocalizedCaseStudy = {
  pt: {
    slug: 'corrida-perfeita',
    title: 'Corrida Perfeita',
    clientOrContext: 'Aplicativo de treinamento de corrida e site institucional',
    tagline: 'Da primeira visita ao primeiro treino: uma jornada mais clara e personalizada.',
    summary: 'Redesign do onboarding e da home do aplicativo, seguido pela reformulação do site. O abandono após o primeiro acesso à home caiu de mais de 60% para cerca de 20%.',
    coverImage: `${img}app-download.png`,
    tags: ['Product Discovery', 'UX/UI Design', 'Product Analytics', 'Mobile & Web'],
    metadata: {
      role: 'UX/UI Designer (Discovery, UX Research, Fluxos, Wireframes e UI)',
      timeline: 'Projeto realizado em 2022',
      team: 'Colaboração com Product Owner, stakeholders e equipe de desenvolvimento',
      platform: 'Aplicativo mobile (iOS e Android) e site responsivo',
      tools: ['Figma', 'Google Analytics', 'Hotjar'],
    },
    isPlaceholder: false,
    metrics: [
      {
        value: '+60% → ~20%',
        label: 'Abandono após o primeiro acesso à home',
        context: 'Valores históricos aproximados, comparando períodos de dois meses antes e depois da implementação do redesign do aplicativo. Sem experimento controlado.',
        isPlaceholderMetric: false,
      },
      {
        value: '≈ 40 p.p.',
        label: 'Queda no abandono',
        context: 'Diferença aproximada em pontos percentuais, calculada a partir das taxas históricas informadas.',
        isPlaceholderMetric: false,
      },
    ],
    sections: [
      {
        id: 'desafio',
        title: '01. O desafio',
        lead: 'O Corrida Perfeita oferecia aulas, orientação e planos de treino, mas a experiência inicial não deixava esses benefícios suficientemente claros.',
        paragraphs: [
          'Mais de 60% dos novos usuários abandonavam a experiência após chegar à página inicial do aplicativo. O problema não era simplesmente apresentar mais funcionalidades: era ajudar o corredor a encontrar um próximo passo relevante.',
          'O objetivo do projeto foi investigar esse comportamento e aproximar a primeira experiência dos objetivos de quem queria começar a correr ou evoluir nos treinos.',
        ],
      },
      {
        id: 'discovery',
        title: '02. Discovery',
        lead: 'Organizamos certezas, suposições e dúvidas para entender por que o usuário não percebia valor logo na entrada.',
        paragraphs: [
          'A matriz CSD registrou preocupações com uma recepção pouco acolhedora, a possibilidade de novos usuários se sentirem perdidos e a necessidade de criar um primeiro momento de valor — o “aha moment”.',
          'A investigação também envolveu análise de comportamento no Google Analytics e Hotjar, conversas com pessoas envolvidas no produto e benchmarking. As hipóteses da matriz foram tratadas como questões de investigação, não como fatos comprovados.',
        ],
        bulletPoints: [
          'Receber melhor quem acabou de entrar no aplicativo.',
          'Dar clareza sobre o próximo passo e facilitar a descoberta dos recursos.',
          'Entender o perfil do corredor para orientar uma experiência mais relevante.',
        ],
        image: {
          url: `${img}matriz-csd.png`,
          alt: 'Matriz CSD do projeto, organizada em certezas, suposições e dúvidas',
          caption: 'Artefato original de discovery usado para estruturar as perguntas do projeto. Clique para ampliar e inspecionar detalhes.',
          presentation: 'contain',
          frameTitle: 'Matriz CSD (Certezas, Suposições e Dúvidas) · Discovery',
        },
      },
      {
        id: 'decisoes-app',
        title: '03. Decisões de UX',
        lead: 'Em vez de lançar o usuário diretamente em um conjunto de recursos, a proposta passou a orientar sua entrada e conectar o produto ao seu contexto.',
        paragraphs: [
          'O novo onboarding apresenta o clube, coleta informações de perfil e condicionamento, pergunta sobre frequência, distância, objetivos e dias disponíveis e conduz à visualização do plano de treino. A personalização pode ser pulada, evitando que se torne uma barreira obrigatória.',
          'Na home, a hierarquia foi reorganizada para destacar plano ativo, recomendações, atividades recentes, próximos eventos e aulas. O foco passou do registro isolado de corridas para a jornada de evolução do corredor.',
        ],
        decisionLog: [
          {
            challenge: 'O primeiro acesso não orientava claramente o novo usuário.',
            decision: 'Criar uma recepção e um onboarding guiado.',
            rationale: 'Apresentar a proposta do aplicativo e dar contexto antes da exploração das funcionalidades.',
          },
          {
            challenge: 'Perfis e objetivos de corrida diferentes recebiam uma entrada pouco contextualizada.',
            decision: 'Coletar condicionamento, frequência, distância e objetivos, com opção de pular.',
            rationale: 'Aproximar o plano de treino da realidade do corredor sem bloquear a continuidade da jornada.',
          },
          {
            challenge: 'Treinos, aulas e acompanhamento não tinham destaque suficiente na experiência inicial.',
            decision: 'Reorganizar a home em torno do plano ativo e de conteúdos relevantes.',
            rationale: 'Facilitar a descoberta e tornar o próximo passo mais evidente.',
          },
        ],
        image: {
          url: `${img}onboarding.jpg`,
          alt: 'Sequência do onboarding personalizado até a apresentação do treino',
          caption: 'Fluxo guiado de onboarding: boas-vindas, perfil, condicionamento, metas, disponibilidade e visualização do plano ativo. Deslize para navegar pelas 6 telas.',
          presentation: 'panoramic',
          frameTitle: 'Jornada Guiada de Onboarding (Sequência Completa de 6 Telas)',
        },
      },
      {
        id: 'home-app',
        title: '04. A nova home',
        lead: 'A página inicial passou a dar protagonismo ao plano de treino e ao conteúdo que ajudaria o corredor a continuar.',
        paragraphs: [
          'A interface reúne o plano ativo, recomendações, atividades recentes, eventos e aulas. Essa organização responde diretamente à hipótese de que a pessoa precisava de mais orientação ao chegar ao aplicativo.',
          'A solução foi implementada e seus fluxos centrais continuam em uso, com ajustes visuais e funcionais feitos posteriormente pela equipe.',
        ],
        image: {
          url: `${img}home-app.png`,
          alt: 'Nova home do aplicativo Corrida Perfeita com plano ativo e recomendações',
          caption: 'Interface final do aplicativo com plano ativo, recomendações personalizadas, eventos e aulas integradas.',
          presentation: 'contain',
          frameTitle: 'Nova Home do Aplicativo · Protagonismo ao Plano Ativo',
        },
      },
      {
        id: 'resultados-app',
        title: '05. Resultados',
        lead: 'Acompanhamos o comportamento após a implementação e observamos uma queda expressiva no abandono depois da primeira visita à home.',
        paragraphs: [
          'Nos registros acompanhados à época, o abandono passou de pouco mais de 60% para aproximadamente 20%. A comparação considerou dois períodos de dois meses, antes e depois da implementação, usando Google Analytics.',
          'Isso representa uma redução aproximada de 40 pontos percentuais. Os números são históricos e aproximados; não há relatórios originais disponíveis para anexar nem experimento controlado que permita atribuir toda a variação exclusivamente ao redesign.',
        ],
        image: {
          url: `${img}analytics-engajamento.jpg`,
          alt: 'Registro analítico de engajamento e retenção',
          caption: 'Comportamento histórico de retenção e engajamento após as alterações de produto.',
          presentation: 'contain',
          frameTitle: 'Métricas de Engajamento e Retenção · Google Analytics',
        },
      },
      {
        id: 'site-diagnostico',
        title: '06. Além do aplicativo',
        lead: 'A experiência do corredor começava antes do download. O site também precisava comunicar melhor o que o clube oferecia.',
        paragraphs: [
          'Na página anterior, informações institucionais, orientações gratuitas e ofertas apareciam sem uma sequência suficientemente clara entre entender o serviço, conhecer o aplicativo e decidir como participar.',
          'Os dados históricos de Analytics mostravam 83,2% dos usuários em mobile, 16,0% em desktop e 0,8% em tablet. Esse cenário reforçou a importância da organização responsiva da informação.',
          'O redesenho passou a destacar a proposta de valor, o download do aplicativo, benefícios, depoimentos, conteúdos gratuitos e comparação dos planos Essencial e Personal. Os dados de receita e engajamento disponíveis pertencem ao diagnóstico e não foram tratados como resultados do novo site.',
        ],
        inlineImages: [
          {
            afterParagraph: 0,
            image: {
              url: `${img}site-antigo.png`,
              alt: 'Página inicial anterior do site Corrida Perfeita',
              caption: 'Página inicial anterior, utilizada como referência para o diagnóstico da comunicação e da hierarquia.',
              presentation: 'scrollable-page',
              frameTitle: 'https://corridaperfeita.com',
              viewportHeight: '500px',
            },
          },
          {
            afterParagraph: 1,
            image: {
              url: `${img}analytics-mobile.jpg`,
              alt: 'Distribuição de usuários por dispositivo no Google Analytics: 83,2% mobile',
              caption: 'Diagnóstico de dispositivo: 83,2% dos acessos históricos ocorriam em smartphones via Google Analytics.',
              presentation: 'contain',
              frameTitle: 'Diagnóstico de Dispositivo · Google Analytics',
            },
          },
        ],
      },
      {
        id: 'site-processo',
        title: '07. Arquitetura e Wireframe',
        lead: 'Do diagnóstico à estrutura: organizar o conteúdo para conduzir o visitante da descoberta à decisão.',
        paragraphs: [
          'Os wireframes de desktop e mobile ajudaram a definir a sequência de blocos, a posição das chamadas para ação e a organização dos planos, conteúdos e depoimentos antes do refinamento visual.',
          'Na interface final, a apresentação do aplicativo ganhou espaço próprio, seguida de benefícios, provas sociais, orientações e planos. A experiência foi adaptada para diferentes larguras de tela, mantendo uma jornada coerente.',
        ],
        decisionLog: [
          {
            challenge: 'O visitante precisava reunir informações dispersas para entender o serviço.',
            decision: 'Criar uma sequência de apresentação do clube, aplicativo, benefícios e planos.',
            rationale: 'Apoiar a compreensão gradual da oferta antes da decisão de contratação.',
          },
          {
            challenge: 'A maior parte do tráfego registrado vinha de dispositivos móveis.',
            decision: 'Projetar wireframes para desktop e mobile e adaptar a hierarquia para telas menores.',
            rationale: 'Preservar a legibilidade e os caminhos de ação no contexto de acesso predominante.',
          },
          {
            challenge: 'Benefícios e diferenças entre ofertas não estavam suficientemente evidentes.',
            decision: 'Dar destaque ao aplicativo, aos depoimentos e à comparação de planos.',
            rationale: 'Ajudar o visitante a entender o valor do serviço e avaliar a opção mais adequada.',
          },
        ],
        image: {
          url: `${img}wireframe-desktop.png`,
          alt: 'Wireframe desktop da nova página inicial do Corrida Perfeita',
          caption: 'Wireframes estruturais para desktop (1440px) e mobile (375px), organizando a hierarquia de conteúdo antes do layout visual. Alterne entre as visões acima para inspecionar.',
          presentation: 'wireframe-comparison',
          frameTitle: 'Wireframe Desktop',
          secondaryImage: {
            url: `${img}wireframe-mobile.png`,
            alt: 'Wireframe mobile do site Corrida Perfeita',
            title: 'Wireframe Mobile',
            caption: 'Estrutura vertical adaptada para telas de smartphones (375px).',
          },
        },
      },
      {
        id: 'site-final',
        title: '08. Site implementado',
        lead: 'Uma página que apresenta o clube, mostra o aplicativo em uso e ajuda o visitante a encontrar seu caminho.',
        paragraphs: [
          'O site final reúne chamada principal, download do aplicativo, benefícios, depoimentos, conteúdos gratuitos e planos de treinamento em uma jornada mais estruturada.',
          'A reformulação foi implementada. Não há uma comparação pós-lançamento validada de conversão do site, por isso o case apresenta as decisões e a entrega sem atribuir ganhos comerciais não medidos.',
        ],
        image: {
          url: `${img}site-novo.png`,
          alt: 'Nova página inicial do site Corrida Perfeita',
          caption: 'Interface final implementada, conectando apresentação do produto, benefícios e contratação. Role verticalmente no navegador acima para explorar a página completa.',
          presentation: 'scrollable-page',
          frameTitle: 'https://corridaperfeita.com',
          viewportHeight: '540px',
        },
      },
      {
        id: 'design-handoff',
        title: '09. Design Handoff — Conectando design e desenvolvimento',
        lead: 'Da interface às regras de negócio.',
        paragraphs: [
          'Para garantir que as soluções fossem implementadas conforme o planejado, estruturei no Miro uma documentação reunindo fluxogramas, histórias de usuários e comportamentos esperados das funcionalidades.',
          'O handoff acontecia por meio de reuniões com os desenvolvedores, nas quais apresentava os fluxos, explicava as decisões de UX e esclarecia dúvidas sobre as interações.',
          '**A documentação era viva:** conforme novas dúvidas e cenários surgiam durante os alinhamentos, as regras eram complementadas no Miro, mantendo as definições acessíveis e atualizadas para a equipe.',
          'Essa abordagem ajudava a reduzir ambiguidades na implementação e a manter o alinhamento entre design, produto e desenvolvimento.',
        ],
        processFlow: {
          title: 'Documentação → Alinhamento → Atualização',
          badge: 'Design Handoff',
          summary: 'Ciclo contínuo no Miro: a validação técnica com os desenvolvedores refinava as regras e alimentava a documentação, mantendo as definições alinhadas entre produto, design e engenharia.',
          steps: [
            {
              number: '01',
              title: 'Documentação',
              subtitle: 'Miro & especificação funcional',
              items: [
                'Fluxogramas',
                'Histórias de usuários',
                'Comportamentos esperados',
              ],
            },
            {
              number: '02',
              title: 'Alinhamento',
              subtitle: 'Alinhamento com desenvolvedores',
              items: [
                'Reuniões com desenvolvedores',
                'Apresentação das decisões de UX',
                'Esclarecimento de dúvidas',
              ],
            },
            {
              number: '03',
              title: 'Atualização',
              subtitle: 'Documentação viva e iterativa',
              items: [
                'Inclusão de novas regras',
                'Mapeamento de novos cenários',
                'Regras complementadas no Miro',
              ],
            },
          ],
        },
      },
      {
        id: 'aprendizados',
        title: '10. Implementação, impacto e aprendizados',
        lead: 'O maior resultado não foi redesenhar o aplicativo. Foi ajudar os usuários a encontrar valor nele.',
        paragraphs: [
          'O projeto começou com um problema de abandono e evoluiu para uma transformação mais ampla na forma como o Corrida Perfeita recebia, orientava e se comunicava com seus usuários.',
          'Redesenhamos o onboarding, reorganizamos a página inicial do aplicativo e reformulamos o site institucional. As soluções foram implementadas e passaram a fazer parte da experiência real do produto.',
        ],
        executiveSummary: {
          headlineLead: 'O maior resultado não foi redesenhar o aplicativo. Foi ajudar os usuários a encontrar valor nele.',
          introParagraphs: [
            'O projeto começou com um problema de abandono e evoluiu para uma transformação mais ampla na forma como o Corrida Perfeita recebia, orientava e se comunicava com seus usuários.',
            'Redesenhamos o onboarding, reorganizamos a página inicial do aplicativo e reformulamos o site institucional. As soluções foram implementadas e passaram a fazer parte da experiência real do produto.',
          ],
          impactMetric: {
            title: 'O impacto em números',
            stat: '+60% → ~20%',
            statLabel: 'Abandono após o primeiro acesso à home',
            changeHighlight: '-40 p.p. de abandono',
            description: 'Uma redução de aproximadamente 40 pontos percentuais, observada na comparação de dois períodos de dois meses antes e depois da implementação.',
            insight: 'Mais do que uma mudança de interface, esse resultado mostrou a importância de conectar as expectativas dos usuários ao valor que o produto oferece.',
          },
          learningsSection: {
            title: 'Três aprendizados que mudaram minha forma de pensar produto',
            learnings: [
              {
                number: '01',
                title: 'O problema apresentado nem sempre é o problema que precisa ser resolvido.',
                paragraphs: [
                  'O ponto de partida era o abandono no aplicativo. Mas, ao investigar a experiência, percecemos que o desafio também envolvia a forma como o produto comunicava seus benefícios.',
                  'Isso ampliou nossa perspectiva: melhorar a experiência exigia olhar além de uma tela e considerar toda a jornada, desde o primeiro contato com a marca.',
                ],
              },
              {
                number: '02',
                title: 'Personalização só gera valor quando simplifica a jornada.',
                paragraphs: [
                  'Não bastava coletar informações sobre o corredor. Precisávamos transformar essas respostas em uma experiência que fizesse sentido para seus objetivos.',
                  'O onboarding passou a conectar o perfil do usuário aos treinamentos, enquanto a home ganhou uma organização mais contextualizada.',
                ],
                takeaway: 'A lição foi clara: personalizar não significa adicionar complexidade, mas tornar as próximas decisões mais simples.',
              },
              {
                number: '03',
                title: 'Design não termina quando o protótipo está pronto.',
                paragraphs: [
                  'O trabalho de documentação, handoff e alinhamento com desenvolvimento foi fundamental para levar as decisões de UX até a implementação.',
                  'Os fluxogramas, histórias de usuários e regras de comportamento documentados no Miro evoluíam conforme surgiam novas questões técnicas.',
                ],
                takeaway: 'Aprendi que a qualidade de uma solução também depende da clareza com que conseguimos comunicar suas decisões.',
              },
            ],
          },
          legacySection: {
            title: 'O que permanece',
            paragraphs: [
              'Anos depois, os principais fluxos do aplicativo e a estrutura do site continuam em utilização, mesmo após evoluções visuais e funcionais.',
              'Isso não significa que a solução seja definitiva. Significa que as decisões tomadas criaram uma base que pôde continuar evoluindo.',
            ],
            coreTakeaway: {
              label: 'Minha maior conclusão',
              quote: 'o papel do Product Designer não é apenas tornar produtos mais fáceis de usar. É compreender o que impede as pessoas de perceber seu valor e conectar necessidades reais, objetivos de negócio e possibilidades técnicas em uma experiência coerente.',
            },
          },
        },
      },
    ],
  },
  en: {
    slug: 'corrida-perfeita',
    title: 'Corrida Perfeita',
    clientOrContext: 'Running training app and marketing website',
    tagline: 'From the first visit to the first workout: a clearer, more personalized journey.',
    summary: 'Redesigned the app onboarding and home screen, followed by the marketing website. Drop-off after the first home-screen visit decreased from over 60% to around 20%.',
    coverImage: `${img}app-download.png`,
    tags: ['Product Discovery', 'UX/UI Design', 'Product Analytics', 'Mobile & Web'],
    metadata: {
      role: 'UX/UI Designer (Discovery, UX Research, User Flows, Wireframes and UI)',
      timeline: 'Project carried out in 2022',
      team: 'Collaboration with Product Owner, stakeholders and engineering team',
      platform: 'Mobile app (iOS and Android) and responsive website',
      tools: ['Figma', 'Google Analytics', 'Hotjar'],
    },
    isPlaceholder: false,
    metrics: [
      {
        value: '+60% → ~20%',
        label: 'Drop-off after the first home-screen visit',
        context: 'Approximate historical values comparing two-month periods before and after the app redesign. No controlled experiment was conducted.',
        isPlaceholderMetric: false,
      },
      {
        value: '≈ 40 pp',
        label: 'Drop in abandonment',
        context: 'Approximate percentage-point difference calculated from the historical rates provided.',
        isPlaceholderMetric: false,
      },
    ],
    sections: [
      {
        id: 'desafio',
        title: '01. The challenge: making value clear from the start',
        lead: 'Corrida Perfeita offered lessons, coaching and training plans, but its initial app experience did not communicate those benefits clearly enough.',
        paragraphs: [
          'Over 60% of new users dropped off after reaching the app home screen. The challenge was not simply to display more features, but to help each runner identify a meaningful next step.',
          'The project set out to investigate that behavior and align the first-use experience with the goals of people starting or improving their running practice.',
        ],
      },
      {
        id: 'discovery',
        title: '02. Discovery: questions before screens',
        lead: 'We organized what we knew, assumed and still needed to learn about the first-use experience.',
        paragraphs: [
          'The CSD matrix captured concerns about an unwelcoming first screen, the possibility of users feeling lost and the need for an early “aha moment”.',
          'The investigation also drew on Google Analytics and Hotjar behavior analysis, discussions with product stakeholders and competitive benchmarking. Assumptions were treated as research questions, not validated facts.',
        ],
        bulletPoints: [
          'Make the first interaction more welcoming.',
          'Clarify the next step and make features easier to discover.',
          'Understand each runner’s profile to guide a more relevant experience.',
        ],
        image: {
          url: `${img}matriz-csd.png`,
          alt: 'CSD matrix with certainties, assumptions and questions',
          caption: 'Original discovery artifact used to frame the project’s questions. Click to expand and inspect notes.',
          presentation: 'contain',
          frameTitle: 'CSD Matrix (Certainties, Assumptions & Doubts) · Discovery',
        },
      },
      {
        id: 'decisoes-app',
        title: '03. UX decisions: from sign-up to training',
        lead: 'Rather than dropping users into a collection of features, the new flow helps them connect the app to their own context.',
        paragraphs: [
          'The onboarding introduces the club, gathers personal and fitness information, asks about running frequency, distance, goals and preferred days, and leads into a training plan. Users can skip personalization, so it does not become a mandatory barrier.',
          'The home screen was reorganized around the active plan, recommendations, recent activities, upcoming events and lessons. The focus shifted from isolated activity logging to the runner’s broader training journey.',
        ],
        decisionLog: [
          {
            challenge: 'The first visit offered little guidance for new users.',
            decision: 'Introduce a welcome experience and guided onboarding.',
            rationale: 'Explain the app’s value and provide context before users explore its features.',
          },
          {
            challenge: 'Runners with different goals were met with a generic starting point.',
            decision: 'Ask about fitness, frequency, distance and goals, while allowing users to skip.',
            rationale: 'Make training more relevant without blocking progress through the app.',
          },
          {
            challenge: 'Training, lessons and coaching were not prominent enough on first use.',
            decision: 'Prioritize the active plan and relevant content on the home screen.',
            rationale: 'Improve discovery and make the next step easier to identify.',
          },
        ],
        image: {
          url: `${img}onboarding.jpg`,
          alt: 'Personalized onboarding sequence leading to a training plan',
          caption: 'Guided onboarding flow: welcome, profile, fitness level, goals, availability, and active plan preview. Slide horizontally to view the full 5-screen flow.',
          presentation: 'panoramic',
          frameTitle: 'Guided Onboarding Journey (Complete 5-Screen Sequence)',
        },
      },
      {
        id: 'home-app',
        title: '04. A home screen built around the runner',
        lead: 'The home screen gives prominence to the training plan and the content that helps runners move forward.',
        paragraphs: [
          'The interface brings together the active plan, recommendations, recent activities, events and lessons. This directly addresses the concern that users needed more guidance when first opening the app.',
          'The redesign was implemented, and its core flows remain in use, with subsequent visual and functional changes made by the team.',
        ],
        image: {
          url: `${img}home-app.png`,
          alt: 'Corrida Perfeita home screen showing the active plan and recommendations',
          caption: 'Final app interface featuring the active training plan, recommendations, upcoming events, and lessons.',
          presentation: 'contain',
          frameTitle: 'New App Home Screen · Focus on Active Training Journey',
        },
      },
      {
        id: 'resultados-app',
        title: '05. Results: lower drop-off',
        lead: 'After implementation, we tracked user behavior and observed a substantial drop in abandonment after the first home-screen visit.',
        paragraphs: [
          'The historical figures tracked at the time indicate a decrease from slightly over 60% to approximately 20%. The comparison used two-month periods before and after implementation in Google Analytics.',
          'That is a drop of roughly 40 percentage points. The figures are approximate and the original reports are no longer available; no controlled experiment isolated the redesign’s impact from other factors.',
        ],
        image: {
          url: `${img}analytics-engajamento.jpg`,
          alt: 'Analytics tracking of user engagement and retention',
          caption: 'Historical telemetry records showing engagement uplift and lower drop-off after release.',
          presentation: 'contain',
          frameTitle: 'Engagement & Retention Metrics · Google Analytics',
        },
      },
      {
        id: 'site-diagnostico',
        title: '06. Beyond the app: rethinking the website',
        lead: 'The runner’s experience started before the download. The website also needed to explain the club more clearly.',
        paragraphs: [
          'The previous page presented institutional information, free tips and commercial offers without a sufficiently clear path from understanding the service to exploring the app and choosing a plan.',
          'Historical Analytics data showed 83.2% of visitors on mobile, 16.0% on desktop and 0.8% on tablets. This reinforced the importance of responsive information architecture.',
          'The redesign highlighted the value proposition, app downloads, benefits, testimonials, educational content and a comparison of Essential and Personal plans. Available revenue and engagement figures were diagnostic inputs, not treated as post-launch outcomes.',
        ],
        inlineImages: [
          {
            afterParagraph: 0,
            image: {
              url: `${img}site-antigo.png`,
              alt: 'Previous Corrida Perfeita website homepage',
              caption: 'Previous website, used to diagnose messaging and information hierarchy.',
              presentation: 'scrollable-page',
              frameTitle: 'https://corridaperfeita.com',
              viewportHeight: '500px',
            },
          },
          {
            afterParagraph: 1,
            image: {
              url: `${img}analytics-mobile.jpg`,
              alt: 'Google Analytics device breakdown showing 83.2% mobile traffic',
              caption: '83.2% of historical visits occurred on smartphones via Google Analytics.',
              presentation: 'contain',
              frameTitle: 'Device Breakdown Telemetry · Google Analytics',
            },
          },
        ],
      },
      {
        id: 'site-processo',
        title: '07. Information architecture, wireframes and responsive UI',
        lead: 'From diagnosis to structure: organizing content to guide visitors from discovery to decision.',
        paragraphs: [
          'Desktop and mobile wireframes helped define section order, calls to action, plans, content and testimonials before visual refinement.',
          'The final interface gave the app its own prominent section, followed by benefits, social proof, free tips and plans. The experience was adapted across screen sizes while preserving a coherent journey.',
        ],
        decisionLog: [
          {
            challenge: 'Visitors had to piece together scattered information to understand the service.',
            decision: 'Build a clear sequence: club, app, benefits and plans.',
            rationale: 'Support progressive understanding before visitors make a purchase decision.',
          },
          {
            challenge: 'Most recorded traffic came from mobile devices.',
            decision: 'Design desktop and mobile wireframes and adapt hierarchy for smaller screens.',
            rationale: 'Maintain readability and clear actions in the dominant usage context.',
          },
          {
            challenge: 'Benefits and differences between offers were not clear enough.',
            decision: 'Highlight the app, testimonials and plan comparison.',
            rationale: 'Help visitors understand the service and evaluate the best-fitting option.',
          },
        ],
        image: {
          url: `${img}wireframe-desktop.png`,
          alt: 'Desktop wireframe of the redesigned Corrida Perfeita homepage',
          caption: 'Structural wireframes for desktop (1440px) and mobile (375px), organizing information hierarchy prior to visual styling. Toggle above to compare.',
          presentation: 'wireframe-comparison',
          frameTitle: 'Desktop Wireframe',
          secondaryImage: {
            url: `${img}wireframe-mobile.png`,
            alt: 'Mobile wireframe of the Corrida Perfeita website',
            title: 'Mobile Wireframe',
            caption: 'Vertical layout hierarchy tailored for 375px smartphone viewports.',
          },
        },
      },
      {
        id: 'site-final',
        title: '08. The implemented website: connecting messaging and product',
        lead: 'A page that introduces the club, demonstrates the app and helps visitors find their next step.',
        paragraphs: [
          'The final site combines a hero section, app download, benefits, testimonials, free educational content and training plans in a more structured journey.',
          'The website redesign was implemented. Since no validated post-launch conversion comparison is available, this case describes the decisions and delivery without claiming unmeasured commercial gains.',
        ],
        image: {
          url: `${img}site-novo.png`,
          alt: 'Redesigned Corrida Perfeita website homepage',
          caption: 'Implemented final interface connecting product value, benefits, and membership plans. Scroll vertically inside the mock browser to explore the full page.',
          presentation: 'scrollable-page',
          frameTitle: 'https://corridaperfeita.com',
          viewportHeight: '540px',
        },
      },
      {
        id: 'design-handoff',
        title: '09. Design Handoff — Connecting Design and Development',
        lead: 'From interface to business logic.',
        paragraphs: [
          'To ensure solutions were implemented as planned, I structured comprehensive documentation in Miro bringing together user flows, user stories, and expected component behaviors.',
          'The handoff was conducted through dedicated meetings with engineers, where I presented flows, walked through UX rationale, and resolved interaction questions.',
          '**The documentation was alive:** as new questions and technical scenarios emerged during alignments, business rules were supplemented directly in Miro, keeping definitions clear, accessible, and up to date for the entire team.',
          'This approach reduced ambiguity in implementation and maintained close alignment between design, product, and engineering.',
        ],
        processFlow: {
          title: 'Documentation → Alignment → Iteration',
          badge: 'Design Handoff',
          summary: 'Continuous Miro workflow: technical discussions with engineers surfaced new edge cases, which were documented and integrated into the single source of truth.',
          steps: [
            {
              number: '01',
              title: 'Documentation',
              subtitle: 'Miro & functional specs',
              items: [
                'Navigation user flows',
                'User stories',
                'Expected behaviors & states',
              ],
            },
            {
              number: '02',
              title: 'Alignment',
              subtitle: 'Engineering handoff sessions',
              items: [
                'Sessions with developers',
                'Explaining UX rationales',
                'Clarifying interaction edge cases',
              ],
            },
            {
              number: '03',
              title: 'Iteration',
              subtitle: 'Living documentation',
              items: [
                'Incorporating new business rules',
                'Mapping edge scenarios',
                'Definitions updated in Miro',
              ],
            },
          ],
        },
      },
      {
        id: 'aprendizados',
        title: '10. Implementation, Impact, and Learnings',
        lead: 'The greatest result was not redesigning the app. It was helping users find value in it.',
        paragraphs: [
          'The project started with a drop-off problem and grew into a broader transformation in how Corrida Perfeita welcomed, guided, and communicated with its runners.',
          'We redesigned the onboarding experience, reorganized the mobile home screen, and rebuilt the marketing website. The solutions were fully implemented and became part of the live product experience.',
        ],
        executiveSummary: {
          headlineLead: 'The greatest result was not redesigning the app. It was helping users find value in it.',
          introParagraphs: [
            'The project started with a drop-off problem and grew into a broader transformation in how Corrida Perfeita welcomed, guided, and communicated with its runners.',
            'We redesigned the onboarding experience, reorganized the mobile home screen, and rebuilt the marketing website. The solutions were fully implemented and became part of the live product experience.',
          ],
          impactMetric: {
            title: 'The impact in numbers',
            stat: '+60% → ~20%',
            statLabel: 'Drop-off after first access to home',
            changeHighlight: '-40 p.p. drop-off',
            description: 'A reduction of approximately 40 percentage points, measured by comparing two 2-month periods before and after implementation.',
            insight: 'Far more than an interface refresh, this outcome proved the power of aligning user expectations with the actual value delivered by the product.',
          },
          learningsSection: {
            title: 'Three learnings that reshaped how I think about product',
            learnings: [
              {
                number: '01',
                title: 'The problem presented is not always the problem that needs solving.',
                paragraphs: [
                  'Our starting point was in-app drop-off. But as we investigated the user journey, we realized the core friction also stemmed from how the product communicated its value before and during entry.',
                  'This broadened our perspective: improving the experience required looking beyond an isolated screen to examine the entire journey, starting from the first brand touchpoint.',
                ],
              },
              {
                number: '02',
                title: 'Personalization only creates value when it simplifies the journey.',
                paragraphs: [
                  'Collecting information about the runner was not enough on its own. We needed to translate those answers into an experience tailored to their goals.',
                  'Onboarding began connecting the runner’s profile directly to relevant workouts, while the home screen gained contextual structure.',
                ],
                takeaway: 'The lesson was clear: personalization should never add cognitive friction—its purpose is to make the next decision effortless.',
              },
              {
                number: '03',
                title: 'Design does not end when the prototype is delivered.',
                paragraphs: [
                  'Detailed documentation, structured handoff, and ongoing alignment with engineering were essential to carry UX intentions into production.',
                  'Flowcharts, user stories, and state behaviors documented in Miro continuously evolved as technical edge cases surfaced.',
                ],
                takeaway: 'I learned that the true quality of a design solution is bounded by how clearly we can communicate and defend its rationale with the engineers building it.',
              },
            ],
          },
          legacySection: {
            title: 'What endures',
            paragraphs: [
              'Years later, the core application flows and website architecture remain in active use, even after subsequent visual and feature iterations.',
              'This does not mean the design was permanent or static. It means the foundational decisions established a resilient baseline that could keep evolving.',
            ],
            coreTakeaway: {
              label: 'My key takeaway',
              quote: 'The role of a Product Designer is not merely making products easier to use. It is understanding what prevents people from seeing their value, and connecting real human needs, business outcomes, and technical possibilities into a cohesive experience.',
            },
          },
        },
      },
    ],
  },
};
