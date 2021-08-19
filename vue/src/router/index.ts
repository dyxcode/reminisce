import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    name: 'home',
    component: defineAsyncComponent(() => import('../view/home/home.vue')),
  }, {
    path: '/image',
    name: 'imagelist',
    component: defineAsyncComponent(() => import('../view/image/imagelist.vue')),
  }, {
    path: '/blog',
    name: 'bloglist',
    component: defineAsyncComponent(() => import('../view/blog/bloglist.vue')),
  }, {
    path: '/blog/:id',
    name: 'blogdetail',
    component: defineAsyncComponent(() => import('../view/blog/blogdetail.vue')),
  }, {
    path: '/file',
    name: 'filelist',
    component: defineAsyncComponent(() => import('../view/file/filelist.vue')),
  }]
})
