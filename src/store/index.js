import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    drawer: {
      clipped: false,
      model: false,
      items: [
        { icon: 'home', title: 'Home', to: '/' }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false
    },
    footer: {
      fixed: false
    },
    title: 'WiCS - Ryerson',
    name: 'WiCS',
    page: {
    }
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    drawer (state) {
      return state.drawer
    },
    footer (state) {
      return state.footer
    },
    title (state) {
      return state.title
    },
    name (state) {
      return state.name
    }
  }
})
