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

  let scrollTimer: any = null
  window.onscroll = () => {
    const resizeCb = window.onresize
    window.onresize = null
    if(scrollTimer) clearTimeout(scrollTimer)
    scrollTimer = setTimeout(() => {
      window.onresize = resizeCb
    }, 100)
  }

  return function(callback: Function) {
    let resizeTimer: any = null

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
  }
}