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
    const imglist = ref<{ top: number; left: number; width: number; height: number; src: string }[]>([]) 
    const srclist = ref([])
    const waterfall: Ref<HTMLElement> = ref(null)
    const axios: any = inject('axios')
    
    onMounted(async () => {
      const response: { data: any[] } = await axios.get('api/image/')
      const verticalGap = 10

      function buildImgList() {
        const columnNumber = Math.floor(innerWidth / 300)
        
        imglist.value = []
        srclist.value = []
        // compute image width
        const computedWidth = (waterfall.value.clientWidth - verticalGap * (columnNumber - 1)) / columnNumber

        // build imglist
        let columnArray = Array(columnNumber).fill(0) // record the offset at the bottom

        function pushIntoImglist({ width, height, image }) {
          // get min offset and min index of column array
          const { minOffset, minIndex } = columnArray.reduce(({ minOffset, minIndex }, cur, index) => {
            if (cur < minOffset) return { minOffset: cur, minIndex: index }
            else return { minOffset, minIndex }
          }, { minOffset: columnArray[0], minIndex: 0})

          const computedHeight = (height / width) * computedWidth
          const top = minOffset + verticalGap
          const left = minIndex * (computedWidth + verticalGap)

          columnArray[minIndex] = top + computedHeight
          waterfall.value.style.height = `${Math.max(...columnArray)}px`
          imglist.value.push({ top, left, width: computedWidth, height: computedHeight, src: image })
          srclist.value.push(image)
        }
        
        response.data.forEach(item => {
          pushIntoImglist(item)
        })
      }
      buildImgList()

      let resizeTimer: number | null = null
      window.onresize = () => {
        if(resizeTimer) clearTimeout(resizeTimer)
        resizeTimer = setTimeout(() => { buildImgList() }, 100)
      }
    })
    return {
      waterfall,
      imglist,
      srclist,
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
    @backClick="handleBackClick"
  >
    <div class="waterfall" ref="waterfall">
      <el-image
        class="waterfall-item"
        v-for="(item, index) in imglist"
        :key="index"
        :style="{top:`${item.top}px`,left:`${item.left}px`, width:`${item.width}px`, height:`${item.height}px`}"
        :src="item.src"
        :preview-src-list="srclist"
        fit="fill"
      ></el-image>
    </div>
  </custom-page>
</template>

<style lang="stylus" scoped>
.waterfall
  position relative
  width 100%
  .waterfall-item
    position absolute
</style>
