<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="1">
      <nuxt-link to="/guide" class="link">GUIDE</nuxt-link>
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {

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
