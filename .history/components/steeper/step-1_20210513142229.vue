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
    <el-button class="step-btn" @click="next">
      下一步
    </el-button>
  </div>
</template>
<script>
const postData = require('~/assets/post.json')

export default {
  data () {
    return {
      formData: {
        name: '',
        tel: '',
        city: '',
        zip: '',
        area: '',
        address: ''
      }
    }
  },
  computed: {
    cities () {
      return postData.map((item) => {
        return item.name
      })
    },
    districts () {
      let districts = []
      if (this.formData.city !== '') {
        districts = postData.find((item) => {
          return item.name === this.formData.city
        }).districts.map((item) => {
          return item
        })
      }
      return districts
    }
  },
  methods: {
    getZipCode (event) {
      const obj = this.districts.find((item) => {
        return item.name === event
      })
      this.formData.zip = obj.zip
    },
    changeCity () {
      this.formData.area = ''
      this.formData.zip = ''
    },
    next () {
      this.$emit('next')
    }
  }
}
</script>
<style lang="scss">
.info {
  margin: 0 auto;
  padding: 10px;
  width: 500px;
  border: 3px solid rgb(19, 219, 159);
  border-radius: 4px;
}
.cus-label {
  margin-bottom: 5px;
  font-size: 16px;
  display: block;
}
.zip-input {
  width: 20%;
}
.city-input {
  width: 38.5%;
}
.area-input {
  width: 38.5%;
}
.cus-input {
  margin-bottom: 10px;
}
.step-btn {
  margin: 12px auto 0 auto;
  display:block;
}
</style>
