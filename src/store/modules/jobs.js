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
    axios.get('/jobs?order_by=start_time&include=client.jobRequest&include=jobType.user')
      .then(res => {
        commit('setJobs', res.data.data)
      })
  },
}

export default {
  state,
  getters,
  mutations,
  actions
}
