<template>
  <div class="dashboard-page">
    <h1>Congratulations!</h1>
    <p>You have made it. You have successfully added the OKTA Login!</p>

    <iframe
      src="https://giphy.com/embed/3KC2jD2QcBOSc"
      width="480"
      height="262"
      frameBorder="0"
      class="giphy-embed"
      allowFullScreen
    />

    <h3>How's your experience?</h3>
    <p>
      Let me know via
      <a href="https://www.linkedin.com/in/tuhinkarmakar3882/"> LinkedIn</a>
      !
    </p>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  middleware: 'protectedRoute',

  data() {
    return {
      pageTitle: 'Dashboard',
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
.dashboard-page {
  display: grid;
  place-items: center;

  * + * {
    margin: var(--spacing-standard) 0;
  }
}
</style>
