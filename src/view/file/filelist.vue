<script lang='ts'>
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'FileList',
  props: {
  },
  setup(prop, ctx) {
    const list = Array(10).fill(['modern effective C++ 中文版.pdf','PDF文稿','今天 下午 3:46'])
    return {
      list
    }
  }
})
</script>

<template>
  <table class="file-list">
    <tbody>
      <tr
        v-for="(row, idx) in list"
        :key="idx"
      >
        <td
          v-for="(item, index) in row"
          :key="index"
        >{{ item }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="stylus" scoped>
.file-list
  tr
    height 50px
    color #ccc
    font-size 18px
    font-weight 300
    td
      cursor pointer

  tr:nth-child(even)
    background-color rgba(50,50,50,0.5)
</style>
