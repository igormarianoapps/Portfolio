import type { Edition } from './spanish';

export const candidattusEs: Edition = {
  clientOrContext:'Plataforma SaaS de inteligencia electoral',
  tagline:'Estructurando una plataforma de inteligencia electoral, desde el producto hasta los procesos.',
  summary:'Como único diseñador UX/UI, trabajé en la arquitectura de información, los dashboards y el proceso de entrega de diseño a desarrollo de una plataforma de inteligencia electoral.',
  metadata:{
    role:'Product Designer (Discovery, UX/UI, arquitectura de información y DesignOps)',
    timeline:'Proyecto desarrollado entre 2023 y 2024',
    team:'Único diseñador UX/UI, en colaboración con dirección y desarrollo',
    platform:'Aplicación web (SaaS B2B)',
    tools:['Figma','DesignOps','Dashboards e IA'],
  },
  metrics:[
    {value:'Más autonomía',label:'MENOS INTERVENCIONES DE DIRECCIÓN',context:'Organización de los flujos de trabajo en Figma y Jira para reducir la necesidad de supervisión constante por parte del CEO.',isPlaceholderMetric:false},
    {value:'Menos retrabajo',label:'ENTREGAS MÁS CONSISTENTES',context:'Mayor alineación observada entre los prototipos aprobados y el desarrollo tras introducir DesignOps.',isPlaceholderMetric:false},
  ],
  sections:[
    {
      id:'desafio',title:'01. El reto',
      paragraphs:[
        'Cuando llegué a Candidattus, el producto todavía estaba tomando forma. Había una visión ambiciosa de inteligencia electoral, pero solo se había diseñado la pantalla inicial. La experiencia necesitaba una estructura clara.',
        'Como único diseñador UX/UI, mi primer reto fue convertir aquella idea en una experiencia coherente capaz de organizar módulos, dashboards y funcionalidades que ayudasen a tomar decisiones estratégicas durante campañas políticas.',
        'Al mismo tiempo, el trabajo estaba muy centralizado en la dirección. Los cambios frecuentes durante el diseño y el desarrollo provocaban retrabajo y diferencias entre los prototipos aprobados y las funcionalidades implementadas, lo que también complicaba las pruebas de QA.',
        'Por tanto, el reto era doble: estructurar un producto complejo y mejorar la forma en que las decisiones de diseño llegaban a desarrollo.',
      ],
    },
    {
      id:'discovery',title:'02. Discovery e investigación',lead:'Comprender el problema antes de diseñar la solución.',
      paragraphs:[
        'Diseñar una plataforma de inteligencia electoral exigía comprender perfiles de usuario diferentes, necesidades estratégicas y un volumen considerable de información.',
        'El discovery combinó investigación cuantitativa, análisis de referentes e información obtenida en entrevistas con clientes. Por motivos de confidencialidad, las entrevistas las realizó la dirección; yo participé activamente en su preparación, definiendo preguntas e hipótesis que debíamos investigar.',
        'Para completar esta información, incorporamos encuestas de Hotjar en la web de Candidattus y estudiamos soluciones del mercado con el objetivo de detectar oportunidades y buenas prácticas.',
      ],
      featureCards:[
        {title:'Entrevistas y responsables del producto',description:'Participación en la preparación de entrevistas, organización de preguntas e identificación de cuestiones que debíamos aclarar con los clientes.',icon:'users'},
        {title:'Encuestas cuantitativas',description:'Encuestas de Hotjar para recoger percepciones de los usuarios y complementar lo aprendido en las conversaciones con clientes.',icon:'chart'},
        {title:'Benchmarking y análisis de mercado',description:'Análisis de soluciones y patrones de interacción que orientaron la arquitectura, la navegación y la presentación de datos.',icon:'search'},
      ],
      closingParagraph:'Los conocimientos obtenidos ayudaron a definir los flujos, la arquitectura de funcionalidades y las primeras propuestas de interfaz.',
    },
    {
      id:'arquitetura',title:'03. Arquitectura e identidad visual',lead:'De un concepto inicial a la estructura de una plataforma completa.',
      paragraphs:[
        'El concepto visual inicial estaba inspirado en el salpicadero de un coche deportivo. Cuestioné esa referencia porque no comunicaba con claridad el propósito analítico de la plataforma.',
        'Trabajé entonces en una identidad centrada en la legibilidad de los datos, una jerarquía clara y patrones reutilizables entre módulos.',
        '### Organizar la complejidad',
        'El producto tenía que reunir gestión de campañas, estrategia electoral, inteligencia política y seguimiento de indicadores clave.',
        'Para integrar estas capacidades diseñé una navegación de tres niveles: módulos, categorías y pantallas específicas, dentro de una experiencia unificada.',
        'La estructura facilitó mantener criterios compartidos entre módulos, aunque su escalabilidad necesitaría revisarse conforme creciera el producto.',
        '### Un lenguaje visual coherente',
        'Definir la interfaz también implicó establecer criterios para dashboards, gráficos, formularios, indicadores KPI y componentes de navegación.',
        'El objetivo era conservar la coherencia entre áreas diferentes y facilitar la interpretación de información compleja, incluso cuando cambiaban considerablemente los contenidos y las funcionalidades.',
        'Estos patrones sirvieron como base para los dashboards y otros recorridos del producto.',
      ],
      decisionLog:[
        {challenge:'Organizar módulos y funcionalidades sin fragmentar la experiencia.',decision:'Estructurar la navegación en tres niveles: módulos, categorías y pantallas.',rationale:'Ofrecer una estructura compartida y patrones reutilizables entre módulos.'},
      ],
    },
    {
      id:'dashboards-ia',title:'04. Dashboards e inteligencia artificial',lead:'Convertir información compleja en decisiones más claras.',
      paragraphs:[
        'Los dashboards debían reunir investigaciones, indicadores y datos electorales sin obligar a los usuarios a interpretar información dispersa entre numerosas pantallas.',
        'Como único diseñador UX/UI, trabajé en cuadros de mando con indicadores, encuestas, resultados históricos y análisis estratégicos.',
        '### Datos para comprender el contexto',
        'Diseñamos visualizaciones para distintas dimensiones de una campaña: diagnóstico del clima político, resultados electorales históricos, preferencias de los votantes y seguimiento de actividades sobre el terreno.',
        'Prioricé la jerarquía de indicadores, la agrupación de información relacionada y la consistencia de los gráficos para facilitar comparaciones y análisis de escenarios.',
        '### Inteligencia artificial como apoyo estratégico',
        'La plataforma también incorporó funcionalidades de inteligencia artificial para ayudar a interpretar datos y analizar escenarios.',
        'Durante las primeras fases desarrollamos un asistente conversacional que permitía a los candidatos explorar posibilidades y comentar próximos pasos estratégicos de sus campañas.',
        'Posteriormente, la IA empezó a analizar información procedente de más de diez fuentes integradas, entre ellas Instagram, Facebook, Reddit, YouTube, periódicos y medios digitales. Estos datos permitían construir perfiles de candidatos por región, detectar tendencias y destacar publicaciones relevantes por interacción para apoyar el análisis de campaña.',
        '### De los datos a las decisiones',
        'Cada dashboard debía responder a una pregunta práctica de campaña, como entender el panorama político o comparar las preferencias de los votantes.',
        'Las sesiones de validación con clientes aportaron comentarios positivos sobre los flujos y las interfaces. No dispongo de métricas de uso que permitan cuantificar su impacto.',
      ],
      decisionLog:[
        {challenge:'Presentar un gran volumen de indicadores electorales sin dificultar su interpretación.',decision:'Agrupar información relacionada y establecer una jerarquía visual coherente en los dashboards.',rationale:'Facilitar la comparación de datos y la comprensión de cada escenario.'},
      ],
    },
    {
      id:'prototipacao',title:'05. Prototipado y validación',lead:'Los prototipos tenían que funcionar más allá de una presentación.',
      paragraphs:[
        'Con tantos módulos y reglas de negocio, el prototipado era esencial para convertir ideas en recorridos comprensibles antes del desarrollo.',
        '### Validar sin acceso directo a los clientes',
        'Por motivos de confidencialidad, no participaba directamente en las reuniones con clientes. Presentaba las pantallas y funcionalidades al CEO, que dirigía las sesiones de validación y me trasladaba los comentarios.',
        'Esto exigía prototipos de Figma muy navegables: las interacciones debían ser suficientemente claras para que una persona con poca experiencia en la herramienta pudiera recorrerlos sin ayuda.',
        '### De los flujos a las experiencias funcionales',
        'Durante el proyecto realizamos pruebas de flujos y validaciones con clientes. Sus comentarios orientaron las iteraciones previas al desarrollo.',
        'Con la llegada de herramientas de desarrollo asistido por IA, también empecé a convertir algunas pantallas validadas internamente en experiencias funcionales para apoyar las pruebas.',
        'Esto acercó la validación al comportamiento real del producto, sin sustituir las pruebas de los recorridos con usuarios.',
      ],
    },
    {
      id:'designops',title:'06. DesignOps',lead:'De detectar el retrabajo a proponer un proceso compartido: una iniciativa más allá de las pantallas.',
      paragraphs:[
        'Además de los retos de producto, había un problema operativo: la supervisión constante de la dirección durante el diseño y el desarrollo provocaba cambios frecuentes, retrabajo y diferencias entre los prototipos aprobados y las interfaces entregadas.',
        'Durante esa transición no había PO ni PM. Vi la oportunidad de contribuir más allá de la interfaz y propuse un flujo con etapas, responsables, estados y documentación accesible. Se lo presenté al CEO, debatimos cómo integrarlo en el día a día y aceptó ponerlo a prueba.',
        '### Un proceso compartido entre diseño e ingeniería',
        'Organicé un flujo que conectaba backlog, discovery, refinamiento, wireframes opcionales, prototipado, validación e implementación. También definí recorridos para la documentación y los elementos que finalmente no se incorporaban al producto.',
        'En lugar de añadir aprobaciones, hice visibles la etapa de cada solicitud, los criterios de entrega y las decisiones previas antes de pasar a ingeniería. El objetivo era reducir la ambigüedad sin crear burocracia innecesaria.',
        '### Organizar Figma y Jira',
        'En Figma organicé creación, desarrollo, elementos implementados y documentación, mediante tarjetas y estados estandarizados. Las etapas de Jira reflejaban el proceso y facilitaban el seguimiento compartido.',
        'Con etapas y estados visibles, el equipo podía consultar el avance sin depender de reuniones constantes con dirección.',
        '### Cambios observados en el trabajo diario',
        'En la práctica observamos menos cambios durante el desarrollo y una mayor correspondencia entre los diseños validados y las interfaces entregadas. La dirección podía seguir el progreso mediante las tarjetas.',
        'Estas mejoras se observaron durante el trabajo diario; no conservamos un seguimiento cuantitativo comparable que permita atribuirles porcentajes concretos.',
      ],
      decisionLog:[
        {challenge:'Reducir los cambios durante el desarrollo y las diferencias entre prototipos aprobados e interfaces entregadas.',decision:'Proponer al CEO un flujo compartido con etapas, responsables, estados y documentación en Figma y Jira.',rationale:'Evitar comprobaciones improvisadas, conservar el contexto de las aprobaciones y dar a diseño e ingeniería una visión común.'},
      ],
    },
    {
      id:'resultados',title:'07. Resultados e impacto',lead:'Entregas más previsibles y una plataforma útil para campañas reales.',
      paragraphs:[
        'El principal resultado de DesignOps fue una mayor claridad sobre las etapas de cada solicitud y las decisiones tomadas antes del desarrollo.',
        'En la práctica, el equipo ganó autonomía y necesitó menos intervenciones operativas de la dirección.',
        'En el producto, los comentarios recibidos durante las validaciones con clientes fueron positivos y permitieron perfeccionar flujos y dashboards.',
      ],
    },
    {
      id:'escalabilidade',title:'08. Retos de escalabilidad',lead:'Cuando el crecimiento de funcionalidades empezó a dificultar la navegación.',
      paragraphs:[
        'A medida que Candidattus evolucionaba, se incorporaban funcionalidades rápidamente, a menudo en respuesta a solicitudes durante campañas activas.',
        'La navegación de tres niveles había ayudado inicialmente a organizar la plataforma, pero sus limitaciones se hicieron más evidentes conforme crecieron las funciones. A quienes conocían menos el sistema les costaba encontrar determinadas opciones.',
        'Propuse investigar los recorridos de navegación y revisar la arquitectura de información antes de definir una nueva solución. La propuesta no siguió adelante porque la dirección conocía bien el producto y no percibía la misma fricción.',
        'El reto quedó pendiente: las funcionalidades valiosas también tienen que poder encontrarse fácilmente.',
      ],
      featureCards:[
        {title:'Crecimiento del producto',description:'Se incorporaban nuevas funcionalidades con rapidez para responder a las necesidades de las campañas.',icon:'chart'},
        {title:'Dificultad para encontrar funcionalidades',description:'A medida que el producto crecía, localizar determinadas opciones dentro de la navegación se volvió más complicado.',icon:'search'},
        {title:'Investigación propuesta',description:'Propuse estudiar los recorridos y revisar la arquitectura, pero la propuesta no se implementó.',icon:'users'},
      ],
    },
    {
      id:'aprendizados',title:'09. Aprendizajes',
      paragraphs:[],
      learningHighlights:{
        headline:'Diseñar productos también significa crear las condiciones para que el equipo trabaje mejor.',
        title:'Tres aprendizajes de este proyecto',
        learnings:[
          {number:'01',title:'Las decisiones deben tener sentido para todo el equipo.',paragraphs:['No basta con ordenar información compleja y proponer soluciones. Las decisiones también deben ser claras para dirección e ingeniería, de modo que todos compartan la misma comprensión.']},
          {number:'02',title:'Los procesos claros dan más autonomía.',paragraphs:['DesignOps demostró que los acuerdos compartidos, la documentación y las etapas definidas pueden reducir el retrabajo y las intervenciones operativas, manteniendo a la dirección implicada en las decisiones importantes.']},
          {number:'03',title:'Las soluciones deben evolucionar con el producto.',paragraphs:['La navegación de tres niveles permitió estructurar la plataforma, pero empezó a mostrar limitaciones conforme aparecían nuevas funcionalidades. Fue un recordatorio de la importancia de revisar la arquitectura según el uso real.']},
        ],
      },
    },
  ],
};
