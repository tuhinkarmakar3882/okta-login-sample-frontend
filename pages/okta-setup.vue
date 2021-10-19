<template>
  <section class="index-page">
    <header>
      <h1>The Okta Setup</h1>
      <p>
        We'll quickly talk about the basic flow of OAuth and the prerequisites
        and the code flow.
      </p>
      <hr />
    </header>

    <main>
      <p>
        OAuth 2.0, OpenID Connect, and Social Login Okta allows you to control
        access to your application using both the OAuth 2.0 and OpenID Connect
        specifications. You can use Okta as your authorization server to retain
        all of your user information, and grant users tokens to control their
        authorization and authentication. Okta also supports using social logins
        and pulling a user's external data into your Okta org. To find out more
        about Okta's OAuth 2.0 and OpenID Connect implementations, see
        <a
          target="_blank"
          href="https://developer.okta.com/docs/concepts/oauth-openid/"
        >
          OAuth 2.0 and OpenID Connect.
        </a>
      </p>

      <details>
        <summary>Create a Okta Dev Account</summary>
        <p>
          Click the following button to go to okta dev and create and account
          over there.
        </p>
        <a href="https://developer.okta.com/signup/" target="_blank">
          <button class="primary-button">Open Okta Dev</button>
        </a>
      </details>

      <details>
        <summary>Create a New Application</summary>

        <p>Go to application</p>
        <p>Click on Create App Integration</p>
        <p>
          Choose <code>OIDC - OpenID Connect</code> & set the Application type
          as <code>Web Application</code>
        </p>
      </details>

      <details>
        <summary>Set the Configurations</summary>

        <details>
          <summary>The Sign-in redirect URI</summary>
          <p>
            Set the <code>Sign-in redirect URIs</code> as your
            <code>BACKEND_URL</code>.
          </p>
          <p>
            In this case, let's set it to
            <code>http://localhost:8000/login/callback</code>
          </p>
        </details>

        <details>
          <summary>The Sign-out redirect URI</summary>
          <p>
            Set the <code>Sign-out redirect URIs</code> as your
            <code>BACKEND_URL</code>.
          </p>
          <p>
            In this case, let's set it to
            <code>http://localhost:8000/logout/callback</code>
          </p>
        </details>
        <details>
          <summary>The Trusted Origins</summary>
          <p>
            Set the <code>Base URIs</code> as your <code>FRONTEND_URL</code>.
          </p>
          <p>
            In this case, let's set it to
            <code>http://{{ FRONTEND_URL }}</code>
          </p>
        </details>
      </details>
    </main>

    <footer>
      <nuxt-link v-slot="{ navigate }" custom to="/the-frontend-code">
        <button class="primary-button" @click="navigate">
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
      FRONTEND_URL: window.location.host,
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
