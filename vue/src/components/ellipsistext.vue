<script lang='ts'>
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  name: 'EllipsisText',
  props: {
    rowNumber: {
      type: Number,
      required: true,
    },
  },
  emits: ['click'],
  setup(prop, ctx) {
    const ellipsisText = ref<HTMLDivElement>()
    const showEllipsis = ref(false)

    const changeEllipsisText = () => {
      ellipsisText.value!.style.whiteSpace = 'nowrap'
      const currentBoxWidth = ellipsisText.value!.offsetWidth
      const currentTextWidth = ellipsisText.value!.scrollWidth
      ellipsisText.value!.style.whiteSpace = 'normal'
      const lineHeight = parseInt(getComputedStyle(ellipsisText.value!).lineHeight)
      const offsetHeight = ellipsisText.value?.offsetHeight!
      const currentRowNumber= Math.max(Math.ceil(currentTextWidth / currentBoxWidth), offsetHeight / lineHeight) 
      if (currentRowNumber > prop.rowNumber) {
        ellipsisText.value!.style.height = `${prop.rowNumber * lineHeight}px`
        showEllipsis.value = true
      } else {
        showEllipsis.value = false
      }
    }

    onMounted(() => {
      changeEllipsisText()
    })
    return {
      ellipsisText,
      showEllipsis,
      handleClick(key: string) {
        ctx.emit('click', key)
      }
    }
  }
})
</script>

<template>
  <div class="ellipsis-text" ref="ellipsisText">
    <slot></slot>
    <span v-if="showEllipsis">... </span>
  </div>
</template>

<style lang="stylus" scoped>
.ellipsis-text
  position relative
  overflow hidden
  word-wrap break-word
  span
    position absolute
    right 0
    bottom 0
    background-color #f1e5c9
    white-space pre
</style>
