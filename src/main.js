import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

import DefaultLayout from './layouts/DefaultLayout.vue'
import DocLayout from './layouts/DocLayout.vue'
import AuthLayout from './layouts/AuthLayout.vue'
import StyleLayout from './layouts/StyleLayout.vue'

Vue.component('default-layout', DefaultLayout)
Vue.component('doc-layout', DocLayout)
Vue.component('auth-layout', AuthLayout)
Vue.component('style-layout', StyleLayout)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
