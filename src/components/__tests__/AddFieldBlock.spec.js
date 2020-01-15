import Vue from 'vue'
import AddFieldBlock from '@/components/AddFieldBlock.vue'

function mountComponentWithProps (Component, propsData) {
  const Constructor = Vue.extend(Component);
  const vm = new Constructor({
    propsData
  }).$mount();
  return vm.$el;
}

describe('AddFieldBlock.vue', () => {
  test('Является экземпляром Vue', () => {
    const wrapper = AddFieldBlock
    expect(wrapper).toBeTruthy()
  })
})