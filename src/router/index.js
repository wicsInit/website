import Vue from 'vue'
import Router from 'vue-router'
import AuthGuard from './auth-guard'

Vue.use(Router)

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

const Executive = resolve => {
  require.ensure(['../components/pages/Executive.vue'], () => {
    resolve(require('../components/pages/Executive.vue'))
  }, 'executive')
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
      name: 'admin',
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
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/exec',
      name: 'executive',
      component: Executive
    }
  ],
  mode: 'history'
})
