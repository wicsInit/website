import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import { store } from './store'
import 'font-awesome/css/font-awesome.css'

Vue.use(Vuetify)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  store.dispatch('getPageData', to)
  store.commit('setLoading', true)
  next()
})

router.afterEach(() => {
  // chose action to give a fake 1s delay (async task) to show loading in case loading is too fast
  store.dispatch('setLoading', false)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
