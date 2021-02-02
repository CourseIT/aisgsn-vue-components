import VFilePreview from '@/components/v-file-preview.vue'
import { shallowMount } from '@vue/test-utils';

describe('VFilePreview', () => {
  const wrapper = shallowMount(VFilePreview, {
    propsData: {
      preview: 'preview',
    }
  })
  it('отрендерить div', () => {
    expect(wrapper.contains('div')).toBe(true)
  })
  it('props', () => {
    expect(wrapper.props().preview).toBe('preview');
  })
  it('preview', () => {
    expect(wrapper.contains('.img-preview__img-mini')).toBe(true)
  })
})
