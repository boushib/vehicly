import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'
import auth from './modules/auth'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    vehicles: [],
    myVehicles: []
  },
  mutations: {
    setIsLoading(state, isLoading) {
      state.isLoading = isLoading
    },
    setVehicles(state, vehicles) {
      state.vehicles = vehicles
    },
    setMyVehicles(state, vehicles) {
      state.myVehicles = vehicles
    }
  },
  actions: {
    async getListings({ commit }) {
      commit('setIsLoading', true)
      const { data: vehicles } = await api.get('/vehicles')
      commit('setIsLoading', false)
      commit('setVehicles', vehicles)
    },
    async getMyListings({ commit }) {
      commit('setIsLoading', true)
      //const { data: vehicles } = await api.get('/my-vehicles')
      const vehicles = []
      commit('setIsLoading', false)
      commit('setMyVehicles', vehicles)
    },
    async addListing({ commit }, vehicle) {
      const { data } = await api.post('/vehicles', vehicle)
      console.log(data)
      router.push('/')
    }
  },
  getters: {
    isAuth(state) {
      return state.auth.accessToken || localStorage.getItem('accessToken')
    },
    username(state) {
      return state.auth.username || localStorage.getItem('username')
    }
  },
  modules: {
    auth
  }
})
