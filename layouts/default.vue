<template>
  <div class="default-layout">
    <Navbar />

    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'

export default {
  components: {
    Navbar,
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/variables/breakpoint';

.default-layout {
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
  overflow: auto;

  main {
    padding: var(--spacing-standard);
    max-width: $desktop-screen-size;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
