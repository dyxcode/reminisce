import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [{
      path: '/',
      name: 'home',
      component: () => import('../view/home/home.vue'),
  }, {
    path: '/image',
    name: 'imagelist',
    component: () => import('../view/image/imagelist.vue'),
  }, {
    path: '/music',
    name: 'music',
    component: () => import('../view/music/music.vue'),
  }, {
    path: '/video',
    name: 'video',
    component: () => import('../view/video/video.vue'),
  }, {
    path: '/blog',
    name: 'bloglist',
    component: () => import('../view/blog/bloglist.vue'),
  }, {
    path: '/blog/:id',
    name: 'blogdetail',
    component: () => import('../view/blog/blogdetail.vue'),
  }, {
    path: '/file',
    name: 'file',
    component: () => import('../view/file/file.vue'),
  }]
})
