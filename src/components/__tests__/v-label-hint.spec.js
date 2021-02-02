import VLabelHint from '@/components/v-label-hint.vue'
import { shallowMount } from '@vue/test-utils';

describe('VLabelHint', () => {
  const wrapper = shallowMount(VLabelHint, {
    propsData: {
      label: 'label',
      width: 'width',
      hint: 'hint',
      obligatory: true
    }
  });
  it('отрендерить div', () => {
    expect(wrapper.contains('div')).toBe(true)
  })
  it('props', () => {
    expect(wrapper.props().label).toBe('label');
    expect(wrapper.props().width).toBe('width');
    expect(wrapper.props().hint).toBe('hint');
    expect(wrapper.props().obligatory).toBe(true);
    expect(wrapper.contains('.obligatory')).toBe(true)
    expect(wrapper.contains('.hint_icon')).toBe(true)
    expect(wrapper.contains('.icon__prompt-block')).toBe(true)
    expect(wrapper.contains('.label')).toBe(true)
  })
})
