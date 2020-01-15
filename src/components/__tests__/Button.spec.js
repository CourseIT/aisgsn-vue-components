import Vue from 'vue';
import Button from '@/components/Button.vue'

function mountComponentWithProps (Component, propsData) {
  const Constructor = Vue.extend(Component);
  const vm = new Constructor({
    propsData
  }).$mount();
  return vm.$el;
}

describe('Button.vue', () => {
  it('Проверка пропсов', () => {
    const Data = mountComponentWithProps(Button, { text: 'Кнопка' });
    const text = Data.textContent;
    expect(text).toEqual('Кнопка');
  });
  it('Проверка дефолтного значения', () => {
    const Data = mountComponentWithProps(Button);
    const text = Data.textContent;
    expect(text).toEqual('Кнопка');
  });
});