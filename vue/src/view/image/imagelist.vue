<script lang='ts'>
import { defineComponent, ref, inject, onMounted, Ref } from 'vue'
import { useRouter } from 'vue-router'
import CustomPage from '../../components/custompage.vue'

export default defineComponent({
  name: 'ImageList',
  components: {
    CustomPage,
  },
  setup(prop, ctx) {
    const router = useRouter()
    let imglist = ref<{ top: number; left: number; width: number; height: number; src: string }[]>([]) 
    let preloadList: Array<HTMLImageElement> = []
    const waterfall: Ref<HTMLElement> = ref(null)
    const axios: any = inject('axios')
    
    onMounted(async () => {
      const response: { data: any[] } = await axios.get('api/image/')
      const srcList = response.data.map((item: any) => item.image)
      for (const src in srcList) {
        let img = new Image()
        img.src = src
        preloadList.push(img)
      }
      const verticalGap = 10
      const columnNumber = 3
      // compute image width
      const width = (waterfall.value.clientWidth - verticalGap * (columnNumber - 1)) / columnNumber
      // push preload image into imglist
      let columnArray = Array(columnNumber).fill(0) // record the offset at the bottom
      const pushIntoImglist = (img: HTMLImageElement) => {
        // get minOffet and minIndex of columnArray
        const { minOffset, minIndex } = columnArray.reduce(({ minOffset, minIndex }, cur, index) => {
          if (cur < minOffset) return { minOffset: cur, minIndex: index }
          else return { minOffset, minIndex }
        }, { minOffset: columnArray[0], minIndex: 0})

        const height = (img.height / img.width) * width
        const top = minOffset + verticalGap
        const left = minIndex * (width + verticalGap)

        columnArray[minIndex] = top + height
        imglist.value.push({ top, left, width, height, src: img.src })
      }
      console.log(preloadList)
      // sync loading
      for (const img of preloadList) {
        console.log(img)
        if (img.complete) {
          console.log(11)
          pushIntoImglist(img)
        }
        else {
        pushIntoImglist(await new Promise(resolve => { img.onload = () => resolve(img) }))
        console.log(222);
        
} 
      }
    })
    return {
      waterfall,
      imglist,
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
    title="图片瀑布流"
    @click="handleBackClick"
  >
    <div class="waterfall" ref="waterfall">
      <el-image
        class="waterfall-item"
        v-for="(item, index) in imglist"
        :key="index"
        :style="{top:`${item.top}px`,left:`${item.left}px`, width:`${item.width}px`, height:`${item.height}px`}"
        :src="item.src"
        fit="fit"
      ></el-image>
    </div>
  </custom-page>
</template>

<style lang="stylus" scoped>
.waterfall
  position relative
  .waterfall-item
    position absolute
</style>
