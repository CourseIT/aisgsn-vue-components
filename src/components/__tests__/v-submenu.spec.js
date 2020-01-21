import VSubmenu from '@/components/v-submenu.vue'
import { shallowMount } from '@vue/test-utils';

describe('VFilterButton', () => {
  const wrapper = shallowMount(VSubmenu, {
    propsData: {
      title: 'title',
      text_size: 'text_size',
      only_title: ''
    }
  });
  it('Props', () => {
    expect(wrapper.props().title).toBe('title');
    expect(wrapper.props().text_size).toBe('text_size');
    expect(wrapper.props().only_title).toBe('');
    expect(wrapper.find('h1').contains('title'))
    expect(wrapper.contains('.icon__dots')).toBe(true)
  })
  it('Action', () => {
    expect(wrapper.vm.open_submenu).toBe(false)
    wrapper.find('.menu__title').trigger('click')
    expect(wrapper.vm.open_submenu).toBe(true)
  })
  it('Only_title', () => {
    const wrapper = shallowMount(VSubmenu, {
      propsData: {
        only_title: 'true'
      }
    })
    expect(wrapper.contains('.icon__dots')).toBe(false)
  })
})
