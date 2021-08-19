<script lang='ts'>
import { defineComponent, inject, ref, Ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import CustomPage from '../../components/custompage.vue'

export default defineComponent({
  name: 'BlogDetail',
  components: {
    CustomPage,
  },
  setup(props, ctx) {
    const route = useRoute()
    const router = useRouter()
    const axios: any = inject('axios')
    const title = ref('')
    const paragraphs = reactive([])

    axios.get(`api/blog/${route.params.id}`)
      .then((response: { data: any }) => {
        console.log(response.data)
        title.value = response.data.title
        const article: String = response.data.text
        article.split('\n').forEach(item => {
          paragraphs.push(item)
        })
      })
    return {
      title,
      paragraphs,
      handleBackClick() {
        router.push('/blog')
      },
    }
  },
})
</script>

<template>
  <custom-page
    back="博客清单"
    :title="title"
    @backClick="handleBackClick"
  >
    <p
      v-for="(item, idx) in paragraphs"
      :key="idx"
    >
      {{ item }}
    </p>
  </custom-page>
</template>

<style lang="stylus" scoped>
p
  font-size 15px
  text-indent 2em
  line-height 25px
  margin-bottom 10px
</style>
