<template>
  <div>
    <el-carousel indicator-position="outside">
      <el-carousel-item
        v-for="(item, index) in data"
        :key="index"
        :style="{ backgroundImage: 'url(' + item.backgroundImg + ')' }">
        <h3>{{ item }}</h3>
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
          backgroundImg: 'https://aldf.org/wp-content/uploads/2018/05/lamb-iStock-665494268-16x9-e1559777676675-1200x675.jpg'
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
