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
          <Icon icon="" class="icon-s mt0"/>
        </div>
        <v-form
          ref="form"
        >
          <InputWithIcon placeholder="                    №" icon="" label="Программа проверок"/>
          <InputWithIcon placeholder="(Имя, Отчество, Фамилия)" icon="" label="Утверждаю Начальник Управления"/>
          <InputDateWithIcon icon="" label="Дата"/>
          <InputWithIcon placeholder="(значение)" icon="" label="Номер дела"/>
          <InputWithIcon placeholder="(значение)" icon="" label="Экземпляр"/>
          <TextareaWithIcon placeholder="(наименование застройщика, технического заказчика (при наличии технического заказчика), номер и дата выдачи свидетельства о государственной регистрации, ОГРН, ИНН, почтовые реквизиты, телефон/факс - для юридических лиц;
фамилия, имя, отчество застройщика или технического заказчика, паспортные данные, место проживания, телефон/факс - для физических лиц)" icon="" label="1. Застройщик, технический заказчик"/>
          <TextareaWithIcon placeholder="(наименование объекта капитального строительства, в соответствии с проектной документацией, краткие проектные характеристики, описание этапа строительства, реконструкции, если разрешение выдается на этап строительства, реконструкции)" icon="" label="2. Объект капитального строительства"/>
          <InputWithIcon placeholder="(почтовый или строительный адрес объекта капитального строительства)" icon="" label="3. Адрес (местоположение) объекта капитального строительства"/>
          <InputWithIcon placeholder="(номер и дата выдачи, кем выдано, срок действия)" icon="" label="4. Разрешение на строительство объекта капитального строительства"/>
          <InputWithIcon placeholder="(номер и дата выдачи, кем выдано)" icon="" label="5. Положительное заключение экспертизы проектной документации, если проектная документация объекта капитального строительства подлежит экспертизе в соответствии с требованиями статьи 49 Градостроительного кодекса Российской Федерации (указание на применение типовой проектной документации или ее модификации, включенной в реестр типовой проектной документации)"/>
          <InputWithIcon placeholder="(номер и дата выдачи, кем выдано)" icon="" label="6. Положительное заключение государственной экологической экспертизы проектной документации, если проектная документация объекта капитального строительства подлежит государственной экологической экспертизе"/>
          <InputDateWithIcon icon="" label="7. Начало строительства, реконструкции"/>
          <InputDateWithIcon icon="" label="8. Окончание строительства, реконструкции"/>
          <InputWithIcon placeholder="(заполняется в случае внесения изменений)" icon="" label="9. Основания для внесения изменений в программу проведения проверок"/>
          <div class="df">
            <div class="w95">
              <h1 class="title">
                Программа проведения проверок
              </h1>
            </div>
            <div @click="addItem">
              <Icon icon="" class="icon-plus"/>
            </div>
          </div>
          <hr>
          <v-row class="pr40">
            <v-col v-for="(item, index) in inspection_items" :key="index"  cols="6">
              <div class="df inspection-program-block">
                <div class="w95">
                  <p class="mb7">20.08.20 – 28.08.20</p>
                  <p class="mb4">Любая необходимая информация</p>
                  <p class="mb4">Любая необходимая информация</p>
                  <p>Любая необходимая информация</p>
                </div>
                <div>
                  <Icon icon="" class="icon-p"/>
                  <div class="top10" @click="removeItem(item)">
                    <Icon icon="" class="icon-p"/>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
          <hr>
          <InputWithIcon placeholder="Заполнено ………" icon="" />
          <InputWithIcon placeholder="Заполнено ………" icon="" />
        <hr>
      </v-form>
      <div class="df jcsb">
        <div class="w95">
        </div>
        <Icon icon="" class="icon-s mt0 mb100"/>
        <DocumentButtonActionSelection style="position: absolute; left: 67%; margin-top: 10px"/>
      </div>
      </div>
    </div>
    <v-col>
      <DocumentButtonActionSelection />
      <DocumentImgBlock img="true"/>
    </v-col>
  </div>
</template>

<script>
const Icon = () => import('../components/Icon')
const DocumentButtonActionSelection = () => import('../components/DocumentButtonActionSelection')
const DocumentImgBlock = () => import('../components/DocumentImgBlock')
const InputWithIcon = () => import('../components/InputWithIcon')
const InputDateWithIcon = () => import('../components/InputDateWithIcon')
const TextareaWithIcon = () => import('../components/TextareaWithIcon')
export default {
  components: {
    Icon,
    DocumentButtonActionSelection,
    DocumentImgBlock,
    InputWithIcon,
    InputDateWithIcon,
    TextareaWithIcon
  },
  data: () => ({
    item: 1,
    inspection_items: [1]
  }),
  methods: {
    addItem() {
      this.item += 1
      this.inspection_items.push(this.item)
    },
    removeItem(item) {
      this.inspection_items = this.inspection_items.filter( x => x != item )
    }
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
.top10{
  position: relative;
  top: 10px;
}
.pr40 {
  padding-right: 40px;
}
.mb4 {
  margin-bottom: 4px;
}
.mb7 {
  margin-bottom: 7px;
}
.mb100 {
  margin-bottom: 100px;
}
.mt0 {
  margin-top: 0px;
}
.mt25 {
  margin-top: 25px;
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
  text-align: left;
  width: 65px;
  position: relative;
  right: 20px;
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
.inspection-program-block {
  padding: 7px 13px;
  border-radius: 4px;
  background-color: var(--white);
}
.inspection-program-block p {
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0);
  font-family: Roboto;
  font-size: 11px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
  margin-bottom: 0;
}
.icon-p {
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0);
  font-family: var(--font-awesome-5-pro-light);
  cursor: pointer;
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
}
</style>