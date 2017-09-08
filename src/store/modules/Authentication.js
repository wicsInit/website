import * as firebase from 'firebase'

const state = {
  // current admin
  admin: null
}

const mutations = {
  // Sets the admin
  setAdmin (state, payload) {
    state.admin = payload
  }
}

const actions = {
  // admin authentication signup
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
  // admin authentication sign in
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
}

const getters = {
  admin: state => {
    return state.admin
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
