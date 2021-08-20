<script lang='ts'>
import { defineComponent, ref, inject, reactive } from 'vue'

export default defineComponent({
  name: 'BlogCard',
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  setup(props, ctx) {
    const axios: any = inject('axios')
    const title = ref('')
    const paragraphs = reactive([])
    const created = ref('')

    axios.get(`api/blog/${props.id}`)
      .then((response: { data: any }) => {
        title.value = response.data.title
        const article: String = response.data.text
        article.split('\n').forEach(item => {
          paragraphs.push(item)
        })
        created.value = response.data.created.substring(0, response.data.created.indexOf('.')).replace('T', ' ')
      })
    return {
      title,
      paragraphs,
      created
    }
  },
})
</script>

<template>
  <el-card :body-style="{ height: '100%' }">
    <header>{{ title }}</header>
    <main>
      <el-scrollbar>
        <p
          v-for="(item, idx) in paragraphs"
          :key="idx"
        >{{ item }}</p>
      </el-scrollbar>
    </main>
    <footer>发表于：{{ created }}</footer>
  </el-card>
</template>

<style lang="stylus" scoped>
.el-card
  height 80vh

  header
    height 5%
    line-height 20px
    font-size 20px
    text-align center
    padding 0
  main
    height 90%
    padding 12px 0 0
    p
      line-height 20px
      padding-bottom 10px
  footer
    height 5%
    flex-shrink 0
    padding 10px 0 0
    text-align center
</style>
