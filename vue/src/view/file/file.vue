<script lang='ts'>
import { defineComponent, ref } from 'vue'


export default defineComponent({
  name: 'File',
  components: {
  },
  setup(props, ctx) {
    return {
    }
  },
})
</script>

<template>
  <div class="background"/>
  <table class="file-list">
    <!-- <thead>
      <tr>
        <th>文件名</th>
        <th>文件大小</th>
        <th>创建时间</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(row, idx) in list"
        :key="idx"
      >
        <td class="first-column">{{ row.name }}</td>
        <td class="second-column">{{ row.size }}</td>
        <td>{{ row.created }}</td>
      </tr>
    </tbody> -->
  </table>
</template>

<style lang="stylus" scoped>
.background
  position fixed
  top 0
  min-height 100vh
  min-width 100vw
  opacity 0.9
  z-index -1
  background url("../../assets/picture_bg.jpg") no-repeat
  background-size 100% 100%
.file-list
  width 80%
  margin 0 auto

  tr
    height 50px
    color #ccc
    font-size 18px
    font-weight 300
    th
      text-align left
    td
      cursor pointer
    td:nth-child(1)
      width 50%
    td:nth-child(2)
      width 20%
    td:nth-child(3)
      width 30%

  tr:nth-child(even)
    background-color rgba(50,50,50,0.5)
</style>
