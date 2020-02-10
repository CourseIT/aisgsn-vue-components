import VNews from '@/components/v-news.vue'
import { shallowMount } from '@vue/test-utils';

describe('VNews', () => {
  const wrapper = shallowMount(VNews, {
    propsData: {
      news: {
        src: 'https://lipetsknews.ru/files/styles/articles2/public/articles/1_23.jpg?itok=Yu6fe7OA',
        date: '21.02.2020',
        time: '12:32',
        title: 'Социальный контракт поможет жителям региона справиться с трудной жизненной ситуацией',
        text: 'Руководитель исполнительной власти региона Игорь Артамонов подписал постановление о реализации закона Липецкой области «О государственной социальной помощи». Документ определяет порядок ее предоставления на основании…',
        provider: 'Новостное агентство Липецк ньюс'
      }
    }
  })
  it('Render VNews ', () => {
    expect(wrapper.contains('div')).toBe(true)
  })
  it('Props', () => {
    expect(wrapper.props().news.src).toBe('https://lipetsknews.ru/files/styles/articles2/public/articles/1_23.jpg?itok=Yu6fe7OA');
    expect(wrapper.props().news.date).toBe('21.02.2020');
    expect(wrapper.props().news.time).toBe('12:32');
    expect(wrapper.props().news.title).toBe('Социальный контракт поможет жителям региона справиться с трудной жизненной ситуацией');
    expect(wrapper.props().news.text).toBe('Руководитель исполнительной власти региона Игорь Артамонов подписал постановление о реализации закона Липецкой области «О государственной социальной помощи». Документ определяет порядок ее предоставления на основании…');
    expect(wrapper.props().news.provider).toBe('Новостное агентство Липецк ньюс');
  })
})
