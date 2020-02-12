import VColumnList from '@/components/v-column-list.vue'
import { shallowMount } from '@vue/test-utils';

describe('VColumnList', () => {
  const wrapper = shallowMount(VColumnList, {
    propsData: {
      list: ['1','2','3']
    }
  })
  it('Render VColumnList ', () => {
    expect(wrapper.contains('div')).toBe(true)
  })
})
