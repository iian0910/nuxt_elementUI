<template>
  <div>
    stepper-2
    <div class="stepper">
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
import './event-bus'

export default {
  created () {
    console.log('HII')
    this.$bus.$on('step-2:message', (msg) => {
      this.showAlert(msg)
    })
  },
  methods: {
    next () {
      this.$emit('next')
    },
    pre () {
      this.$emit('pre')
    },
    showAlert (msg) {
      console.log('msg', msg)
    }
  }
}
</script>
<style lang="scss">

</style>
