import VMessage from '@/components/v-message.vue'
import { shallowMount } from '@vue/test-utils';

describe('VMessage', () => {
  const wrapper = shallowMount(VMessage, {
    propsData: {
      text: 'text',
    }
  });
  it('отрендерить div', () => {
    expect(wrapper.contains('div')).toBe(true)
  })
  it('props', () => {
    expect(wrapper.props().text).toBe('text');
    expect(wrapper.contains('.message')).toBe(true)
  })
})
