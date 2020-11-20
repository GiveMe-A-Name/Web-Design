import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // is_login: false,
    username: '',
  },
  mutations: {
    logined: (state, payload) => {
      console.log(payload.username)
      state.username = payload.username
      console.log(state.username)
      // state.is_login = true
    },
    refreshPage: (state) => {
      if (window.sessionStorage.getItem("is_login") === "true") {
        // state.is_login = true
        state.username = window.sessionStorage.getItem("username")
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
