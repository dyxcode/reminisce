<script lang='ts'>
import { defineComponent, ref, PropType, inject } from 'vue'

export default defineComponent({
  name: 'FileCard',
  props: {
    ids: {
      type: Array as PropType<Array<number>>,
      required: true,
    },
  },
  setup(props, ctx) {
    const axios: any = inject('axios')
    const files = ref([])
    props.ids.forEach(id => {
      axios.get(`api/file/${id}`)
        .then((response: { data: any }) => {
          const name = response.data.name
          const created = response.data.created.split('T')[0]
          files.value.push({ name, created })
        })
    })
    
    return {
      files,
    }
  },
})
</script>

<template>
  <el-card>
    <el-row v-for="(item, index) in files" :key="index">
      <el-col :span="8">{{ item.name }}</el-col>
      <el-col :span="8">{{ item.created }}</el-col>
    </el-row>
    <el-row v-for="index in (3 - files.length)" :key="index">
      <el-col>等待上传更多文件～</el-col>
    </el-row>
  </el-card>
</template>

<style lang="stylus" scoped>
p
  line-height 20px
</style>
