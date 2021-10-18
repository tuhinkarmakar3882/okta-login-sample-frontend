<template>
  <div class="login-callback-page">
    <h1>Okta Login Callback Page</h1>
  </div>
</template>

<script>
export default {
  name: 'LoginCallback',

  components: {},

  data() {
    return {
      pageTitle: 'Please Wait',
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
.login-callback-page {
  display: grid;
  place-items: center;
}
</style>
