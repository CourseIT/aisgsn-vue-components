import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu_visability: false,
    layout: 'default-layout'
  },
  mutations: {
    SET_MENU_VISABILITY(state, visability) {
      state.menu_visability = visability
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
