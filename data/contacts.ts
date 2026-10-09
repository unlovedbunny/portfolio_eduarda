import type { ContactLink } from '~/types/portfolio'

/** Redes e formas de contato */
export const CONTACTS: ContactLink[] = [
  { platform: 'Email', href: 'mailto:contato.eduardafdl@gmail.com', icon: '/img/email.png', handle: 'contato.eduardafdl@gmail.com' },
  { platform: 'LinkedIn', href: 'https://www.linkedin.com/in/duda-schneider/', icon: '/img/linkedin.png', handle: '/in/duda-schneider', isExternal: true },
  { platform: 'Instagram', href: 'https://www.instagram.com/unloved.bunny/', icon: '/img/insta.png', handle: '@unloved.bunny', isExternal: true },
  { platform: 'GitHub', href: 'https://github.com/unlovedbunny', icon: '/img/github.png', handle: '/unlovedbunny', isExternal: true }
]
