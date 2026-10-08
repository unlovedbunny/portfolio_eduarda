import type {
  ProfileData,
  NavItem,
  Project,
  TimelineItem,
  SkillGroup,
  ContactLink
} from '~/types/portfolio'

export const PROFILE: ProfileData = {
  name: 'Eduarda',
  role: 'Dev Web',
  testimonial: 'Transformo designs complexos\ndo Figma em código de alta\nqualidade e performance.',
  yearsExperience: '1 ano +',
  experienceLabel: 'de Experiência',
  resumeUrl: 'https://drive.google.com/file/d/12TLa30BNAoI27QSkj0j07io3R5eu4nw-/view?usp=drive_link'
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Trajetória', href: '#trajetoria' },
  { label: 'Sobre', href: '#contratar' },
  { label: 'Currículo', href: PROFILE.resumeUrl, isExternal: true },
  { label: 'Projetos', href: '#servicesCarousel' },
  { label: 'Contato', href: '#contato' }
]

export const TIMELINE: TimelineItem[] = [
  {
    company: 'XMX-Corp',
    logo: '/img/logo.jpeg',
    period: '10 de Julho de 2025 - Presente',
    role: 'Dev Front-end Junior 🇺🇸',
    description: 'Desenvolvimento com React.js, SCSS e HTML com fidelidade de 100% ao Figma. Otimização técnica de Landing Pages para tráfego pago (Core Web Vitals). Ótima em resolver conflitos e lidar com ambientes de alta demanda.',
    dotColor: 'orange'
  },
  {
    company: 'Ministério Público do RN',
    logo: '/img/mp-rn.png',
    period: '02 de Jun de 2025 - 07 de Jul de 2025',
    role: 'Estagiária',
    description: 'Atuação no setor de tecnologia da informação do Ministério Público do Rio Grande do Norte (MPRN), auxiliando nas demandas técnicas, suporte e acompanhamento de processos internos do órgão.',
    dotColor: 'dark'
  },
  {
    company: 'UFRN',
    logo: '/img/ufrn.png',
    period: '2023 - Em andamento',
    role: 'Bacharelado em TI',
    description: 'Formação acadêmica focada em Tecnologia da Informação. Além do desenvolvimento de habilidades técnicas sólidas, atuei como Vice-Presidente do Diretório Acadêmico do curso, aprimorando forte capacidade de liderança, organização e comunicação assertiva.',
    dotColor: 'orange'
  }
]

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: 'Front-end',
    skills: [
      { name: 'HTML5', icon: '/img/icons/html5.svg' },
      { name: 'CSS3 / SCSS', icon: '/img/icons/css3.svg' },
      { name: 'JavaScript', icon: '/img/icons/javascript.svg' },
      { name: 'React', icon: '/img/icons/react.svg' },
      { name: 'Figma to Code', icon: '/img/icons/figma.svg' },
      { name: 'Next.js', icon: '/img/icons/nextjs.svg' },
      { name: 'Tailwind', icon: '/img/icons/tailwindcss.svg' }
    ]
  },
  {
    label: 'Back-end',
    skills: [
      { name: 'Node.js', icon: '/img/icons/nodejs.svg' },
      { name: 'Express', icon: '/img/icons/express.svg' },
      { name: 'Python', icon: '/img/icons/python.svg' },
      { name: 'FastAPI', icon: '/img/icons/fastapi.svg' }
    ]
  },
  {
    label: 'Ferramentas & Dados',
    skills: [
      { name: 'Git', icon: '/img/icons/git.svg' },
      { name: 'GitHub', icon: '/img/icons/github.svg' },
      { name: 'GitLab', icon: '/img/icons/gitlab.svg' },
      { name: 'Docker', icon: '/img/icons/docker.svg' },
      { name: 'MySQL', icon: '/img/icons/mysql.svg' },
      { name: 'Google Sheets', icon: '/img/icons/googlesheets.svg' },
      { name: 'ClickUp', icon: '/img/icons/clickup.svg' },
      { name: 'Matplotlib', icon: '/img/icons/matplotlib.svg' }
    ]
  }
]

export const CONTACTS: ContactLink[] = [
  { platform: 'Email', href: 'mailto:contato.eduardafdl@gmail.com', icon: '/img/email.png', handle: 'contato.eduardafdl@gmail.com' },
  { platform: 'LinkedIn', href: 'https://www.linkedin.com/in/duda-schneider/', icon: '/img/linkedin.png', handle: '/in/duda-schneider', isExternal: true },
  { platform: 'Instagram', href: 'https://www.instagram.com/unloved.bunny/', icon: '/img/insta.png', handle: '@unloved.bunny', isExternal: true },
  { platform: 'GitHub', href: 'https://github.com/unlovedbunny', icon: '/img/github.png', handle: '/unlovedbunny', isExternal: true }
]

export const PROJECTS: Project[] = [
  {
    slug: 'devscout',
    title: 'DevScout 🐙',
    eyebrow: 'Inteligência Artificial • Arquitetura Multi-Agente',
    description: 'Assistente de pesquisa técnica com arquitetura multi-agente: em vez de uma única chamada a um LLM, três agentes especializados colaboram — pesquisando fontes reais na web, sintetizando uma resposta estruturada e revisando o resultado antes de entregá-lo, com autocorreção quando algo fica incompleto. Do zero ao deploy em produção.',
    image: '/img/devscout.png',
    liveUrl: 'https://devscout-multi-agente.vercel.app/',
    tags: ['Next.js', 'TypeScript', 'React', 'LangGraph.js', 'Groq', 'Tavily', 'Clerk', 'PostgreSQL', 'Drizzle ORM'],
    gallery: [
      { src: '/img/img1.png', alt: 'DevScout — assistente de pesquisa técnica multi-agente', wide: true },
      { src: '/img/img2.png', alt: 'DevScout — assistente de pesquisa técnica multi-agente', wide: true }
    ]
  },
  {
    slug: 'imobiliaria-react',
    title: 'Imobiliária em React',
    eyebrow: 'Aplicação Web • React',
    description: 'Plataforma de imobiliária construída em React, com listagem de imóveis, componentes reutilizáveis e interface responsiva. Foco em organização de componentes, estado e uma experiência de navegação fluida.',
    image: '/img/imobilar.png',
    liveUrl: 'https://imobilar.netlify.app/',
    tags: ['React', 'JavaScript', 'Componentização', 'Responsivo'],
    gallery: [
      { src: '/img/imobilar.png', alt: 'Plataforma imobiliária em React', wide: true }
    ]
  },
  {
    slug: 'gestao-integrada',
    title: 'Sistema Essence',
    eyebrow: 'Software Local • Gestão de Vendas',
    description: 'O Essence é uma ferramenta 100% offline criada para revendedores de perfumes substituírem cadernos e planilhas. Sem mensalidade ou dependência de internet, ele gerencia estoque, clientes e parcelas atrasadas com poucos cliques. Abaixo, um vídeo demonstrando o sistema em funcionamento.',
    image: '/img/image.png',
    driveUrl: 'https://drive.google.com/file/d/1f8sen1zOLIYNFrvnZDQY7MMuZw-EOT1N/view?usp=sharing',
    video: {
      type: 'iframe',
      src: 'https://drive.google.com/file/d/1f8sen1zOLIYNFrvnZDQY7MMuZw-EOT1N/preview'
    },
    tags: ['Python (Flask)', 'JavaScript Vanilla', 'SQLite', 'Offline First'],
    gallery: [
      { src: '/img/image.png', alt: 'Sistema de Gestão Integrada', wide: true },
      { src: '/img/tela2.png', alt: 'Sistema de Gestão Integrada', wide: true },
      { src: '/img/tela3.png', alt: 'Sistema de Gestão Integrada', wide: true },
      { src: '/img/tela4.png', alt: 'Sistema de Gestão Integrada', wide: true },
      { src: '/img/tela5.png', alt: 'Sistema de Gestão Integrada', wide: true },
      { src: '/img/tela6.png', alt: 'Sistema de Gestão Integrada', wide: true }
    ]
  },
  {
    slug: 'landing-pages',
    title: 'Landing Pages',
    eyebrow: 'Landing Page • Tráfego Pago',
    description: 'Landing page de alta conversão voltada para campanhas de tráfego pago. O foco esteve na performance técnica — otimização das Core Web Vitals, carregamento rápido e uma estrutura pensada para converter visitantes em leads.',
    image: '/img/glucooff.png',
    liveUrl: 'https://glucooff.com/',
    tags: ['HTML', 'SCSS', 'Core Web Vitals', 'Performance'],
    gallery: [
      { src: '/img/glucooff.png', alt: 'Landing page Glucooff', wide: true }
    ]
  },
  {
    slug: 'portfolio-arquiteta',
    title: 'Portfólio Arquiteta',
    eyebrow: 'Site Institucional',
    description: 'Site portfólio desenvolvido para a arquiteta Ana Julia Ramalho, com foco em apresentar os projetos de forma elegante e responsiva. Layout limpo, navegação fluida e desempenho otimizado em todos os dispositivos.',
    image: '/img/portifolio.png',
    liveUrl: 'https://anajuliaramalhoarq.netlify.app/',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsivo'],
    gallery: [
      { src: '/img/portifolio.png', alt: 'Tela inicial do portfólio da arquiteta', wide: true }
    ]
  },
  {
    slug: 'biblioteca-secoes',
    title: 'Gerenciador de Seções e Componentes',
    eyebrow: 'Serverless Hub • Design System',
    description: 'Uma plataforma robusta desenvolvida para a empresa XMX-Corp, para catalogar, gerenciar e reutilizar trechos de código HTML, CSS e JavaScript. Centralize seus blocos modulares com screenshots automatizados, versionamento em banco de dados e acesso seguro para acelerar o desenvolvimento de interfaces com consistência visual.',
    image: '/img/biblioteca.png',
    liveUrl: 'https://biblioteca.biofraga.com/',
    video: {
      type: 'iframe',
      src: 'https://drive.google.com/file/d/1ky_B_GTdeP0vK0mZ67iDxmMD8nxUiu8F/preview'
    },
    tags: ['Cloudflare Workers', 'Cloudflare D1 & R2', 'Vanilla JS SPA', 'HTML / SCSS / JS'],
    gallery: [
      { src: '/img/biblioteca.png', alt: 'Biblioteca de seções reutilizáveis', wide: true }
    ]
  }
]
