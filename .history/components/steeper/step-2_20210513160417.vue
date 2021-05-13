<template>
  <div>
    <div class="info">
      <label class="cus-label" for="name">姓名</label>
      <el-input id="name" v-model="formData.name" class="cus-input" placeholder="姓名" />
      <label class="cus-label" for="tel">電話</label>
      <el-input id="tel" v-model="formData.tel" class="cus-input" placeholder="電話" />
      <div class="cus-input">
        <label class="cus-label">縣市</label>
        <el-input v-model="formData.zip" class="zip-input" placeholder="區碼" disabled />
        <el-select v-model="formData.city" class="city-input" placeholder="縣市" @change="changeCity">
          <el-option value="">
            請選擇
          </el-option>
          <el-option v-for="(item, index) in cities" :key="index" :value="item">
            {{ item }}
          </el-option>
        </el-select>
        <el-select v-model="formData.area" class="area-input" placeholder="區域" @change="getZipCode($event)">
          <el-option value="">
            請選擇
          </el-option>
          <el-option v-for="(item, index) in districts" :key="index" :value="item.name">
            {{ item.name }}
          </el-option>
        </el-select>
      </div>
      <label class="cus-label" for="address">地址</label>
      <el-input id="address" v-model="formData.address" class="cus-input" placeholder="地址" />
    </div>
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
export default {
  data () {
    return {
      getData: {
        name: '',
        tel: '',
        city: '',
        zip: '',
        area: '',
        address: ''
      }
    }
  },
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
<style lang="scss">

</style>
