import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import YpuPlugin from './plugins/ypu-plugin.js'

createApp(App)
.use(store)
.use(router)
.use(YpuPlugin, {store: store})
.mount('#app')
