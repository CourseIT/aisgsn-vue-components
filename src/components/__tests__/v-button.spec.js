import Vue from 'vue';
import VButton from '@/components/v-button.vue'

function mountComponentWithProps (Component, propsData) {
  const Constructor = Vue.extend(Component);
  const vm = new Constructor({
    propsData
  }).$mount();
  return vm.$el;
}

describe('v-button.vue', () => {
  it('Проверка пропсов', () => {
    const Data = mountComponentWithProps(VButton, {text:'Кнопка'});
    const text = Data.textContent;
    expect(text).toEqual('Кнопка');
  });
  it('Проверка дефолтного значения', () => {
    const Data = mountComponentWithProps(VButton);
    const text = Data.textContent;
    expect(text.find("button")).toEqual('Кнопка');
  });
});
