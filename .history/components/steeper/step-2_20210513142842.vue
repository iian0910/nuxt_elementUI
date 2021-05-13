<template>
  <div>
    stepper-2
    <div>
      <el-button class="step-btn" @click="next">
        下一步
      </el-button>
      <el-button class="step-btn" @click="pre">
        上一步
      </el-button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    next () {
      this.$emit('next')
    },
    pre () {
      this.$emit('pre')
    }
  }
}
</script>
<style scope lang="scss">
.step-btn {
  margin-top: 20px;
}
</style>
