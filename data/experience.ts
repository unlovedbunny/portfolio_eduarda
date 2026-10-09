import type { TimelineItem } from '~/types/portfolio'

/** Trajetória profissional e acadêmica (do mais recente para o mais antigo) */
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
    logo: '/img/mp-rn.jpeg',
    period: '02 de Jun de 2025 - 07 de Jul de 2025',
    role: 'Estagiária',
    description: 'Atuação no setor de tecnologia da informação do Ministério Público do Rio Grande do Norte (MPRN), auxiliando nas demandas técnicas, suporte e acompanhamento de processos internos do órgão.',
    dotColor: 'dark'
  },
  {
    company: 'UERN',
    logo: '/img/UERN.png',
    period: '2023 - Em andamento',
    role: 'Bacharelado em Ciência da Computação',
    description: 'Formação acadêmica focada em Ciência da Computação. Além do desenvolvimento de habilidades técnicas sólidas, atuei como Vice-Presidente do Diretório Acadêmico do curso, aprimorando forte capacidade de liderança, organização e comunicação assertiva.',
    dotColor: 'orange'
  }
]
