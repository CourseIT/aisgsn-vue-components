import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu_visibility: false,
    layout: 'default-layout'
  },
  mutations: {
    SET_MENU_VISIBILITY(state, visibility) {
      state.menu_visibility = visibility
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
