<template>
  <div>
    <el-carousel
      :autoplay="false"
      :interval="4000"
      indicator-position="none"
      height="500px"
      style="overflow: hidden"
    >
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
        { bg: 'https://fakeimg.pl/2500x1000/' },
        { bg: 'https://fakeimg.pl/2500x1000/' },
        { bg: 'https://fakeimg.pl/2500x1000/' },
        { bg: 'https://fakeimg.pl/2500x1000/' }
      ]
    }
  }
}
</script>
<style lang="scss">
.bg-setting {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
