<script lang='ts'>
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'DataTable',
  props: {
    list: {
      type: Array as PropType<string[][]>,
      required: true,
    },
  },
  setup(prop, ctx) {
  }
})
</script>

<template>
  <table class="data-table">
    <tbody>
      <tr
        v-for="(row, idx) in list"
        :key="idx"
      >
        <td
          v-for="(item, index) in row"
          :key="index"
        >{{ item }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="stylus" scoped>
.data-table
  tr
    height 50px
</style>
