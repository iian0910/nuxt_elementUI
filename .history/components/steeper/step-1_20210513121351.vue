<template>
  <div>
    <div class="info">
      <label class="cus-label" for="name">姓名</label>
      <el-input id="name" v-model="name" class="cus-input" placeholder="姓名" />
      <label class="cus-label" for="tel">電話</label>
      <el-input id="tel" v-model="tel" class="cus-input" placeholder="電話" />
      <div class="cus-input">
        <label class="cus-label">縣市</label>
        <el-input v-model="zip" class="zip-input" placeholder="區碼" disabled />
        <el-select v-model="city" class="city-input" placeholder="縣市">
          <el-option value="">
            請選擇
          </el-option>
          <el-option v-for="(item, index) in cities" :key="index" :value="item">
            {{ item }}
          </el-option>
        </el-select>
        <el-select v-model="area" class="area-input" placeholder="區域" @change="ev(districts)">
          <el-option value="">
            請選擇
          </el-option>
          <el-option v-for="(item, index) in districts" :key="index" :value="item.name">
            {{ item.name }}
          </el-option>
        </el-select>
      </div>
      <label class="cus-label" for="address">地址</label>
      <el-input id="address" v-model="address" class="cus-input" placeholder="地址" />
    </div>
    {{ districts }}
  </div>
</template>
<script>
const postData = require('~/assets/post.json')

export default {
  data () {
    return {
      name: '',
      tel: '',
      city: '',
      zip: '',
      area: '',
      address: ''
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
      if (this.city !== '') {
        districts = postData.find((item) => {
          return item.name === this.city
        }).districts.map((item) => {
          return item
        })
      }
      return districts
    }
  },
  methods: {
    ev (districts) {
      console.log('HI', districts)
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
</style>
