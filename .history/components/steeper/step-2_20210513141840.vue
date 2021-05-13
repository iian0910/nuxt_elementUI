<template>
  <div>
    stepper-2
    <el-button class="step-btn" @click="next">
      下一步
    </el-button>
  </div>
</template>
<script>
export default {
  methods: {
    next () {
      console.log('HI')
      this.$emit('next')
    }
  }
}
</script>
<style lang="scss">
.step-btn {
  margin: 12px auto 0 auto;
  display:block;
}
</style>
