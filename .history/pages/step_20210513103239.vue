<template>
  <div class="container">
    <el-steps :active="active" finish-status="success">
      <el-step title="步驟 1"></el-step>
      <el-step title="步驟 2"></el-step>
      <el-step title="步驟 3"></el-step>
    </el-steps>
    <el-button style="margin-top: 12px;" @click="next" v-if="active < 2">下一步</el-button>
    <el-button style="margin-top: 12px;" @click="done" v-if="active === 2">完成</el-button>
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
      this.active++
    },
    done () {
      alert('恭喜完成')
      this.active = 0
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
