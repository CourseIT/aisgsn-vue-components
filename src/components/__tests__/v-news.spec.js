import VNews from '@/components/v-news.vue'
import { shallowMount } from '@vue/test-utils';

describe('VNews', () => {
  const wrapper = shallowMount(VNews, {
    propsData: {
      news: {
        type: 'type',
        author: 'author',
        date: 'date',
        time: 'time',
        text: 'text',
        provider: 'provider'
      }
    }
  })
  it('Render VNews ', () => {
    expect(wrapper.contains('div')).toBe(true)
  })
  it('Props', () => {
    expect(wrapper.props().news.type).toBe('type');
    expect(wrapper.props().news.author).toBe('author');
    expect(wrapper.props().news.date).toBe('date');
    expect(wrapper.props().news.time).toBe('time');
    expect(wrapper.props().news.text).toBe('text');
    expect(wrapper.props().news.provider).toBe('provider');
  })
})
