import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home/Index.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About/Index.vue')
  },
  {
    path: '/profile/:username/:platform',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile/Index.vue')
  },
  {
    path: '/error',
    name: 'Error',
    component: () => import(/* webpackChunkName: "error" */ '../views/Error/Index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
