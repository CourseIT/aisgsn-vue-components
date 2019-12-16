import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu_visability: false
  },
  mutations: {
    SET_MENU_VISABILITY(state, visability) {
      state.menu_visability = visability
    }
  },
  actions: {
  },
  modules: {
  }
})
