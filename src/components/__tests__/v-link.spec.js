import VLink from '@/components/v-link.vue'
import { shallowMount, createLocalVue } from '@vue/test-utils';

import Vuex from 'vuex';
const localVue = createLocalVue()
localVue.use(Vuex)

describe('VLink', () => {

  let store
  beforeEach(() => {
    store = new Vuex.Store({
      state: {}
    })
  })

  
  it('Props', () => {

    const wrapper = shallowMount(VLink, {
      store, localVue,
      propsData: {
        text: 'text',
      }
    });

    expect(wrapper.props().text).toBe('text');
    expect(wrapper.find('.v-link').contains('text'))
  })
  it('render notifications', () => {
    const wrapper = shallowMount(VLink, {
      store, localVue,
      propsData: {
        notifications: ['1', '2', '3']
      }
    });
    expect(wrapper.contains('.link_notifications')).toBe(true)
  })
})
