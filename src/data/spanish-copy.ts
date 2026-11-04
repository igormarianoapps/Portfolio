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
  skills: [
    {
      id: 'strategy',
      title: 'Estrategia y producto',
      skills: ['Product Discovery', 'Estrategia de producto', 'Investigación con usuarios', 'Análisis de datos y métricas'],
    },
    {
      id: 'experience',
      title: 'Experiencia e interfaz',
      skills: ['UX Research', 'Diseño UX/UI', 'Usabilidad y evaluación heurística', 'Arquitectura de información', 'Diseño adaptable y accesible'],
    },
    {
      id: 'systems',
      title: 'Design Systems',
      skills: ['Creación y evolución de Design Systems', 'Componentes y patrones reutilizables', 'Gobernanza y documentación', 'Design Tokens y DesignOps'],
    },
    {
      id: 'collaboration',
      title: 'Colaboración',
      skills: ['Facilitación de talleres', 'Validación de hipótesis', 'Colaboración con ingeniería y Product Managers', 'Métricas y criterios de aceptación'],
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
    methodology: {
      title: 'Cómo trabajo y tomo decisiones',
      steps: [
        {
          number: '01',
          title: 'Comprender antes de diseñar',
          description: 'Empiezo por entender el problema. Analizo los datos disponibles, el comportamiento de los usuarios y las necesidades del negocio, y hablo con las personas implicadas para identificar qué debemos resolver.',
        },
        {
          number: '02',
          title: 'Explorar y validar alternativas',
          description: 'Con el problema definido, preparo flujos, recorridos, wireframes y prototipos. Siempre que es posible, valido las hipótesis con usuarios o datos para no depender únicamente de impresiones personales.',
        },
        {
          number: '03',
          title: 'Construir junto al equipo',
          description: 'Trabajo en colaboración con desarrollo, Product Managers y otras áreas para valorar alternativas, entender las limitaciones y encontrar soluciones viables.',
        },
        {
          number: '04',
          title: 'Mejorar continuamente',
          description: 'La entrega no es el final. Me interesa seguir los resultados, identificar oportunidades de mejora y utilizar lo aprendido para orientar las siguientes decisiones.',
        },
      ],
    },
    competencies: {
      title: 'Competencias y puntos fuertes',
      items: [
        {
          title: 'Product Discovery y estrategia',
          description: 'Investigación con usuarios, entrevistas, análisis de comportamiento, identificación de oportunidades y definición de soluciones alineadas con los objetivos del producto.',
        },
        {
          title: 'UX/UI y Design Systems',
          description: 'Arquitectura de información, flujos, prototipos, interfaces adaptables y creación de bibliotecas de componentes, patrones visuales y documentación.',
        },
        {
          title: 'Datos y mejora continua',
          description: 'Uso de Google Analytics y Hotjar para comprender el comportamiento de los usuarios, detectar puntos de abandono y fundamentar decisiones de diseño.',
        },
        {
          title: 'Colaboración y visión de producto',
          description: 'Capacidad para conectar las necesidades de los usuarios, el negocio y la tecnología, participando en decisiones estratégicas sin alejarme de la ejecución.',
        },
      ],
    },
    representativeExperiences: {
      title: 'Experiencias que representan mi trabajo',
      items: [
        {
          tag: 'UX/UI · Optimización de la experiencia',
          title: 'Reducir el abandono durante el onboarding',
          description: 'En Corrida Perfeita trabajé en la evolución del recorrido inicial de la aplicación. Mediante el análisis de comportamiento y la revisión del flujo, conseguimos reducir el abandono de algo más del 60 % a aproximadamente el 20 %.',
          slug: 'corrida-perfeita',
          linkText: 'Ver el caso de Corrida Perfeita',
        },
        {
          tag: 'Product Discovery · SaaS B2B',
          title: 'Diseñar experiencias de inteligencia electoral',
          description: 'En Candidattus participé en la definición de flujos, el diseño de interfaces y la construcción de un Design System desde cero para una plataforma de inteligencia electoral.',
          slug: 'candidattus',
          linkText: 'Ver el caso de Candidattus',
        },
        {
          tag: 'UX/UI · Diseño de productos digitales',
          title: 'Experiencias digitales para el sector de la automoción',
          description: 'En AutoForce trabajé en la creación y evolución de interfaces para distintas marcas del sector, equilibrando identidad visual, usabilidad, consistencia y necesidades comerciales.',
        },
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
