import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
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
  // {
  //   path: '/checkup_card_create_document_pdg',
  //   name: 'Checkup_card_create_document_pdg',
  //   component: () => import('../pages/Checkup_card_create_document_pdg.vue'),
  //   meta: {
  //     layout: 'doc-layout'
  //   }
  // },
  // {
  //   path: '/checkup_card_create_document_application',
  //   name: 'Checkup_card_create_document_application',
  //   component: () => import('../pages/Checkup_card_create_document_application.vue'),
  //   meta: {
  //     layout: 'doc-layout'
  //   }
  // },
  // {
  //   path: '/checkup_card_create_document_U4_prev',
  //   name: 'Checkup_card_create_document_U4_prev',
  //   component: () => import('../pages/Checkup_card_create_document_U4_prev.vue'),
  //   meta: {
  //     layout: 'doc-layout'
  //   }
  // }, {
  //   path: '/checkup_card_create_document_U6',
  //   name: 'Checkup_card_create_document_U6',
  //   component: () => import('../pages/Checkup_card_create_document_U6.vue'),
  //   meta: {
  //     layout: 'doc-layout'
  //   }
  // },
  {
    path: '/analytics_a1',
    name: 'Analytics_A1',
    component: () => import('../pages/Analytics_A1.vue')
  },
  {
    path: '/analytics_a2',
    name: 'Analytics_A2',
    component: () => import('../pages/Analytics_A2.vue')
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: () => import('../pages/Notifications.vue'),
    meta: {
      layout: 'doc-layout'
    }
  },
  {
    path: '/components',
    name: 'Components',
    component: () => import('../pages/Components.vue'),
    meta: {
      layout: 'doc-layout'
    }
  },
  // {
  //   path: '/checkup_card_list',
  //   name: 'Checkup_card_list',
  //   component: () => import('../pages/Checkup_card_list.vue'),
  //   meta: {
  //     layout: 'doc-layout'
  //   },
    
  // },
  // {
  //   path: '/test',
  //   name: 'Test',
  //   component: () => import('../pages/Test.vue'),
  //   meta: {
  //     layout: 'doc-layout'
  //   }
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
