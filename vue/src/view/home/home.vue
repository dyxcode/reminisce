<script lang='ts'>
import { defineComponent, ref, shallowRef, inject, reactive } from 'vue'
import Navbar from './navbar.vue'
import ImageCard from './imagecard.vue'
import BlogCard from './blogcard.vue'
import FileCard from './filecard.vue'
import LandscapeCards from './landscapecards.vue'
import PortraitCards from './portraitcards.vue'

import useResize from '../../components/useresize'

import imgUrl from '../../assets/sea.jpg'

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
    const rootScrollbar: any = inject('rootScrollbar')
    const onResize = useResize()
    const cards = reactive([])
    const orientation = ref(window.innerWidth > window.innerHeight)
    const refreshKey = ref(0)

    const fileCardItemHeight = 48
    const fileCardPadding = 20
    const fileCardBorder = 1
    let fileCardContentHeight
    let fileCardRowNumber
    let responseData

    axios.get('api/recent/')
      .then((response: { data: any[] }) => {
        responseData = response.data
        buildFromData()
      })

    onResize(() => {
      while (cards.length !== 0) cards.pop()
      buildFromData()
      orientation.value = window.innerWidth > window.innerHeight
      refreshKey.value++
    })

    function buildFromData() {
      fileCardContentHeight = window.innerHeight * 0.8 - (fileCardPadding + fileCardBorder) * 2
      fileCardRowNumber = Math.floor(fileCardContentHeight / fileCardItemHeight)
      let data = [...responseData]
      while (data.length !== 0) {
        const firstElement = data.shift()
        buildCards(firstElement, data)
      }
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
      cards.push(card)
    }

    function pickRestFiles(data: any[]) {
      const fileIds = []
      let index = 0
      while (index !== -1 && fileIds.length < fileCardRowNumber - 2) {
        index = data.findIndex(item => item.type === 'file')
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
      imgUrl,
      toMain() {
        const height = window.innerHeight
        let i = rootScrollbar.value.moveY * window.innerHeight / 100
        let step = (height - i) / 100
        function smoothScroll() {
          setTimeout(() => {
            rootScrollbar.value.setScrollTop(i)
            if (i < height) {
              i = (i + step <= height) ? i + step : height
              smoothScroll()
            }
          }, 1)
        }
        smoothScroll()
      }
    }
  },
})
</script>

<template>
  <section class="home">
    <header>
      <el-image class="fill" :src="imgUrl" fit="cover">
        <template #placeholder>
          <div class="fill"></div>
        </template>
      </el-image>
      <navbar :resize="refreshKey"></navbar>
      <h1 class="yingwen absolute-center">reminisce</h1>
      <h1 class="zhongwen absolute-center">昔日的快乐时光</h1>
      <span class="absolute-center">
        <i class="el-icon-d-arrow-left" @click="toMain"></i>
      </span>
    </header>
    <main>
      <landscape-cards
        v-if="orientation"
        :cards="cards"
        :key="refreshKey"
      ></landscape-cards>
      <portrait-cards
        v-else
        :cards="cards"
        :key="refreshKey"
      ></portrait-cards>
    </main>
  </section>
</template>

<style lang="stylus">
.home header .el-image__inner
  animation zoom linear 25s alternate infinite

@keyframes zoom { to { transform: scale(1.24) } }
</style>

<style lang="stylus" scoped>
.absolute-center
  position absolute
  width 100%
  text-align center

header
  position relative
  height 100vh
  color #fff
  .el-image
    position absolute
    overflow hidden
    div
      background linear-gradient(#2058ab 0%, #27539c 17%, #3a4a7b 46%, #3a4a7b 46%, #494367 56%, #543c52 92%, #722e25 100%)
  .yingwen
    top 35vh
    font-size 30px
    font-weight 400
    letter-spacing 3px
  .zhongwen
    top 50vh
    letter-spacing 0.5em
  span
    bottom 5vh
    cursor pointer
    i
      color #def
      font-size 30px
      animation up 2s linear alternate infinite

main
  padding 20px
  background-color #f1e5c9

@media screen and (min-width: 768px)
  main
    padding 20px 50px



@keyframes up {
  from {
    transform rotate(90deg)
  }
  to {
    transform rotate(90deg) translate(-2vh, 0)
  }
}
</style>
