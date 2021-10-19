<template>
  <section class="index-page">
    <header>
      <h1>Getting Started</h1>
      <p>
        We'll quickly talk about the basic flow of OAuth and the prerequisites
        and the code flow.
      </p>
      <hr />
    </header>

    <main>
      <section>
        <details>
          <summary>What is OAuth?</summary>
          <p>
            OAuth 2.0 is an industry-standard protocol for authorization. It
            provides a wide range of authorization flows to support various uses
            cases for web applications, desktop applications, mobile phones, and
            IoT devices. It is important to stress that OAuth is solely
            responsible for coarse-grained authorization, that is whether the
            application/device is authorized to make the request. However, the
            service still needs to make a decision on whether the specific
            request that has been made is actually allowed based on multiple
            factors such as time, region, delegation rules, etc. This is where
            fine-grained authorization models (PDP, PAP, PIP, PEP) come in.
            Visit my blog post for more details on fine-grained authorization.
          </p>
          <a
            href="https://dzone.com/articles/oauth-20-in-a-nutshell"
            target="_blank"
          >
            Read More
          </a>
        </details>
        <details>
          <summary>
            😅 Seriously, Wasn't the previous answer had a lot of tech-jargon?
          </summary>
          <p>Apparently Yes. Let me oversimplify the term.</p>
          <p>
            Let's say, Bob is your best friend and He has opened a VIP Section
            in his restaurant. Bob has came to your home to invite to to come
            and visit the VIP Section someday.
          </p>
          <p>
            And, One day you decided to go there. But, at the gate, you found a
            Security Guard who is asking for a VIP Pass before letting you in.
            Since you don't have any VIP pass, You cannot show anything.
            Therefore, you asked the guard to wait and called Bob.
          </p>

          <p>
            Since Bob knows you, he quickly recognizes you. Bob comes down and
            tells the guard that the he knows you and he has himself invited
            you. The guard trusts Bob. and Lets you in.
          </p>

          <p>
            Notice, you never needed to show any VIP pass but still went inside,
            via Bob. That's what a OAuth is.
          </p>
        </details>
        <details>
          <summary>What are we going to do?</summary>
          <p>
            We are going to create a web application which will have a Frontend
            and a Backend and will have the core logic of Using OKTA OAuth.
            We'll focus upto getting and Access Token and store it in a state,
            which will allow us to mark an user in the frontend as authenticated
            and allow the person to use the protected route of the app.
          </p>
        </details>
        <details>
          <summary>The Tech Stack</summary>
          <a href="https://nuxtjs.org/">
            <i class="mdi mdi-nuxt mdi-48px" />
          </a>
          <a href="https://www.python.org/">
            <i class="mdi mdi-language-python mdi-48px" />
          </a>
        </details>
      </section>
    </main>

    <footer>
      <nuxt-link v-slot="{ navigate }" custom to="/okta-setup">
        <button v-ripple class="primary-button" @click="navigate">
          Next: The OKTA Setup
        </button>
      </nuxt-link>
    </footer>
  </section>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: 'Getting Started',
    }
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
