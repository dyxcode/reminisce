<script lang='ts'>
import { defineComponent, PropType, inject, reactive } from 'vue'

export default defineComponent({
  name: 'FileCard',
  props: {
    ids: {
      type: Array as PropType<Array<number>>,
      required: true,
    },
    rowNumber: {
      type: Number,
      required: true,
    },
  },
  setup(props, ctx) {
    const axios: any = inject('axios')
    const files = reactive([])

    const promises = []
    props.ids.forEach(id => {
      promises.push(new Promise<void>(resolve => {
        axios.get(`api/file/${id}`)
          .then((response: { data: any }) => {
            const name = response.data.name
            const created = response.data.created.split('T')[0]
            files.push({ name, created })
            resolve()
          })
      }))
    })
    
    Promise.all(promises).then(() => {
      while (files.length < props.rowNumber - 1) {
          files.push({ name: '等待上传更多文件～', created: '' })
      }
    })
    
    return {
      files,
      setSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (rowIndex >= props.ids.length)
          return [1, 2]
      },
    }
  },
})
</script>

<template>
  <el-card :body-style="{ height: '100%' }">
    <el-table
      :data="files"
      :span-method="setSpanMethod"
    >
      <el-table-column
        prop="name"
        label="文件名"
        align="center">
      </el-table-column>
      <el-table-column
        prop="created"
        label="上传时间"
        align="center">
      </el-table-column>
    </el-table>
  </el-card>
</template>

<style lang="stylus" scoped>
.el-card
  height 80vh
</style>
