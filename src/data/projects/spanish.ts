import type { CaseStudy, CaseStudySection, CaseStudyMediaItem, CaseStudyImageSpec } from '../../types/portfolio';

/**
 * European Spanish case-study editions. Media and technical IDs are reused from
 * the published English case so the visual artifacts remain faithful.
 */
type SectionEdition = Omit<CaseStudySection, 'id' | 'image' | 'inlineImage' | 'inlineImages'> & { id: string };
export type Edition = {
  clientOrContext: string;
  tagline: string;
  summary: string;
  metadata: CaseStudy['metadata'];
  metrics?: NonNullable<CaseStudy['metrics']>;
  sections: SectionEdition[];
};
function localizeImage(image: CaseStudyImageSpec | undefined, label: string): CaseStudyImageSpec | undefined {
  if (!image) return undefined;
  const translated: CaseStudyImageSpec = {
    ...image,
    alt: 'Captura del proyecto: ' + label,
    caption: 'Diseño y documentación del proyecto ' + label + '.',
    frameTitle: image.frameTitle?.startsWith('http') ? image.frameTitle : label,
  };
  if (image.secondaryImage) translated.secondaryImage = {
    ...image.secondaryImage,
    alt: 'Vista adicional del proyecto: ' + label,
    caption: 'Otra vista del diseño de ' + label + '.',
    title: label,
    frameTitle: label,
  };
  return translated;
}
function localizeMediaItem(item: CaseStudyMediaItem | undefined, label: string): CaseStudyMediaItem | undefined {
  return item ? { ...item, alt: 'Captura de ' + label, caption: 'Detalle de ' + label, title: label, label } : undefined;
}
export function spanishCaseStudy(english: CaseStudy, edition: Edition): CaseStudy {
  const sections: CaseStudySection[] = edition.sections.map((copy, index) => {
    const source = english.sections.find(section => section.id === copy.id);
    if (!source) throw new Error('Spanish case section not found: ' + copy.id);
    const { image, inlineImage, inlineImages, ...rest } = source;
    // Only explicitly reviewed Spanish copy is published. No English prose
    // is inherited through optional widgets, summaries or media captions.
    const translated: CaseStudySection = {
      id: copy.id,
      title: copy.title,
      paragraphs: copy.paragraphs,
      ...copy,
      image: localizeImage(image, copy.title),
    };
    if (inlineImage) translated.inlineImage = {
      afterParagraph: Math.min(inlineImage.afterParagraph, Math.max(0, copy.paragraphs.length - 1)),
      image: localizeImage(inlineImage.image, copy.title)!,
    };
    if (inlineImages) translated.inlineImages = inlineImages.map(entry => ({
      afterParagraph: Math.min(entry.afterParagraph, Math.max(0, copy.paragraphs.length - 1)),
      image: localizeImage(entry.image, copy.title)!,
    }));
    // Section-level galleries and other media are part of preserved image objects.
    void rest; void index; void localizeMediaItem;
    return translated;
  });
  return {
    slug: english.slug,
    title: english.title,
    clientOrContext: edition.clientOrContext,
    tagline: edition.tagline,
    summary: edition.summary,
    coverImage: english.coverImage,
    tags: english.tags,
    metadata: edition.metadata,
    isPlaceholder: false,
    metrics: edition.metrics,
    tableOfContents: sections.map(section => ({ id: section.id, title: section.title })),
    sections,
  };
}

export const taskcheckEs: Edition = {
  clientOrContext: 'SaaS B2B · Gestión de operaciones',
  tagline: 'De diseñar interfaces de forma continua a construir un Design System que conecta patrones, componentes y experiencias de escritorio y móvil.',
  summary: 'Cómo estructuré la primera versión del Design System de TaskCheck para estandarizar patrones, facilitar la reutilización de componentes y apoyar la evolución del producto.',
  metadata: {
    role: 'Product Designer — UX/UI y Design System',
    timeline: 'Design System, versión 1.0',
    team: 'Colaboración directa con Producto, Ingeniería y QA',
    platform: 'Escritorio y móvil',
    tools: ['Figma', 'Design Tokens', 'DesignOps', 'IA'],
  },
  metrics: [{value:'12 familias', label:'FAMILIAS DE COMPONENTES ESTANDARIZADAS', context:'Organización de 12 familias de componentes en la versión 1.0 del Design System.'}],
  sections: [
    {
      id:'contexto', title:'01. Contexto', lead:'Un producto, diferentes necesidades.',
      paragraphs:['TaskCheck es una plataforma de gestión operativa que conecta los equipos administrativos con los profesionales que trabajan sobre el terreno.','La experiencia de escritorio se centra en la planificación, la asignación de tareas, el seguimiento y la revisión de evidencias. La aplicación móvil facilita la ejecución de listas de comprobación, la captura de fotografías y el registro del progreso.','Son dos contextos diferentes que necesitan una identidad visual compartida y comportamientos coherentes.'],
      featureCards:[
        {title:'Escritorio — Gestión',description:'Creación y asignación de tareas, configuración de listas, seguimiento de la ejecución y revisión de evidencias.',icon:'desktop'},
        {title:'Móvil — Ejecución',description:'Acceso a tareas asignadas, ejecución de listas de comprobación, fotografías y seguimiento de entregas.',icon:'mobile'},
      ],
      closingParagraph:'Dos experiencias adaptadas a las necesidades de cada usuario, pero unidas por los mismos principios de diseño.',
    },
    {
      id:'desafio', title:'02. El reto', lead:'Llegó un momento en que diseñar nuevas pantallas ya no era suficiente.',
      paragraphs:['TaskCheck evolucionaba rápidamente, con funcionalidades y flujos desarrollándose en paralelo. Como diseñador principal debía mantener el ritmo de entrega y colaborar estrechamente con Producto, Ingeniería y QA.','Ya existían algunos componentes reutilizables, pero su organización ofrecía poco control. A medida que el producto crecía, mantener la consistencia obligaba a revisar decisiones que deberían haber estado estandarizadas.'],
      featureCards:[
        {title:'Reutilización',description:'Evitar reconstruir los mismos elementos y facilitar el uso diario de patrones compartidos.',icon:'reuse'},
        {title:'Consistencia',description:'Unificar el lenguaje visual entre pantallas, estados interactivos y dispositivos.',icon:'consistency'},
        {title:'Colaboración',description:'Facilitar la comprensión de las decisiones de diseño y la entrega a desarrollo.',icon:'collab'},
      ],
      quote:{text:'El reto no consistía simplemente en entregar más interfaces, sino en establecer una base capaz de crecer junto al producto.',author:'Igor Mariano',role:'Product Designer'},
    },
    {
      id:'solucao', title:'03. La solución', lead:'Una base diseñada para evolucionar.',
      paragraphs:['Decidí reconstruir los componentes principales desde cero, manteniendo la identidad visual que TaskCheck ya había establecido.','El objetivo no era rediseñar el producto: consistía en organizar sus patrones existentes dentro de una estructura más sólida que ofreciera mayor control sobre las decisiones de interfaz.'],
      stepCards:[
        {number:'01',title:'Identificar patrones',description:'Analizar elementos recurrentes y decisiones ya presentes en las interfaces.'},
        {number:'02',title:'Organizar los fundamentos',description:'Estandarizar colores, tipografía, espaciado y reglas visuales.'},
        {number:'03',title:'Crear componentes',description:'Convertir los patrones en componentes reutilizables para escritorio y móvil.'},
        {number:'04',title:'Aplicar y evolucionar',description:'Utilizar la biblioteca de forma paralela a la evolución del producto.'},
      ],
      closingParagraph:'La versión 1.0 se planteó como una base práctica y acotada para aportar consistencia sin detener las entregas del producto.',
    },
    {
      id:'foundations', title:'04. Fundamentos', lead:'La consistencia empieza por los fundamentos.',
      paragraphs:['Organicé los principales fundamentos visuales de TaskCheck para evitar estilos improvisados y establecer una referencia compartida y fiable para todas las pantallas.','La documentación reúne la paleta de colores, la tipografía Poppins, un sistema de espaciado basado en 4 px y criterios de composición adaptable.'],
      conceptualTags:['Colores','Tipografía','Espaciado','Reglas de composición'],
    },
    {
      id:'componentes', title:'05. Componentes y reutilización', lead:'Consistencia no significa crear interfaces idénticas.',
      paragraphs:['Escritorio y móvil comparten principios visuales, pero responden a situaciones operativas distintas.','Las tarjetas de tareas muestran cómo una misma arquitectura puede adaptarse al contexto: más densidad de información y control en escritorio, y una lectura rápida con acciones prioritarias en móvil.','Así, los componentes concentran decisiones que antes era necesario volver a evaluar en cada pantalla.'],
      featureCards:[
        {title:'Escritorio — Supervisión',description:'Prioriza la información administrativa, los indicadores de progreso, los plazos y las acciones de gestión.',icon:'desktop'},
        {title:'Móvil — Ejecución',description:'Prioriza la identificación inmediata de tareas, el avance, la proximidad de los plazos y las próximas acciones.',icon:'mobile'},
      ],
      conceptualTags:['Identificación','Indicadores','Estado','Plazo','Acciones'],
      closingParagraph:'Los componentes pasaron a reunir decisiones que antes debían resolverse de forma independiente en cada pantalla.',
    },
    {
      id:'documentacao', title:'06. Documentación e IA', lead:'Un componente necesita pautas de uso, no solo una apariencia.',
      paragraphs:['Además de construir los componentes, organicé pautas de uso, reglas de composición y comportamientos de estado, de manera que diseño e ingeniería dispusieran de una referencia práctica.','Utilicé la IA como apoyo para acelerar el análisis de patrones, organizar criterios y estructurar la documentación. La revisión y las decisiones finales de diseño siguieron siendo responsabilidad mía.'],
      featureCardsLayout:'2x2',
      featureCards:[
        {title:'01 — Primeros pasos',description:'Cómo empezar a utilizar la biblioteca de componentes.',icon:'book'},
        {title:'02 — Guías de componentes',description:'Cómo configurar y reutilizar los componentes.',icon:'recipes'},
        {title:'03 — Patrones de interfaz',description:'Cómo combinar elementos para construir interfaces consistentes.',icon:'patterns'},
        {title:'04 — Entrega a desarrollo y QA',description:'Cómo orientar la implementación y revisar la calidad visual.',icon:'handoff'},
      ],
      aiHighlight:{title:'La IA como apoyo al proceso de diseño',text:'La utilicé para analizar patrones, organizar criterios y perfeccionar las pautas. La selección de alternativas y las decisiones finales permanecieron bajo mi responsabilidad.',badge:'Apoyo al proceso'},
    },
    {
      id:'evolucao', title:'07. Evolución del sistema', lead:'Una primera versión preparada para crecer.',
      paragraphs:['La versión 1.0 se centró en los fundamentos y los componentes más frecuentes. Otras estructuras quedaron identificadas como oportunidades de ampliación para que el sistema creciera en función de las necesidades del producto.'],
      systemComparison:{
        left:{title:'Versión 1.0 — Base estructurada',badge:'Versión 1.0 entregada',items:['Fundamentos','Botones y campos','Controles de selección','Etiquetas de estado','Modales e iconos','Tarjetas de tareas','Archivos adjuntos']},
        right:{title:'V2 — Posibles ampliaciones',badge:'Oportunidades futuras',items:['Sistema completo de navegación','Cabecera global','Flujo de creación de tareas','Tarjetas del feed','Filtros y búsqueda','Tablas y listados de datos','Patrones de informes']},
      },
    },
    {
      id:'aprendizados', title:'08. Aprendizajes', lead:'Mucho más que organizar componentes.',
      paragraphs:['Compatibilizar las entregas continuas de los sprints con la necesidad de estructurar un producto en crecimiento cambió mi manera de diseñar.','Empecé a prestar más atención a los patrones recurrentes, la reutilización sistemática y la forma en que las decisiones visuales facilitan la colaboración entre disciplinas.','El principal aprendizaje fue comprender que un Design System no se define por la cantidad de componentes, sino por su capacidad para convertir decisiones en una base útil y coherente para el producto.'],
      learningHighlights:{
        headline:'Un Design System no se define por la cantidad de componentes, sino por su capacidad para convertir decisiones en una base útil y coherente para el producto.',
        title:'Tres aprendizajes fundamentales',
        learnings:[
          {number:'01',title:'Decisiones antes que componentes',paragraphs:['Estandarizar el lenguaje visual y los fundamentos aporta más valor que construir una biblioteca enorme desconectada de las necesidades del equipo.']},
          {number:'02',title:'Consistencia adaptada al contexto',paragraphs:['Escritorio y móvil comparten principios visuales, pero necesitan priorizar información e interacciones diferentes según el entorno.']},
          {number:'03',title:'La documentación conecta diseño e ingeniería',paragraphs:['Las guías prácticas, los estados claros y los criterios de entrega reducen ambigüedades y favorecen la autonomía del equipo.']},
        ],
      },
    },
  ],
};
