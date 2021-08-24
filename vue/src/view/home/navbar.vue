<script lang='ts'>
import { defineComponent, ref, watch, inject } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

import useResize from '../../components/useresize'

export default defineComponent({
  name: 'Navbar',
  props: {
   resize: {
      type: Number,
      required: true,
    },
  },
  setup(props, ctx) {
    const router = useRouter()
    const drawer = ref(false)
    const rootHeight = ref('0px')
    const rootScrollbar: any = inject('rootScrollbar')
    const activeIndex = ref(0)
    const collections = [{ name: '图片', key: 'image' },
                         { name: '博客', key: 'blog' },
                         { name: '文件', key: 'file'}]
    const selfinfo = [{ name: '实验', key: 'expriment' },
                      { name: '背景', key: 'background'},
                      { name: '联系', key: 'contact'}]

    function closeDrawer() {
      rootHeight.value = '0px'
      drawer.value = false
    }

    watch(() => props.resize, closeDrawer)

    return {
      drawer,
      collections,
      selfinfo,
      activeIndex,
      rootHeight,
      handleNavClick(key: string) {
        router.push(key)
      },
      handleExpandClick() {
        rootHeight.value = getComputedStyle(rootScrollbar.value.resize).height
        drawer.value = true
      },
      handleUnexpandClick() {
        closeDrawer()
      },
      handleTodoClick() {
        ElMessage({
          message: '开发中，敬请期待～',
          center: true,
          type: 'info',
          duration: 1000
        })
      }
    }
  },
})
</script>

<template>
  <div
    class="navbar"
    :style="{ height: rootHeight }"
    @click.stop="handleUnexpandClick"
  >
    <i class="el-icon-s-fold" @click.stop="handleExpandClick"></i>
    <transition name="el-zoom-in-top">
      <el-row
        justify="center"
        align="middle"
        v-show="drawer"
      >
        <el-col
          v-for="(item, index) in collections"
          :key="index"
          :span="2"
          :xs="3"
        >
          <span @click.stop="handleNavClick(item.key)">{{ item.name }}</span>
          <div class="linear-line"></div>
        </el-col>

        <el-col :span="4" :xs="2"></el-col>

        <el-col
          v-for="(item, index) in selfinfo"
          :key="index"
          :span="2"
          :xs="3"
        >
          <span @click.stop="handleTodoClick">{{ item.name }}</span>
          <div class="linear-line"></div>
        </el-col>
      </el-row>
    </transition>
  </div>
</template>

<style lang="stylus" scoped>
.navbar
  position absolute
  width 100%
  z-index 2000
  background-color rgba(0,0,0,.5)
  i
    position fixed
    top 0
    right 0
    z-index 2
    color #667788
    font-size 30px
    padding 10px
    transform rotate(-90deg)
    cursor pointer

  .el-row
    position fixed
    z-index 2001
    top 0
    text-align center
    white-space nowrap
    color #cde
    height 45px
    width 100%
    box-shadow 0 8px 10px -5px rgba(0,0,0,.2), 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12)
    .el-col
      height 20px
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
