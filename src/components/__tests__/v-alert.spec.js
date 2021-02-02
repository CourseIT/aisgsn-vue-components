import VAlert from '@/components/v-alert.vue'
import { shallowMount } from '@vue/test-utils';

describe('VAlert', () => {
  const wrapper = shallowMount(VAlert, {
    propsData: {
      text: 'text',
      style_type: 'style2'
    }
  })
  it('отрендерить div', () => {
    expect(wrapper.contains('div')).toBe(true)
  })
  it('props', () => {
    expect(wrapper.props().text).toBe('text');
    expect(wrapper.props().style_type).toBe('style2');
  })
  it('style2', () => {
    expect(wrapper.find(".v-alert div").attributes().class).toBe('alert-style2');
  })
})
