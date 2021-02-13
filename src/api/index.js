import axios from 'axios'

const api = axios.create({
  baseURL: process.env.VUE_APP_API_URI
})

api.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem(
  'accessToken'
)}`

export default api
