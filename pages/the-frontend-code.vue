<template>
  <section class="the-frontend-code-page">
    <header>
      <h1>{{ pageTitle }}</h1>
      <p>Let's see the bare minimum code to get out frontend working</p>
      <hr />
    </header>

    <main>
      <section>
        <h3>Let's install the JavaScript Package</h3>
        <pre><code class="language-xml">&lt;script src="https://global.oktacdn.com/okta-auth-js/4.5.0/okta-auth-js.min.js" type="text/javascript"&gt;&lt;/script&gt;</code></pre>
        <p>OR</p>
        <pre><code class="language-bash">yarn add @okta/okta-auth-js</code></pre>
      </section>

      <section>
        <h3>Create a Button</h3>
        <pre><code class="language-xml">&lt;button id="login-button"&gt;Login with Okta&lt;/button&gt;</code></pre>
      </section>

      <section>
        <h3>Set up the OKTA Auth Client</h3>
        <pre><code class="language-js">//filename: oktaAuthClient.js
import { OktaAuth } from '@okta/okta-auth-js'

const authServerId = 'default'
const yourOktaDomain = 'your-okta-domain'
const clientId = 'clientId'
const redirectUri = 'redirectUri'

export const oktaAuthClient = new OktaAuth({
  url: `https://${yourOktaDomain}`,
  clientId,
  redirectUri,
  responseType: 'token',
  pkce: false,
  issuer: `https://${yourOktaDomain}/oauth2/${authServerId}`,
})
</code></pre>
      </section>

      <section>
        <h3>Add the JavaScript</h3>
        <pre><code class="language-js">//filename: main.js
import { oktaAuthClient } from './oktaAuthClient.js'

const loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', async () => {
  await oktaAuthClient.token.getWithRedirect({
    responseType: 'code',
  })
})</code></pre>
      </section>

      <p>
        So, when the button will be clicked, it will take you to okta login page
        and the okta login will send you back to the backend login callback
      </p>
    </main>

    <footer>
      <nuxt-link v-slot="{ navigate }" custom to="/the-backend-code">
        <button v-ripple class="primary-button" @click="navigate">
          Next: The Backend Code
        </button>
      </nuxt-link>
    </footer>
  </section>
</template>

<script>
import codeHighlighter from '~/utility/code-highlighting'

export default {
  name: 'TheFrontendCode',
  data() {
    return {
      pageTitle: 'The Frontend Code',
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
.the-frontend-code-page {
  * + * {
    margin: var(--spacing-standard) 0;
  }
}
</style>
