<template>
  <el-container>
    <el-main>
      <el-row :gutter="40">
        <ValidationObserver v-slot="{ handleSubmit }" ref="form" tag="div">
          <el-col :xs="24" :md="12" class="col-mb">
            <ValidationProvider
              name="欄位1"
              mode="lazy"
              :bails="false"
              rules="required|minmax:3,8"
              v-slot="{ errors, classes }"
            >
              <label for="name">顯示多筆驗證<span>*</span></label>
              <div :class="classes">
                <el-input id="name" v-model="info" clearable></el-input>
                <ul class="m-0 p-0" style="list-style: none">
                  <li v-for="(error, idx) in errors" :key="idx" class="error-info">{{ error }}</li>
                </ul>
              </div>
            </ValidationProvider>
          </el-col>
          <el-col :xs="24" :md="12">
            <ValidationProvider
              name="欄位2"
              mode="lazy"
              rules="required|minmax:3,8"
              v-slot="{ errors, classes }"
            >
              <label for="tel">顯示單筆驗證</label>
              <div :class="classes">
                <el-input id="tel" v-model="info2" clearable></el-input>
                <span>{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
          </el-col>
          <el-col :xs="24" :md="12">
            <ValidationProvider mode="lazy" rules="image" v-slot="{ errors }" tag="div">
              上傳檔案(rules="image")：
              <el-upload :action="uploadActionUrl">
                <el-button size="small" type="primary">上傳</el-button>
              </el-upload>
              <div v-if="errors[0]" class="error-info">{{ errors[0] }}</div>
            </ValidationProvider>
          </el-col>
          <el-col :spen="24">
            <el-button type="primary" @click="handleSubmit(onSubmit)">Submit</el-button>
          </el-col>
        </ValidationObserver>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      info: '',
      info2: ''
    }
  },
  methods: {
    onSubmit () {
      this.$refs.form.validate().then((success) => {
        if (!success) {
          return
        }
        alert('Form has been submitted!')
        this.info = ''
        this.info2 = ''

        this.$nextTick(() => {
          this.$refs.form.reset()
        })
      })
    }
  }
})
</script>
<style lang="scss">
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.el-input input {
  width: 100%;
  font-size: 16px;
  padding: 10px;
}
.col-mb {
  margin-bottom: 20px;
}
.invalid {
  color: #EB0600;
}
.invalid input {
  border: 1px #EB0600 solid
}
.valid {
  color: green;
}
.valid input {
  border: 1px solid green
}
.m-0{
  margin: 0;
}
.p-0{
  padding: 0;
}
@media screen and (max-width: 991px) {
  .el-col {
    margin-bottom: 20px;
  }
}
</style>
