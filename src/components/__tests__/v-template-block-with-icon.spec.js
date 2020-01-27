import VTemplateBlockWithIcon from '@/components/v-template-block-with-icon.vue'
import { shallowMount } from '@vue/test-utils';

describe('VTemplateBlockWithIcon', () => {
  const wrapper = shallowMount(VTemplateBlockWithIcon)
  it('Render VTemplateBlockWithIcon ', () => {
    expect(wrapper.contains('div')).toBe(true)
  })
})
