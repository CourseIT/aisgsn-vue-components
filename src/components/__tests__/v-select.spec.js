import VSelect from '@/components/v-select.vue'
import { shallowMount } from '@vue/test-utils';

describe('Props', () => {
  const wrapper = shallowMount(VSelect, {
    propsData: {
      value: 'value',
      defailt_value: 'defailt_value',
      width: 'width',
      text_center: 'text_center'
    }
  });
  it('Props', () => {
    expect(wrapper.props().value).toBe('value');
    expect(wrapper.props().defailt_value).toBe('defailt_value');
    expect(wrapper.props().width).toBe('width');
    expect(wrapper.props().text_center).toBe('text_center');
  })
})

describe('Default props', () => {
  const wrapper = shallowMount(VSelect);
  it('default', () => {
    expect(wrapper.props().value).toBe('Кнопка');
    expect(wrapper.props().defailt_value).toBe('Кнопка');
  })
})
