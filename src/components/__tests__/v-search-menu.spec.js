import VSearchMenu from '@/components/v-search-menu.vue'
import { shallowMount } from '@vue/test-utils';

describe('Search', () => {
  const wrapper = shallowMount(VSearchMenu, {
    propsData: {
      width: '300px',
      placeholder: 'placeholder'
    }
  });
  it('Props', () => {
    expect(wrapper.props().width).toBe('300px');
    expect(wrapper.props().placeholder).toBe('placeholder');
  })
  it('Render', () => {
    expect(wrapper.contains('div')).toBe(true)
  })
})
