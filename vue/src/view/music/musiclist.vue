<script lang='ts'>
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'MusicList',
  props: {
  },
  setup(prop, ctx) {
    const list = Array(10).fill(0).reduce((val: string[][], _) => {
      return val.concat([['Neo Therapy', 'Lanx', '03:58'], ['天梯', '月渐暗', '03:25'], ['电子羊', '王加一', '03:16']])
    }, [])
    return {
      list
    }
  }
})
</script>

<template>
  <table class="music-list">
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
.music-list
  tr
    height 50px
    color #ccc
    font-size 18px
    font-weight 300
</style>
