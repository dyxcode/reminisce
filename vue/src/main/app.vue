<script lang='ts'>
import { defineComponent, provide, ref } from 'vue'

import KeyBoard from './keyboard.vue'
import Upload from './upload.vue'

export default defineComponent({
  components: {
    KeyBoard,
    Upload,
  },
  setup(props, ctx) {
    const showUploadModal = ref(false)
    const rootScrollbar = ref(null)
    provide('rootScrollbar', rootScrollbar)

    return {
      showUploadModal,
      rootScrollbar,
      handleUploadClick() {
        showUploadModal.value = true
      },
      handleClose() {
        showUploadModal.value = false
      }
    }
  },
})
</script>

<template>
  <el-scrollbar height="100vh" ref="rootScrollbar">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <key-board
      @uploadClick="handleUploadClick"
    ></key-board>
    <upload
      v-if="showUploadModal"
      @close="handleClose"
    ></upload>
  </el-scrollbar>
</template>
