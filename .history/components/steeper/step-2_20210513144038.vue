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
import { EventBus } from '~plugins/event-bus.js'

export default {
  methods: {
    next () {
      this.$emit('next')
    },
    pre () {
      this.$emit('pre')
    }
  },
  created () {
    EventBus.$on('step-2:message', (msg) => {
      console.log('msg', msg)
    })
  }
}
</script>
<style lang="scss">

</style>
