import VCardText from '@/components/v-card-text.vue'
import { shallowMount } from '@vue/test-utils';

describe('VCardText', () => {
  const wrapper = shallowMount(VCardText, {
    propsData: {
      bold: 'true',
    }
  })
  it('отрендерить p', () => {
    expect(wrapper.contains('p')).toBe(true)
  })
  it('props', () => {
    expect(wrapper.props().bold).toBe('true');
  })
  it("bold", () => {
    expect(wrapper.find("p").attributes().class).toBe('bold');
  });
})
