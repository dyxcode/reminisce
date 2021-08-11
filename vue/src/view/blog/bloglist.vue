<script lang='ts'>
import { defineComponent, ref, inject, Ref } from 'vue'
import { useRouter } from 'vue-router'
import EllipsisText from '../../components/ellipsistext.vue'
import NavHeader from '../../components/navheader.vue'

export default defineComponent({
  name: 'BlogList',
  components: {
    EllipsisText,
    NavHeader,
  },
  setup(prop, ctx) {
    const axios: any = inject('axios')
    const list: Ref<any[]> = ref([])
    const ellipsisTextKey = ref(0)

    axios.get('api/blog/')
      .then((response: { data: any[] }) => {
        console.log(response.data)
        response.data.forEach(item => {
          item.created = item.created.substring(0, item.created.indexOf('.')).replace('T', ' ')
          list.value.push(item)
        })
      })

    let resizeTimer: number | null = null
    window.onresize = () => {
      if(resizeTimer) clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => { ellipsisTextKey.value++ }, 100)
    }

    const router = useRouter()

    return {
      list,
      ellipsisTextKey,
      handleItemClick(id: number) {
        router.push(`/blog/${id}`)
      },
      handleBackClick() {
        router.push('/')
      }
    }
  }
})
</script>

<template>
  <el-container>
    <el-header height="50px">
      <nav-header
        back="返回主页"
        title="博客清单"
        @click="handleBackClick"
      ></nav-header>
    </el-header>
    <el-main>
      <div class="blog-list">
        <div
          class="item"
          v-for="item in list"
          :key="item.id"
          @click="handleItemClick(item.id)"
        >
          <h2>{{ item.title }}</h2>
          <ellipsis-text
            :key="ellipsisTextKey"
            :row-number="3"
          >{{ item.text }}</ellipsis-text>
          <el-divider content-position="center">发表于：{{ item.created }}</el-divider>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<style lang="stylus" scoped>
.el-header
  display flex
  align-items center
  background-color #030303
  color #ccc
  .header-back
    position relative
    z-index 1
  .header-title
    position absolute
    left 0
    width 100%
    text-align center
    color #ccc
.el-main
  .blog-list
    width 80%
    margin 0 auto
    padding-bottom 30px
    .item
      cursor pointer
      h2
        font-weight bold
        font-size 18px
        line-height 50px
      .ellipsis-text
        color #3e484d
        font-size 15px
        line-height 30px
</style>
