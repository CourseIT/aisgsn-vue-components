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
          <v-input-with-icon placeholder="Заполнено ………" icon="" label="Кому"/>
          <v-input-with-icon placeholder="(наименование объекта капитального строительства, ФЯО)" icon="" label="Поднадзорный объект"/>
          <v-input-with-icon placeholder="(завершен строительством и/или указать этапы работ, выполненные по объекту)" icon="" label="Состояние объекта"/>
          <v-input-with-icon placeholder="Заполнено ………" icon="" label="Наличие на объекте системы мониторинга метеоусловий"/>
          <v-input-with-icon placeholder="(дата, номера актов и нарушений из материалов проверки, проведенной ОГСН) " icon="" label="Основание для включения в план"/>
          <v-input-date-with-icon icon="" label="Срок проведения работ"/>
          <v-input-with-icon placeholder="(наименование зданий, сооружений их элементов с указанием отметок, осей, узлов. Объекты контроля нумеруются по порядку)" icon="" label="Объекты контроля:"/>
          <v-input-with-icon placeholder="(наименование, инв.№, шифр, номер листа и/или чертежа)" icon="" label="Проектная документация по объекту контроля"/>
          <v-input-with-icon placeholder="(имеется, имеется частично, отсутствует)" icon="" label="Наличие исполнительной документации по объекту контроля"/>
          <v-textarea-with-icon placeholder="(указать номер объекта контроля согласно настоящей заявке и характеристику, подлежащую исследованию: тепловая защита; прочность бетонных конструкций; толщина защитного слоя бетонных конструкций; геометрические размеры, положение строительных конструкций и качество сварных соединений; прочность сцепления гидроизоляционных слоев с основанием кровли и между собой; характер и величина раскрытия трещин строительных конструкций; освещенность; толщина лакокрасочного покрытия; скорость воздушных потоков и производительность систем вентиляции)" icon="" label="Включить в план оценку соответствия следующих характеристик на заявляемых объектах контроля:"/>
          <v-input-with-icon placeholder="(указать номер объекта контроля согласно настоящей заявке и наименование итогового документа: заключение, акт, протокол)" icon="" label="По результатам выполнения планируемых на объектах контроля измерений представить:"/>
          <h1 class="title">
            Распоряжение по ОТКИ УГСН на проведение работ
          </h1>
          <div class="df jcsb">
            <p class="label">Провести испытания (измерения) объектов контроля следующим работникам:</p>
            <div @click="modal_show = true">
              <v-icon icon="" class="icon-plus"/>
            </div>
          </div>
          <hr>
          <hr v-if="add_fields.length">
          <v-icon v-if="add_fields.length" icon="" class="icon-plus"/>
        </v-form>
      </div>
    </div>
    <v-col class="pf">
      <div class="df">
        <v-icon icon="" :hover_shadow="true" :hover_color="true" class="icon-s mt0"/>
        <v-action-group title="Выбор действия">
          <v-action-button title="Подписать документ" icon=""/>
          <v-action-button title="Вернуть на доработку" icon=""/>
        </v-action-group>
      </div>
      <v-document-block :img="false" :src="src" class="mt100"/>
    </v-col>
    <transition name="modal">
      <v-modal v-if="modal_show" :modal_show="modal_show" @toggleModal=toggleModal />
    </transition>
  </div>
</template>

<script>
const VIcon = () => import('@/components/v-icon')
const VActionGroup = () => import('@/components/v-action-group')
const VActionButton = () => import('@/components/v-action-button')
const VDocumentBlock = () => import('@/components/v-document-block')
const VInputWithIcon = () => import('@/components/v-input-with-icon')
const VInputDateWithIcon = () => import('@/components/v-input-date-with-icon')
const VTextareaWithIcon = () => import('@/components/v-textarea-with-icon')
const VModal = () => import('@/components/v-modal')

export default {
  components: {
    VIcon,
    VActionGroup,
    VActionButton,
    VDocumentBlock,
    VInputWithIcon,
    VInputDateWithIcon,
    VTextareaWithIcon,
    VModal
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
  }
}
</script>

<style scoped>
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