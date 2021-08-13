<script lang='ts'>
import { defineComponent, ref, inject } from 'vue'

export default defineComponent({
  name: 'UploadImage',
  setup(props, ctx) {
    const axios: any = inject('axios')
    return {
      handleUpload(options) {
        let data = new FormData()
        console.log(options.file)
        const reader = new FileReader()
        reader.readAsDataURL(options.file)
        reader.onload = theFile => {
          const image = new Image()
          image.src = theFile.target.result as string
          image.onload = () => {
            data.append('width', image.width.toString())
            data.append('height', image.height.toString())
            data.append('image', options.file)
            const config = {
              headers:{'Content-Type':'multipart/form-data'}
            }
            axios.post(options.action, data, config).then(data => {
              console.log(data)
            })
          }
        }
      }
    }
  },
})
</script>

<template>
  <el-upload
    action="api/image/"
    list-type="picture"
    :http-request="handleUpload"
  >
    <el-button size="small" type="primary">点击上传</el-button>
  </el-upload>
</template>