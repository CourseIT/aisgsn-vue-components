import VFiltersButton from '@/components/v-filters-button.vue'
import { shallowMount } from '@vue/test-utils';

describe('VFilterButton', () => {
  const wrapper = shallowMount(VFiltersButton);
  it('action', () => {
    expect(wrapper.vm.filters__show).toBe(false)
    wrapper.find('button').trigger('click')
    expect(wrapper.vm.filters__show).toBe(true)
  })
})
