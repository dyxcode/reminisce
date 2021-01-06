<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Picture',
  components: {
  },
  setup(props, ctx) {
    return {
    }
  },
})
</script>

<template>
  <div class="background"/>
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
