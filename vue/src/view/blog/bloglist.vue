<script lang='ts'>
import { defineComponent, ref, inject, Ref } from 'vue'
import { useRouter } from 'vue-router'
import EllipsisText from '../../components/ellipsistext.vue'
import CustomPage from '../../components/custompage.vue'

export default defineComponent({
  name: 'BlogList',
  components: {
    EllipsisText,
    CustomPage,
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
  <custom-page
    back="返回主页"
    title="博客清单"
    @backClick="handleBackClick"
  >
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
  </custom-page>
</template>

<style lang="stylus" scoped>
.blog-list
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
