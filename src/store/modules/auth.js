import router from '@/router'
import api from '@/api'

const auth = {
  namespaced: true,
  state: {
    accessToken: null,
    username: null
  },
  mutations: {
    setAuthData(state, { accessToken, username }) {
      state.accessToken = accessToken
      state.username = username
    }
  },
  actions: {
    async login({ commit }, { username, password }) {
      try {
        //commit('setIsLoading', true)
        const {
          data: { accessToken, refreshToken }
        } = await api.post('/account/login', { username, password })
        //commit('setIsLoading', false)
        commit('setAuthData', { username, accessToken })
        localStorage.setItem('username', username)
        localStorage.setItem('accessToken', accessToken)
        localStorage.setItem('refreshToken', refreshToken)
        router.push('/')
      } catch (err) {
        console.log(err.response)
        if (err.response.status === 401)
          return 'Username & password do not match'
      }
    },
    logout({ commit }) {
      commit('setAuthData', { username: null, accessToken: null })
      localStorage.clear()
      router.go('/login')
    },
    tryAutoLogin({ commit }) {
      const accessToken = localStorage.getItem('accessToken')
      const username = localStorage.getItem('username')
      if (accessToken) commit('setAuthData', { username, accessToken })
    }
  }
}

export default auth
