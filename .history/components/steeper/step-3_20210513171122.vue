<template>
  <div>
    stepper-3
    <div class="stepper">
      <el-button class="step-btn" @click="pre">
        上一步
      </el-button>
      <el-button class="step-btn" @click="done">
        完成
      </el-button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    pre () {
      this.$emit('pre')
    },
    done () {
      this.$store.state.item = null
      this.$emit('done')
    }
  }
}
</script>
<style lang="scss">

</style>
