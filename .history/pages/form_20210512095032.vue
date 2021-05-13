<template>
  <el-container>
    <el-main>
      <el-row :gutter="40">
        <ValidationObserver v-slot="{ handleSubmit }" ref="form" tag="div">
          <!-- 顯示多筆驗證 -->
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

          <!-- 顯示單筆驗證 -->
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

          <!-- 上傳檔案(一般) -->
          <!--
            action            :上傳位置
            :on-preview       :點擊上傳成功之檔案時觸發
            :on-remove        :移除檔案後觸發
            :before-remove    :移除檔案前觸發
            multiple          :上傳檔案多選(不放則單選)
            :limit            :在多選的情境下，最多一次上傳數量
            :on-exceed        :在多選的情境下，選超過限制數量按下確定後觸發
            :file-list        :上傳檔案清單
          -->
          <el-col :xs="24" :md="12">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList">
              <el-button size="small" type="primary">點擊上傳</el-button>
              <div slot="tip" class="el-upload__tip">只能上傳jpg/png文件，且不超過500K</div>
            </el-upload>
          </el-col>

          <!-- 上傳檔案(圖像) -->
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>

          <!-- 送出 -->
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
      info2: '',
      fileName: '',
      fileList: [
        {
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        },
        {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }
      ],
      imageUrl: ''
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
    },
    checkFile () {
      document.querySelector('#fileinput').click()
    },
    checkFileSure () {
      console.log(document.querySelector('#fileinput').files[0])
      this.fileName = document.querySelector('#fileinput').files[0].name
    },
    handleRemove (file, fileList) {
      console.log('handleRemove', file, fileList)
    },
    handlePreview (file) {
      console.log('handlePreview', file)
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
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
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
@media screen and (max-width: 991px) {
  .el-col {
    margin-bottom: 20px;
  }
}
</style>
