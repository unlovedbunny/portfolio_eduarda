export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface ProjectSection {
  title: string;
  /** Parágrafos de texto corrido */
  paragraphs?: string[];
  /** Lista de itens (label em negrito opcional + texto) */
  items?: { label?: string; text: string }[];
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  title: string;
  image: string;
  eyebrow: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  driveUrl?: string;
  /** Blocos de texto estruturados exibidos abaixo do cabeçalho */
  sections?: ProjectSection[];
  /** Links extras (edital, equipe, notícias...) */
  links?: ProjectLink[];
  video?: {
    type: 'iframe' | 'video';
    src: string;
    poster?: string;
  };
  gallery: {
    src: string;
    alt: string;
    wide?: boolean;
  }[];
}

export interface TimelineItem {
  company: string;
  logo: string;
  period: string;
  role: string;
  description: string;
  dotColor: 'orange' | 'dark';
}

export interface SkillGroup {
  label: string;
  skills: {
    name: string;
    icon: string;
  }[];
}

export interface ContactLink {
  platform: string;
  href: string;
  icon: string;
  handle: string;
  isExternal?: boolean;
}

export interface ProfileData {
  name: string;
  role: string;
  testimonial: string;
  yearsExperience: string;
  experienceLabel: string;
  resumeUrl: string;
}
