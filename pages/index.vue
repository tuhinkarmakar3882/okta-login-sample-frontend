<template>
  <section class="index-page">
    <h1>Getting Started with OKTA Login</h1>
    <hr />

    <nuxt-link v-slot="{ navigate }" to="/login" custom>
      <button @click="navigate" v-ripple class="primary-button">
        Let's Start
      </button>
    </nuxt-link>
  </section>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      pageTitle: 'Getting Started',
    }
  },

  mounted() {},

  methods: {},

  head() {
    return {
      title: this.pageTitle,
    }
  },
}
</script>

<style lang="scss" scoped>
.index-page {
  main {
    * + * {
      margin: var(--spacing-standard);
    }
  }
}
</style>
