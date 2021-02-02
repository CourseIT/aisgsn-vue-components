import VDownloadImg from '@/components/v-download-img.vue'
import { shallowMount } from '@vue/test-utils';

import Vue from 'vue';
import Vuetify from 'vuetify'
Vue.use(Vuetify)

describe('VDownloadImg', () => {
  const wrapper = shallowMount(VDownloadImg, {
    propsData: {
      src: 'src',
    }
  })
  it('отрендерить div', () => {
    expect(wrapper.contains('div')).toBe(true)
  })
  it('props', () => {
    expect(wrapper.props().src).toBe('src');
  })
  it('size1', () => {
    expect(wrapper.vm.size).toBe(1)
    expect(wrapper.find(".doc__img").attributes().class).toBe('doc__img doc__img-1');
  })
})
