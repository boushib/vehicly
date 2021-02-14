import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// styles
import './assets/scss/app.scss'

Vue.config.productionTip = false

Vue.filter('timeAgo', function(ts) {
  const now = new Date()
  const seconds = Math.floor(
    (now - new Date(ts) + now.getTimezoneOffset() * 60 * 1000) / 1000
  )
  const minute = 60
  const hour = 60 * minute
  const day = 24 * hour
  const month = 30 * day
  const year = 365 * day
  if (seconds >= year) {
    const interval = Math.floor(seconds / year)
    return `${interval}year${interval > 1 ? 's' : ''} ago`
  }
  if (seconds >= month) {
    const interval = Math.floor(seconds / month)
    return `${interval} month${interval > 1 ? 's' : ''} ago`
  }
  if (seconds >= day) {
    const interval = Math.floor(seconds / day)
    return `${interval} day${interval > 1 ? 's' : ''} ago`
  }
  if (seconds >= hour) {
    const interval = Math.floor(seconds / hour)
    return `${interval}h ago`
  }
  if (seconds >= minute) {
    const interval = Math.floor(seconds / minute)
    return `${interval}min ago`
  }
  return `${seconds}s ago`
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
