import * as packageJSON from './package.json'
import { nuxtPurgeCssConfig } from './config/nuxt-purgecss-config'
import { nuxtPwaConfig } from './config/nuxt-pwa-config'
import { nuxtHeadConfig } from './config/nuxt-head-config'
import { nuxtBuildConfig } from './config/nuxt-build-config'
import { lazyLoadConfig } from './config/nuxt-lazy-load-config'

export default {
  server: {
    host: packageJSON.host,
    port: packageJSON.port
  },
  serverMiddleware: [],
  ssr: false,

  plugins: [
    { src: '~/plugins/material-ripple.js', mode: 'client' }
  ],

  modules: [
    'nuxt-helmet',
    '@nuxtjs/axios',
    ['nuxt-lazy-load', lazyLoadConfig],
    ['@nuxtjs/pwa', { workbox: false }]
  ],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    ['nuxt-purgecss', nuxtPurgeCssConfig],
    'nuxt-compress',
    '@nuxtjs/composition-api/module'
  ],

  axios: {
    // baseUrl: 'your-base-url',
  },

  modern: process.env.NODE_ENV === 'production' && {
    server: true,
    client: true
  },

  'nuxt-compress': {
    gzip: {
      cache: true
    },
    brotli: {
      threshold: 10240
    }
  },

  build: nuxtBuildConfig,
  render: {
    injectScripts: true,
    resourceHints: true
  },

  loading: {
    color: '#aeacff',
    failedColor: '#ff8282',
    continuous: true,
    height: '2px'
  },

  layoutTransition: {
    name: 'fade-shift',
    mode: 'out-in'
  },
  pageTransition: {
    name: 'slide-left',
    mode: 'out-in'
  },

  head: nuxtHeadConfig,
  css: ['styles/main.scss'],

  pwa: nuxtPwaConfig,
  components: true,
  telemetry: false
}
