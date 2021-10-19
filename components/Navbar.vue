<template>
  <div class="nav-bar-component">
    <nuxt-link v-slot="{ navigate }" to="/" custom>
      <h1 @click="navigate">{{ appName }}</h1>
    </nuxt-link>

    <aside>
      <i class="mdi mdi-brightness-6 mdi-36px" @click="changeTheme" />

      <a href="https://www.linkedin.com/in/tuhinkarmakar3882/" target="_blank">
        <i class="mdi mdi-linkedin mdi-36px" />
      </a>
    </aside>
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
  mounted() {
    this.checkForColorPreference()
  },
  methods: {
    updateColorPreference(theme) {
      localStorage.setItem('theme', theme)
    },
    checkForColorPreference() {
      const preferredTheme = localStorage.getItem('theme')

      switch (preferredTheme) {
        case 'light':
          document.body.classList.add('light-theme')
          document.body.classList.remove('dark-theme')
          break
        case 'dark':
          document.body.classList.remove('light-theme')
          document.body.classList.add('dark-theme')
          break
        default:
          console.log('No Preferred Theme Found.')
      }
    },
    changeTheme() {
      if (document.body.classList.contains('light-theme')) {
        document.body.classList.remove('light-theme')
        document.body.classList.add('dark-theme')
        this.updateColorPreference('dark')
      } else {
        document.body.classList.add('light-theme')
        document.body.classList.remove('dark-theme')
        this.updateColorPreference('light')
      }
    },
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

  aside {
    display: flex;
    align-items: center;
  }

  a {
    all: unset;
    text-decoration: none;
  }

  i {
    height: var(--top-nav-size);
    width: var(--top-nav-size);
    display: grid;
    place-items: center;
    cursor: pointer;

    &:last-child {
      margin-left: var(--spacing-micro);
    }
  }
}
</style>
