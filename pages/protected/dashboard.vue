<template>
  <div class="index-page">
    <h1>Dashboard</h1>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  middleware: 'protectedRoute',

  components: {},

  data() {
    return {
      pageTitle: 'Dashboard',
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
.index-page {
  display: grid;
  place-items: center;
}
</style>
