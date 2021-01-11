<script lang='ts'>
import { defineComponent} from 'vue'

import BLogList from './bloglist.vue'

export default defineComponent({
  name: 'Blog',
  components: {
    BLogList,
  },
  setup(props, ctx) {

  },
})
</script>

<template>
  <div class="background"/>
  <blog-list class="blog-list"/>
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
.blog-list
  width 80%
  margin 0 auto
</style>
