import VActionGroup from '@/components/v-action-group.vue'
import { shallowMount } from '@vue/test-utils';

describe('Проверка пропсов', () => {
  const wrapper = shallowMount(VActionGroup, {
    propsData: {
      title: 'title',
      width: '300px',
    }
  });
  it('title', () => {
    expect(wrapper.props().title).toBe('title');
  })
  it('width', () => {
    expect(wrapper.props().width).toBe('300px');
  })
  it('action', () => {
    expect(wrapper.vm.show_btn).toBe(false)
    wrapper.find('button').trigger('click')
    expect(wrapper.vm.show_btn).toBe(true)
  })
})
