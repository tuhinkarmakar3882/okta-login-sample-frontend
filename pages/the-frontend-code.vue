<template>
  <section class="the-frontend-code-page">
    <header>
      <h1>{{ pageTitle }}</h1>
      <p>
        We'll quickly talk about the basic flow of OAuth and the prerequisites
        and the code flow.
      </p>
      <a href="#the-backend-code">
        Already read this before? Skip Theory & Proceed to Next Step
      </a>
      <hr />
    </header>
    <main>
      <pre><code class="language-js">{{frontendCode}}</code></pre>
    </main>

    <footer>
      <nuxt-link v-slot="{ navigate }" custom to="/the-backend-code">
        <button
          v-ripple
          class="primary-button"
          @click="navigate"
          id="the-backend-code"
        >
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
