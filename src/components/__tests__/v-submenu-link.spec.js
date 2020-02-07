import VSubmenuLink from '@/components/v-submenu-link.vue'
import { shallowMount, createLocalVue } from '@vue/test-utils';

import Vuex from 'vuex';
const localVue = createLocalVue()
localVue.use(Vuex)

describe('VSubmenuLink', () => {

  let store
  beforeEach(() => {
    store = new Vuex.Store({
      state: {}
    })
  })

  
  it('Props', () => {

    const wrapper = shallowMount(VSubmenuLink, {
      store, localVue,
      propsData: {
        text: 'text',
        text_size: 'text_size',
      }
    });

    expect(wrapper.props().text).toBe('text');
    expect(wrapper.props().text_size).toBe('text_size');
    expect(wrapper.find('li').contains('text'))
  })
  it('render notifications', () => {
    const wrapper = shallowMount(VSubmenuLink, {
      store, localVue,
      propsData: {
        notifications: ['1', '2', '3']
      }
    });
    expect(wrapper.contains('.link_notifications')).toBe(true)
  })
})
