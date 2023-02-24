import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// syncedstore 
import * as Vue from "vue";
import { enableVueBindings } from "@syncedstore/core";

enableVueBindings(Vue);

import YpuPlugin from './plugins/ypu-plugin.js'

const messages = {
  en: {
    home: "Home",
    about: "About",
    message: {
      hello: 'hello world'
    },
    description: "Ypu is attempt to decentralize computer resources"
  },
  ja: {
    message: {
      hello: 'こんにちは、世界'
    }
  },
  fr: {
    home: "Accueil",
    about: "A propos",
    message: {
      hello: 'Salut tout le monde'
    },
    description: "Ypu est une ébauche de décentralisation de ressources informatiques"
  }
}

let lang = window.navigator.language
console.log(lang)
// 2. Create i18n instance with options
const i18n = createI18n({
  locale: lang, // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
  // If you need to specify other options, you can set other options
  // ...
})


createApp(App)
.use(i18n)
.use(store)
.use(router)
.use(YpuPlugin, {store: store})
.mount('#app')
