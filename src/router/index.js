import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import { SUPPORT_LOCALES, i18n, setI18nLanguage, loadLocaleMessages } from '../i18n'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// let locale = window.navigator.language
// console.log(locale)
//
// // navigation guards
// router.beforeEach(async (to, from, next) => {
//   const paramsLocale = to.params.locale
//
//   // use locale if paramsLocale is not in SUPPORT_LOCALES
//   if (!SUPPORT_LOCALES.includes(paramsLocale)) {
//     return next(`/${locale}`)
//   }
//
//   // load locale messages
//   if (!i18n.global.availableLocales.includes(paramsLocale)) {
//     await loadLocaleMessages(i18n, paramsLocale)
//   }
//
//   // set i18n language
//   setI18nLanguage(i18n, paramsLocale)
//
//   return next()
// })

export default router
