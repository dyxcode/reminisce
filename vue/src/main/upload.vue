<script lang='ts'>
import { defineComponent, ref } from 'vue'
import UploadImage from '../upload/uploadimage.vue'
import UploadBlog from '../upload/uploadblog.vue'

enum UploadType { IMAGE, MUSIC, VIDEO, BLOG, FILE }

export default defineComponent({
  name: 'Upload',
  components: {
    UploadImage,
    UploadBlog,
  },
  emits: ['close'],
  setup(props, ctx) {
    const type = ref(0)
    return {
      type,
      handleClick() {
        ctx.emit('close')
      }
    }
  }
  // setup(props, ctx) {
  //   const router = useRouter()

  //   const title = ref('')
  //   const text = ref('')
  //   const isBlogUpload = ref(true)
  //   const selected = ref('file')

  //   const singer = ref('')
    
  //   let selectedFile: File

  //   return {
  //     title,
  //     text,
  //     isBlogUpload,
  //     selected,
  //     singer,
  //     handleSwitch() {
  //       isBlogUpload.value = !isBlogUpload.value
  //     },
  //     handleBlogSubmit() {
  //       post('blog/', { title: title.value, text: text.value }).then(res => {
  //         console.log(res)
  //         router.push('blog')
  //       })
  //     },
  //     handleSelect(e: Event) {
  //       selectedFile = (e.target as HTMLInputElement).files![0]
  //     },
  //     handleFileSubmit() {
  //       const wait = new Promise(resolve => {
  //         let formData = new FormData()
  //         if (selected.value === 'music') {
  //           const url = URL.createObjectURL(selectedFile)
  //           const audioElement = new Audio(url)
  //           audioElement.addEventListener("loadedmetadata", e => {
  //             const duration = Math.round(audioElement.duration)
  //             formData.append('name', selectedFile.name)
  //             formData.append('singer', singer.value)
  //             formData.append('duration', duration.toString())
  //             formData.append('music', selectedFile)
  //             resolve(formData)
  //           })
  //         } else {
  //           if (selected.value === 'image') {
  //             formData.append('image', selectedFile)
  //           } else if (selected.value === 'video') {
  //             formData.append('name', selectedFile.name)
  //             formData.append('video', selectedFile)
  //           } else {
  //             formData.append('name', selectedFile.name)
  //             formData.append('size', selectedFile.size.toString())
  //             formData.append('file', selectedFile)
  //           }
  //           resolve(formData)
  //         }
  //       })
  //       wait.then(data => {
  //         const config = {
  //           headers:{'Content-Type':'multipart/form-data'}
  //         }
  //         post(`/${selected.value}/`, data, config).then(data => {
  //           console.log(data)
  //         })
  //       })
  //     },
  //   }
  // }
})
</script>

<template>
  <el-dialog
    title="上传类型"
    :model-value="true"
    :center="true"
    width="70%"
    @close="handleClick"
  >
    <div class="modal-body">
      <template v-if="type === 0">
        <el-button type="primary" @click="type = 1">图片</el-button>
        <el-button type="success" @click="type = 2">音乐</el-button>
        <el-button type="info" @click="type = 3">视频</el-button>
        <el-button type="warning" @click="type = 4">博客</el-button>
        <el-button type="danger" @click="type = 5">文件</el-button>
      </template>

      <upload-image v-else-if="type === 1"></upload-image>
      <upload-blog v-else-if="type === 4"></upload-blog>
    </div>
  </el-dialog>
  <!-- <button
    id="switch"
    @click="handleSwitch"
  >切换</button>
  <div
    class="container"
    v-if="isBlogUpload"
  >
    <div class="title">标题：</div>
    <input
      class="input"
      type="text"
      v-model="title"
    >
    <div class="title">正文：</div>
    <textarea
      class="input"
      rows="20"
      v-model="text"
    />
    <button
      @click="handleBlogSubmit"
    >提交</button>
  </div>
  <div
    class="container"
    v-else
  >
    <div class="button-container">
      <select v-model="selected">
        <option>image</option>
        <option>music</option>
        <option>video</option>
        <option>file</option>
      </select>
      <input type="file" value="" id="file" @change="handleSelect">
      <div v-if="selected === 'music'">
        <span>歌手：</span>
        <input
          type="text"
          v-model="singer"
        >
      </div>
      <button
        @click="handleFileSubmit"
      >提交</button>
    </div>
  </div> -->
</template>

<style lang="stylus" scoped>
.modal-body
  text-align center
</style>
