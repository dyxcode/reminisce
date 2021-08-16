<script lang='ts'>
import { defineComponent, ref, inject } from 'vue'

export default defineComponent({
  name: 'ImageCard',
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  setup(props, ctx) {
    const axios: any = inject('axios')
    const url = ref('')

    axios.get(`api/image/${props.id}`)
      .then((response: { data: any }) => {
        url.value = response.data.image
      })
    return {
      url,
    }
  },
})
</script>

<template>
  <el-image
    :src="url"
    fit="contain"
  ></el-image>
</template>

<style lang="stylus" scoped>
.el-image
  height 100%
</style>
