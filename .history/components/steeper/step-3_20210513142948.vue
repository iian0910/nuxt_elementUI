<template>
  <div>
    stepper-3
    <el-button class="step-btn" @click="pre">
      上一步
    </el-button>
    <el-button class="step-btn" @click="done">
      完成
    </el-button>
  </div>
</template>
<script>
export default {
  methods: {
    pre () {
      this.$emit('pre')
    },
    done () {
      this.$emit('done')
    }
  }
}
</script>
<style scoped lang="scss">

</style>
