import type { ProfileData, NavItem } from '~/types/portfolio'

/** Dados principais da Eduarda (seção inicial do site). Use \n para quebrar linha na frase. */
export const PROFILE: ProfileData = {
  name: 'Eduarda',
  role: 'e sou Engenheira de Software',
  testimonial: 'Transformo problemas complexos de negócios e tecnologia em código estruturado, em soluções escaláveis e de fácil manutenção.',
  yearsExperience: '+3 anos',
  experienceLabel: 'de Experiência',
  resumeUrl: 'https://drive.google.com/file/d/12TLa30BNAoI27QSkj0j07io3R5eu4nw-/view?usp=drive_link'
}

/** Itens do menu de navegação */
export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Trajetória', href: '#trajetoria' },
  { label: 'Sobre', href: '#contratar' },
  { label: 'Currículo', href: PROFILE.resumeUrl, isExternal: true },
  { label: 'Projetos', href: '#servicesCarousel' },
  { label: 'Contato', href: '#contato' }
]
