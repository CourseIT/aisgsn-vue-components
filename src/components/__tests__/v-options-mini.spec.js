import VOptionsMini from '@/components/v-options-mini.vue'
import { shallowMount } from '@vue/test-utils';

describe('VOptionsMini', () => {
  const wrapper = shallowMount(VOptionsMini, {
    propsData: {
    style_type: 'style2',
    visible: 'true',
    arrow: 'true'
    }
  })
  it('отрендерить div', () => {
    expect(wrapper.contains('div')).toBe(true)
  })
  it('props', () => {
    expect(wrapper.props().style_type).toBe('style2');
    expect(wrapper.props().visible).toBe('true');
  })
  it('visible', () => {
    expect(wrapper.contains('.select_shadow')).toBe(true)
  })
  it('arrow', () => {
    expect(wrapper.contains('.options-arrow')).toBe(true)
  })
})
