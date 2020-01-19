import VButton from '@/components/v-button.vue'
import { shallowMount } from '@vue/test-utils';

describe('Проверка пропсов', () => {
  const wrapper = shallowMount(VButton, {
    propsData: {
      text: 'text',
      background_color: 'background',
      color: 'color'
    }
  });
  it('text', () => {
    expect(wrapper.props().text).toBe('text');
  })
  it('background_color', () => {
    expect(wrapper.props().background_color).toBe('background');
  })
  it('color', () => {
    expect(wrapper.props().color).toBe('color');
  })
})

describe('Проверка дефолтного текста', () => {
  const wrapper = shallowMount(VButton);
  it('text  ', () => {
    expect(wrapper.props().text).toBe('Кнопка');
  })
})
