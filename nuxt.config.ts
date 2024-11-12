// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [process.env.NUXT_UI_PRO_PATH || '@nuxt/ui-pro'],

  modules: [
    '@nuxt/ui',
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    'nuxt-aos',
  ],

  plugins: [
    { src: '~/plugins/fullpage.js', mode: 'client' }
  ],
  css: [
    'fullpage.js/dist/fullpage.css'
  ],

  ui: {
    safelistColors: ['primary', 'red', 'orange', 'green']
  },

  aos:{
    duration: 600,
  },

  colorMode: {
    preference: 'light'
  },

  components: [{
    path: '~/components'
  }, {
    path: '~/components/common',
    pathPrefix: false
  }],

  devtools: {
    enabled: true
  },

  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      ],
      link: [
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700&display=swap'},
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.1.2/fullpage.min.css'
        }
      ],
      script: [
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.1.2/fullpage.min.js',
          defer: true
        },
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.1.2/extensions/scrollHorizontally.min.js',
          defer: true
        },
        {
          src: 'https://code.jquery.com/jquery-3.7.1.min.js'
        },
        
      ],
    }
  },

  compatibilityDate: '2024-08-11'
})