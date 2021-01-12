<script lang='ts'>
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

import SelectList from '../components/selectlist.vue'

export default defineComponent({
  name: 'Navbar',
  components: {
    SelectList,
  },
  setup(props, ctx) {
    const collections = ref([{ name: '图片', key: 'picture' },
                             { name: '音乐', key: 'music' },
                             { name: '视频', key: 'video' },
                             { name: '博客', key: 'blog' },
                             { name: '文件', key: 'file'}])
    const selfinfo = ref([{ name: '趣味实验', key: 'expriment' },
                          { name: '背景信息', key: 'background'},
                          { name: '联系方式', key: 'contact'}])

    const router = useRouter()
    const handleClick = (key: string) => { router.push(key) }

    return {
      collections,
      selfinfo,
      handleClick,
    }
  },
})
</script>

<template>
  <header>
    <select-list
      class="select-list"
      :list="collections"
      @click="handleClick"
    />
    <h1
      @click="handleClick('/')"
    >Reminisce</h1>
    <select-list
      class="select-list"
      :list="selfinfo"
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
    cursor pointer
  .select-list
    width 300px
    color #def
    font-size 15px
    font-weight 300
</style>
