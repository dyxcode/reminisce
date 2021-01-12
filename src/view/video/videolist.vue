<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VideoList',
  setup(props, ctx) {
    return {
      list: Array(10).fill({
          src: 'https://apd-34e1256be4b1f33673fec54677934bba.v.smtcdns.com/mv.music.tc.qq.com/A9H0FzETdksQf_UXU7L3DsyDFE6I6TRIDrVx-QjBbZEI/FA93E0531E9E4C01171B6A354CA068B4BE15D94B7B773F3012A20C39D8BBD7E83FA7867D5F9A3E9A11EBBE558335B2A0ZZqqmusic_default/qmmv_0b6bcmaacaaaamadhkf6tfpvieyaaejqaaka.f9844.mp4?fname=qmmv_0b6bcmaacaaaamadhkf6tfpvieyaaejqaaka.f9844.mp4',
          title: '给电影人的情书',
        }),
    }
  },
})
</script>

<template>
  <div class="video-list">
    <div
      class="item"
      v-for="(item, idx) in list"
      :key="idx"
    >
      <video
        controls="true"
        preload="auto"
        webkit-playsinline="true"
        playsinline="true"
        x-webkit-airplay="allow"
        x5-video-player-type="h5"
        x5-video-player-fullscreen="true"
        x5-video-orientation="portraint"
        style="object-fit:fill"
      >
        <source :src="item.src">
      </video>
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.video-list
  display grid
  grid-template-columns repeat(3, 1fr)
  grid-gap 10px
  video
    width 100%
  p
    font-size 14px
    line-height 20px
    text-align center
    margin 10px 0 8px
    height 40px
    overflow hidden
    text-overflow ellipsis
    font-weight 500
    padding-right 12px
</style>
