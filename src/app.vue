<script lang='ts'>
import { defineComponent } from 'vue'

import NavBar from './components/custom/navbar.vue'

export default defineComponent({
  components: {
    NavBar,
  }
})
</script>

<template>
  <nav-bar/>
  <router-view/>
</template>
