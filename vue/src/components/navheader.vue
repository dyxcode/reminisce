<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NavHeader',
  props: {
    back: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  emits: ['click'],
  setup(prop, ctx) {
    return {
      goBack() {
        ctx.emit('click')
      }
    }
  }
})
</script>

<template>
  <el-page-header @back="goBack">
    <template #title>
      <span class="header-back">{{ back }}</span>
    </template>
    <template #content>
      <span class="header-title">{{ title }}</span>
    </template>
  </el-page-header>
</template>

<style lang="stylus" scoped>
.el-header
  display flex
  align-items center
  background-color #030303
  color #ccc
  .header-back
    position relative
    z-index 1
  .header-title
    position absolute
    left 0
    width 100%
    text-align center
    color #ccc
</style>
