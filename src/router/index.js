import Vue from 'vue'
import VueRouter from 'vue-router'
import Listings from '@/views/Listings.vue'
import MyListings from '@/views/MyListings.vue'
import AddVehicle from '@/views/AddVehicle.vue'
import Login from '@/views/Login.vue'

Vue.use(VueRouter)

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
    beforeEnter: guard,
    meta: {
      requiresAuth: true
    }
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

const guard = (to, from, next) => {
  const isAuth = !!localStorage.getItem('token')
  if (isAuth) next()
  next('/login')
}

export default router
