<script lang='ts'>
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Navbar',
  setup(props, ctx) {
    const router = useRouter()

    document.addEventListener('keyup', e => {
      if (e.key === 'u') {
        router.push('upload')
      }
    })

    return {
    }
  },
})
</script>

<template>
</template>

<style lang="stylus" scoped>
</style>
