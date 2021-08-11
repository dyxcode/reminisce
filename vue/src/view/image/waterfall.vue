<script lang='ts'>
import { defineComponent, PropType, ref, reactive, onMounted, Ref } from 'vue'

export default defineComponent({
  name: 'Waterfall',
  props: {
    list: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    columnNumber: {
      type: Number,
      default: 3,
    },
    gap: {
      type: Object as PropType<{ verticalGap: number; horizontalGap: number }>,
      default: { verticalGap: 20, horizontalGap: 20},
    }
  },
  setup(prop, ctx) {
    const waterfall: Ref<HTMLElement | null> = ref(null)
    let imglist = ref<{ top: number; left: number; width: number; height: number; src: string }[]>([])
    // preload image
    let preloadList: Array<HTMLImageElement> = []
    console.log(prop.list)
    for (const src in prop.list) {
      console.log(1)
      let img = new Image()
      img.src = src
      preloadList.push(img)
    }
    console.log(2)
    onMounted(async () => {
      // compute image width
      const width = ((waterfall.value as HTMLElement).clientWidth - prop.gap.verticalGap * (prop.columnNumber - 1)) / prop.columnNumber
      // push preload image into imglist
      let columnArray = Array(prop.columnNumber).fill(0) // record the offset at the bottom
      const pushIntoImglist = (img: HTMLImageElement) => {
        // get minOffet and minIndex of columnArray
        const { minOffset, minIndex } = columnArray.reduce(({ minOffset, minIndex }, cur, index) => {
          if (cur < minOffset) return { minOffset: cur, minIndex: index }
          else return { minOffset, minIndex }
        }, { minOffset: columnArray[0], minIndex: 0})

        const height = (img.height / img.width) * width
        const top = minOffset + prop.gap.verticalGap
        const left = minIndex * (width + prop.gap.verticalGap)

        columnArray[minIndex] = top + height
        imglist.value.push({ top, left, width, height, src: img.src })
      }
      // sync loading
      for (const img of preloadList) {
        if (img.complete) pushIntoImglist(img)
        else pushIntoImglist(await new Promise(resolve => { img.onload = () => resolve(img) }))
      }
    })
    return {
      waterfall,
      imglist,
    }
  }
})
</script>

<template>
  <div class="waterfall" ref="waterfall">
    <div
      class="waterfall-item"
      v-for="(item, index) in imglist"
      :key="index"
      :style="{top:`${item.top}px`,left:`${item.left}px`, width:`${item.width}px`, height:`${item.height}px`}"
    >
      <img :src="item.src" alt="">
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.waterfall
  position relative
  .waterfall-item
    position absolute
    img
      width 100%
      height 100%
</style>
