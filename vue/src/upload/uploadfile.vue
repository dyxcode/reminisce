<script lang='ts'>
import { defineComponent, ref, inject } from 'vue'

export default defineComponent({
  name: 'UploadFile',
  setup(props, ctx) {
    const axios: any = inject('axios')
    return {
      handleUpload(options) {
        let data = new FormData()
        console.log(options.file)
        data.append('name', options.file.name)
        data.append('size', options.file.size)
        data.append('file', options.file)
        const config = {
          headers:{'Content-Type':'multipart/form-data'}
        }
        axios.post(options.action, data, config).then(data => {
          console.log(data)
        })
      }
    }
  },
})
</script>

<template>
  <el-upload
    action="api/file/"
    :http-request="handleUpload"
  >
    <el-button size="small" type="primary">点击上传</el-button>
  </el-upload>
</template>