<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CustomPage',
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
  emits: ['backClick'],
  setup(prop, ctx) {
    return {
      goBack() {
        ctx.emit('backClick')
      }
    }
  }
})
</script>

<template>
  <el-container>
    <el-header height="50px">
      <el-page-header @back="goBack">
        <template #title>
          <span class="header-back">{{ back }}</span>
        </template>
        <template #content>
          <span class="header-title">{{ title }}</span>
        </template>
      </el-page-header>
    </el-header>
    <el-main>
      <slot></slot>
    </el-main>
  </el-container>
</template>

<style lang="stylus" scoped>
.el-container
  background-color #f1e5c9
  min-height 100vh

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

  .el-main
    width 80%
    margin 0 auto
    padding-bottom 30px
</style>
