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
          <InputWithIcon placeholder="(наименование объекта капитального строительства, ФЯО)" icon="" label="Поднадзорный объект"/>
          <InputWithIcon placeholder="(завершен строительством и/или указать этапы работ, выполненные по объекту)" icon="" label="Состояние объекта"/>
          <InputWithIcon placeholder="Заполнено ………" icon="" label="Наличие на объекте системы мониторинга метеоусловий"/>
          <InputWithIcon placeholder="(дата, номера актов и нарушений из материалов проверки, проведенной ОГСН) " icon="" label="Основание для включения в план"/>
          <InputDateWithIcon icon="" label="Срок проведения работ"/>
          <InputWithIcon placeholder="(наименование зданий, сооружений их элементов с указанием отметок, осей, узлов. Объекты контроля нумеруются по порядку)" icon="" label="Объекты контроля:"/>
          <InputWithIcon placeholder="(наименование, инв.№, шифр, номер листа и/или чертежа)" icon="" label="Проектная документация по объекту контроля"/>
          <InputWithIcon placeholder="(имеется, имеется частично, отсутствует)" icon="" label="Наличие исполнительной документации по объекту контроля"/>
          <TextareaWithIcon placeholder="(указать номер объекта контроля согласно настоящей заявке и характеристику, подлежащую исследованию: тепловая защита; прочность бетонных конструкций; толщина защитного слоя бетонных конструкций; геометрические размеры, положение строительных конструкций и качество сварных соединений; прочность сцепления гидроизоляционных слоев с основанием кровли и между собой; характер и величина раскрытия трещин строительных конструкций; освещенность; толщина лакокрасочного покрытия; скорость воздушных потоков и производительность систем вентиляции)" icon="" label="Включить в план оценку соответствия следующих характеристик на заявляемых объектах контроля:"/>
          <InputWithIcon placeholder="(указать номер объекта контроля согласно настоящей заявке и наименование итогового документа: заключение, акт, протокол)" icon="" label="По результатам выполнения планируемых на объектах контроля измерений представить:"/>
          <h1 class="title">
            Распоряжение по ОТКИ УГСН на проведение работ
          </h1>
          <div class="df jcsb">
            <p class="label">Провести испытания (измерения) объектов контроля следующим работникам:</p>
            <div @click="modal_show = true">
              <Icon icon="" class="icon-plus"/>
            </div>
          </div>
          <hr>
          <hr v-if="add_fields.length">
          <Icon v-if="add_fields.length" icon="" class="icon-plus"/>
        </v-form>
      </div>
    </div>
    <v-col class="pf">
      <div class="df">
        <Icon icon="" :hover_shadow="true" :hover_color="true" class="icon-s mt0"/>
        <DocumentButtonActionSelection />
      </div>
      <DocumentImgBlock :img="false" class="mt100"/>
    </v-col>
    <transition name="modal">
      <AddFieldModal v-if="modal_show" :modal_show="modal_show" @toggleModal=toggleModal />
    </transition>
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
  transform: translateY(-50vh);
}
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
  width: 55px;
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