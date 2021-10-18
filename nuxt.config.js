import * as packageJSON from './package.json'
import { nuxtHeadConfig } from './config/nuxt-head-config'
import { nuxtBuildConfig } from './config/nuxt-build-config'

export default {
  server: {
    host: packageJSON.host,
    port: packageJSON.port
  },
  ssr: false,

  plugins: [{ src: '~/plugins/material-ripple.js', mode: 'client' }],

  modules: [],

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/composition-api/module'
  ],

  modern: {
    server: true,
    client: true
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

  components: true,
}
