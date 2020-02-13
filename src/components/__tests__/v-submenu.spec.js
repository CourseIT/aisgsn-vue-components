import VSubmenu from '@/components/v-submenu.vue'
import { shallowMount, createLocalVue } from '@vue/test-utils';

import Vuex from 'vuex';
const localVue = createLocalVue()
localVue.use(Vuex)

describe('VSubmenu', () => {
  
  let store
  beforeEach(() => {
    store = new Vuex.Store({
      state: {}
    })
  })

  it('Props', () => {
    const wrapper = shallowMount(VSubmenu, {
      store, localVue,
      propsData: {
        title: 'title',
        only_title: '',
        notifications: ['1', '2', '3']
      }
    });
    expect(wrapper.props().title).toBe('title');
    expect(wrapper.props().only_title).toBe('');
    expect(wrapper.find('h1').contains('title'))
  })
  it('render notifications', () => {
    const wrapper = shallowMount(VSubmenu, {
      store, localVue,
      propsData: {
        notifications: ['1', '2', '3']
      }
    });
    expect(wrapper.contains('.link_notifications')).toBe(true)
  })
  it('Action', () => {
    const wrapper = shallowMount(VSubmenu, {
      store, localVue,
      propsData: {
        title: 'title',
        only_title: ''
      }
    });
    expect(wrapper.vm.open_submenu).toBe(false)
    wrapper.find('.menu__title').trigger('click')
    expect(wrapper.vm.open_submenu).toBe(true)
  })
  it('Only_title', () => {
    const wrapper = shallowMount(VSubmenu, {
      store, localVue,
      propsData: {
        only_title: 'true'
      }
    })
    expect(wrapper.contains('.icon__dots')).toBe(false)
  })
})
