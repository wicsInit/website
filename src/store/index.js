import Vue from 'vue'
import Vuex from 'vuex'
import PageData from '../data/pages'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    drawer: {
      clipped: false,
      model: false,
      items: [
        { icon: 'home', title: 'Home', to: '/' },
        { icon: 'event', title: 'Events', to: '/events' },
        { icon: 'work', title: 'Executives', to: '/exec' },
        {
          icon: 'perm_contact_calendar',
          title: 'Contact',
          to: '/contact'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false
    },
    // app footer data model
    footer: {
      fixed: false
    },
    /* End of app theme related data */
    // current page
    page: null,
    scroll: null
  },
  mutations: {
    // Sets the page data
    setPage (state, payload) {
      state.page = payload
    },
    setScroll (state, payload) {
      state.scroll = window.pageYOffset || document.documentElement.scrollTop
    }
  },
  actions: {
    // sets the page data according to users current path
    getPageData ({commit, state}, payload) {
      const page = PageData.find(route => route.path.toUpperCase() === payload.path.toUpperCase())
      console.log(page)
      if (page) {
        commit('setPage', page)
      }
    }
  },
  // access state
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
    },
    page: state => {
      return state.page
    },
    scroll: state => {
      return state.scroll
    }
  }
})
