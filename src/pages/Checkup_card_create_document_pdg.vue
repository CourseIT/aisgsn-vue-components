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
          <InputWithIcon placeholder="Заполнено ………" icon="" label="Кому"/>
          <InputWithIcon placeholder="Заполнено ………" icon="" label="Поднадзорный объект"/>
          <InputWithIcon placeholder="Заполнено ………" icon="" label="Состояние объекта"/>
          <InputWithIcon placeholder="Заполнено ………" icon="" label="Наличие на объекте системы мониторинга метеоусловий"/>
          <InputWithIcon placeholder="Заполнено ………" icon="" label="Основание для включения в план"/>
          <InputDateWithIcon icon="" label="Срок проведения работ"/>
          <InputWithIcon placeholder="Заполнено ………" icon="" label="Объекты контроля:"/>
          <InputWithIcon placeholder="Заполнено ………" icon="" label="Проектная документация по объекту контроля"/>
          <InputWithIcon placeholder="Заполнено ………" icon="" label="Наличие исполнительной документации по объекту контроля"/>
          <TextareaWithIcon placeholder="Заполнено ………" icon="" label="Включить в план оценку соответствия следующих характеристик на заявляемых объектах контроля:"/>
          <InputWithIcon placeholder="Заполнено ………" icon="" label="По результатам выполнения планируемых на объектах контроля измерений представить:"/>

          <h1 class="title">
            Распоряжение по ОТКИ УГСН на проведение работ
          </h1>
          <div class="df jcsb">
            <p class="label">Провести испытания (измерения) объектов контроля следующим работникам:</p>
            <div @click="modal_show = true">
              <Icon icon="" class="icon-plus"/>
            </div>
          </div>
          <hr v-if="add_fields.length">
          <Icon v-if="add_fields.length" icon="" class="icon-plus"/>
        <hr>
      </v-form>
      </div>
    </div>
    <v-col class="pf">
      <div class="df">
        <Icon icon="" :hover="true" class="icon-s mt0"/>
        <DocumentButtonActionSelection />
      </div>
      <DocumentImgBlock img="true" class="mt100"/>
    </v-col>
    <AddFieldModal v-if="modal_show" :modal_show="modal_show" @toggleModal=toggleModal />
  </div>
</template>

<script>
const Icon = () => import('@/components/Icon')
const DocumentButtonActionSelection = () => import('@/components/DocumentButtonActionSelection')
const DocumentImgBlock = () => import('@/components/DocumentImgBlock')
const InputWithIcon = () => import('@/components/InputWithIcon')
const InputDateWithIcon = () => import('@/components/InputDateWithIcon')
const TextareaWithIcon = () => import('@/components/TextareaWithIcon')
const AddFieldModal = () => import('@/components/AddFieldModal')

export default {
  components: {
    Icon,
    DocumentButtonActionSelection,
    DocumentImgBlock,
    InputWithIcon,
    InputDateWithIcon,
    TextareaWithIcon,
    AddFieldModal
  },
  data: () => ({
    modal_show: false,
    add_fields: []
  }),
  methods: {
    toggleModal(show) {
      this.modal_show = show
    },
  }
}
</script>

<style scoped>
.df {
  display: flex;
}
.jcsb {
  justify-content: space-between;
}
.jcfe{
  justify-content: flex-end;
}
.mt0 {
  margin-top: 0px;
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
.w95 {
  width: 95%;
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
  padding-right: 16px;
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