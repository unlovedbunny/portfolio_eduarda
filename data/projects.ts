import type { Project } from '~/types/portfolio'

/**
 * Projetos exibidos no carrossel e nas páginas /projetos/[slug].
 * `slug` é usado na URL, então não use espaços nem acentos em projetos novos.
 */
export const PROJECTS: Project[] = [
  {
    slug: 'portal-latece',
    title: 'Portal LATECE',
    eyebrow: 'Portal Institucional • Tecnologia Assistiva • FINEP',
    description: 'Portal institucional do Laboratório de Tecnologia Assistiva do Centro de Educação da UFRN (LATECE), desenvolvido no âmbito do projeto TECincluir, financiado pela FINEP (edital de 2024). Um espaço de pesquisa, formação e divulgação em Tecnologia Assistiva, construído com foco total em acessibilidade e inclusão.',
    // 👉 IMAGEM DE CAPA (aparece no carrossel da home): coloque o arquivo em public/img/latece-capa.png
    image: '/img/latece-capa.png',
    liveUrl: 'https://latece.vercel.app/',
    tags: ['Nuxt 3', 'Vue 3', 'TypeScript', 'Tailwind CSS', 'SCSS', 'Pinia', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'vLIBRAS', 'WCAG 2.1'],
    links: [
      { label: 'Edital FINEP / TECincluir', href: 'https://portal.ufrrj.br/wp-content/uploads/2024/10/edital-FINEP-TECNCLUIR.pdf' },
      { label: 'Equipe de desenvolvimento', href: 'https://latece.vercel.app/creditos' }
    ],
    sections: [
      {
        title: 'Sobre o projeto',
        paragraphs: [
          'O projeto TECincluir (Rede Intersetorial e Interinstitucional de Laboratórios Multiusuários de Tecnologia Assistiva) é financiado pela FINEP no âmbito da Chamada Pública MCTI/FINEP/Ação Transversal – Tecnologia Assistiva (Sisassistiva-MCTI), edital de 2024.',
          'Como parte da iniciativa, desenvolvi o portal institucional do LATECE (Laboratório de Tecnologia Assistiva do Centro de Educação da UFRN), que funciona como polo de pesquisa, formação e disseminação de conhecimento em Tecnologia Assistiva, seguindo os padrões técnicos, de design e de segurança da UFRN.'
        ]
      },
      {
        title: 'Sobre a iniciativa TECincluir',
        items: [
          { label: 'Coordenação geral', text: 'Profa. Márcia Denise Pletsch (UFRRJ), com coordenação adjunta de Izadora Souza (UFRRJ).' },
          { label: 'Instituições envolvidas', text: 'CITEI (UFRRJ), LaTAI-INT (Instituto Nacional de Tecnologia), LATECE (Centro de Educação da UFRN) e LAR-UERN (Laboratório de Aprendizagem Robótica da UERN).' },
          { label: 'Objetivo', text: 'Desenvolver e validar soluções em tecnologia assistiva, promover pesquisas aplicadas e apoiar a inclusão de pessoas com deficiência (PCD).' }
        ]
      },
      {
        title: 'O que foi desenvolvido',
        items: [
          { label: 'Portal público', text: 'Apresentação do laboratório, equipe, equipamentos, publicações e sistema de notícias com filtros e paginação.' },
          { label: 'Painel administrativo', text: 'Gerenciamento de conteúdo com autenticação segura (JWT) e diferentes níveis de acesso.' },
          { label: 'Identidade visual', text: 'Interface responsiva (desktop, tablet e mobile), seguindo as diretrizes e a paleta institucional da UFRN.' }
        ]
      },
      {
        title: 'Acessibilidade',
        items: [
          { label: 'vLIBRAS', text: 'Integração com o plugin de tradução automática para Libras.' },
          { label: 'Alto contraste', text: 'Modo de alto contraste para melhor visibilidade.' },
          { label: 'Controle de fonte', text: 'Ajuste do tamanho do texto por atalhos e botões.' },
          { label: 'Leitores de tela e teclado', text: 'Compatibilidade com leitores de tela, atributos ARIA e navegação por teclado, seguindo as diretrizes WCAG 2.1.' }
        ]
      }
    ],
    // 👉 PRINTS DO PROJETO: coloque as imagens em public/img/ e descomente/duplique as linhas abaixo.
    //    wide: true  = imagem ocupa a linha inteira | wide: false = duas imagens lado a lado
    gallery: [
      // { src: '/img/latece-home.png', alt: 'Página inicial do Portal LATECE', wide: true },
      // { src: '/img/latece-noticias.png', alt: 'Página de notícias do Portal LATECE', wide: false },
      // { src: '/img/latece-equipe.png', alt: 'Página da equipe do Portal LATECE', wide: false }
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
