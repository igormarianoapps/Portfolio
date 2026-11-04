import type { Edition } from './spanish';

export const corridaEs: Edition = {
  clientOrContext:'Aplicación de entrenamiento para corredores y sitio web',
  tagline:'De la primera visita al primer entrenamiento: un recorrido más claro y personalizado.',
  summary:'Rediseñé el onboarding y la pantalla de inicio de la aplicación, además de renovar la web. El abandono tras la primera visita a la pantalla principal pasó de más del 60 % a aproximadamente el 20 %.',
  metadata:{
    role:'Diseñador UX/UI (Discovery, investigación UX, flujos, wireframes y UI)',
    timeline:'Proyecto realizado en 2022',
    team:'Colaboración con Product Owner, responsables de negocio e ingeniería',
    platform:'Aplicación móvil (iOS y Android) y web adaptable',
    tools:['Figma','Google Analytics','Hotjar'],
  },
  metrics:[
    {value:'+60 % → ~20 %',label:'Abandono tras la primera visita a la pantalla principal',context:'Valores históricos aproximados de periodos de dos meses anteriores y posteriores al rediseño. No se realizó un experimento controlado.',isPlaceholderMetric:false},
    {value:'≈ 40 p. p.',label:'Reducción del abandono',context:'Diferencia aproximada en puntos porcentuales calculada a partir de los porcentajes históricos.',isPlaceholderMetric:false},
  ],
  sections:[
    {
      id:'desafio',
      title:'01. El reto: comunicar el valor desde el primer momento',
      lead:'Corrida Perfeita ofrecía clases, acompañamiento y planes de entrenamiento, pero su experiencia inicial no comunicaba esos beneficios con suficiente claridad.',
      paragraphs:[
        'Más del 60 % de los nuevos usuarios abandonaba después de llegar a la pantalla principal de la aplicación. El reto no era mostrar más funcionalidades, sino ayudar a cada corredor a identificar cuál debía ser su siguiente paso.',
        'El proyecto buscó investigar este comportamiento y conectar la primera experiencia con los objetivos de quienes empezaban a correr o querían mejorar sus entrenamientos.',
      ],
    },
    {
      id:'discovery',
      title:'02. Discovery: preguntas antes que pantallas',
      lead:'Organizamos lo que sabíamos, lo que suponíamos y lo que todavía necesitábamos comprender sobre el primer uso.',
      paragraphs:[
        'La matriz de certezas, suposiciones y dudas recogió preocupaciones acerca de una primera pantalla poco acogedora, la posibilidad de que los usuarios se sintieran perdidos y la necesidad de un momento inicial en el que comprendieran el valor de la aplicación.',
        'La investigación también combinó análisis de comportamiento en Google Analytics y Hotjar, conversaciones con los responsables de producto y un estudio de la competencia. Tratamos las suposiciones como preguntas para investigar, no como hechos demostrados.',
      ],
      bulletPoints:[
        'Hacer que la primera interacción resulte más acogedora.',
        'Aclarar el siguiente paso y facilitar el descubrimiento de funcionalidades.',
        'Comprender el perfil de cada corredor para ofrecer una experiencia más relevante.',
      ],
    },
    {
      id:'decisoes-app',
      title:'03. Decisiones UX: del registro al entrenamiento',
      lead:'En lugar de presentar todas las funcionalidades de golpe, el nuevo recorrido relaciona la aplicación con la situación de cada persona.',
      paragraphs:[
        'El onboarding presenta el club, recoge información personal y deportiva, pregunta por la frecuencia, la distancia, los objetivos y los días disponibles, y conduce hacia un plan de entrenamiento. Es posible omitir la personalización para que no se convierta en una barrera obligatoria.',
        'La pantalla principal se reorganizó alrededor del plan activo, las recomendaciones, las actividades recientes, los próximos eventos y las clases. El foco pasó del registro aislado de actividades al recorrido completo del corredor.',
      ],
      decisionLog:[
        {challenge:'La primera visita ofrecía poca orientación.',decision:'Incorporar una bienvenida y un onboarding guiado.',rationale:'Explicar el valor de la aplicación y dar contexto antes de explorar sus funciones.'},
        {challenge:'Personas con objetivos diferentes encontraban el mismo punto de partida.',decision:'Preguntar por la condición física, la frecuencia, la distancia y los objetivos, permitiendo omitir el proceso.',rationale:'Ofrecer entrenamientos más relevantes sin bloquear el avance.'},
        {challenge:'Los entrenamientos, las clases y el acompañamiento tenían poca visibilidad al entrar.',decision:'Priorizar el plan activo y el contenido relevante en la pantalla principal.',rationale:'Facilitar el descubrimiento de funcionalidades y la identificación del siguiente paso.'},
      ],
    },
    {
      id:'home-app',
      title:'04. Una pantalla principal centrada en el corredor',
      lead:'El plan de entrenamiento y los contenidos que permiten avanzar adquieren protagonismo.',
      paragraphs:[
        'La interfaz reúne el plan activo, recomendaciones, actividades recientes, eventos y clases. De este modo responde a la necesidad de orientar mejor a las personas que abrían la aplicación por primera vez.',
        'El rediseño se implementó y los flujos principales continúan utilizándose, aunque el equipo ha introducido cambios visuales y funcionales posteriores.',
      ],
    },
    {
      id:'resultados-app',
      title:'05. Resultados: menos abandono',
      lead:'Después de la implementación analizamos el comportamiento y observamos una reducción importante del abandono tras la primera visita a la pantalla principal.',
      paragraphs:[
        'Los datos históricos registrados entonces indican una caída desde algo más del 60 % hasta aproximadamente el 20 %. En Google Analytics comparamos periodos de dos meses anteriores y posteriores a la implementación.',
        'La diferencia ronda los 40 puntos porcentuales. Son cifras aproximadas y los informes originales ya no están disponibles. Tampoco hubo un experimento controlado que aislara el efecto del rediseño de otros factores.',
      ],
    },
    {
      id:'site-diagnostico',
      title:'06. Más allá de la aplicación: replantear la web',
      lead:'La experiencia del corredor empezaba antes de la descarga. La web también necesitaba explicar mejor el valor del club.',
      paragraphs:[
        'La página anterior presentaba información institucional, consejos gratuitos y ofertas comerciales sin un recorrido suficientemente claro desde la comprensión del servicio hasta la exploración de la aplicación y la elección de un plan.',
        'Los datos históricos de Analytics mostraban un 83,2 % de visitas desde móviles, un 16,0 % desde ordenadores y un 0,8 % desde tabletas. Estos datos reforzaron la importancia de diseñar una arquitectura de información adaptable.',
        'El rediseño dio más protagonismo a la propuesta de valor, las descargas, los beneficios, los testimonios, los contenidos educativos y la comparación entre los planes Essential y Personal. Los datos de ingresos e interacción disponibles sirvieron para el diagnóstico; no los presentamos como resultados posteriores al lanzamiento.',
      ],
    },
    {
      id:'site-processo',
      title:'07. Arquitectura de información, wireframes e interfaz adaptable',
      lead:'Del diagnóstico a la estructura: ordenar el contenido para acompañar al visitante desde el descubrimiento hasta la decisión.',
      paragraphs:[
        'Los wireframes de escritorio y móvil permitieron definir el orden de las secciones, las llamadas a la acción, los planes, los contenidos y los testimonios antes de aplicar el diseño visual.',
        'La interfaz final dedicó un espacio destacado a la aplicación, seguido de beneficios, testimonios, consejos gratuitos y planes. La experiencia se adaptó a distintos tamaños de pantalla sin perder la coherencia del recorrido.',
      ],
      decisionLog:[
        {challenge:'Los visitantes tenían que reunir información dispersa para comprender el servicio.',decision:'Organizar una secuencia clara: club, aplicación, beneficios y planes.',rationale:'Facilitar la comprensión progresiva antes de tomar una decisión de compra.'},
        {challenge:'La mayor parte del tráfico registrado procedía de móviles.',decision:'Diseñar wireframes de escritorio y móvil y adaptar la jerarquía a pantallas pequeñas.',rationale:'Mantener la legibilidad y las acciones claras en el contexto de uso más habitual.'},
        {challenge:'Los beneficios y las diferencias entre ofertas no eran suficientemente claros.',decision:'Destacar la aplicación, los testimonios y la comparación de planes.',rationale:'Ayudar a entender el servicio y escoger la opción adecuada.'},
      ],
    },
    {
      id:'site-final',
      title:'08. La web implementada: conectar el mensaje con el producto',
      lead:'Una página que presenta el club, muestra la aplicación y facilita el siguiente paso.',
      paragraphs:[
        'La web final combina una sección principal de presentación, la descarga de la aplicación, los beneficios, los testimonios, los contenidos educativos gratuitos y los planes de entrenamiento en un recorrido mejor estructurado.',
        'El rediseño de la web se implementó. Como no se dispone de una comparación de conversión posterior al lanzamiento debidamente validada, describo las decisiones y la entrega sin atribuir mejoras comerciales que no se hayan medido.',
      ],
    },
    {
      id:'design-handoff',
      title:'09. Entrega a desarrollo: conectar diseño e implementación',
      lead:'De la interfaz a las reglas de negocio.',
      paragraphs:[
        'Para que las soluciones se implementaran según lo previsto, organicé documentación detallada en Miro con flujos de usuario, historias de usuario y comportamientos esperados de los componentes.',
        'La entrega incluyó reuniones específicas con los desarrolladores, en las que presenté los recorridos, expliqué las decisiones UX y resolví dudas sobre las interacciones.',
        '**La documentación estaba viva:** cuando surgían nuevas preguntas y situaciones técnicas, añadíamos las reglas de negocio directamente en Miro para mantener una referencia clara, accesible y actualizada.',
        'Este enfoque redujo la ambigüedad durante la implementación y mantuvo alineados diseño, producto e ingeniería.',
      ],
      processFlow:{
        title:'Documentación → Alineación → Iteración',
        badge:'Entrega a desarrollo',
        summary:'Un proceso continuo en Miro: las conversaciones técnicas permitían identificar situaciones excepcionales e incorporarlas a una referencia compartida.',
        steps:[
          {number:'01',title:'Documentación',subtitle:'Miro y especificaciones funcionales',items:['Flujos de navegación','Historias de usuario','Comportamientos y estados esperados']},
          {number:'02',title:'Alineación',subtitle:'Sesiones con ingeniería',items:['Reuniones con desarrollo','Explicación de los criterios UX','Resolución de situaciones excepcionales']},
          {number:'03',title:'Iteración',subtitle:'Documentación viva',items:['Nuevas reglas de negocio','Situaciones límite','Definiciones actualizadas en Miro']},
        ],
      },
    },
    {
      id:'aprendizados',
      title:'10. Implementación, impacto y aprendizajes',
      lead:'El mayor logro no fue rediseñar la aplicación, sino ayudar a las personas a descubrir su valor.',
      paragraphs:[
        'El proyecto comenzó con un problema de abandono y evolucionó hacia una transformación más amplia de cómo Corrida Perfeita recibía, orientaba y se comunicaba con sus corredores.',
        'Rediseñamos el onboarding, reorganizamos la pantalla principal y renovamos la web comercial. Las soluciones se implementaron y pasaron a formar parte del producto real.',
      ],
      executiveSummary:{
        headlineLead:'El mayor logro no fue rediseñar la aplicación, sino ayudar a las personas a descubrir su valor.',
        introParagraphs:[
          'El proyecto comenzó con un problema de abandono y evolucionó hacia una transformación más amplia de cómo Corrida Perfeita recibía, orientaba y se comunicaba con sus corredores.',
          'Rediseñamos el onboarding, reorganizamos la pantalla principal y renovamos la web comercial. Las soluciones se implementaron y pasaron a formar parte del producto real.',
        ],
        impactMetric:{
          title:'El impacto en cifras',
          stat:'+60 % → ~20 %',
          statLabel:'Abandono tras el primer acceso a la pantalla principal',
          changeHighlight:'−40 puntos porcentuales de abandono',
          description:'Reducción aproximada de 40 puntos porcentuales al comparar dos periodos de dos meses antes y después de la implementación.',
          insight:'Más allá de renovar una interfaz, el resultado mostró la importancia de conectar las expectativas de las personas con el valor real del producto.',
        },
        learningsSection:{
          title:'Tres aprendizajes que cambiaron mi forma de entender el producto',
          learnings:[
            {number:'01',title:'El problema que se presenta no siempre es el que debemos resolver.',paragraphs:['Empezamos investigando el abandono dentro de la aplicación, pero descubrimos que parte de la fricción estaba también en cómo se comunicaba su valor antes y durante la entrada.','Para mejorar la experiencia tuvimos que mirar más allá de una pantalla y estudiar el recorrido desde el primer contacto con la marca.']},
            {number:'02',title:'La personalización solo aporta valor cuando simplifica el recorrido.',paragraphs:['Recoger datos del corredor no era suficiente: necesitábamos convertir esas respuestas en una experiencia alineada con sus objetivos.','El onboarding empezó a conectar el perfil con entrenamientos relevantes y la pantalla principal ganó contexto.'],takeaway:'Personalizar no debe añadir esfuerzo cognitivo, sino facilitar la siguiente decisión.'},
            {number:'03',title:'El diseño no termina al entregar el prototipo.',paragraphs:['La documentación detallada, la entrega estructurada y la colaboración continua con ingeniería fueron esenciales para llevar las decisiones UX a producción.','Los flujos, las historias de usuario y los estados documentados en Miro evolucionaron cuando surgieron nuevas situaciones técnicas.'],takeaway:'La calidad de una solución depende también de nuestra capacidad para comunicar y justificar las decisiones ante quienes la implementan.'},
          ],
        },
        legacySection:{
          title:'Lo que permanece',
          paragraphs:['Años después, los recorridos principales de la aplicación y la arquitectura de la web siguen utilizándose, aunque hayan evolucionado visualmente y se hayan incorporado otras funcionalidades.','No significa que el diseño sea definitivo, sino que las decisiones iniciales establecieron una base capaz de seguir evolucionando.'],
          coreTakeaway:{label:'Mi principal aprendizaje',quote:'El trabajo de un Product Designer no consiste solo en facilitar el uso de un producto. Consiste en entender qué impide que las personas perciban su valor y conectar sus necesidades con los objetivos del negocio y las posibilidades técnicas.'},
        },
      },
    },
  ],
};
