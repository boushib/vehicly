import Vue from 'vue'
import VueRouter from 'vue-router'
import Listings from '@/views/Listings.vue'
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
    path: '/add-vehicle',
    name: 'add_vehicle',
    component: AddVehicle,
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

router.beforeEach((to, from, next) => {
  const isAuth = !!localStorage.getItem('token')
  if (to.meta.requiresAuth && !isAuth) next('/login')
  next()
})

export default router
