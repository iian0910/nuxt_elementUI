<template>
  <div>
    <el-carousel indicator-position="outside">
      <el-carousel-item
        class="bg-setting"
        v-for="(item, index) in data"
        :key="index"
        :style="{ backgroundImage: 'url(' + item.backgroundImg + ')' }">
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
          backgroundImg: 'https://www.msd-animal-health.com.tw/wp-content/uploads/sites/41/2020/01/MAH-Home-Cattle.jpg'
        },
        {
          backgroundImg: 'https://media.wired.com/photos/59822d6fbc944559d607e43a/master/pass/PeacockHP-691483428.jpg'
        },
        {
          backgroundImg: 'https://www.ucsf.edu/sites/default/files/2020-12/astonishing-animals-komodo-dragon-featured.jpg'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.bg-setting {
  background-size: cover;
  background-position: center;
  height: 0;
  padding-top: calc(100% / 6 * 4);
}
</style>
