<template>
  <div>
    <el-dialog
      title="提示"
      :visible.sync="baiduMapVisible"
      :before-close="handleClose"
      width="30%">
      <span>小標題</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">取消</el-button>
        <el-button type="primary" @click="closeDialog">確定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      baiduMapVisible: false,
      data: null
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
          this.getdialogVisible = false
          this.$emit('updateStatus', this.currentVisibleStatus)
        })
        .catch(_ => {})
    },
    openDialog (item) {
      this.data = item
      this.baiduMapVisible = true
    },
    closeDialog () {
      this.baiduMapVisible = false
    }
  }
}
</script>
<style lang="">

</style>
