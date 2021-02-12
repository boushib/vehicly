import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    vehicles: []
  },
  mutations: {
    setVehicles(state, vehicles) {
      state.vehicles = vehicles
    }
  },
  actions: {
    async getVehicles({ commit }) {
      //
    }
  },
  getters: {
    isAuth(state) {
      return state.token || localStorage.getItem('token')
    }
  },
  modules: {}
})
