<template>
  <div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="getdialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="getdialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props:['dialogVisible'],
  data () {
    return {
      getdialogVisible: this.dialogVisible
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then( _ => {
          done()
        })
        .catch( _ => {})
    }
  }
}
</script>
<style lang="">
  
</style>