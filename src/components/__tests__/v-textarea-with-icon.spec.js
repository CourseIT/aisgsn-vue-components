import VTextareaWithIcon from '@/components/v-textarea-with-icon.vue'
import { shallowMount } from '@vue/test-utils';

import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

describe('VTextareaWithIcon', () => {
  const wrapper = shallowMount(VTextareaWithIcon);
  it('action', () => {
    expect(wrapper.vm.template_show).toBe(false)
    wrapper.find('.icon').trigger('click')
    expect(wrapper.vm.template_show).toBe(true)
  })
})
