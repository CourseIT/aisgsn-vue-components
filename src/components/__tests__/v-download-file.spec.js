import VDownloadFile from '@/components/v-download-file.vue'
import { shallowMount } from '@vue/test-utils';

import Vue from 'vue';
import Vuetify from 'vuetify'
Vue.use(Vuetify)

describe('VDownloadFile', () => {
  const wrapper = shallowMount(VDownloadFile, {
    propsData: {
    }
  })
  it('отрендерить div', () => {
    expect(wrapper.contains('div')).toBe(true)
  })
  it('size1', () => {
    expect(wrapper.vm.size).toBe(1)
    expect(wrapper.find(".doc__preview").attributes().class).toBe('doc__preview doc__preview-1');
  })
})
