import VColumnItem from '@/components/v-column-item.vue'
import { shallowMount } from '@vue/test-utils';

describe('VColumnItem', () => {
  const wrapper = shallowMount(VColumnItem, {
    propsData: {
      text: 'text'
    }
  })
  it('Render VColumnItem ', () => {
    expect(wrapper.contains('div')).toBe(true)
    expect(wrapper.find('.column__text').contains('text'))
  })
})
