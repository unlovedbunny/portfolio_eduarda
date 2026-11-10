import type { TimelineItem } from '~/types/portfolio'

/** Trajetória profissional e acadêmica (do mais recente para o mais antigo) */
export const TIMELINE: TimelineItem[] = [
  {
    company: 'ALTAVE',
    logo: '/img/altave.png',
    period: '10 de Julho de 2025 - Presente',
    role: 'Software Engineer',
    description: 'Atuação focada em arquitetura de software, definição e organização de estruturas de sistemas escaláveis e de fácil manutenção. Implementação de padrões como MVC/MVVM, criação de boilerplates padronizados, elaboração de documentações arquiteturais (ADRs e diagramas UML) e revisão de código com foco em consistência técnica.',
    dotColor: 'orange'
  },
    {
    company: 'Workana',
    logo: '/img/workana.png',
    period: 'Nov, 2023 - Mai, 2026',
    role: 'Junior Technical Writer',
    description: 'Atuação como ponte entre produto, engenharia e clientes, transformando informações técnicas em documentações claras e estruturadas. Responsável por levantamento de requisitos com clientes, criação de guias para sistemas e APIs, documentação de fluxos e arquitetura, além de materiais de suporte técnico para desenvolvedores e usuários finais.',
    dotColor: 'dark'
  },
  {
    company: 'Ministério Público do RN',
    logo: '/img/mp-rn.jpeg',
    period: 'Jun, 2025 - Dez, 2026',
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
