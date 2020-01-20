import VDocumentBlock from '@/components/v-document-block.vue'
import { shallowMount } from '@vue/test-utils';

describe('Проверка пропсов', () => {
  const wrapper = shallowMount(VDocumentBlock, {
    propsData: {
      src: 'src',
    }
  });
  it('src', () => {
    expect(wrapper.props().src).toBe('src');
  })
})
