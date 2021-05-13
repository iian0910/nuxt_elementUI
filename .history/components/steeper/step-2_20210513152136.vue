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
import { EventBus } from './event-bus.js'

export default {
  created () {
    (this.$nuxt || EventBus || this.$EventBus).$on('show-alert', this.showAlert)
  },
  methods: {
    next () {
      this.$emit('next')
    },
    pre () {
      this.$emit('pre')
    },
    showAlert () {
      console.log('showAlert')
    }
  }
}
</script>
<style lang="scss">

</style>
