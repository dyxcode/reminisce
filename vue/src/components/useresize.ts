import { onUnmounted } from "vue"

// fix
// 当滑动屏幕的时候（有滚动条）图形会闪，换句话说，他会不断触发resize事件
export default function () {
  onUnmounted(() => {
    window.onresize = null
  })
  return function(callback: Function) {
    // Store the window width
    let windowWidth = window.innerWidth
    let windowHeight = window.innerHeight
    let resizeTimer: any = null

    window.onresize = () => {
      if (window.innerWidth !== windowWidth || window.innerHeight !== windowHeight) {
        // Update the window width for next time
        windowWidth = window.innerWidth
        // Do stuff here
        if(resizeTimer) clearTimeout(resizeTimer)
        resizeTimer = setTimeout(() => {
          callback()
        }, 100)
      }
    }
  }
}