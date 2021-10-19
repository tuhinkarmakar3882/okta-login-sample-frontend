<template>
  <div class="nav-bar-component">
    <nuxt-link v-slot="{ navigate }" to="/" custom>
      <h1 @click="navigate">{{ appName }}</h1>
    </nuxt-link>

    <a href="https://www.linkedin.com/in/tuhinkarmakar3882/" target="_blank">
      <i class="mdi mdi-linkedin mdi-36px" />
    </a>
  </div>
</template>

<script>
import * as packageJSON from '~/package.json'

export default {
  name: 'Navbar',
  data() {
    return {
      appName: packageJSON.appName,
    }
  },
}
</script>

<style lang="scss" scoped>
.nav-bar-component {
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--nav-bar-color);
  height: var(--top-nav-size);
  padding-left: var(--spacing-milli);

  h1 {
    font-family: monospace;
    margin: 0 auto 0 0;
    font-size: var(--spacing-large);
    line-height: 1;
  }

  a {
    text-decoration: none;
  }

  i {
    height: var(--top-nav-size);
    width: var(--top-nav-size);
    display: grid;
    place-items: center;

    &:last-child {
      margin-left: var(--spacing-micro);
    }
  }
}
</style>
