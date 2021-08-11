<script lang='ts'>
import { defineComponent, reactive } from 'vue'
// import { get } from '../../network'

import Waterfall from './waterfall.vue'

export default defineComponent({
  name: 'Image',
  components: {
    Waterfall
  },
  // setup(props, ctx) {
  //   const list = reactive({ src: [] })
  //   get('/image/').then(data => {
  //     list.src = data.map((item: { [x: string]: any }) => item['image'])
  //   })
  //   return {
  //     list
  //   }
  // },
})
</script>

<template>
  <div class="background"/>
  <!-- <waterfall
    class="waterfall"
    :list="list.src"
  /> -->
</template>

<style lang="stylus" scoped>
.background
  position fixed
  top 0
  min-height 100vh
  min-width 100vw
  opacity 0.9
  z-index -1
  background url("../../assets/picture_bg.jpg") no-repeat
  background-size 100% 100%
.waterfall
  width 80%
  margin 0 auto
</style>
