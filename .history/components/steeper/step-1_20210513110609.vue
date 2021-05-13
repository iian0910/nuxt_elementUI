<template>
  <div>
    <div class="info">
      <label for="name">姓名</label>
      <el-input id="name" v-model="input" placeholder="姓名" />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: '',
      tel: '',
      city: '',
      zip: '',
      address: ''
    }
  }
}
</script>
<style lang="scss">
.info {
  margin: 0 auto;
  padding: 10px;
  width: 500px;
  height: 500px;
  border: 1px solid rgb(10, 235, 167);
}
</style>
