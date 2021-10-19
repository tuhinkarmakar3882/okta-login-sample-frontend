<template>
  <div class="login-page">
    <h1>Let's Login to continue</h1>
    <p>
      Below you'll see a button to start the login flow. When clicked it will
      have either of the following scenarios:
    </p>

    <details>
      <summary>If the credentials are incorrect</summary>
      <p>It will take you to a bad request page or throw some of error</p>
    </details>

    <details>
      <summary>If the credentials are correct</summary>

      <details>
        <summary>You're not logged in to okta,</summary>
        <p>Then it'll prompt you to sign in.</p>
      </details>

      <details>
        <summary>You're already logged in to okta,</summary>
        <p>Then it'll directly redirect to backend.</p>
      </details>
    </details>

    <blockquote>
      <q
        >Note: Once you start the login, the control will be shifted to Okta &
        post your successful login at <code>OKTA</code>, it'll redirect you back
        to <code>BACKEND_AUTH_URL</code> where you'll get a <code>code</code> &
        <code>status</code> as <code>URL Search/Query Params</code>. You Have to
        use that code to retrieve the <code>JWT</code> Access and Refresh
        Tokens.</q
      >
    </blockquote>
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
  * + * {
    margin: var(--spacing-standard) var(--spacing-zero);
  }
}
</style>
