<script lang='ts'>
import { defineComponent, ref, reactive } from 'vue'

import SelectList from '../common/selectlist.vue'

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
    const fontStyle = reactive({
      color: '#ccc',
      fontSize: '18px',
      fontWeight: '500',
    })
    return {
      collections,
      fontStyle,
    }
  },
})
</script>

<template>
  <aside>
    <select-list
      class="select-list"
      :list="collections"
      :font-style="fontStyle"
    />
  </aside>
</template>

<style lang="stylus" scoped>
aside
  width 10%
  height 30vh
  .select-list
    height 100%
</style>
