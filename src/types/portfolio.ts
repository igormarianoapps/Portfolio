export type Language = 'pt' | 'en';

export interface SocialLinks {
  whatsapp: {
    label: string;
    url: string;
    isPlaceholder: boolean;
    note: string;
  };
  linkedin: {
    label: string;
    url: string;
    isPlaceholder: boolean;
    note: string;
  };
  email: {
    label: string;
    address: string;
    isPlaceholder: boolean;
    note: string;
  };
  behance?: {
    label: string;
    url: string;
    isPlaceholder: boolean;
    note: string;
  };
}

export interface StrategicWidgetData {
  id: string;
  badge: string;
  title: string;
  description: string;
  metricLabel?: string;
  metricValue?: string;
  actionText?: string;
  actionHref?: string;
  isPlaceholder?: boolean;
}

export interface SkillGroup {
  id: string;
  title: string;
  skills: string[];
}

export interface ProjectCardData {
  slug: string;
  title: string;
  category: string;
  summary: string;
  designerRole: string;
  validatedMetric?: {
    value: string;
    label: string;
    context: string;
  };
  tags: string[];
  coverImage: string;
  isPlaceholder: boolean;
}

export interface CaseStudyDecision {
  challenge: string;
  decision: string;
  rationale: string;
}

export interface CaseStudyMediaItem {
  url: string;
  alt: string;
  caption?: string;
  title?: string;
  label?: string;
  sublabel?: string;
  device?: 'browser' | 'mobile' | 'canvas' | 'none';
  aspectRatio?: string;
}

export interface CaseStudyMedia {
  type: 'single' | 'preview' | 'gallery' | 'comparison' | 'responsive-pair' | 'grid';
  item?: CaseStudyMediaItem;
  items?: CaseStudyMediaItem[];
  before?: CaseStudyMediaItem;
  after?: CaseStudyMediaItem;
  desktop?: CaseStudyMediaItem;
  mobile?: CaseStudyMediaItem;
  caption?: string;
  aspectHint?: 'contain' | 'cover' | 'auto';
  maxPreviewHeight?: number;
}

export interface CaseStudyImageSpec {
  url: string;
  alt: string;
  caption?: string;
  presentation?: 'scrollable-page' | 'panoramic' | 'wireframe-comparison' | 'dual-artifact' | 'contain' | 'standard';
  deviceFrame?: 'browser' | 'mobile' | 'canvas' | 'none';
  frameTitle?: string;
  badge?: string;
  scrollable?: boolean;
  viewportHeight?: string;
  secondaryImage?: {
    url: string;
    alt: string;
    caption?: string;
    title?: string;
    frameTitle?: string;
    deviceFrame?: 'browser' | 'mobile' | 'none';
    presentation?: 'scrollable-page' | 'contain' | 'standard';
  };
}

export interface CaseStudyProcessStep {
  number: string;
  title: string;
  subtitle?: string;
  items: string[];
}

export interface CaseStudyProcessFlow {
  title?: string;
  badge?: string;
  summary?: string;
  steps: CaseStudyProcessStep[];
}

export interface CaseStudyLearningItem {
  number: string;
  title: string;
  paragraphs: string[];
  takeaway?: string;
}

export interface CaseStudyExecutiveSummary {
  headlineLead?: string;
  introParagraphs: string[];
  impactMetric: {
    title: string;
    stat: string;
    statLabel: string;
    description: string;
    insight: string;
    changeHighlight?: string;
  };
  learningsSection: {
    title: string;
    learnings: CaseStudyLearningItem[];
  };
  legacySection: {
    title: string;
    paragraphs: string[];
    coreTakeaway: {
      label: string;
      quote: string;
    };
  };
}

export interface CaseStudyFeatureCard {
  title: string;
  description: string;
  icon?:
    | 'users'
    | 'messages'
    | 'chart'
    | 'survey'
    | 'search'
    | 'benchmark'
    | 'desktop'
    | 'mobile'
    | 'monitor'
    | 'smartphone'
    | 'reuse'
    | 'refresh'
    | 'consistency'
    | 'layers'
    | 'collab'
    | 'collaboration'
    | 'book'
    | 'documentation'
    | 'recipes'
    | 'patterns'
    | 'handoff'
    | 'box'
    | 'components'
    | 'sparkles'
    | 'ai';
}

export interface CaseStudySystemComparison {
  left: {
    title: string;
    subtitle?: string;
    badge?: string;
    items: string[];
  };
  right: {
    title: string;
    subtitle?: string;
    badge?: string;
    items: string[];
  };
}

export interface CaseStudyAiHighlight {
  title: string;
  text: string;
  badge?: string;
}

export interface CaseStudyStepCard {
  number: string;
  title: string;
  description: string;
}

export interface CaseStudySection {
  id: string;
  title: string;
  lead?: string;
  paragraphs: string[];
  bulletPoints?: string[];
  featureCards?: CaseStudyFeatureCard[];
  featureCardsLayout?: '2x2' | '3-col' | '4-col';
  stepCards?: CaseStudyStepCard[];
  closingParagraph?: string;
  decisionLog?: CaseStudyDecision[];
  processFlow?: CaseStudyProcessFlow;
  executiveSummary?: CaseStudyExecutiveSummary;
  learningHighlights?: {
    headline: string;
    title: string;
    learnings: CaseStudyLearningItem[];
  };
  conceptualTags?: string[];
  systemComparison?: CaseStudySystemComparison;
  aiHighlight?: CaseStudyAiHighlight;
  image?: CaseStudyImageSpec;
  inlineImage?: {
    afterParagraph: number;
    image: CaseStudyImageSpec;
  };
  inlineImages?: Array<{
    afterParagraph: number;
    image: CaseStudyImageSpec;
  }>;
  quote?: {
    text: string;
    author: string;
    role: string;
  };
}

export interface CaseStudyTocItem {
  id: string;
  title: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  clientOrContext: string;
  tagline: string;
  summary: string;
  coverImage: string;
  tags: string[];
  metadata: {
    role: string;
    timeline?: string;
    team: string;
    platform: string;
    tools?: string[];
  };
  isPlaceholder: boolean;
  placeholderNotice?: string;
  metrics?: {
    value: string;
    label: string;
    context: string;
    isPlaceholderMetric?: boolean;
  }[];
  tableOfContents?: CaseStudyTocItem[];
  sections: CaseStudySection[];
}

export interface LocalizedCaseStudy {
  pt: CaseStudy;
  en: CaseStudy;
}
