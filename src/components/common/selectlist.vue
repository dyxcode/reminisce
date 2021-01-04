<script lang='ts'>
import { defineComponent, PropType } from 'vue'

interface listType {
 [index: number]: {
   name: string,
   key: string,
 }
}
export default defineComponent({
  name: 'SelectList',
  props: {
    list: {
      type: Array as PropType<listType>,
      required: true,
    },
    fontStyle: {
      type: Object,
      default: () => {},
    },
  },
  emits: ['click'],
  setup(prop, ctx) {
    const handleClick = (key) => { ctx.emit('click', key) }
    return {
      handleClick,
    }
  }
})
</script>

<template>
  <div class="select-list">
    <div
      v-for="(item, index) in list"
      :key="index"
    >
      <span
        :style="fontStyle"
        @click="handleClick(item.key)"
      >{{ item.name }}</span>
      <div class="linear-line"></div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.select-list
  display flex
  flex-direction column
  justify-content space-between
  .linear-line
    margin 5px auto 0
    border-bottom 1.5px solid #abcdef
    width 0
    transition-duration 0.5s
  &>div
    cursor pointer
    &:hover .linear-line
      width 100%
</style>
