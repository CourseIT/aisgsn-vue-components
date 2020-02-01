import VFilterInput from '@/components/v-filter-input.vue'
import { shallowMount } from '@vue/test-utils';


describe('VFilterInput', () => {

  it('Props', () => {
    const wrapper = shallowMount(VFilterInput, {
      propsData: {
        default_text: 'default_text'
      }
    });
    expect(wrapper.props().default_text).toBe('default_text');
  })
  it('Action', () => {
    const wrapper = shallowMount(VFilterInput);
    expect(wrapper.vm.filter_input_show).toBe(false)
    wrapper.find('p').trigger('click')
    expect(wrapper.vm.filter_input_show).toBe(true)
  })
})
