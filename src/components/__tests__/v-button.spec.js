import VButton from '@/components/v-button.vue'
import { shallowMount } from '@vue/test-utils';

describe('Props', () => {
  const wrapper = shallowMount(VButton, {
    propsData: {
      text: 'text',
      background_color: 'background',
      color: 'color'
    }
  });
  it('Props', () => {
    expect(wrapper.props().text).toBe('text');
    expect(wrapper.props().background_color).toBe('background');
    expect(wrapper.props().color).toBe('color');
  })
})

describe('Default text', () => {
  const wrapper = shallowMount(VButton);
  it('text  ', () => {
    expect(wrapper.props().text).toBe('Кнопка');
  })
})
