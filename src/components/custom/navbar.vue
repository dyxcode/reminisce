<script lang='ts'>
import { defineComponent, ref, reactive } from 'vue'

import SelectListRow from '../common/selectlistrow.vue';

export default defineComponent({
  name: 'NavBar',
  components: {
    SelectListRow,
  },
  setup(props, ctx) {
    const collections = ref(['图片', '音乐', '视频', '文章', '电子书'])
    const selfinfo = ref(['我的博客', '背景信息', '联系方式'])
    const fontStyle = reactive({
      color: '#def',
      fontSize: '15px',
      fontWeight: '300',
    })
    return {
      collections,
      fontStyle,
      selfinfo,
    }
  },
})
</script>

<template>
  <header>
    <select-list-row
      class="list"
      :list="collections"
      :font-style="fontStyle"
    />
    <h1>Reminisce</h1>
    <select-list-row
      class="list"
      :list="selfinfo"
      :font-style="fontStyle"
    />
  </header>
</template>

<style lang="stylus" scoped>
header
  display flex
  justify-content space-between
  align-items center
  width 80%
  margin 20px auto
  h1
    position absolute
    left 50%
    transform translate(-50%, -5px)
    width 30%
    font-size 22px
    font-weight 1000
    color #ccc
    text-align center
    border 2px outset #eee
    border-radius 20px
  .list
    width 300px
</style>
