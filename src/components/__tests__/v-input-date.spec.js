import VInputDate from '@/components/v-input-date.vue'
import { shallowMount } from '@vue/test-utils';

import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

describe('VInputDate', () => {
  const wrapper = shallowMount(VInputDate, {
    propsData: {
      width: '300px',
      placeholder: 'placeholder',
      label: 'label'
    }
  });
  it('Props', () => {
    expect(wrapper.props().width).toBe('300px');
    expect(wrapper.props().placeholder).toBe('placeholder');
    expect(wrapper.props().label).toBe('label');
  })
  it('Render', () => {
    expect(wrapper.contains('div')).toBe(true)
  })
})