<script lang='ts'>
import { defineComponent } from 'vue'
import Navbar from '../../components/navbar.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Navbar,
  },
  setup(props, ctx) {
    return {
    }
  },
})
</script>

<template>
  <el-container>
    <el-header height="350px">
      <div class="img-container"></div>
      <navbar></navbar>
    </el-header>
    <el-main>Main</el-main>
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
