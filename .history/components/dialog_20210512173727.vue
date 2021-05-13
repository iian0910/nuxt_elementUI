<template>
  <div>
    <el-dialog
      title="提示"
      :visible.sync="currentVisibleStatus"
      :before-close="handleClose"
      width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button type="primary" @click="closeDialog">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: ['dialogVisible'],
  data () {
    return {
      currentVisibleStatus: this.dialogVisible
    }
  },
  watch: {
    getdialogVisible () {
      console.log('change')
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
          this.getdialogVisible = false
        })
        .catch(_ => {})
    },
    closeDialog () {
      this.currentVisibleStatus = false
    }
  },
  mounted() {
    console.log('HI')
  }
}
</script>
<style lang="">

</style>
