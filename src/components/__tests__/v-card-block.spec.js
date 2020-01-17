import Vue from 'vue'
import VCardBlock from '@/components/v-card-block.vue'

function mountComponentWithProps (Component, propsData) {
  const Constructor = Vue.extend(Component);
  const vm = new Constructor({
    propsData
  }).$mount();
  return vm.$el;
}

describe('v-card-block.vue', () => {
  test('Является экземпляром Vue', () => {
    const wrapper = VCardBlock
    expect(wrapper).toBeTruthy()
  })
})