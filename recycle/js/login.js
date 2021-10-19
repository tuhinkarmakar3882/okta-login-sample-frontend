import {authClient, clientId, redirectUri, yourOktaDomain} from "./okta-client";

const oktaLoginBtn = document.getElementById('login-via-okta')

oktaLoginBtn.addEventListener('click', async () => {
  const responseType = 'code';
  console.log(responseType)
  // window.location.href =`https://${yourOktaDomain}/oauth2/default/v1/authorize?client_id=${clientId}&response_type=${responseType}&scope=openid&redirect_uri=${redirectUri}`

  await authClient.token.getWithRedirect({
    responseType: responseType
  });
})
