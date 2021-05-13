<template>
  <div class="container">
    <el-steps :active="active" finish-status="success">
      <el-step title="步驟 1" />
      <el-step title="步驟 2" />
      <el-step title="步驟 3" />
    </el-steps>
    <el-button v-if="active < 2" style="margin-top: 12px;" @click="next">
      下一步
    </el-button>
    <el-button v-if="active === 2" style="margin-top: 12px;" @click="done">
      完成
    </el-button>
    <step-1 v-if="active === 0" />
    <step-2 v-if="active === 1" />
    <step-3 v-if="active === 2" />
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
