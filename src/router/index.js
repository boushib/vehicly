import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import AddVehicle from "@/views/AddVehicle.vue";
import Login from "@/views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/add-vehicle",
    name: "add_vehicle",
    component: AddVehicle,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: "active",
});

export default router;
