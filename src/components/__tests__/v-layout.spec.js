import VLayout from '@/components/v-layout.vue'
import { shallowMount } from '@vue/test-utils';

describe('VLayout', () => {
  const wrapper = shallowMount(VLayout)
  it('Render VLayout ', () => {
    expect(wrapper.contains('div')).toBe(true)
  })
})
