import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [{
      path: '/',
      name: 'Home',
      component: () => import('../view/main.vue'),
  }, {
    path: '/picture',
    name: 'Picture',
    component: () => import('../view/picture.vue'),
  }, {
    path: '/music',
    name: 'Music',
    component: () => import('../view/music.vue'),
  }]
})
