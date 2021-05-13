<template>
  <div>
    <div class="info">
      <img src="~/assets/images/small.jpg" alt="">
    </div>
    <div class="stepper">
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
      this.$store.commit('resetItem')
      this.$emit('done')
    }
  }
}
</script>
<style lang="scss">

</style>
