// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  ssr: true,
  nitro: {
    preset: 'static'
  },

  css: ['~/assets/scss/main.scss'],

  modules: [
    '@nuxtjs/google-fonts',
    '@nuxt/image'
  ],

  googleFonts: {
    families: {
      Urbanist: [600, 700],
      'DM+Sans': [300, 400, 500, 700]
    },
    display: 'swap'
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR'
      },
      title: 'Portfólio | Eduarda Schneider',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portfólio de Eduarda Schneider, Desenvolvedora Web Front-end.' },
        { name: 'og:title', content: 'Portfólio | Eduarda Schneider' },
        { name: 'og:description', content: 'Portfólio de Eduarda Schneider, Desenvolvedora Web Front-end.' },
        { name: 'og:image', content: '/img/schneider.png' },
        { name: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/img/favicon.jpg' }
      ]
    }
  }
})
