import dayjsClient from '~/utils/day-js-client'

export const getRelativeTime = (timeString) => {
  return dayjsClient().to(dayjsClient(timeString))
}

export const getStandardTime = (timeString) => {
  return dayjsClient(timeString).format('h:mm A')
}

export const getFormattedDate = (timeString) => {
  return dayjsClient(timeString).format('D MMMM YYYY')
}

export const getFormattedISOTime = (timeString) => {
  return new Date(timeString)
}

export const logAnalyticsEvent = (eventType = '', payload = {}) => {
  window.gtag('event', eventType, payload)
}

export const isMobile = () => window.innerWidth <= 768

export const useNativeTransition = (to, from) => {
  const nextDepth = to?.path?.split('/')?.length
  const previousDepth = from?.path?.split('/')?.length
  return nextDepth >= previousDepth ? 'slide-left' : 'slide-right'
}

export const useModalTransition = (to, from) => {
  const nextDepth = to?.path?.split('/')?.length
  const previousDepth = from?.path?.split('/')?.length
  return nextDepth > previousDepth ? 'slide-up' : 'slide-down'
}
