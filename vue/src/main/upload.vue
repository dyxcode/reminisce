<script lang='ts'>
import { defineComponent, ref } from 'vue'
import UploadImage from '../upload/uploadimage.vue'
import UploadBlog from '../upload/uploadblog.vue'
import UploadFile from '../upload/uploadfile.vue'

enum UploadType { IMAGE = 1, BLOG, FILE }

export default defineComponent({
  name: 'Upload',
  components: {
    UploadImage,
    UploadBlog,
    UploadFile,
  },
  emits: ['close'],
  setup(props, ctx) {
    const type = ref(0)
    const typeName = ['上传类型', "图片", "博客", "文件"]
    return {
      type,
      UploadType,
      typeName,
      handleClick() {
        ctx.emit('close')
      }
    }
  }
})
</script>

<template>
  <el-dialog
    :title="typeName[type]"
    :model-value="true"
    :center="true"
    width="70%"
    @close="handleClick"
  >
    <div class="modal-body">
      <template v-if="!type">
        <el-button type="primary" @click="type = UploadType.IMAGE">图片</el-button>
        <el-button type="warning" @click="type = UploadType.BLOG">博客</el-button>
        <el-button type="danger" @click="type = UploadType.FILE">文件</el-button>
      </template>

      <upload-image v-else-if="type === UploadType.IMAGE"></upload-image>
      <upload-blog v-else-if="type === UploadType.BLOG"></upload-blog>
      <upload-file v-else-if="type === UploadType.FILE"></upload-file>
    </div>
  </el-dialog>
</template>

<style lang="stylus" scoped>
.modal-body
  text-align center
</style>
