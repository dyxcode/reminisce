<script lang='ts'>
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

export default defineComponent({
  name: 'Navbar',
  setup(props, ctx) {
    const drawer = ref(false)
    const collections = ref([{ name: '图片', key: 'image' },
                             { name: '博客', key: 'blog' },
                             { name: '文件', key: 'file'}])
    const selfinfo = ref([{ name: '实验', key: 'expriment' },
                          { name: '背景', key: 'background'},
                          { name: '联系', key: 'contact'}])

    const activeIndex = ref(0)

    const router = useRouter()

    return {
      drawer,
      collections,
      selfinfo,
      activeIndex,
      handleNavClick(key: string) {
        router.push(key)
      },
      handleExpandClick() {
        drawer.value = true
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
  <div class="navbar">
    <el-affix>
      <i class="el-icon-s-fold" @click="handleExpandClick"></i>
    </el-affix>
    <el-drawer
      v-model="drawer"
      direction="ttb"
      custom-class="no-background-color"
      :lock-scroll="false"
      :withHeader="false"
      :size="55"
    >
      <el-row
        justify="center"
        align="middle"
        :gutter="20"
      >
        <el-col
          v-for="(item, index) in collections"
          :key="index"
          :span="2"
        >
          <span @click="handleNavClick(item.key)">{{ item.name }}</span>
          <div class="linear-line"></div>
        </el-col>

        <el-col :span="4"></el-col>

        <el-col
          v-for="(item, index) in selfinfo"
          :key="index"
          :span="2"
        >
          <span @click="handleTodoClick">{{ item.name }}</span>
          <div class="linear-line"></div>
        </el-col>
      </el-row>
    </el-drawer>
  </div>
  
</template>

<style lang="stylus">
.no-background-color
  background-color transparent
</style>

<style lang="stylus" scoped>
.navbar
  .el-affix
    text-align right
    i
      color #667788
      font-size 30px
      padding 10px
      transform rotate(-90deg)
      cursor pointer

  .el-row
    text-align center
    white-space nowrap
    color #cde
    height 55px

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
