import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
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
    footer: {
      fixed: false
    },
    admin: null,
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
            title: 'Upcoming Events for Fall 2017',
            flex: 'md6',
            events: {
              upcomingEvents: [
                {
                  name: 'Meet and Greet',
                  time: 'Mid September',
                  active: false,
                  description: 'Meet and Greet is an opportunity to meet and get to know the WiCS team, and our ' +
                    'plans for the school year. Also a chance to network and get to know their fellow Computer Science students.'
                },
                {
                  name: 'Cookie and Cram Night',
                  time: 'Late September',
                  active: false,
                  description: 'Cookies and Cram Night is an event that gives students the opportunity to connect with ' +
                  'one another while preparing for exams.  There will be students of different years which gives all ' +
                    'participants a chance to get assistance on any concepts they need clarification on and assignments ' +
                  'they need help with. This event allows the students to get to know one another and encourage each ' +
                  'other through the Computer Science program.'
                },
                {
                  name: 'Technical Mock Interview',
                  time: 'Last week of October to First week of November',
                  active: false,
                  description: 'In the Technology field, having strong technical skills is as essential as being able ' +
                  'to apply them in the workplace. Technical interviews allow students to apply their knowledge and show ' +
                  'their skills although not all students are fully prepared for the questions that will be asked. ' +
                  'Technical Mock Interviews aims to provide students with the opportunity to experience a technical ' +
                  'interview and get extra practice so that they can be their best when the real interview comes along. ' +
                  'Students will be asked technical questions based on programming languages they are experienced in and ' +
                  'given feedback on areas of improvement. We want to improve student’s interview skills so that they will ' +
                  'feel motivated and excel in job interviews.'
                }]
            },
            alert: 'Dates for the events will be finalized as they approach'
          }
        }
      ]
    }
  },
  mutations: {
    setAdmin (state, payload) {
      state.admin = payload
    }
  },
  actions: {
    signAdminUp ({commit}, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.userData.email, payload.userData.password)
        .then(
          admin => {
            commit('setAdmin', admin)
          }
        )
        .catch(
          error => {
            // commit('setError', error)
            console.log(error)
          }
        )
    },
    signAdminIn ({commit}, payload) {
      console.log(payload)
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          admin => {
            commit('setAdmin', admin)
          }
        )
        .catch(
          error => {
            // commit('setError', error)
            console.log(error)
          }
        )
    }
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
    },
    admin: state => {
      return state.admin
    }
  }
})
