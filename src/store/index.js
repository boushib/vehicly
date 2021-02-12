import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    vehicles: []
  },
  mutations: {
    setVehicles(state, vehicles) {
      console.log(vehicles)
      state.vehicles = vehicles
    }
  },
  actions: {
    async getVehicles({ commit }) {
      const { data: vehicles } = await api.get('/vehicles')
      commit('setVehicles', vehicles)
    }
  },
  getters: {
    isAuth(state) {
      return state.token || localStorage.getItem('token')
    }
  },
  modules: {}
})
