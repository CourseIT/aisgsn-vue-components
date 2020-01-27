import VHeader from '@/components/v-header.vue'
import { shallowMount, createLocalVue } from '@vue/test-utils';

import Vuex from 'vuex';
const localVue = createLocalVue()
localVue.use(Vuex)

import Vue from 'vue';
import Vuetify from 'vuetify'
Vue.use(Vuetify)

describe('VMenu', () => {

  let store
  let mutations

  beforeEach(() => {
    mutations = {
      SET_MENU_VISIBILITY: jest.fn(),
    }
    store = new Vuex.Store({
      state: {},
      mutations
    })
  })

  
  it('Render', () => {
    const wrapper = shallowMount(VHeader, {
      store, localVue
    });

    expect(wrapper.contains('.header')).toBe(true)
  })

  it('Action', () => {
    const wrapper = shallowMount(VHeader, {
        store, localVue
      });

    expect(wrapper.vm.show_close).toBe(false)
    wrapper.find('.open-icon').trigger('click')
    expect(wrapper.vm.show_close).toBe(true)
    wrapper.find('.close-icon').trigger('click')
    expect(wrapper.vm.show_close).toBe(false)
  })
})
