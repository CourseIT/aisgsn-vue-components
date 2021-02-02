import VIconSelectMini from '@/components/v-icon-select-mini.vue'
import { shallowMount } from '@vue/test-utils';

describe('VIconSelectMini', () => {
  const wrapper = shallowMount(VIconSelectMini, {
    propsData: {
    icon: 'icon',
    hint: 'hint',
    hover_color: 'hover_color',
    font_size: 'font_size',
    hover_shadow: 'ture',
    dark_bg: 'true'
    }
  })
  it('отрендерить div', () => {
    expect(wrapper.contains('div')).toBe(true)
  })
  it('props', () => {
    expect(wrapper.props().icon).toBe('icon');
    expect(wrapper.props().hint).toBe('hint');
    expect(wrapper.props().hover_color).toBe('hover_color');
    expect(wrapper.props().font_size).toBe('font_size');
    expect(wrapper.props().hover_shadow).toBe('ture');
    expect(wrapper.props().dark_bg).toBe('true');
  })
})
