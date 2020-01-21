import VSubmenuLink from '@/components/v-submenu-link.vue'
import { shallowMount } from '@vue/test-utils';

describe('VSubmenuLink', () => {
  const wrapper = shallowMount(VSubmenuLink, {
    propsData: {
      text: 'text',
      text_size: 'text_size',
    }
  });
  it('Props', () => {
    expect(wrapper.props().text).toBe('text');
    expect(wrapper.props().text_size).toBe('text_size');
    expect(wrapper.find('li').contains('text'))
  })
})
