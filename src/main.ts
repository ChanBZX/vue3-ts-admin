import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/css/index.css'

import { setupStore } from './store'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.use(store)
setupStore()
app.mount('#app')