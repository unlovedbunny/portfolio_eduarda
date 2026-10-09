/**
 * TEXTOS DO SITE
 * ----------------------------------------------------------------------------
 * Aqui ficam todos os textos "soltos" das seções (títulos, descrições, botões
 * e SEO). Para trocar qualquer frase do site, edite somente este arquivo.
 *
 * Outros textos ficam em:
 *  - data/profile.ts     -> nome, cargo, frase de destaque, experiência, menu
 *  - data/experience.ts  -> trajetória (empresas, cargos, descrições)
 *  - data/skills.ts      -> stacks / tecnologias
 *  - data/contacts.ts    -> redes e contatos
 *  - data/projects.ts    -> projetos (título, descrição, tags, imagens)
 *
 * Títulos com destaque colorido são divididos em partes:
 *  title        -> parte normal
 *  titleAccent  -> parte destacada (laranja)
 */

export const SITE_TEXT = {
  seo: {
    title: 'Portfólio | Eduarda Schneider',
    description:
      'Portfólio de Eduarda Schneider, Desenvolvedora Web Front-end. Transformo designs complexos do Figma em código de alta qualidade e performance.',
    ogTitle: 'Portfólio | Eduarda Schneider',
    ogDescription: 'Portfólio de Eduarda Schneider, Desenvolvedora Web Front-end.'
  },

  hero: {
    badge: 'HELLO!',
    greeting: 'Eu me chamo',
    ctaPortfolio: 'Portfólio',
    ctaContact: 'Contato'
  },

  projects: {
    title: 'Alguns projetos,',
    titleAccent: ' clique e saiba +',
    description:
      'Desenvolvimento de interfaces modernas, responsivas e com foco absoluto em otimização e refatoração de páginas para garantir a melhor performance.'
  },

  experience: {
    title: 'Minha',
    titleAccent: 'Trajetória'
  },

  skills: {
    title: 'Minhas',
    titleAccent: 'Stacks',
    titleSuffix: '!',
    cta: 'Fale Comigo',
    badge: 'NÃO SE COPIA BOROGODÓ • NÃO SE COPIA BOROGODÓ •'
  },

  contact: {
    title: 'Fale',
    titleAccent: 'comigo',
    description:
      'Vamos conversar sobre o seu próximo projeto. Me encontre em qualquer uma dessas redes.'
  },

  projectFooter: {
    title: 'Gostou do que viu?',
    description:
      'Estou disponível para novos projetos. Vamos construir algo incrível juntos!',
    button: 'Entrar em Contato'
  },

  navbar: {
    logoAlt: 'EM Logo',
    openMenuLabel: 'Open menu'
  },

  projectCard: {
    link: 'Ver Projeto'
  },

  projectPage: {
    seoSuffix: 'Eduarda Schneider',
    notFoundTitle: 'Projeto não encontrado',
    backHome: 'Voltar ao início',
    back: 'Voltar aos projetos',
    openOnline: 'Ver site',
    contact: 'Falar comigo',
    galleryTitle: 'Telas do projeto',
    brandAlt: 'Logo',
    lightboxClose: 'Fechar',
    lightboxImageAlt: 'Imagem ampliada'
  }
}
