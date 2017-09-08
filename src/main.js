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
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
