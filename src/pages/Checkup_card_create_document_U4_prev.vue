<template>
  <div class="df">
    <div class="w66"  :class="{pl305: $store.state.menu_visibility}">
      <div >
        <div class="df jcsb">
          <div class="w95">
            <h1 class="title">
              ГОСУДАРСТВЕННАЯ КОРПОРАЦИЯ ПО АТОМНОЙ ЭНЕРГИИ «РОСАТОМ» 
              (Госкорпорация «Росатом») Управление государственного строительного надзора
            </h1>
          </div>
          <v-icon icon="" class="icon-s mt0"/>
        </div>
        <v-form
          ref="form"
        >
          <v-input-with-icon placeholder="                    №" icon="" label="Программа проверок"/>
          <v-input-with-icon placeholder="(Имя, Отчество, Фамилия)" icon="" label="Утверждаю Начальник Управления"/>
          <v-input-date-with-icon icon="" label="Дата"/>
          <v-input-with-icon placeholder="(значение)" icon="" label="Номер дела"/>
          <v-input-with-icon placeholder="(значение)" icon="" label="Экземпляр"/>
          <v-textarea-with-icon placeholder="(наименование застройщика, технического заказчика (при наличии технического заказчика), номер и дата выдачи свидетельства о государственной регистрации, ОГРН, ИНН, почтовые реквизиты, телефон/факс - для юридических лиц;
фамилия, имя, отчество застройщика или технического заказчика, паспортные данные, место проживания, телефон/факс - для физических лиц)" icon="" label="1. Застройщик, технический заказчик"/>
          <v-textarea-with-icon placeholder="(наименование объекта капитального строительства, в соответствии с проектной документацией, краткие проектные характеристики, описание этапа строительства, реконструкции, если разрешение выдается на этап строительства, реконструкции)" icon="" label="2. Объект капитального строительства"/>
          <v-input-with-icon placeholder="(почтовый или строительный адрес объекта капитального строительства)" icon="" label="3. Адрес (местоположение) объекта капитального строительства"/>
          <v-input-with-icon placeholder="(номер и дата выдачи, кем выдано, срок действия)" icon="" label="4. Разрешение на строительство объекта капитального строительства"/>
          <v-input-with-icon placeholder="(номер и дата выдачи, кем выдано)" icon="" label="5. Положительное заключение экспертизы проектной документации, если проектная документация объекта капитального строительства подлежит экспертизе в соответствии с требованиями статьи 49 Градостроительного кодекса Российской Федерации (указание на применение типовой проектной документации или ее модификации, включенной в реестр типовой проектной документации)"/>
          <v-input-with-icon placeholder="(номер и дата выдачи, кем выдано)" icon="" label="6. Положительное заключение государственной экологической экспертизы проектной документации, если проектная документация объекта капитального строительства подлежит государственной экологической экспертизе"/>
          <v-input-date-with-icon icon="" label="7. Начало строительства, реконструкции"/>
          <v-input-date-with-icon icon="" label="8. Окончание строительства, реконструкции"/>
          <v-input-with-icon placeholder="(заполняется в случае внесения изменений)" icon="" label="9. Основания для внесения изменений в программу проведения проверок"/>

          <div class="df jcsb">
            <h1 class="title">
              Программа проведения проверок
            </h1>
            <div @click="modal_show = true">
              <v-icon icon="" class="icon-plus"/>
            </div>
          </div>
          <hr>
          <draggable :list="list" :disabled="!enabled" class="row pr54" ghost-class="ghost" @start="dragging = true" @end="dragging = false" >
              <v-col
                class="list-group-item"
                v-for="element in list"
                :key="element.id"
                cols="6"
              >
                <v-card-block />
              </v-col>
          </draggable>
          <hr>
          <v-input-with-icon placeholder="Заполнено ………" icon="" />
          <v-input-with-icon placeholder="Заполнено ………" icon="" />
        <hr>
      </v-form>
      </div>
    </div>
    <v-col class="pf">
      <v-field-block />
    </v-col>
    <v-modal v-if="modal_show" :modal_show="modal_show" @toggleModal=toggleModal />
  </div>
</template>

<script>
const VIcon = () => import('@/components/v-icon')
const VInputWithIcon = () => import('@/components/v-input-with-icon')
const VInputDateWithIcon = () => import('@/components/v-input-date-with-icon')
const VTextareaWithIcon = () => import('@/components/v-textarea-with-icon')
const VCardBlock = () => import('@/components/v-card-block')
const VModal = () => import('@/components/v-modal')
const VFieldBlock = () => import('@/components/v-field-block')
import draggable from 'vuedraggable'

export default {
  components: {
    VIcon,
    VInputWithIcon,
    VInputDateWithIcon,
    VTextareaWithIcon,
    VCardBlock,
    VModal,
    VFieldBlock,
    draggable
  },
  data: () => ({
    src: 'https://static.thenounproject.com/png/4561-200.png',
    list: [
        { 
          date: '20.08.20 – 28.08.20',
          number: 'Номер объекта контроля 1',
          method: 'Метод 1',
          signature: 'Подпись 1',
          text: 'Любая необходимая информация 1',
          id: 1
        },
        { 
          date: '20.08.20 – 28.08.20',
          number: 'Номер объекта контроля 2',
          method: 'Метод 2',
          signature: 'Подпись 2',
          text: 'Любая необходимая информация 2',
          id: 2
        },
        { 
          date: '20.08.20 – 28.08.20',
          number: 'Номер объекта контроля 3',
          method: 'Метод 3',
          signature: 'Подпись 3',
          text: 'Любая необходимая информация 3',
          id: 3
        }
      ],
    modal_show: false,
    add_fields: [],
    dragging: false,
    enabled: true
  }),
  methods: {
    toggleModal(show) {
      this.modal_show = show
    }
  }
}
</script>

<style scoped>
.doc__block {
  margin-left: 70px;
}
.top10{
  position: relative;
  top: 10px;
}
.pr54 {
  padding-right: 54px;
}
.mb4 {
  margin-bottom: 4px;
}
.mb7 {
  margin-bottom: 7.5px;
}
.mb100 {
  margin-bottom: 100px;
}
.mt100 {
  margin-top: 100px;
}
.mt25 {
  margin-top: 25px;
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
  left: 65.9%;
  padding-top: 76px;
}
hr {
  border: dashed 0.5px var(--dark);
  margin-bottom: 12px;
}
.icon-s {
  font-family: var(--font-awesome-5-pro-light);
  margin-top: 17px;
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
  max-width: 790px;
}
</style>