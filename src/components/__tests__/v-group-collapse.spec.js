import VGroupCollapse from '@/components/v-group-collapse.vue'
import { shallowMount } from '@vue/test-utils';

describe('VGroupCollapse', () => {
  const wrapper = shallowMount(VGroupCollapse, {
    propsData: {
      title: 'title',
      value: ''
    }
  });
  it('отрендерить div', () => {
    expect(wrapper.contains('div')).toBe(true)
  })
  it('props', () => {
    expect(wrapper.props().title).toBe('title');
  })
})
