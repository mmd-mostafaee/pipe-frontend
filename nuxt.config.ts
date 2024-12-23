// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/fonts.css'],

  build: {
    transpile: ['vuetify'],
  },

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },


  modules: [
    '@pinia/nuxt',
    'vuetify-nuxt-module'
  ],

  vuetify: {
    vuetifyOptions: {
      locale: {
        'locale': 'fa'
      }
    }
  }
})
