import VCardBlock from '@/components/v-card-block.vue'
import { shallowMount } from '@vue/test-utils';

describe('Props', () => {
  const wrapper = shallowMount(VCardBlock, {
    item: {
      date: '20.08.20 – 28.08.20',
      number: 'Номер объекта контроля',
      method: 'Метод',
      signature: 'Подпись',
      text: 'Любая необходимая информация',
      id: 0
    }
  });
  it('props', () => {
    expect(wrapper.props().item.date).toBe('20.08.20 – 28.08.20');
    expect(wrapper.props().item.number).toBe('Номер объекта контроля');
    expect(wrapper.props().item.method).toBe('Метод');
    expect(wrapper.props().item.signature).toBe('Подпись');
    expect(wrapper.props().item.text).toBe('Любая необходимая информация');
    expect(wrapper.props().item.id).toBe(0);
  })
})

describe('Dafault props', () => {
  const wrapper = shallowMount(VCardBlock);
  it('default props', () => {
    expect(wrapper.props().item.date).toBe('20.08.20 – 28.08.20');
    expect(wrapper.props().item.number).toBe('Номер объекта контроля');
    expect(wrapper.props().item.method).toBe('Метод');
    expect(wrapper.props().item.signature).toBe('Подпись');
    expect(wrapper.props().item.text).toBe('Любая необходимая информация');
    expect(wrapper.props().item.id).toBe(0);
  })
})
