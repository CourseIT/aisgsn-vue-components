import VActionButton from '@/components/v-action-button.vue'
import { shallowMount } from '@vue/test-utils';

describe('VActionButton', () => {
  const wrapper = shallowMount(VActionButton, {
    propsData: {
      title: 'title',
      width: '300px',
      icon: 'icon',
    }
  });
  it('Props', () => {
    expect(wrapper.props().title).toBe('title');
    expect(wrapper.props().width).toBe('300px');
    expect(wrapper.props().icon).toBe('icon');
  })
})
