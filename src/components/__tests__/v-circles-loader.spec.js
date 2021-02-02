import VCirclesLoader from '@/components/v-circles-loader.vue'
import { shallowMount } from '@vue/test-utils';

describe('VCirclesLoader', () => {
  const wrapper = shallowMount(VCirclesLoader, {
    propsData: {
    show: 'ture',
    }
  })
  it('отрендерить div', () => {
    expect(wrapper.contains('div')).toBe(true)
  })
  it('props', () => {
    expect(wrapper.props().show).toBe('ture');
  })
  it('show', () => {
    expect(wrapper.contains('.v-circles-loader')).toBe(true)
  })
})
