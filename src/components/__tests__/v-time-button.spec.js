import VTimeButton from '@/components/v-time-button.vue'
import { shallowMount } from '@vue/test-utils';


describe('VTimeButton', () => {

  it('Action', () => {
    const wrapper = shallowMount(VTimeButton);
    expect(wrapper.vm.time_input_show).toBe(false)
    wrapper.find('p').trigger('click')
    expect(wrapper.vm.time_input_show).toBe(true)
  })
})
