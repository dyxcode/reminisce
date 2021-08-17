<script lang='ts'>
import { defineComponent, ref, inject, PropType } from 'vue'

export default defineComponent({
  name: 'ImageCard',
  props: {
    ids: {
      type: Array as PropType<Array<number>>,
      required: true,
    },
  },
  setup(props, ctx) {
    const axios: any = inject('axios')
    const urls = ref(Array(props.ids.length).fill(''))

    props.ids.forEach((id, i) => {
      axios.get(`api/image/${id}`)
      .then((response: { data: any }) => {
        urls.value[i] = response.data.image
      })
    })
    
    return {
      urls,
    }
  },
})
</script>

<template>
  <el-carousel :interval="5000" height="100%">
    <el-carousel-item v-for="(url, index) in urls" :key="index">
      <el-image
        :src="url"
        fit="fill"
      ></el-image>
    </el-carousel-item>
  </el-carousel>
</template>

<style lang="stylus" scoped>
.el-carousel
  height 80vh
  .el-image
    height 100%
    width 100%
</style>
