import VUserSignature from '@/components/v-user-signature.vue'
import { shallowMount } from '@vue/test-utils';

describe('VUserSignature', () => {
  const wrapper = shallowMount(VUserSignature)
  it('Render VUserSignature ', () => {
    expect(wrapper.contains('div')).toBe(true)
  })
})
