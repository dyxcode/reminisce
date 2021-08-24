<script lang='ts'>
import { defineComponent, ref, inject, reactive } from 'vue'
import { useRouter } from 'vue-router'
import CustomPage from '../../components/custompage.vue'
import { ElMessage } from 'element-plus'

export default defineComponent({
  name: 'FileList',
  components: {
    CustomPage
  },
  setup(props, ctx) {
    const router = useRouter()
    const axios: any = inject('axios')
    const data = reactive([])
    let isclick = false

    axios.get('api/file/')
      .then((response: { data: any[] }) => {
        response.data.forEach(item => {
          const time = item.created.substring(0, item.created.indexOf('.')).replace('T', ' ')

          let size = item.size
          const UNITS = ['B', 'K', "M", "G", "T"]
          let i = 0
          while (size > 1000.0) {
            size /= 1000.0
            i++
          }
          size = `${size.toFixed(2)}${UNITS[i]}`
          data.push({ src: item.file, name: item.name, size, time})
        })
      })
    return {
      data,
      handleBackClick() {
        router.push('/')
      },
      handleDbClick(row, column, event) {
        const link = document.createElement('a')
        link.href = row.src
        link.setAttribute('download', row.name)
        link.click()
      },
      handleItemClick() {
        if (isclick) return
        isclick = true
        ElMessage({
          message: '双击下载文件～',
          center: true,
          type: 'info'
        })
      }
    }
  },
})
</script>

<template>
  <custom-page
    back="返回主页"
    title="文件夹"
    @backClick="handleBackClick"
  >
    <el-table
      :data="data"
      @row-dblclick="handleDbClick"
      @row-click="handleItemClick"
      stripe
    >
      <el-table-column
        prop="name"
        label="文件名"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="size"
        label="文件大小"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="time"
        label="创建时间"
        align="center"
      >
      </el-table-column>
    </el-table>
  </custom-page>
</template>
