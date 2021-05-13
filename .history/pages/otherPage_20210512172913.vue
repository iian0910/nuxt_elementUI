<template>
  <div>
    <el-carousel
      :autoplay="false"
      height="500px"
      trigger="click"
      class="carousel"
    >
      <el-carousel-item
        v-for="(item, index) in imgUrl"
        :key="index"
        :style="{ backgroundImage: 'url(' + item.bg + ')' }"
        class="bg-setting"
      >
      </el-carousel-item>
    </el-carousel>
    <el-container>
      <el-main>
        <el-row :gutter="20">
          <el-col :span="6" v-for="(item, index) in 4" :key="index">
            <el-card :body-style="{ padding: '0px' }">
              <img src="~/assets/images/small.jpg" class="image">
              <div style="padding: 14px;">
                <span>小豬</span>
                <div class="bottom clearfix">
                  <el-button type="text" class="button" @click="dialogVisible = true">按鈕</el-button>
                </div>
              </div>
            </el-card>
            <Dialog :dialogVisible="dialogVisible" />
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dialogVisible: false,
      imgUrl: [
        { bg: 'https://fakeimg.pl/2500x1000/' },
        { bg: 'https://fakeimg.pl/2500x1000/' },
        { bg: 'https://fakeimg.pl/2500x1000/' },
        { bg: 'https://fakeimg.pl/2500x1000/' }
      ]
    }
  },
  methods: {}
}
</script>
<style lang="scss">
.bg-setting {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.carousel {
  overflow: hidden;
  margin-bottom: 20px;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}
</style>
