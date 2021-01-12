<script lang='ts'>
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'BlogList',
  props: {
  },
  setup(prop, ctx) {
    const list = Array(10).fill({
      title: 'Angular入门到精通系列教程（7）- 组件（@Component）基本知识',
      text: '1. 概述 2. 创建Component 组件模板 视图封装模式 特殊的选择器 :host inline-styles 3. 总结 环境: Angular CLI: 11.0.6 Angular: 11.0.7 Node: 12.18.3 npm : 6.14.6 IDE: Visual Studi'
    })
    return {
      list
    }
  }
})
</script>

<template>
  <article class="blog-list">
    <section
      class="item"
      v-for="(item, idx) in list"
      :key="idx"
    >
      <h2>{{ item.title }}</h2>
      <p>{{ item.text }}</p>
    </section>
  </article>
</template>

<style lang="stylus" scoped>
.blog-list
  padding-bottom 30px
  section
    padding 20px
    border-bottom 1px solid rgba(222,222,222,0.2)
    h2
      font-weight bold
      font-size 18px
      line-height 50px
      cursor pointer
      outline none
    p
      font-size 15px
      line-height 30px
      white-space nowrap
      overflow hidden
      text-overflow ellipsis
      cursor pointer

  section:last-child
    border-bottom none
</style>
