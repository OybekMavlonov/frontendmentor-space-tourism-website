export default defineNuxtConfig({
  imports: {
    autoImport: true
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  ssr: false,

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
  ],

  app: {
    baseURL: '/frontendmentor-space-tourism-website/',
    head: {
      title: 'Space Tourism',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/frontendmentor-space-tourism-website/images/shared/logo.ico' }
      ]
    },
  },

  router: {
    options: {
      strict: true, // differentiate `/crew` and `/crew/`
    }
  },

  experimental: {
    trailingSlash: false, // <- disables trailing slashes
  },

  nitro: {
    prerender: {
      // If you have dynamic routes, add them here
       routes: ['/', '/destination', '/crew', '/technology']
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})