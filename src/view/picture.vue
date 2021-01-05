<script lang='ts'>
import { defineComponent } from 'vue'

import SideBar from '../components/custom/sidebar.vue'
import WaterfallFlow from '../components/common/waterfallflow.vue'

export default defineComponent({
  name: 'picture',
  components: {
    SideBar,
    WaterfallFlow,
  },
  setup(props, ctx) {
  },
})
</script>

<template>
  <div class="background"/>
  <!-- <side-bar class="side-bar"/> -->
  <waterfall-flow/>
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
</style>
