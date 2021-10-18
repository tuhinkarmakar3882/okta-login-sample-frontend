<template>
  <div class="index-page">
    <h1>Hello world</h1>
    <p>
      This is an Awesome template by
      <a href="https://www.linkedin.com/in/tuhinkarmakar3882/" target="_blank">
        Tuhin Karmakar
      </a>
    </p>

    <section>
      <button v-ripple class="primary-button">Click Me</button>
      <button v-ripple class="secondary-button">Click Me</button>
      <button v-ripple class="success-button">Click Me</button>
      <button v-ripple class="warning-button">Click Me</button>
      <button v-ripple class="danger-button">Click Me</button>
      <button v-ripple disabled>Click Me</button>
      <button v-ripple class="primary-button-outlined">Click Me</button>
      <button v-ripple class="secondary-button-outlined">Click Me</button>
      <button v-ripple class="success-button-outlined">Click Me</button>
      <button v-ripple class="warning-button-outlined">Click Me</button>
      <button v-ripple class="danger-button-outlined">Click Me</button>
    </section>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {}
  },

  watch: {},

  mounted() {},

  methods: {},
}
</script>

<style lang="scss" scoped>
.index-page {
  display: grid;
  place-items: center;
}
</style>
