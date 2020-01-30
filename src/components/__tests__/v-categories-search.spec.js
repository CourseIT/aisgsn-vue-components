import VCategoriesSearch from '@/components/v-categories-search.vue'
import { shallowMount } from '@vue/test-utils';

describe('CategoriesSearch', () => {
  const wrapper = shallowMount(VCategoriesSearch, {
    propsData: {
      width: '300px',
      defailt_text: 'defailt_text',
      icon: 'icon',
      dark_bg: true
    }
  });
  it('Render', () => {
    expect(wrapper.contains('div')).toBe(true)
  })
  it('Props', () => {
    expect(wrapper.props().width).toBe('300px');
    expect(wrapper.props().defailt_text).toBe('defailt_text');
    expect(wrapper.props().icon).toBe('icon');
    expect(wrapper.props().dark_bg).toBe(true);
  })
})
