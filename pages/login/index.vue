<template>
  <div class="login-page">
    <h1>Okta Login Page</h1>
  </div>
</template>

<script>
export default {
  name: 'Login',

  components: {},

  data() {
    return {
      pageTitle: 'Login',
    }
  },

  watch: {},

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
.login-page {
  display: grid;
  place-items: center;
}
</style>
