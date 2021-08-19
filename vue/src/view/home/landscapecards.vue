<script lang='ts'>
import { defineComponent, ref, PropType, watch } from 'vue'

export default defineComponent({
  name: 'LandscapeCards',
  props: {
    cards: {
      type: Array as PropType<Array<any>>,
      required: true,
    },
  },
  setup(props, ctx) {
    let screens = ref([])
    let doubleScreen = []

    makeScreenFromCards(props.cards)
    watch(() => [...props.cards], cur => { makeScreenFromCards(cur)})

    function makeScreenFromCards(cards: any[]) {
      screens.value = []
      cards.forEach(card => {
        if (card.type === 'file') {
          insertDoubleScreen(card)
        } else if (card.type === 'blog') {
          insertDoubleScreen(card)
        } else if (card.type === 'image') {
          insertSingleScreen(card)
        }
      })
    }

    function insertSingleScreen(card: any) {
      screens.value.push({ card, isSingle: true })
    }

    function insertDoubleScreen(card: any) {
      doubleScreen.push(card)
      if (doubleScreen.length === 2) {
        screens.value.push({ doubleScreen, isSingle: false })
        doubleScreen = []
      }
    }

    return {
      screens,
    }
  },
})
</script>

<template>
  <div class="landscape-cards">
    <el-row
      v-for="(screen, index) in screens"
      :key="index"
      :gutter="50"
    >
      <el-col
        v-if="screen.isSingle"
      >
        <component
          :is="screen.card.component"
          v-bind="screen.card.data"
        ></component>
      </el-col>

      <template v-else>
        <el-col
          v-for="(card, index) in screen.doubleScreen"
          :key="index"
          :span="12"
        >
          <component
            :is="card.component"
            v-bind="card.data"
          ></component>
        </el-col>
      </template>
    </el-row>
  </div>
</template>

<style lang="stylus" scoped>
.el-row
  margin-bottom 10px
</style>
