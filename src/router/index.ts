import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [{
      path: '/',
      name: 'Home',
      component: () => import('../view/home/home.vue'),
  }, {
    path: '/picture',
    name: 'Picture',
    component: () => import('../view/picture/picture.vue'),
  }, {
    path: '/music',
    name: 'Music',
    component: () => import('../view/music/music.vue'),
  }, {
    path: '/video',
    name: 'video',
    component: () => import('../view/video/video.vue'),
  }, {
    path: '/blog',
    name: 'blog',
    component: () => import('../view/blog/blog.vue'),
  }, {
    path: '/file',
    name: 'file',
    component: () => import('../view/file/file.vue'),
  }]
})
