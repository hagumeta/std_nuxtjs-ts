import colors from 'vuetify/es5/util/colors'
import "core-js/stable";
import "regenerator-runtime/runtime";

export default {
  mode: 'universal',
  //modern: true,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - web',
    title: 'web',
    htmlAttrs: {
      lang: 'en',
    },
    script: [
      {
        src: 'https://polyfill.io/v3/polyfill.min.js?features=Document%2CNumber.EPSILON'
      }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/composition-api/module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vuetify', '@nuxtjs/axios'],
    postcss: {
      preset: {
        autoprefixer: { grid: 'autoplace' }
      }
    },
    babel: {
      presets: [
        '@nuxt/babel-preset-app',
        '@babel/preset-env',
        {
          corejs: { version: '3' },
          targets: { "ie": 11 },
          useBuiltIns: "entry",
          corejs: 3
        },
      ]
    }
/*    babel: {
//      babelrc: true,
      configFile: './.babelrc.json'
    },
    */
  },
  server: {
        port: 3000, // デフォルト: 3000
        host: '0.0.0.0', // デフォルト: localhost
      },
}
