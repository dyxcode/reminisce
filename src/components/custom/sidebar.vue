<script lang='ts'>
import { defineComponent, ref, reactive } from 'vue'

import SelectList from '../common/selectlistcolumn.vue'

export default defineComponent({
  name: 'SideBar',
  components: {
    SelectList,
  },
  setup(props, ctx) {
    const collections = ref([{ name: '图片', key: 'picture' },
                             { name: '音乐', key: 'music' },
                             { name: '视频', key: 'vedio' },
                             { name: '文章', key: 'article' },
                             { name: '电子书', key: 'ebook'}])
    return {
      collections,
    }
  },
})
</script>

<template>
  <aside>
    <select-list
      :list="collections"
    />
  </aside>
</template>

<style lang="stylus" scoped>
aside
  height 100vh
  width 20%
</style>
