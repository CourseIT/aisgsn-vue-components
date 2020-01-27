import VInputWithIcon from '@/components/v-input-with-icon.vue'
import { shallowMount } from '@vue/test-utils';

import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

describe('VInputWithIcon', () => {
  const wrapper = shallowMount(VInputWithIcon);
  it('Action', () => {
    expect(wrapper.vm.template_show).toBe(false)
    wrapper.find('.icon').trigger('click')
    expect(wrapper.vm.template_show).toBe(true)
  })
})
