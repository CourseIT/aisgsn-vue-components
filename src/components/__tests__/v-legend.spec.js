import VLegend from '@/components/v-legend.vue'
import { shallowMount } from '@vue/test-utils';

describe('VLegend', () => {
  const wrapper = shallowMount(VLegend)
  it('Render VLegend ', () => {
    expect(wrapper.contains('div')).toBe(true)
  })
})
