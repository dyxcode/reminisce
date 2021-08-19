import { createApp } from 'vue'
import app from './main/app.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import components from './element'
import './base.css'
import 'element-plus/lib/theme-chalk/base.css'

if (process.env.NODE_ENV == 'development') {
  axios.defaults.baseURL = 'http://127.0.0.1:8000';
} else if (process.env.NODE_ENV == 'production') {
  axios.defaults.baseURL = 'http://118.31.187.88';
}

const App = createApp(app)

App.use(router)
App.use(VueAxios, axios)
components.forEach(component => {
  App.use(component)
})

App.provide('axios', App.config.globalProperties.axios) 
App.mount('#app')
