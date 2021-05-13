<template>
  <nuxt-link class="home-link" type="primary" to="/" @click="ck">Home</nuxt-link>
</template>
<script>
export default {
  methods: {
    ck () {
      console.log('ck')
    }
  }
}
</script>
<style lang="scss">

</style>
