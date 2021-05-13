<template>
  <div>
    <el-carousel :autoplay="false" :interval="4000">
      <el-carousel-item
        v-for="item in imgUrl"
        :key="item"
        :style="{ backgroundImage: 'url(' + item.bg + ')' }"
        class="bg-setting"
      >
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgUrl: [
        { bg: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg' },
        { bg: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg' },
        { bg: 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg' },
        { bg: 'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg' }
      ]
    }
  }
}
</script>
<style lang="scss">
.bg-setting {
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 0;
  padding-top: calc(100% / 6 * 4);
}
.el-carousel__container {
  height: 0;
}
</style>
