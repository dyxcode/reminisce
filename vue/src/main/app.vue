<script lang='ts'>
import { defineComponent, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import KeyBoard from './keyboard.vue'

export default defineComponent({
  components: {
    KeyBoard,
  },
  setup(props, ctx) {
    const route = useRoute()
    const router = useRouter()
    onMounted(() => {
      window.addEventListener('hashchange',() => {
        const currentPath = window.location.hash.slice(1)
        console.log(currentPath)
        if(route.path !== currentPath){
          router.push(currentPath) // 动态跳转
        }
      },false)
    })
  },
})
</script>

<template>
  <key-board/>
  <router-view/>
</template>

<style lang="stylus" scoped>
</style>
