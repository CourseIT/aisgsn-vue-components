import VIcon from '@/components/v-icon.vue'
import { shallowMount } from '@vue/test-utils';

describe('VIcon', () => {
  const wrapper = shallowMount(VIcon, {
    propsData: {
      icon: 'icon',
      color: 'color',
      prompt: 'prompt',
      prompt_theme: 'dark',
      hover_shadow: 'ture',
      hover_color: 'true',
      width: '30',
      height: 'height',
      action: Function
    }
  })
  it('отрендерить div', () => {
    expect(wrapper.contains('div')).toBe(true)
  })
  it('props', () => {
    expect(wrapper.props().icon).toBe('icon');
    expect(wrapper.props().color).toBe('color');
    expect(wrapper.props().prompt).toBe('prompt');
    expect(wrapper.props().prompt_theme).toBe('dark');
    expect(wrapper.props().hover_shadow).toBe('ture');
    expect(wrapper.props().hover_color).toBe('true');
    expect(wrapper.props().width).toBe('30');
    expect(wrapper.props().height).toBe('height');
  })
  it('prompt', () => {
    expect(wrapper.find('span').contains('prompt'))
  })
  it("prompt_theme dark", () => {
    expect(wrapper.find(".icon__prompt-block").attributes().class).toBe('icon__prompt-block dark');
  });
  it("icon shadow + color", () => {
    expect(wrapper.find(".hover-shadow").attributes().class).toBe('icon hover-shadow hover-color');
  });
})
