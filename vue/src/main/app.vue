<script lang='ts'>
import { defineComponent, ref } from 'vue'

import KeyBoard from './keyboard.vue'
import Upload from './upload.vue'

export default defineComponent({
  components: {
    KeyBoard,
    Upload,
  },
  setup(props, ctx) {
    const showUploadModal = ref(false)
    return {
      showUploadModal,
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
  <div>
    <router-view></router-view>
    <key-board
      @uploadClick="handleUploadClick"
    ></key-board>
    <upload
      v-if="showUploadModal"
      @close="handleClose"
    ></upload>
  </div>
</template>

<style lang="stylus" scoped>
</style>
