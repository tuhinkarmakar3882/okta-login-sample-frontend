import {
  appName,
  author,
  backgroundColor,
  description,
  categories,
  themeColor,
} from '../package.json'

export const nuxtPwaConfig = {
  meta: {
    name: appName,
    author: author,
    appleStatusBarStyle: 'black',
    nativeUI: true,
    background_color: backgroundColor,
    theme_color: backgroundColor,
    status_bar: backgroundColor,
  },
  manifest: {
    name: appName,
    description: description,
    categories: categories,
    short_name: appName,
    lang: 'en-US',
    background_color: themeColor,
    theme_color: themeColor,
    status_bar: themeColor,
    display: 'standalone',
    start_url: '/',
    scope: '/',
    orientation: 'portrait',
    dir: 'ltr',
  },
  workbox: false,
}
