<script lang='ts'>
import { defineComponent, reactive, inject } from 'vue'

export default defineComponent({
  name: 'UploadBlog',
  setup(props, ctx) {
    const axios: any = inject('axios')
    const blog = reactive({
      title: '',
      text: ''
    })
    return {
      blog,
      handleSubmit() {
        const title = blog.title.trim()
        const text = blog.text.trim().replace(/\s+/g, '\n')
        axios.post('api/blog/', { title, text }).then(res => {
          console.log(res)
          blog.title = '',
          blog.text = ''
        })
      },
    }
  },
})
</script>

<template>
  <el-form :model="blog">
    <el-form-item label="标题">
      <el-input type="text" v-model="blog.title"></el-input>
    </el-form-item>
    <el-form-item label="正文">
      <el-input
        type="textarea"
        v-model="blog.text"
        :autosize="{ minRows: 5, maxRows: 15 }"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button size="small" type="primary" @click="handleSubmit">点击上传</el-button>
    </el-form-item>
  </el-form>
</template>

<style lang="stylus" scoped>

</style>