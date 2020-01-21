import VInputDateWithIcon from '@/components/v-input-date-with-icon.vue'
import { shallowMount } from '@vue/test-utils';

import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

describe('VInputDateWithIcon', () => {
  const wrapper = shallowMount(VInputDateWithIcon);
  it('action', () => {
    expect(wrapper.vm.menu).toBe(false)
    wrapper.find('.df').trigger('click')
    expect(wrapper.vm.menu).toBe(true)
  })
})
