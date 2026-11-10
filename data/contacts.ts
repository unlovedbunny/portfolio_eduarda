import type { ContactLink } from '~/types/portfolio'

/** Redes e formas de contato */
export const CONTACTS: ContactLink[] = [
  { platform: 'Email', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=contato.eduardafdl@gmail.com', icon: '/img/email.png', handle: 'contato.eduardafdl@gmail.com', isExternal: true },
  { platform: 'LinkedIn', href: 'https://www.linkedin.com/in/duda-schneider/', icon: '/img/linkedin.png', handle: '/in/duda-schneider', isExternal: true },
  { platform: 'Instagram', href: 'https://www.instagram.com/unloved.bunny/', icon: '/img/insta.png', handle: '@unloved.bunny', isExternal: true },
  { platform: 'GitHub', href: 'https://github.com/unlovedbunny', icon: '/img/github.png', handle: '/unlovedbunny', isExternal: true },
  { platform: 'Lattes', href: 'http://lattes.cnpq.br/0805155024765743', icon: '/img/lattes.png', handle: '/Eduarda-Schneider', isExternal: true }
]
