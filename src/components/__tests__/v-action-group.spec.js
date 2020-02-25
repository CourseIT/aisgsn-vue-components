import VActionGroup from '@/components/v-action-group.vue'
import { shallowMount } from '@vue/test-utils';

describe('VActionGroup', () => {
  const wrapper = shallowMount(VActionGroup, {
    propsData: {
      title: 'title',
      width: '300px',
    }
  });
  it('Props', () => {
    expect(wrapper.props().title).toBe('title');
    expect(wrapper.props().width).toBe('300px');
  })
  it('Action', () => {
    expect(wrapper.vm.show_btn).toBe(false)
    wrapper.find('.action-main-btn').trigger('click')
    expect(wrapper.vm.show_btn).toBe(true)
  })
})
