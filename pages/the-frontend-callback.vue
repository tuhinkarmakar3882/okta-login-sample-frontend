<template>
  <section class="the-frontend-callback-page">
    <header>
      <h1>{{ pageTitle }}</h1>
      <p>Let's see the bare minimum code to get out frontend working</p>
      <hr />
    </header>

    <main>
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
    </main>

    <footer>
      <nuxt-link v-slot="{ navigate }" custom to="/the-backend-code">
        <button class="primary-button" @click="navigate">
          Next: The Backend Code
        </button>
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
