import VImgPreview from '@/components/v-img-preview.vue'
import { shallowMount } from '@vue/test-utils';

describe('VImgPreview', () => {
  const wrapper = shallowMount(VImgPreview, {
    propsData: {
      src: 'src',
    }
  })
  it('отрендерить div', () => {
    expect(wrapper.contains('div')).toBe(true)
  })
  it('props', () => {
    expect(wrapper.props().src).toBe('src');
  })
  it('src', () => {
    expect(wrapper.find(".img-preview img").attributes().class).toBe('img-preview__img-mini');
  })
})
