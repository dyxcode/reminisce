import { onUnmounted } from "vue"

// fix
// 当滑动屏幕的时候（有滚动条）图形会闪，换句话说，他会不断触发resize事件
export default function () {
  // Store the window width height
  let windowWidth = window.innerWidth
  let windowHeight = window.innerHeight

  onUnmounted(() => {
    window.onresize = null
    window.onscroll = null
  })

  let resizeCb: typeof window.onresize = null
  let scrollTimer: any = null
  window.onscroll = () => {
    if (window.onresize && resizeCb === null) {
      resizeCb = window.onresize
    }
    window.onresize = null
    if(scrollTimer) clearTimeout(scrollTimer)
    scrollTimer = setTimeout(() => {
      window.onresize = resizeCb
    }, 2000)
  }

  return function(callback: Function) {
    let resizeTimer: any = null

    setTimeout(() => {
      window.onresize = () => {
        if (window.innerWidth !== windowWidth || window.innerHeight !== windowHeight) {
          // Update the window width height for next time
          windowWidth = window.innerWidth
          windowHeight = window.innerHeight
          // Do stuff here
          if(resizeTimer) clearTimeout(resizeTimer)
          resizeTimer = setTimeout(() => {
            callback()
          }, 100)
        }
      }
    }, 2000)
  }
}