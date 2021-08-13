<script lang='ts'>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Navbar',
  emits: ['uploadClick'],
  setup(props, ctx) {
    document.addEventListener('keyup', e => {
      if (e.key === 'u') {
        ctx.emit('uploadClick')
      }
    })
  },
})
</script>
