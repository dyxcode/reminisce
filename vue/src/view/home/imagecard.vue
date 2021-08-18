<script lang='ts'>
import { defineComponent, ref, Ref, inject, PropType, onBeforeUpdate, onMounted } from 'vue'

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
    const imageContainers: Ref<HTMLElement[]> = ref([])

    onBeforeUpdate(() => { imageContainers.value = [] })

    const promises: Promise<boolean>[] = []
    props.ids.forEach((id, i) => {
      promises.push(new Promise(resolve => {
        axios.get(`api/image/${id}`)
          .then((response: { data: any }) => {
            urls.value[i] = response.data.image
            if ((response.data.width < response.data.height) !== (window.innerWidth < window.innerHeight)) {
              resolve(true)
            } else {
              resolve(false)
            }
          })
      }))
    })

    onMounted(() => {
      promises.forEach((item, i) => {
        item.then(isRotate => {
          if (isRotate) {
            const width = getComputedStyle(imageContainers.value[i]).width
            const height = getComputedStyle(imageContainers.value[i]).height
            imageContainers.value[i].style.transform = `rotate(90deg) translate(0, -${width})`
            imageContainers.value[i].style.transformOrigin = 'top left'
            imageContainers.value[i].style.width = height
            imageContainers.value[i].style.height = width
          }
        })
      })
    })
    
    return {
      urls,
      imageContainers,
    }
  },
})
</script>

<template>
  <el-carousel :interval="5000" height="100%">
    <el-carousel-item v-for="(url, index) in urls" :key="index">
      <div
        class="image-container"
        :ref="el => { if (el) imageContainers[index] = el }"
      >
        <el-image
          :src="url"
          fit="fill"
        ></el-image>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<style lang="stylus" scoped>
.el-carousel
  height 80vh
  .image-container
    height 100%
    width 100%
    .el-image
      height 100%
      width 100%
</style>
