<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        VueNuxt X ElementUI
      </h1>
      <div class="links">
        <nuxt-link
          v-for="(item, index) in routerData"
          :key="index"
          class="nuxt-link"
          :to="item.link"
        >{{item.name}}</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      routerData: [
        {
          name: 'GUIDE',
          link: '/guide'
        },
        {
          name: 'FORM',
          link: '/form'
        }
      ]
    }
  },
  mounted () {
    console.log('HI', this.$router.currentRoute.path)
  }
})
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
