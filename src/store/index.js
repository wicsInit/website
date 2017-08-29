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
    page: {
      title: 'WiCS - Ryerson',
      name: 'WiCS',
      cards: [
        {
          body: {
            title: 'RYERSON WOMEN IN COMPUTER SCIENCE',
            blockquote: 'WiCS is a student group run by undergraduate Computer Science students at Ryerson University.',
            flex: 'md6'
          },
          actions: [
            {
              hint: 'View our facebook page',
              icon: 'fa-facebook',
              href: 'https://www.facebook.com/ryersonwics?fref=ts'
            },
            {
              hint: 'Email us',
              icon: 'fa-envelope',
              href: 'email://wics@ryerson.ca'
            },
            {
              hint: 'Join our mailing list',
              icon: 'fa-sign-in',
              href: ''
            }
          ]
        },
        {
          media: {
            src: '/static/images/header.jpg'
          },
          body: {
            title: 'Who we are',
            blockquote: 'Women in Computer Science (WiCS) is run by undergraduate students in the' +
            ' Computer Science program at Ryerson University. We want to provide a safe space and ' +
            'support for groups that are traditionally marginalized in the field of computer science.',
            backgroundColor: 'primary',
            color: 'white--text'
          }
        },
        {
          body: {
            title: 'Our goals',
            blockquote: 'Our goal is to encourage current students to continue learning computer science with confidence; ' +
            'foster retention of women and marginalized individuals through mentoring. We want to bring students together ' +
            'allowing them to network and socialize through events and provide opportunities for students to network with ' +
            'women professionals in the industry. Recruiting is also a priority to get prospective students interested in going ' +
            'to the STEM field.',
            backgroundColor: 'secondary',
            color: 'white--text',
            flex: 'md6'
          }
        },
        {
          body: {
            title: 'Updates',
            flex: 'md6'
          }
        }
      ]
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
    },
    page: state => {
      return state.page
    }
  }
})
