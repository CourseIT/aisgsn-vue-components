import VMenu from '@/components/v-menu.vue'
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
      TEXT_SIZE_PLUS: jest.fn(),
      TEXT_SIZE_MINUS: jest.fn()
    }
    store = new Vuex.Store({
      state: {},
      mutations
    })
  })

  
  it('Render', () => {
    const wrapper = shallowMount(VMenu, {
      store, localVue
    });

    expect(wrapper.contains('.menu')).toBe(true)
  })

  it('Action', () => {
    const wrapper = shallowMount(VMenu, {
        store, localVue
      });

    expect(wrapper.vm.text_size).toBe(16)
    wrapper.find('.text-plus').trigger('click')
    expect(wrapper.vm.text_size).toBe(17)
    wrapper.find('.text-minus').trigger('click')
    expect(wrapper.vm.text_size).toBe(16)
  })
})
