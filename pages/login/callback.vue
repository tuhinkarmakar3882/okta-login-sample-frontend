<template>
  <div class="login-callback-page">
    <h1>Okta Login Callback Page</h1>
    <p>
      This is parsed from the URL Params. If the values are blank, then you'll
      be taken to the login page once you tap on the load dashboard. Otherwise,
      if things goes right, you should be able to see the dashboard page!
    </p>

    <pre><code class="language-json">{
      tokenType: {{ tokenType || '...' }}
      expiresIn: {{ expiresIn || '...' }}
      accessToken: {{ accessToken || '...' }}
      scope: {{ scope || '...' }}
      idToken: {{ idToken || '...' }}
 }</code></pre>

    <button class="secondary-button" @click="loadDashboard">
      Load Dashboard
    </button>
  </div>
</template>

<script>
export default {
  name: 'LoginCallback',

  components: {},

  data() {
    return {
      pageTitle: 'Please Wait',
      tokenType: null,
      expiresIn: null,
      accessToken: null,
      scope: null,
      idToken: null,
    }
  },

  async mounted() {
    try {
      await this.$store.dispatch('logout')
      this.handleRedirection()
    } catch (e) {
      console.log('[!] Error', e)
    }
  },

  methods: {
    handleRedirection() {
      this.tokenType = this.$route.query.token_type
      this.expiresIn = this.$route.query.expires_in
      this.accessToken = this.$route.query.access_token
      this.scope = this.$route.query.scope
      this.idToken = this.$route.query.id_token
    },

    async loadDashboard() {
      await this.$store.dispatch('login', {
        tokenType: this.tokenType,
        expiresIn: this.expiresIn,
        accessToken: this.accessToken,
        scope: this.scope,
        idToken: this.idToken,
        isAuthenticated:
          !!this.tokenType &&
          !!this.expiresIn &&
          !!this.accessToken &&
          !!this.scope &&
          !!this.idToken,
      })

      await this.$router.push('/protected/dashboard')
    },
  },

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
}
</style>
