import Vue from 'vue'
import Vuex from 'vuex'
import PageData from '../data/pages'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    drawer: {
      // controls if drawer is clipped type
      clipped: false,
      // controls if drawer is open or not closed by default
      model: false,
      // drawer items
      items: [
        {
          icon: 'home',
          title: 'Home',
          to: '/'
        },
        { icon: 'event',
          title: 'Events',
          to: '/events'
        },
        { icon: 'work',
          title: 'Executives',
          to: '/exec'
        },
        {
          icon: 'perm_contact_calendar',
          title: 'Contact',
          to: '/contact'
        },
        {
          icon: 'group_work',
          title: 'Partnerships',
          to: '/partnerships'
        }
      ],
      /*
      {
          icon: 'fa fa-shopping-cart',
          title: 'Shop',
          to: '/shop'
        }
       */
      // controls if drawer is mini
      mini: false,
      type: 'persistent'
    },
    // app footer data model
    footer: {
      fixed: false
    },
    // current page
    page: {},
    // stores the scroll distance of the user in the app
    scroll: null,
    loading: true,
    currentEvents: {
      type: 'info',
      alert: 'hi',
      model: false
    }
  },
  mutations: {
    // Sets the page data
    setPage (state, payload) {
      state.page = payload || {}
    },
    // sets the scroll distance of the app
    setScroll (state, payload) {
      state.scroll = window.pageYOffset || document.documentElement.scrollTop
    },
    setLoading (state, payload) {
      state.loading = payload
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
    },
    setLoading ({commit, state}, payload) {
      setTimeout(() => {
        commit('setLoading', payload)
      }, 1200)
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
    },
    loading: state => {
      return state.loading
    },
    currentEvents: state => {
      return state.currentEvents
    }
  }
})
