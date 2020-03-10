<template>
  <div class="df">
    <div class="w66"  :class="{pl305: $store.state.menu_visibility}">
      <div >
        <div class="df jcsb">
          <div class="w95">
            <h1 class="title">
              Заявка на выполнение испытаний (измерений) на объектах 
              капитального строительства для включения в план ОТКИ УГСН
            </h1>
          </div>
        </div>
        <v-form
          ref="form"
        >
          <v-input-with-icon placeholder="Заполнено ………" icon="" el_after="true" label="Кому" template_text_top="250px"/>
          <v-input-with-icon placeholder="Заполнено ………" icon="" el_before="true" el_after="true" label="Поднадзорный объект" template_text_top="250px"/>
          <v-input-with-icon placeholder="Заполнено ………" icon="" el_before="true" el_after="true" label="Состояние объекта" template_text_top="250px"/>
          <v-input-with-icon placeholder="Заполнено ………" icon="" el_before="true" el_after="true" label="Наличие на объекте системы мониторинга метеоусловий" template_text_top="250px"/>
          <v-input-with-icon placeholder="Заполнено ………" icon="" el_before="true" el_after="true" label="Основание для включения в план" template_text_top="250px"/>
          <v-input-date-with-icon icon="" label="Срок проведения работ"/>
          <v-input-with-icon placeholder="Заполнено ………" icon="" el_before="true" el_after="true" label="Объекты контроля:" template_text_top="323px"/>
          <v-input-with-icon placeholder="Заполнено ………" icon="" el_before="true" el_after="true" label="Проектная документация по объекту контроля" template_text_top="323px"/>
          <v-input-with-icon placeholder="Заполнено ………" icon="" el_before="true" el_after="true" label="Наличие исполнительной документации по объекту контроля" template_text_top="323px"/>
          <v-textarea-with-icon placeholder="Заполнено ………" icon="" el_before="true" el_after="true" label="Включить в план оценку соответствия следующих характеристик на заявляемых объектах контроля:" template_text_top="426px"/>
          <v-input-with-icon placeholder="Заполнено ………" icon="" el_before="true" label="По результатам выполнения планируемых на объектах контроля измерений представить:" template_text_top="426px"/>
          <h1 class="title">
            Распоряжение по ОТКИ УГСН на проведение работ
          </h1>
          <div class="df jcsb">
            <p class="label">Провести испытания (измерения) объектов контроля следующим работникам:</p>
            <div @click="modal_show = true">
              <v-icon icon="" class="icon-plus"/>
            </div>
          </div>
          <hr class="hr" v-if="add_fields.length">
          <v-icon v-if="add_fields.length" icon="" class="icon-plus"/>
        <hr class="hr">
      </v-form>
      </div>
    </div>
    <v-col class="pf">
      <div class="df">
        <v-icon icon="" :hover_shadow="true" :hover_color="true" class="icon-s mt0"/>
        <v-action-group title="Выбор действия">
          <v-action-button :action="test" title="Подписать документ" icon=""/>
          <v-action-button title="Вернуть на доработку" icon=""/>
        </v-action-group>
      </div>
      <v-document-block img="true" :src="src" class="mt100 doc__block"/>
    </v-col>
    <transition name="modal">
      <v-modal v-if="modal_show" :modal_show="modal_show" @toggleModal=toggleModal />
    </transition>
  </div>
</template>

<script>
const VIcon = () => import('@/components/v-icon')
const VDocumentBlock = () => import('@/components/v-document-block')
const VInputWithIcon = () => import('@/components/v-input-with-icon')
const VInputDateWithIcon = () => import('@/components/v-input-date-with-icon')
const VTextareaWithIcon = () => import('@/components/v-textarea-with-icon')
const VModal = () => import('@/components/v-modal')
const VActionGroup = () => import('@/components/v-action-group')
const VActionButton = () => import('@/components/v-action-button')

export default {
  components: {
    VIcon,
    VDocumentBlock,
    VInputWithIcon,
    VInputDateWithIcon,
    VTextareaWithIcon,
    VModal,
    VActionGroup,
    VActionButton
  },
  data: () => ({
    src: 'https://static.thenounproject.com/png/4561-200.png',
    modal_show: false,
    add_fields: []
  }),
  methods: {
    toggleModal(show) {
      this.modal_show = show
    },
    test() {
      window.console.log('test')
    }
  }
}
</script>

<style scoped>
.modal-enter-active, .modal-leave-active{
  transition: all 0.5s ease;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
}
.modal-enter, .modal-leave-to{
  opacity: 0;
}
.doc__block {
  margin-left: 70px;
}
.mb100 {
  margin-bottom: 100px;
}
.mt100 {
  margin-top: 100px;
}
.w66 {
  width: 66%;
  transition: all 0.3s ease;
}
.pl305 {
  padding-left: 305px;
}
.pf {
  position: fixed;
  left: 66%;
}
hr {
  border: dashed 0.5px #000;
  margin-bottom: 12px;
}
.icon-s {
  font-family: var(--font-awesome-5-pro-light);
  margin-top: 2px;
  font-size: 21px;
  float: right;
  padding: 0px 17px;
  text-align: center;
  cursor: pointer;
}
.icon-plus {
  font-family: var(--font-awesome-5-pro-light);
  cursor: pointer;
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0);
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.81;
  letter-spacing: normal;
  text-align: center;
  padding-right: 9px;
  float: right;
}
.label {
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0);
  font-family: Roboto;
  font-size: 12px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
  margin-bottom: 5px;
}
.title {
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0);
  font-family: Roboto;
  font-size: 24px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.13;
  letter-spacing: normal;
  text-align: left;
  margin-bottom: 12px;
  max-width: 720px;
}
</style>