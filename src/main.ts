import { createApp } from 'vue'
import app from './main/app.vue'
import router from './router'
import './base.css'

createApp(app).use(router).mount('#app')
