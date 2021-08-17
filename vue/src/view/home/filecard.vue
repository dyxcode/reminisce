<script lang='ts'>
import { defineComponent, ref, Ref, PropType, inject, onMounted } from 'vue'

export default defineComponent({
  name: 'FileCard',
  props: {
    ids: {
      type: Array as PropType<Array<number>>,
      required: true,
    },
  },
  setup(props, ctx) {
    const axios: any = inject('axios')
    const files = ref([])
    const tableWrapper: Ref<HTMLElement> = ref(null)
    const height = ref('48px')

    const promises = []
    props.ids.forEach(id => {
      promises.push(new Promise<void>(resolve => {
        axios.get(`api/file/${id}`)
          .then((response: { data: any }) => {
            const name = response.data.name
            const created = response.data.created.split('T')[0]
            files.value.push({ name, created })
            resolve()
          })
      }))
    })
    onMounted(() => {
      const card = tableWrapper.value.parentNode as HTMLElement
      const padding = parseInt(getComputedStyle(card).padding)
      const contentHeight = card.offsetHeight - 2 * padding
      Promise.all(promises).then(() => {
        const thead = tableWrapper.value.querySelector('thead')
        const rowNumber = Math.floor(contentHeight / thead.offsetHeight)
        while (files.value.length < rowNumber - 1) {
            files.value.push({ name: '等待上传更多文件～', created: '' })
        }
        height.value = `${contentHeight / rowNumber}px`
      })
    })
    
    return {
      files,
      tableWrapper,
      height,
      mergeExpandRow({ row, column, rowIndex, columnIndex }) {
        if (rowIndex >= promises.length)
          return [1, 2]
      },
      setExpandClass({ row, rowIndex }) {
        if (rowIndex >= promises.length)
          return 'expand-row'
      }
    }
  },
})
</script>

<template>
  <el-card :body-style="{ height: '100%' }">
    <div class="tableWrapper" ref="tableWrapper">
      <el-table
        :data="files"
        :span-method="mergeExpandRow"
        :row-style="{ height }"
        :row-class-name="setExpandClass"
      >
        <el-table-column
          prop="name"
          label="文件名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="created"
          label="上传时间">
        </el-table-column>
      </el-table>
    </div>
  </el-card>
</template>

<style lang="stylus" scoped>
.el-card
  height 80vh
  .expand-row
    text-align center
</style>
