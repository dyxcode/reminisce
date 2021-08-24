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
    const isReading = ref(false)

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
      created,
      isReading,
      handleReadClick() {
        isReading.value = !isReading.value
      },
    }
  },
})
</script>

<template>
  <el-card :body-style="{ height: '100%' }">
    <i
      class="el-icon-view"
      @click="handleReadClick"
      :style="{ opacity: isReading ? 1 : 0.5}"
    ></i>
    <header>{{ title }}</header>
    <main>
      <el-scrollbar :always="isReading">
        <p
          v-for="(item, idx) in paragraphs"
          :key="idx"
        >{{ item }}</p>
      </el-scrollbar>
      <div class="overlay fill" v-show="!isReading"></div>
    </main>
    <footer>发表于：{{ created }}</footer>
  </el-card>
</template>

<style lang="stylus" scoped>
.el-card
  position relative
  height 80vh

  i
    position absolute
    top 0
    right 0
    color #667788
    font-size 25px
    padding 10px
    cursor pointer
    opacity 0.5

  header
    height 5%
    line-height 20px
    font-size 20px
    text-align center
    padding 0
  main
    position relative
    height 90%
    padding 12px 0 0
    .overlay
      position absolute
      top 0
    p
      line-height 20px
      padding-bottom 10px
  footer
    height 5%
    flex-shrink 0
    padding 10px 0 0
    text-align center
</style>
