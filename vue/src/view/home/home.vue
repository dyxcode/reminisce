<script lang='ts'>
import { defineComponent, ref, shallowRef, inject } from 'vue'
import Navbar from './navbar.vue'
import ImageCard from './imagecard.vue'
import BlogCard from './blogcard.vue'
import FileCard from './filecard.vue'
import LandscapeCards from './landscapecards.vue'
import PortraitCards from './portraitcards.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Navbar,
    ImageCard,
    BlogCard,
    FileCard,
    LandscapeCards,
    PortraitCards,
  },
  setup(props, ctx) {
    const axios: any = inject('axios')
    const cards = ref([])
    const orientation = ref(window.innerWidth > window.innerHeight)
    const refreshKey = ref(0)

    const fileCardItemHeight = 48
    const fileCardPadding = 20
    const fileCardBorder = 1
    const fileCardContentHeight = window.innerHeight * 0.8 - (fileCardPadding + fileCardBorder) * 2
    const fileCardRowNumber = Math.floor(fileCardContentHeight / fileCardItemHeight)

    axios.get('api/recent/')
      .then((response: { data: any[] }) => {
        while (response.data.length !== 0) {
          const firstElement = response.data.shift()
          buildCards(firstElement, response.data)
        }
        // console.log(cards.value)
      })

    let resizeTimer: number | null = null
    window.onresize = () => {
      if(resizeTimer) clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        orientation.value = window.innerWidth > window.innerHeight
        refreshKey.value++
      }, 100)
    }

    function buildCards(el: any, data: any[]) {
      const card = { type: el.type }
      if (el.type === 'file') {
        const ids = [el.target_id, ...pickRestFiles(data)]
        card['component'] = shallowRef(FileCard)
        card['data'] = { ids, rowNumber: fileCardRowNumber }
      } else if (el.type === 'blog') {
        card['component'] = shallowRef(BlogCard)
        card['data'] = { id: el.target_id }
      } else if (el.type === 'image') {
        const ids = [el.target_id, ...pickRestImages(data)]
        card['component'] = shallowRef(ImageCard)
        card['data'] = { ids }
      }
      cards.value.push(card)
    }

    function pickRestFiles(data: any[]) {
      const fileIds = []
      let index = 0
      while (index !== -1 && fileIds.length < fileCardRowNumber - 2) {
        index = data.findIndex(item => { item.type === 'file' })
        if (index !== -1) {
          fileIds.push(data.splice(index, 1)[0].target_id)
        }
      }
      return fileIds
    }

    function pickRestImages(data: any[]) {
      const imageIds = []
      while (data.length && data[0].type === 'image') {
        imageIds.push(data.splice(0, 1)[0].target_id)
      }
      return imageIds
    }

    return {
      cards,
      orientation,
      refreshKey,
    }
  },
})
</script>

<template>
  <el-container>
    <el-header height="100vh">
      <div class="img-container"></div>
      <navbar :key="refreshKey"></navbar>
      <h1 class="yingwen">reminisce</h1>
      <h1 class="zhongwen">昔日的快乐时光</h1>
      <i class="el-icon-d-arrow-left"></i>
    </el-header>
    <el-main>
      <transition name="el-fade-in-linear">
        <div :key="refreshKey">
          <landscape-cards
            v-if="orientation"
            :cards="cards"
          ></landscape-cards>
          <portrait-cards
            v-else
            :cards="cards"
          ></portrait-cards>
        </div>
      </transition>
    </el-main>
    <el-footer height="0"></el-footer>
  </el-container>
</template>

<style lang="stylus" scoped>
.el-header
  position relative
  padding 0
  background-color #030303
  text-align center
  .img-container
    position absolute
    width 100%
    height 100%
    animation shallow 10s linear alternate infinite
  .navbar
    position relative
  h1
    position relative
    color #def
    text-align center
  .yingwen
    margin-top 30vh
    font-size 30px
    font-weight 400
    letter-spacing 3px
  .zhongwen
    margin-top 5vh
    letter-spacing 0.5em
  i
    color #def
    font-size 30px
    margin-top 40vh
    animation up 2s linear infinite

.el-main
  background-color #f1e5c9
  padding 20px 50px

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

@keyframes up {
  0% {
    transform rotate(90deg)
  }
  100% {
    transform rotate(90deg) translate(-2vh, 0)
  }
}
</style>
