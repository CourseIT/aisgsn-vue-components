import VTemplateBlock from '@/components/v-template-block.vue'
import { shallowMount } from '@vue/test-utils';

describe('VActionButton', () => {
  const wrapper = shallowMount(VTemplateBlock, {
    propsData: {
      width: '300px',
    }
  });
  it('Props', () => {
    expect(wrapper.props().width).toBe('300px');
  })
})
