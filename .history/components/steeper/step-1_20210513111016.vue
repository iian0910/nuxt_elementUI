<template>
  <div>
    <div class="info">
      <label class="cus-label" for="name">姓名</label>
      <el-input id="name" v-model="name" class="cus-input" placeholder="姓名" />
      <label class="cus-label" for="tel">電話</label>
      <el-input id="tel" v-model="tel" class="cus-input" placeholder="電話" />
      <label class="cus-label" for="zip">區碼</label>
      <el-input id="zip" v-model="zip" class="cus-input" placeholder="區碼" />
      <label class="cus-label" for="city">縣市</label>
      <el-input id="city" v-model="city" class="cus-input" placeholder="縣市" />
      <label class="cus-label" for="address">地址</label>
      <el-input id="address" v-model="address" class="cus-input" placeholder="地址" />
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
.cus-label {
  margin-bottom: 5px;
  font-size: 16px;
  display: block;
}
.cus-input {
  margin-bottom: 10px;
}
</style>
