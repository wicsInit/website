import { store } from '../store'

export default (to, from, next) => {
  if (store.getters.admin) {
    next('/admin/console')
  } else {
    next('/admin/login')
  }
}
