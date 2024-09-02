import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/variables.css'
import axios from 'axios'


createApp(App).use(router).mount('#app').app.config.globalProperties.$axios = axios;
