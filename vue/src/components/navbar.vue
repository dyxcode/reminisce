<script lang='ts'>
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

import SelectList from './selectlist.vue'

export default defineComponent({
  name: 'Navbar',
  components: {
    SelectList,
  },
  setup(props, ctx) {
    const collections = ref([{ name: '图片', key: 'image' },
                             { name: '音乐', key: 'music' },
                             { name: '视频', key: 'video' },
                             { name: '博客', key: 'blog' },
                             { name: '文件', key: 'file'}])
    const selfinfo = ref([{ name: '趣味实验', key: 'expriment' },
                          { name: '背景信息', key: 'background'},
                          { name: '联系方式', key: 'contact'}])

    const activeIndex = ref(0)

    const router = useRouter()
    const handleClick = (key: string) => { router.push(key) }

    return {
      collections,
      selfinfo,
      activeIndex,
      handleClick,
    }
  },
})
</script>

<template>
  <el-row
    justify="space-around"
    align="bottom"
  >
    <el-col
      v-for="(item, index) in collections"
      :key="index"
      :span="1"
    >
      <span @click="handleClick(item.key)">{{ item.name }}</span>
      <div class="linear-line"></div>
    </el-col>

    <el-col :span="8"></el-col>

    <el-col
      v-for="(item, index) in selfinfo"
      :key="index"
      :span="2"
    >
      <span>{{ item.name }}</span>
      <div class="linear-line"></div>
    </el-col>
  </el-row>
</template>

<style lang="stylus" scoped>
.el-row
  width 80%
  height 100%
  margin 0 auto
  padding-bottom 10px
  text-align center
  white-space nowrap
  color #cde

  .el-col
    span
      cursor pointer
    .linear-line
      margin 5px auto 0
      border-bottom 1.5px solid #abcdef
      width 0
      transition-duration 0.5s
    &:hover .linear-line
      width 100%
</style>
