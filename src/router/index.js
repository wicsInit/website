import Vue from 'vue'
import Router from 'vue-router'
import AuthGuard from './auth-guard'

Vue.use(Router)

// Router components are lazy loaded with promises

const Home = resolve => {
  require.ensure(['../components/pages/Home.vue'], () => {
    resolve(require('../components/pages/Home.vue'))
  }, 'home')
}

const Admin = resolve => {
  require.ensure(['../components/pages/Admin.vue'], () => {
    resolve(require('../components/pages/Admin.vue'))
  }, 'admin')
}

const Login = resolve => {
  require.ensure(['../components/users/Login.vue'], () => {
    resolve(require('../components/users/Login.vue'))
  }, 'admin')
}

const Console = resolve => {
  require.ensure(['../components/pages/AdminConsole.vue'], () => {
    resolve(require('../components/pages/AdminConsole.vue'))
  }, 'console')
}

const Contact = resolve => {
  require.ensure(['../components/pages/Contacts.vue'], () => {
    resolve(require('../components/pages/Contacts.vue'))
  }, 'contact')
}

const Events = resolve => {
  require.ensure(['../components/pages/Event.vue'], () => {
    resolve(require('../components/pages/Event.vue'))
  }, 'events')
}

const Executive = resolve => {
  require.ensure(['../components/pages/Executive.vue'], () => {
    resolve(require('../components/pages/Executive.vue'))
  }, 'executive')
}

const Shop = resolve => {
  require.ensure(['../components/pages/Shop.vue'], () => {
    resolve(require('../components/pages/Shop.vue'))
  }, 'shop')
}

const PageNotFound = resolve => {
  require.ensure(['../components/pages/pageNotFound.vue'], () => {
    resolve(require('../components/pages/pageNotFound.vue'))
  }, '404')
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/admin',
      component: Admin,
      children: [
        {
          path: '',
          name: 'adminLanding',
          beforeEnter: AuthGuard
        },
        {
          path: 'console',
          name: 'adminConsole',
          beforeEnter: AuthGuard,
          component: Console
        },
        {
          path: 'login',
          name: 'adminLogin',
          component: Login
        }
      ]
    },
    {
      path: '/events',
      name: 'events',
      component: Events
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/exec',
      name: 'executive',
      component: Executive
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '*',
      name: '404',
      component: PageNotFound
    }
  ]
  // mode: 'history'
})
