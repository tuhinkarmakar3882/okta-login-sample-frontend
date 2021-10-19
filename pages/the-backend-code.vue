<template>
  <section class="the-backend-code-page">
    <header>
      <h1>{{ pageTitle }}</h1>
      <p>Let's set up the backend</p>
      <p>
        You can clone the repo hero:
        <a
          target="_blank"
          href="https://github.com/tuhinkarmakar3882/okta-login-demo-backend"
        >
          Okta Demo Frontend Code
        </a>
      </p>
      <hr />
    </header>
    <main>
      <section>
        <pre><code class="language-python"># filename: views.py
import requests
from django.http import HttpResponseRedirect, JsonResponse
from requests.auth import HTTPBasicAuth </code></pre>

        <pre><code class="language-python"># filename: views.py
def login_callback(request, *args, **kwargs):
    okta_code = request.GET.get('code')

    if okta_code is None:
        return JsonResponse({"error": "The Okta Code is None"})

    client_secret = 'your-okta-client-secret-goes-here'
    client_id = 'your-okta-client-id-goes-here'
    domain_url = 'your-okta-domain-url-goes-here'

    frontend_redirection_url = "http://{{FRONTEND_URL}}/login/callback"
    okta_auth_endpoint = "https://{}/oauth2/default/v1/token".format(domain_url)
    backend_redirect_uri = 'http://localhost:8000/login/callback/'

    response = dict(requests.post(
        url=okta_auth_endpoint,
        auth=HTTPBasicAuth(client_id, client_secret),
        headers={
            'accept': 'application/json',
            'content-type': 'application/x-www-form-urlencoded',
        },
        data={
            'grant_type': 'authorization_code',
            'redirect_uri': backend_redirect_uri,
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

    return HttpResponseRedirect(redirect_endpoint) </code></pre>

        <p>
          Hope it was pretty much self explanatory about what happens whenever
          the callback is called. Essentially, it grabs the code that the okta
          passes to the backend as the query param, then it checks if it's None
          or not. Finally it makes a call to a REST api with HTTP Basic Auth,
          which returns JWT tokens.
        </p>

        <blockquote>
          <q>Make Sure to update the placeholder values.</q>
        </blockquote>
      </section>

      <section>
        <h3>Let's also set up the URL routes.</h3>

        <pre><code class="language-python"># filename: urls.py
from django.urls import path

from okta_login_backend.views import login_callback

urlpatterns = [
    path('login/callback/', login_callback, name="login_callback"),
]
 </code></pre>
      </section>
    </main>

    <footer>
      <nuxt-link v-slot="{ navigate }" custom to="/the-frontend-callback">
        <button class="primary-button" @click="navigate">
          Next: The Frontend Callback
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
      FRONTEND_URL: window.location.host,
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
