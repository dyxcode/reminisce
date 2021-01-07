<script lang='ts'>
import { defineComponent} from 'vue'

import DataTable from '../components/common/datatable.vue'

export default defineComponent({
  name: 'Music',
  components: {
    DataTable,
  },
  setup(props, ctx) {
    const musicList = Array(10).fill(0).reduce((val: string[][], _) => {
      return val.concat([['Neo Therapy', 'Lanx', '03:58'], ['天梯', '月渐暗', '03:25'], ['电子羊', '王加一', '03:16']])
    }, [])
    return {
      musicList
    }
  },
})
</script>

<template>
  <div class="background"/>
  <data-table
    class="data-table"
    :list="musicList"
  />
</template>

<style lang="stylus" scoped>
.background
  position fixed
  top 0
  min-height 100vh
  min-width 100vw
  opacity 0.9
  z-index -1
  background url("../assets/picture_bg.jpg") no-repeat
  background-size 100% 100%
.data-table
  width 80%
  margin 0 auto
  color #ccc
  font-size 18px
  font-weight 300
</style>
