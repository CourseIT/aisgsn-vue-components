import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu_visibility: false,
    light_gamma: false,
    layout: 'default-layout'
  },
  mutations: {
    SET_MENU_VISIBILITY(state, visibility) {
      state.menu_visibility = visibility
      document.cookie = `menu_visibility=${visibility}`;
    },
    SET_LIGHT_GAMMA(state, light_gamma) {
      state.light_gamma = light_gamma
      document.cookie = `light_gamma=${light_gamma}`;
    },
    setLayout(state, payload) {
      state.layout = payload
    }
  },
  actions: {
  },
  getters: {
    layout(state) {
      return state.layout
    }
  },
  modules: {
  }
})
