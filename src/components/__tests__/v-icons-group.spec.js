import VIconsGroup from '@/components/v-icons-group.vue'
import { shallowMount } from '@vue/test-utils';

describe('VIconsGroup', () => {
  const wrapper = shallowMount(VIconsGroup)
  it('Render VIconsGroup ', () => {
    expect(wrapper.contains('div')).toBe(true)
    expect(wrapper.contains('.icons-block')).toBe(true)
    expect(wrapper.contains('.hover-icon')).toBe(true)
  })
})
