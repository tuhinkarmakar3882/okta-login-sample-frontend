<template>
  <div class="login-callback-page">
    <h1>Okta Login Callback Page</h1>
    <p>This is parsed from the URL Params</p>
    <pre><code class="language-json">
{
      tokenType: {{ tokenType || '...' }}
      expiresIn: {{ expiresIn || '...' }}
      accessToken: {{ accessToken || '...' }}
      scope: {{ scope || '...' }}
      idToken: {{ idToken || '...' }}
}
    </code></pre>
  </div>
</template>

<script>
import codeHighlighter from '~/utility/code-highlighting'

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

  mounted() {
    codeHighlighter.highlightAll()

    try {
      this.handleRedirection()
    } catch (e) {
      console.log('[!] Error')
    }
  },

  methods: {
    handleRedirection() {
      const url = new URL(window.location)

      this.tokenType = url.searchParams.get('token_type')
      this.expiresIn = url.searchParams.get('expires_in')
      this.accessToken = url.searchParams.get('access_token')
      this.scope = url.searchParams.get('scope')
      this.idToken = url.searchParams.get('id_token')
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
