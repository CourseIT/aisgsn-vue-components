import VUsersSignature from '@/components/v-users-signature.vue'
import { shallowMount } from '@vue/test-utils';

describe('VUsersSignature', () => {
  const wrapper = shallowMount(VUsersSignature)
  it('Render VUsersSignature ', () => {
    expect(wrapper.contains('div')).toBe(true)
  })
})
