<script lang='ts'>
import { defineComponent, ref, Ref, inject } from 'vue'

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
    const paragraphs: Ref<String[]> = ref([])
    const created = ref('')

    axios.get(`api/blog/${props.id}`)
      .then((response: { data: any }) => {
        title.value = response.data.title
        const article: String = response.data.text
        article.split('\n').forEach(item => {
          paragraphs.value.push(item)
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
    <el-container>
      <el-header>{{ title }}</el-header>
      <el-main>
        <el-scrollbar height="100%">
          <p
            v-for="(item, idx) in paragraphs"
            :key="idx"
          >
            {{ item }}
          </p>
        </el-scrollbar>
      </el-main>
      <el-footer>发表于：{{ created }}</el-footer>
    </el-container>
  </el-card>
</template>

<style lang="stylus" scoped>
.el-card
  height 100%
  .el-container
    height 100%
    p
      line-height 20px
</style>
