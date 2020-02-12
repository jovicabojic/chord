import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import axios from 'axios'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { routes } from './router'
import { store } from './store/store'


Vue.use(BootstrapVue)
Vue.use(VueRouter)

window.axios = axios
window.axios.defaults.baseURL = 'https://dvapi.tempest.app/api/v1'

Vue.config.productionTip = false

axios.interceptors.request.use(function (config) {
  let token = localStorage.getItem('authToken')
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

const router = new VueRouter({
  routes,
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
