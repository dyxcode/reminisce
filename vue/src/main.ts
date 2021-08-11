import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import app from './main/app.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './base.css'
import 'element-plus/lib/theme-chalk/index.css';

// axios.defaults.baseURL = 'http://127.0.0.1:8000/'
axios.defaults.baseURL = 'http://118.31.187.88'

const App = createApp(app)
App.use(router)
App.use(ElementPlus)
App.use(VueAxios, axios)
App.provide('axios', App.config.globalProperties.axios) 
App.mount('#app')
