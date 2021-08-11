<script lang='ts'>
import { defineComponent, inject, ref, Ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import NavHeader from '../../components/navheader.vue'

export default defineComponent({
  name: 'BlogDetail',
  components: {
    NavHeader,
  },
  setup(props, ctx) {
    const route = useRoute()
    const router = useRouter()
    const axios: any = inject('axios')
    const blog: Ref<any> = ref({})
    const paragraphs: Ref<String[]> = ref([])

    axios.get(`api/blog/${route.params.id}`)
      .then((response: { data: any[] }) => {
        console.log(response.data)
        blog.value = response.data
        const article: String = blog.value.text
        article.split('\n').forEach(item => {
          paragraphs.value.push(item)
        })
      })
    return {
      blog,
      paragraphs,
      handleBackClick() {
        router.push('/blog')
      },
    }
  },
})
</script>

<template>
  <el-container>
    <el-header height="50px">
      <nav-header
        back="返回博客清单"
        :title="blog.title"
        @click="handleBackClick"
      ></nav-header>
    </el-header>
    <el-main>
      <p
        v-for="(item, idx) in paragraphs"
        :key="idx"
      >
        {{ item }}
      </p>
    </el-main>
  </el-container>
</template>

<style lang="stylus" scoped>
.el-header
  display flex
  align-items center
  background-color #030303
  color #ccc

.el-main
  width 80%
  margin 0 auto
  padding-bottom 30px
  p
    font-size 15px
    text-indent 2em
    line-height 25px
    margin-bottom 10px
</style>
