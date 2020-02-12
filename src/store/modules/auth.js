import axios from 'axios'

const state = {
  authToken: null
}

const getters = {
  authToken (state) {
    return state.authToken
  },
  isAuthenticated() {
    if(localStorage.getItem('authToken') == (null || undefined) ){
      console.log('token is not there : ' + localStorage.getItem('authToken'));
      return false;
    }
    else{
      return true
    }
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
          window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.token
          commit('setToken', res.data.token)
        })
        .catch(err => {
          console.log(err.data.token)
        })
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
