<template>
  <section class="the-frontend-callback-page">
    <header>
      <h1>{{ pageTitle }}</h1>
      <p>
        So far we have created a okta app and have written the code to call the
        OKTA auth page. The Okta auth page sends us to the backend callback. At
        backend callback api, it calls the okta's REST API to obtain the JWT
        tokens. Once the Backend gets that, it sends the flow back to the
        frontend.
      </p>
      <p>
        Now the frontend needs to parse and set the token at the subsequent
        axios call and also mark the user as logged in.
      </p>
      <hr />
    </header>

    <main>
      <section>
        <h3>Once the page has loaded...</h3>
        <pre><code class="language-js">//filename: callback.js
const url = new URL(window.location)

const tokenType = url.searchParams.get('token_type')
const expiresIn = url.searchParams.get('expires_in')
const accessToken = url.searchParams.get('access_token')
const scope = url.searchParams.get('scope')
const idToken = url.searchParams.get('id_token'))

doSomethingWith(accessToken)
doSomethingElseWith(idToken)
makeSureToSave(expiresIn)</code></pre>
      </section>

      <p>
        From here on, I leave it upto you, what you want to do with the values.
      </p>
    </main>

    <footer>
      <nuxt-link v-slot="{ navigate }" custom to="/login">
        <button class="primary-button" @click="navigate">Next: Demo</button>
      </nuxt-link>
    </footer>
  </section>
</template>

<script>
import codeHighlighter from '~/utility/code-highlighting'

export default {
  name: 'TheFrontendCallback',
  data() {
    return {
      pageTitle: 'The Frontend Callback Code',
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
.the-frontend-callback-page {
  * + * {
    margin: var(--spacing-standard) 0;
  }
}
</style>
