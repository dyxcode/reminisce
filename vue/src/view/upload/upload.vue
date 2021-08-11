<script lang='ts'>
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Upload',
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
  <div class="background"/>
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
.background
  position fixed
  top 0
  min-height 100vh
  min-width 100vw
  opacity 0.9
  z-index -1
  background url("../../assets/picture_bg.jpg") no-repeat
  background-size 100% 100%

#switch
  position absolute
  right 15%

.container
  font-size 20px
  width 70%
  margin 0 auto
  
  .title
    margin 10px 0
  .input
    width 100%
    font-size 20px
  button
    display block
    width 100px
    height 31px
    font-size 20px
    margin 10px auto

  .button-container
    text-align center
    select
      width 100px
      height 31px
      font-size 20px
      margin-right 10px
    input
      height 31px
      font-size 20px
    &>div
      margin 10px 0
</style>
