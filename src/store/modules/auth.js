import axios from 'axios'

const state = {
  authToken: null
}

const getters = {
  authToken (state) {
    return state.authToken
  }
}

const mutations = {
  setToken: (state, payload) => {
    state.authToken = payload

    if (payload === null) {
      localStorage.removeItem('authToken')
    } else {
      localStorage.setItem('authToken', payload)
    }
  },
}

const actions = {
  login ({ commit }, formData) {
    axios.post('/auth/login', formData)
      .then(res => {
        window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.auth_token
        commit('setToken', res.data.auth_token)
      })
  },
  logout ({ commit }) {
    window.axios.defaults.headers.common['Authorization'] = ''
    commit('setToken', null)
  },
  userInit ({ commit }) {
    if (localStorage.getItem('authToken')) {
      commit('setToken', localStorage.getItem('authToken'))
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
