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
    path: '/blog',
    name: 'bloglist',
    component: () => import('../view/blog/bloglist.vue'),
  }, {
    path: '/blog/:id',
    name: 'blogdetail',
    component: () => import('../view/blog/blogdetail.vue'),
  }, {
    path: '/file',
    name: 'filelist',
    component: () => import('../view/file/filelist.vue'),
  }]
})
