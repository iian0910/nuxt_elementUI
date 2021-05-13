<template>
  <el-menu
    :activeIndex = activeIndex2
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item :index="item.index" v-for="(item, idx) in navItem" :key="idx">
      <nuxt-link :to="item.link" class="link">{{item.name}}</nuxt-link>
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '2',
      navItem: [
        {
          index: '1',
          link: '/',
          name: 'HOME'
        },
        {
          index: '2',
          link: '/guide',
          name: 'GUIDE'
        },
        {
          index: '3',
          link: '/form',
          name: 'FORM'
        }
      ]
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang="scss">
.el-menu-item {
  padding: 0;
}
.link {
  padding: 0 20px;
  width: 100%;
  height: 100%;
  display: block;
  text-decoration: none;
}
</style>
