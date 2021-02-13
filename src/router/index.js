import Vue from 'vue'
import VueRouter from 'vue-router'
import Listings from '@/views/Listings.vue'
import MyListings from '@/views/MyListings.vue'
import AddVehicle from '@/views/AddVehicle.vue'
import Login from '@/views/Login.vue'

Vue.use(VueRouter)

const guard = (to, from, next) => {
  const isAuth = !!localStorage.getItem('accessToken')
  if (isAuth) return next()
  next('/login')
}

const routes = [
  {
    path: '/',
    name: 'listings',
    component: Listings
  },
  {
    path: '/my-listings',
    name: 'my_listings',
    component: MyListings
  },
  {
    path: '/add-vehicle',
    name: 'add_vehicle',
    component: AddVehicle,
    beforeEnter: (to, from, next) => guard(to, from, next)
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: 'active'
})

export default router
