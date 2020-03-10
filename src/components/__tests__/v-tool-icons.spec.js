import VToolIcons from '@/components/v-tool-icons.vue'
import { shallowMount } from '@vue/test-utils';

describe('VToolIcons', () => {
  const wrapper = shallowMount(VToolIcons, {
    propsData: {
      row: true,
    }
  })
  it('отрендерить div', () => {
    expect(wrapper.contains('div')).toBe(true)
  })
  it('props', () => {
    expect(wrapper.props().row).toBe(true);
  })
  it("row", () => {
    expect(wrapper.find(".tool-icons").attributes().class).toBe('tool-icons');
  });
})
