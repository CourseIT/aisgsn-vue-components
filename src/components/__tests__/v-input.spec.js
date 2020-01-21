import VInput from '@/components/v-input.vue'
import { shallowMount } from '@vue/test-utils';

describe('Input', () => {
  const wrapper = shallowMount(VInput, {
    propsData: {
      type: 'textarea'
    }
  });
  it('type', () => {
    expect(wrapper.contains('.textarea')).toBe(true)
  })
  it('default type', () => {
    const wrapper = shallowMount(VInput)
    expect(wrapper.contains('.input')).toBe(true)
  })
})
