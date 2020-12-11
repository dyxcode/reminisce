<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Select-List-Row',
  props: {
    list: {
      type: Array,
      required: true,
    },
    fontStyle: {
      type: Object,
      default: () => {},
    },
  },
  setup(props) {
    console.log(props)
  }
})
</script>

<template>
  <div class="select-list-row">
    <div
      v-for="(item, index) in list"
      :key="index"
    >
      <span
        :style="fontStyle"
      >{{ item }}</span>
      <div class="linear-line"></div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.select-list-row
  display flex
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
