<template>
  <div class="container">
    <el-steps :active="active" finish-status="success">
      <el-step title="步驟 1"></el-step>
      <el-step title="步驟 2"></el-step>
      <el-step title="步驟 3"></el-step>
    </el-steps>
  </div>
</template>
<script>
export default {
  data () {
    return {
      active: 0
    }
  },

  methods: {
    next () {
      if (this.active++ > 2) {
        this.active = 0
      }
    }
  }
}
</script>
<style lang="scss">
.container {
  width: 1200px;
  margin: 0 auto;
}
</style>
