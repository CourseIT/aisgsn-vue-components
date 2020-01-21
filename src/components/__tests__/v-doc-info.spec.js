import VDocInfo from '@/components/v-doc-info.vue'
import { shallowMount } from '@vue/test-utils';

describe('Props', () => {
  const wrapper = shallowMount(VDocInfo, {
    propsData: {
      doc_info: {
        declarant: 'declarant',
        title_of_verification: 'title_of_verification',
        inspector: 'inspector',
        dates: 'dates'
      }
    }
  });
  it('Props', () => {
    expect(wrapper.props().doc_info.declarant).toBe('declarant');
    expect(wrapper.props().doc_info.title_of_verification).toBe('title_of_verification');
    expect(wrapper.props().doc_info.inspector).toBe('inspector');
    expect(wrapper.props().doc_info.dates).toBe('dates');
  })
})
