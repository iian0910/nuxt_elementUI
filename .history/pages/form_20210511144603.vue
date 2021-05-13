<template>
  <el-container>
    <el-main>
      <el-row :gutter="40">
        <el-col :xs="24" :md="12">
          <input class="form-control" type="text">
        </el-col>
        <el-col :xs="24" :md="12"><div class="grid-content bg-purple-light"></div></el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
import Vue from 'vue'

export default Vue.extend({

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
.form-control {
  width: 100%;
  font-size: 16px;
  padding: 10px;
}
@media screen and (max-width: 991px) {
  .el-col {
    margin-bottom: 20px;
  }
}
</style>
