<script lang='ts'>
import { defineComponent } from 'vue'

import Waterfall from '../components/common/waterfall.vue'

export default defineComponent({
  name: 'Music',
  components: {
    Waterfall
  },
  setup(props, ctx) {
    const imgList = Array(20).fill(0).map((_, index) => {
      return `src/assets/test${index % 7 + 1}.jpg`
    })
    return {
      imgList
    }
  },
})
</script>

<template>
  <div class="background"/>
  <waterfall
    class="waterfall"
    :list="imgList"
  />
</template>

<style lang="stylus" scoped>
.background
  position fixed
  top 0
  min-height 100vh
  min-width 100vw
  opacity 0.9
  z-index -1
  background url("../assets/picture_bg.jpg") no-repeat
  background-size 100% 100%
.waterfall
  width 80%
  margin 0 auto
</style>
