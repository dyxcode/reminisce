<script lang='ts'>
import { defineComponent } from 'vue'

import VideoList from './videolist.vue'

export default defineComponent({
  name: 'Video',
  components: {
    VideoList,
  },
  setup(props, ctx) {
    return {
    }
  },
})
</script>

<template>
  <div class="background"/>
  <video-list class="video-list"/>
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
.video-list
  width 80%
  margin 0 auto
  overflow hidden
</style>
