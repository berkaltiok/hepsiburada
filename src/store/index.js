import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginStatus: 'NOT_LOGGED_IN', // NOT_LOGGED_IN, LOGGED_IN
    user: [],
  },
  getters: {
    isLoggedIn: state => state.loginStatus === "LOGGED_IN"
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
