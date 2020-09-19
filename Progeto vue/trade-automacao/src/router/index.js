import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Sobre from '../views/About.vue'
import Dashboard from '@/views/Dashboard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: Sobre
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  
]

const router = new VueRouter({
  routes
})

export default router
