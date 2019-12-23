import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../pages/Login.vue'),
    meta: {
      layout: 'auth-layout'
    }
  },
  {
    path: '/Checkup_card_create_document_pdg',
    name: 'Checkup_card_create_document_pdg',
    component: () => import('../pages/Checkup_card_create_document_pdg.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
