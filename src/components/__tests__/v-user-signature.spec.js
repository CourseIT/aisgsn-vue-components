import VUserSignature from '@/components/v-user-signature.vue'
import { shallowMount } from '@vue/test-utils';

describe('VUserSignature', () => {
  const wrapper = shallowMount(VUserSignature, {
    propsData: {
      title: 'title',
      name: 'name'
    }
  })
  it('Render VUserSignature ', () => {
    expect(wrapper.contains('div')).toBe(true)
  })
  it('Props', () => {
    expect(wrapper.props().title).toBe('title');
    expect(wrapper.props().name).toBe('name');
    expect(wrapper.find('.dropdown__user-title').contains('title'))
    expect(wrapper.find('.dropdown__user-name').contains('name'))
  })
})
