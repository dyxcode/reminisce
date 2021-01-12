<script lang='ts'>
import { defineComponent, ref, reactive } from 'vue'

import Navbar from './navbar.vue'

export default defineComponent({
  components: {
    Navbar,
  },
  setup(props, ctx) {
    return {
    }
  },
})
</script>

<template>
  <navbar/>
  <router-view/>
</template>

<style lang="stylus" scoped>
</style>
