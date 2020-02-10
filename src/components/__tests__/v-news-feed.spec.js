import VNewsFeed from '@/components/v-news-feed.vue'
import { shallowMount } from '@vue/test-utils';

describe('VNewsFeed', () => {
  const wrapper = shallowMount(VNewsFeed)
  it('Render VNewsFeed ', () => {
    expect(wrapper.contains('div')).toBe(true)
  })
})
