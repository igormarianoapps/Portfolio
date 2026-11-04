/**
 * Spanish (Spain) editorial copy. Kept separate from the current PT/EN
 * configuration until every case study has been reviewed and translated.
 * This avoids exposing mixed-language pages to visitors or search engines.
 */
export const spanishCopy = {
  nav: {
    home: 'Inicio',
    projects: 'Proyectos',
    about: 'Sobre mí',
    contact: 'Contacto',
  },
  hero: {
    headline: 'Transformando datos en decisiones de negocio.',
    subheadline: 'Conecto investigación, experiencia y estrategia para convertir problemas complejos en decisiones de diseño.',
    explore: 'Ver proyectos',
    talk: 'Hablemos',
  },
  pillars: [
    {
      title: 'Decisiones basadas en datos',
      description: 'Combino el análisis de embudos con la investigación cualitativa para priorizar problemas reales y medir el impacto de las soluciones.',
    },
    {
      title: 'Experiencias centradas en las personas',
      description: 'Diseño arquitecturas de información claras e interfaces fáciles de utilizar para reducir la fricción en los recorridos digitales.',
    },
    {
      title: 'Design Systems escalables',
      description: 'Defino componentes reutilizables, criterios de uso y procesos de colaboración para aportar consistencia y facilitar la evolución del producto.',
    },
  ],
  finalCta: {
    title: '¿Conectamos?',
    linkedinAction: 'Conectar en LinkedIn',
  },
  about: {
    eyebrow: 'Trayectoria y experiencia',
    title: 'Sobre mí y mi trabajo',
    subtitle: 'Investigo problemas, diseño experiencias digitales y ayudo a los equipos a tomar mejores decisiones de producto.',
  },
  aboutSections: {
    whoIAm: {
      title: 'Quién soy y cómo trabajo',
      paragraphs: [
        'Empecé mi trayectoria en el diseño gráfico, pero encontré en UX/UI y Product Design la oportunidad de participar en decisiones que van mucho más allá de lo visual: entender problemas, explorar alternativas y mejorar productos digitales.',
        'Antes de diseñar una pantalla, me interesa comprender el contexto: quién va a utilizarla, qué dificultades encuentra y qué necesita conseguir la empresa.',
        'Con los años he aprendido que una buena experiencia debe ser sencilla para las personas, viable para el equipo de desarrollo y relevante para el negocio.',
      ],
    },
    experience: {
      title: 'Experiencia en proyectos reales',
      paragraphs: [
        'He trabajado en productos SaaS B2B, aplicaciones móviles y plataformas web, colaborando con equipos de producto, desarrollo y responsables de negocio.',
        'En Corrida Perfeita combiné investigación y análisis de datos para rediseñar el onboarding. En Candidattus trabajé en la evolución del producto y en la organización de los procesos de diseño. En TaskCheck construí la primera versión de un Design System para unificar componentes y patrones.',
        'Mi trabajo abarca desde la investigación y la definición de flujos hasta el diseño de interfaces, la documentación y el seguimiento de resultados.',
      ],
    },
    motivation: {
      title: 'Qué me motiva',
      intro: 'Me gusta trabajar en productos con retos reales, donde hay espacio para cuestionar decisiones, proponer mejoras y comprobar sus resultados.',
      highlight: 'Para mí, diseñar consiste en transformar información, necesidades y problemas en decisiones que aportan valor a las personas y al negocio.',
    },
  },
  contact: {
    title: '¿Hablamos de tu próximo reto de producto?',
    subtitle: 'Si necesitas mejorar la experiencia de un producto digital, estructurar un Design System o impulsar una iniciativa de Discovery, estaré encantado de conversar.',
    whatsappIntro: 'Una forma rápida de intercambiar ideas y organizar una primera conversación.',
    linkedinIntro: 'Conectemos para compartir experiencias, proyectos y conversaciones sobre diseño de producto.',
    emailIntro: 'Para propuestas profesionales, colaboraciones o consultas más detalladas.',
  },
  projects: {
    corridaPerfeita: {
      context: 'Aplicación de entrenamiento para corredores y web corporativa',
      tagline: 'De la primera visita al primer entrenamiento: una experiencia más clara y personalizada.',
      summary: 'Rediseñé el onboarding y la pantalla de inicio de la aplicación y participé en la renovación de la web. El abandono tras el primer acceso pasó de más del 60 % a aproximadamente el 20 %.',
    },
    candidattus: {
      context: 'Plataforma SaaS de inteligencia electoral',
      tagline: 'Estructurando una plataforma de inteligencia electoral, desde el producto hasta los procesos.',
      summary: 'Como único diseñador UX/UI, trabajé en la arquitectura de información, los cuadros de mando y la organización del proceso de diseño y desarrollo.',
    },
    taskcheck: {
      context: 'SaaS B2B para la gestión de operaciones',
      tagline: 'Una base de diseño compartida para conectar experiencias de escritorio y móvil.',
      summary: 'Diseñé la primera versión del Design System de TaskCheck para unificar patrones, facilitar la reutilización de componentes y apoyar la evolución del producto.',
    },
  },
} as const;
