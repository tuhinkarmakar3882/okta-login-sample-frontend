<template>
  <section class="index-page">
    <header>
      <h1>The Okta Setup</h1>
      <p>
        We'll quickly talk about the basic flow of OAuth and the prerequisites
        and the code flow.
      </p>
      <a href="#front-end-code">
        Already read this before? Skip Theory & Proceed to Next Step
      </a>
      <hr />
    </header>

    <pre><code class="language-js">
const a = 1
export default {
  name: 'OktaSetup',
  data() {
    return {
      pageTitle: 'OKTA Setup',
    }
  },

  mounted() {},

  head() {
    return {
      title: this.pageTitle,
    }
  },
}
</code></pre>

    <main></main>

    <footer>
      <nuxt-link v-slot="{ navigate }" custom to="/okta-setup">
        <button
          v-ripple
          class="primary-button"
          @click="navigate"
          id="front-end-code"
        >
          Next: The Frontend Code
        </button>
      </nuxt-link>
    </footer>
  </section>
</template>

<script>
import codeHighlighter from '~/utility/code-highlighting'

export default {
  name: 'OktaSetup',
  data() {
    return {
      pageTitle: 'OKTA Setup',
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
.index-page {
  * + * {
    margin: var(--spacing-standard) 0;
  }
}
</style>
