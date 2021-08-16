<script lang='ts'>
import { defineComponent, ref, shallowRef, inject } from 'vue'
import Navbar from '../../components/navbar.vue'
import ImageCard from './imagecard.vue'
import BlogCard from './blogcard.vue'
import FileCard from './filecard.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Navbar,
    ImageCard,
    BlogCard,
    FileCard,
  },
  setup(props, ctx) {
    const axios: any = inject('axios')
    const cards = ref([])
    let doubleScreen = []

    axios.get('api/recent/')
      .then((response: { data: any[] }) => {
        while (response.data.length !== 0) {
          const firstElement = response.data.shift()
          buildCards(firstElement, response.data)
        }
        console.log(cards.value)
      })

    function buildCards(el: any, data: any[]) {
      if (el.type === 'file') {
        const fileIds = pickRestFiles(data).map(item => item.id)
        const ids = [el.target_id, ...fileIds]
        insertDoubleScreen({ component: shallowRef(FileCard), data: { ids }})
      } else if (el.type === 'blog') {
        insertDoubleScreen({ component: shallowRef(BlogCard), data: { id: el.target_id }})
      } else if (el.type === 'image') {
        insertSingleScreen({ component: shallowRef(ImageCard), data: { id: el.target_id }})
      }
    }

    function insertSingleScreen(singleScreen: any) {
      cards.value.push({ singleScreen, isSingle: true })
    }

    function insertDoubleScreen(payload: any) {
      doubleScreen.push(payload)
      if (doubleScreen.length === 2) {
        cards.value.push({ doubleScreen, isSingle: false })
        doubleScreen = []
      }
    }

    function pickRestFiles(data: any[]) {
      const files = []
      let index = 0
      while (index !== -1 && files.length < 2) {
        index = data.findIndex(item => { item.type === 'file' })
        if (index !== -1) {
          files.push(...data.splice(index, 1))
        }
      }
      return files
    }

    return {
      cards,
    }
  },
})
</script>

<template>
  <el-container>
    <el-header height="50vh">
      <div class="img-container"></div>
      <navbar></navbar>
    </el-header>
    <el-main>
      <el-row
        v-for="(card, index) in cards"
        :key="index"
        :gutter="10"
      >
        <el-col
          v-if="card.isSingle"
        >
          <component
            :is="card.singleScreen.component"
            v-bind="card.singleScreen.data"
          ></component>
        </el-col>

        <template v-else>
          <el-col
            v-for="(item, index) in card.doubleScreen"
            :key="index"
            :span="12"
          >
            <component
              :is="item.component"
              v-bind="item.data"
            ></component>
          </el-col>
        </template>
      </el-row>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<style lang="stylus" scoped>
.el-header
  position relative
  padding 0
  background-color #030303
  overflow hidden

  .img-container
    position absolute
    width 100%
    height 100%
    animation shallow 10s linear alternate infinite

.el-main
  .el-row
    height 80vh
    margin-bottom 10px
    .el-col
      height 100%
      text-align center

@keyframes shallow {
  0% {
    background url("../../assets/earth-1.jpg") no-repeat center
    background-size contain
  }
  100% {
    background url("../../assets/earth-2.jpg") no-repeat center
    background-size contain
  }
}
</style>
