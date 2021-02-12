import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    isLoading: false,
    vehicles: []
  },
  mutations: {
    setIsLoading(state, isLoading) {
      state.isLoading = isLoading
    },
    setVehicles(state, vehicles) {
      console.log(vehicles)
      state.vehicles = vehicles
    }
  },
  actions: {
    async getVehicles({ commit }) {
      commit('setIsLoading', true)
      const { data: vehicles } = await api.get('/vehicles')
      commit('setIsLoading', false)
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
