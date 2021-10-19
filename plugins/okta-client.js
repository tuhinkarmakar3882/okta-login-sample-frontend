import { OktaAuth } from '@okta/okta-auth-js'

const authServerId = 'default'
export const yourOktaDomain = 'your-okta-domain'
export const clientId = 'clientId'
export const redirectUri = 'redirectUri'

export const authClient = new OktaAuth({
  url: `https://${yourOktaDomain}`,
  clientId,
  redirectUri,
  responseType: 'token',
  pkce: false,
  issuer: `https://${yourOktaDomain}/oauth2/${authServerId}`,
})
