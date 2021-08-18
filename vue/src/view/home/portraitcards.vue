<script lang='ts'>
import { defineComponent, ref, PropType, watch } from 'vue'

export default defineComponent({
  name: 'PortraitCards',
  props: {
    cards: {
      type: Array as PropType<Array<any>>,
      required: true,
    },
  },
})
</script>

<template>
  <div class="portrait-cards">
    <el-row
      v-for="(card, index) in cards"
      :key="index"
    >
      <el-col>
        <component
          :is="card.component"
          v-bind="card.data"
        ></component>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="stylus" scoped>
.el-row
  margin-bottom 10px
</style>