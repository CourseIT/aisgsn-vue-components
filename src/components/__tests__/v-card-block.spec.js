import VCardBlock from '@/components/v-card-block.vue'
import { shallowMount } from '@vue/test-utils';

describe('render', () => {
  const wrapper = shallowMount(VCardBlock);
  
  it('отрендерить div', () => {
    expect(wrapper.contains('div')).toBe(true)
  })
})

