import VFilterInputSwitch from '@/components/v-filter-input-switch.vue'
import { shallowMount } from '@vue/test-utils';


import Vue from 'vue';
import Vuetify from 'vuetify'
Vue.use(Vuetify)

describe('VFilterInput', () => {

  it('Props', () => {
    const wrapper = shallowMount(VFilterInputSwitch, {
      propsData: {
        default_text: 'default_text'
      }
    });
    expect(wrapper.props().default_text).toBe('default_text');
  })
  it('Action', () => {
    const wrapper = shallowMount(VFilterInputSwitch);
    expect(wrapper.vm.filter_input_show).toBe(false)
    wrapper.find('p').trigger('click')
    expect(wrapper.vm.filter_input_show).toBe(true)
  })
})
