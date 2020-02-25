import VInputDateWithIcon from '@/components/v-input-date-with-icon.vue'
import { shallowMount } from '@vue/test-utils';

import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

describe('VInputDateWithIcon', () => {
  const wrapper = shallowMount(VInputDateWithIcon, {
    propsData: {
      date: ['2020-10-10']
    }
  });
  it('отрендерить div', () => {
    expect(wrapper.contains('div')).toBe(true)
  })
})
