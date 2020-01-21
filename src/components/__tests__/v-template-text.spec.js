import VTemplateText from '@/components/v-template-text.vue'
import { shallowMount } from '@vue/test-utils';

describe('VActionButton', () => {
  const wrapper = shallowMount(VTemplateText, {
    propsData: {
      shadow: 'true',
    }
  });
  it('Shadow', () => {
    expect(wrapper.find(".template-block").attributes().class).toBe('template-block tb-shadow');
  })
  it('No shadow', () => {
    const wrapper = shallowMount(VTemplateText)
    expect(wrapper.find(".template-block").attributes().class).toBe('template-block');
  })
})
