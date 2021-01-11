<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home'
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
  animation shallow 10s linear alternate infinite

@keyframes shallow {
  0% {
    background url("../../assets/earth-1.jpg") no-repeat
    background-size 100% 100%
  }
  100% {
    background url("../../assets/earth-2.jpg") no-repeat
    background-size 100% 100%
  }
}
</style>
