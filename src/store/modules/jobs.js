import axios from 'axios'

const state = {
  jobs: null,
}

const getters = {
  jobs (state) {
    return state.jobs
  }
}

const mutations = {
  setJobs: (state, payload) => {
    state.jobs = payload
  }
}

const actions = {
  getJobs ({ commit }) {
    axios.get('/jobs?order_by&include=client.jobRequest&include=jobType.user')
      .then(res => {
        commit('setJobs', res.data.jobs)
      })
  },
}

export default {
  state,
  getters,
  mutations,
  actions
}
