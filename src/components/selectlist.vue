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
    direction: {
      type: String,
      validator: (value: string) => ['horizental', 'vertical'].indexOf(value) !== -1,
      default: 'horizental',
    },
  },
  emits: ['click'],
  setup(prop, ctx) {
    const handleClick = (key: string) => { ctx.emit('click', key) }
    return {
      handleClick,
    }
  }
})
</script>

<template>
  <div class="select-list" :class="direction">
    <div
      v-for="(item, index) in list"
      :key="index"
    >
      <span
        @click="handleClick(item.key)"
      >{{ item.name }}</span>
      <div class="linear-line"></div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.vertical
  flex-direction column
.select-list
  display flex
  justify-content space-between
  align-items center
  &>div
    cursor pointer
    .linear-line
      margin 5px auto 0
      border-bottom 1.5px solid #abcdef
      width 0
      transition-duration 0.5s
    &:hover .linear-line
      width 100%
</style>
