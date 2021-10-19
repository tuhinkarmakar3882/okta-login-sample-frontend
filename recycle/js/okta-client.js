import {OktaAuth} from "@okta/okta-auth-js";

export const yourOktaDomain = "";
const authServerId = "default";
export const clientId = "";
export const clientSecret = "";
export const redirectUri = "http://localhost:8000/login/callback/";


export const authClient = new OktaAuth({
  url: `https://${yourOktaDomain}`,
  clientId,
  redirectUri,
  responseType: 'token',
  pkce: false,
  issuer: `https://${yourOktaDomain}/oauth2/${authServerId}`
});

