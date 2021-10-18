export const nuxtPurgeCssConfig = {
  enabled: true,
  content: [
    './plugins/**/*.js',
    './assets/**/*.scss',
    './pages/**/*.vue',
    './layouts/**/*.vue',
    './components/**/*.vue',
  ],
  whitelist: ['html', 'body'],
}
