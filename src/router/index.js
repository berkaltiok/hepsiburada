import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      header: true,
      footer: true
    }
  },
  {
    path: '/auth/:method',
    name: 'Üye Girişi & Üye Ol',
    component: () => import('../views/Auth.vue'),
    meta: {
      header: false,
      footer: false
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
