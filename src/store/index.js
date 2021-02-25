import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import pendaftar from './modules/pendaftar'
import referensi from './modules/referensi'
Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    isLoading : false,
    isLocalLoading: false,
    isError : false,
    errorMessage: ''
  },
  mutations: {
    SET_ERROR (state, payload){
      state.isError = payload.isError
      state.errorMessage = payload.errorMessage
    },
    SET_LOADING(state, payload) {
      state.isLoading = payload
    },
    SET_LOCAL_LOADING(state, payload){
      state.isLocalLoading = payload
    }
  },
  actions: {
  },
  modules: {
    auth,
    pendaftar,
    referensi
  }
})
