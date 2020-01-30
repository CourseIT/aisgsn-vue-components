import VSearch from '@/components/v-search.vue'
import { shallowMount } from '@vue/test-utils';

describe('Search', () => {
  const wrapper = shallowMount(VSearch, {
    propsData: {
      width: '300px',
    }
  });
  it('Props', () => {
    expect(wrapper.props().width).toBe('300px');
  })
  it('Render', () => {
    expect(wrapper.contains('div')).toBe(true)
  })
})
