<script lang='ts'>
import { defineComponent, PropType, ref, reactive } from 'vue'

export default defineComponent({
  name: 'WaterfallFlow',
  props: {
    columnNumber: {
      type: Number,
      require: true,
    },
    list: {
      type: Array as PropType<String[]>,
      default: () => [],
    },
  },
  setup(prop, ctx) {
    const imglist = ref<{ top: number; left: number; src: string }[]>([])
  }
})
</script>

<template>
  <div class="waterfall-flow">
    <div
      class="waterfall-item"
      v-for="(item, index) in list"
      :key="index"
      :style="{top:`${item.top}px`,left:`${item.left}px`}"
    >
      <img src="item.src" alt="">
    </div>
  </div>
</template>

<style lang="stylus" scoped>
</style>
