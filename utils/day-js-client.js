const dayjsClient = require('dayjs')
dayjsClient.extend(require('dayjs/plugin/relativeTime'))
dayjsClient.extend(require('dayjs/plugin/updateLocale'))
dayjsClient.updateLocale('en', {
  relativeTime: {
    future: 'in %s',
    past: '%s',
    s: 'Just now',
    m: '1 min',
    mm: '%d mins',
    h: '1 hr',
    hh: '%d hrs',
    d: '1 day',
    dd: '%d days ago',
    M: '1 month ago',
    MM: '%d months',
    y: '1 year ago',
    yy: '%d years ago',
  },
})

export default dayjsClient
