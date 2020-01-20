import VActionButton from '@/components/v-action-button.vue'
import { shallowMount } from '@vue/test-utils';

describe('Проверка пропсов', () => {
  const wrapper = shallowMount(VActionButton, {
    propsData: {
      title: 'title',
      width: '300px',
      icon: 'icon',
    }
  });
  it('title', () => {
    expect(wrapper.props().title).toBe('title');
  })
  it('width', () => {
    expect(wrapper.props().width).toBe('300px');
  })
  it('icon', () => {
    expect(wrapper.props().icon).toBe('icon');
  })
})
