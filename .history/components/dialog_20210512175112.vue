<template>
  <div>
    <el-dialog
      title="提示"
      :visible.sync="currentVisibleStatus"
      :before-close="handleClose"
      width="30%">
      <span>這是一段訊息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">取消</el-button>
        <el-button type="primary" @click="closeDialog">確定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: ['dialogVisible'],
  data () {
    return {
      currentVisibleStatus: false
    }
  },
  watch: {
    dialogVisible () {
      this.currentVisibleStatus = this.dialogVisible
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
    closeDialog () {
      this.currentVisibleStatus = false
      this.$emit('updateStatus', this.currentVisibleStatus)
    }
  },
  mounted () {
    console.log('HI')
  }
}
</script>
<style lang="">

</style>
