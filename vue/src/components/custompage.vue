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
  <section>
    <header>
      <i class="el-icon-back" @click="goBack"></i>
      <h2>{{ title }}</h2>
    </header>
    <main>
      <slot></slot>
    </main>
  </section>
</template>

<style lang="stylus" scoped>
section
  background-color #f1e5c9
  min-height 100vh

  header
    position fixed
    top 0
    z-index 2
    display flex
    align-items center
    height 50px
    width 100%
    background-color #030303
    color #ccc
    i
      position relative
      z-index 1
      font-size 20px
      cursor pointer
      margin-left 10px
    h2
      position absolute
      left 0
      width 100%
      text-align center
      font-weight 500
      color #ccc

  main
    width 80%
    margin 50px auto 0px
    padding-bottom 30px
</style>
