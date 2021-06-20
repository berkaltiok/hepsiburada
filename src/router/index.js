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
    meta: {
      header: false,
      footer: false
    },
    component: () => import('../views/Auth.vue')
  },
  {
    path: '/category/:slug',
    name: 'Ürün Listesi',
    meta: {
      header: true,
      footer: true
    },
    component: () => import('../views/Category')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes
})

export default router
