<template>
  <el-container>
    <el-main>
      <el-row :gutter="40">
        <ValidationObserver v-slot="{ handleSubmit }" ref="form" tag="div">
          <el-col :xs="24" :md="12" class="col-mb">
            <ValidationProvider mode="passive" rules="required" v-slot="{ errors }">
              <el-input v-model="info" clearable></el-input>
              <span>{{ errors[0] }}</span>
            </ValidationProvider>
          </el-col>
          <el-col :xs="24" :md="12">
            <el-input v-model="info2" clearable></el-input>
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
@media screen and (max-width: 991px) {
  .el-col {
    margin-bottom: 20px;
  }
}
</style>
