<script lang='ts'>
import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'KeyBoard',
  emits: ['uploadClick'],
  setup(props, ctx) {
    document.addEventListener('keyup', e => {
      if (e.key === 'u') {
        ctx.emit('uploadClick')
      }
    })
     return () => h('div') 
  },
})
</script>
