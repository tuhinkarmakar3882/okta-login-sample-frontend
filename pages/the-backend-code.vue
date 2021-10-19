<template>
  <section class="the-backend-code-page">
    <header>
      <h1>{{ pageTitle }}</h1>
      <p>
        We'll quickly talk about the basic flow of OAuth and the prerequisites
        and the code flow.
      </p>
      <hr />
    </header>
    <main>
      <pre><code class="language-python">
import requests
from django.http import HttpResponseRedirect, JsonResponse
from requests.auth import HTTPBasicAuth
      </code></pre>

      <pre><code class="language-python">
def login_callback(request, *args, **kwargs):
    okta_code = request.GET.get('code')

    if okta_code is None:
        return JsonResponse({"error": "The Okta Code is None"})

    client_secret = 'your-okta-client-secret-goes-here'
    client_id = 'your-okta-client-id-goes-here'
    domain_url = 'your-okta-domain-url-goes-here'
    frontend_redirection_url = "http://localhost:3000/login/callback"
    okta_auth_endpoint = "https://{}/oauth2/default/v1/token".format(domain_url)

    response = dict(requests.post(
        url=okta_auth_endpoint,
        auth=HTTPBasicAuth(client_id, client_secret),
        headers={
            'accept': 'application/json',
            'content-type': 'application/x-www-form-urlencoded',
        },
        data={
            'grant_type': 'authorization_code',
            'redirect_uri': 'http://localhost:8000/login/callback/',
            'code': okta_code
        }
    ).json())

    redirect_endpoint = "{}?token_type={}&expires_in={}&access_token={}&scope={}&id_token={}".format(
        frontend_redirection_url,
        response.get('token_type'),
        response.get('expires_in'),
        response.get('access_token'),
        response.get('scope'),
        response.get('id_token'),
    )

    return HttpResponseRedirect(redirect_endpoint)
      </code></pre>
    </main>

    <footer>
      <nuxt-link v-slot="{ navigate }" custom to="/login">
        <button v-ripple class="primary-button" @click="navigate">
          Next: Demo
        </button>
      </nuxt-link>
    </footer>
  </section>
</template>

<script>
import codeHighlighter from '~/utility/code-highlighting'

export default {
  name: 'TheBackendCode',
  data() {
    return {
      pageTitle: 'The Backend Code',
      pythonCodeSnippet: {
        djangoView: `
import requests
from django.http import HttpResponseRedirect, JsonResponse
from requests.auth import HTTPBasicAuth

def login_callback(request, *args, **kwargs):
    okta_code = request.GET.get('code')

    if okta_code is None:
        return JsonResponse({"error": "The Okta Code is None"})

    client_secret = 'your-okta-client-secret-goes-here'
    client_id = 'your-okta-client-id-goes-here'
    domain_url = 'your-okta-domain-url-goes-here'
    frontend_redirection_url = "http://localhost:3000/login/callback"
    okta_auth_endpoint = "https://{}/oauth2/default/v1/token".format(domain_url)

    response = dict(requests.post(
        url=okta_auth_endpoint,
        auth=HTTPBasicAuth(client_id, client_secret),
        headers={
            'accept': 'application/json',
            'content-type': 'application/x-www-form-urlencoded',
        },
        data={
            'grant_type': 'authorization_code',
            'redirect_uri': 'http://localhost:8000/login/callback/',
            'code': okta_code
        }
    ).json())

    redirect_endpoint = "{}?token_type={}&expires_in={}&access_token={}&scope={}&id_token={}".format(
        frontend_redirection_url,
        response.get('token_type'),
        response.get('expires_in'),
        response.get('access_token'),
        response.get('scope'),
        response.get('id_token'),
    )

    return HttpResponseRedirect(redirect_endpoint)
        `,
      },
    }
  },

  mounted() {
    codeHighlighter.highlightAll()
  },

  head() {
    return {
      title: this.pageTitle,
    }
  },
}
</script>

<style lang="scss" scoped>
.the-backend-code-page {
  * + * {
    margin: var(--spacing-standard) 0;
  }
}
</style>
