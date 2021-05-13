<template>
  <div>
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="(item, index) in data" :key="index">
        <h3>{{ item.backgroundImg }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: [
        {
          backgroundImg: 'https://fakeimg.pl/2500x1000/ff0000/'
        },
        {
          backgroundImg: 'https://fakeimg.pl/2500x1000/ff0000/'
        },
        {
          backgroundImg: 'https://fakeimg.pl/2500x1000/ff0000/'
        },
        {
          backgroundImg: 'https://fakeimg.pl/2500x1000/ff0000/'
        }
      ]
    }
  }
}
</script>
<style lang="scss">

</style>
