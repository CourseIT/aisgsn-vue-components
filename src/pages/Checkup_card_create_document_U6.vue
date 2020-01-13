<template>
  <div class="df">
    <div class="w66"  :class="{pl305: $store.state.menu_visibility}">
      <div >
        <div class="df jcsb">
          <div class="w95">
            <h1 class="title">
              Извещение о начале строительства, реконструкции объекта капитального строительства
              федеральной ядерной организации (У6)
            </h1>
          </div>
          <Icon icon="" class="icon-s mt0"/>
        </div>
        <v-form
          ref="form"
        >
          <InputWithIcon placeholder="(наименование юридического лица - застройщика, ИНН; юридический и почтовый адреса; должность, ФИО руководителя; телефон)" icon="" label="От"/>
          <Input placeholder="№" label="Извещение о начале строительства, реконструкции объекта капитального строительства федеральной ядерной Организации (У6)"/>
          <InputDateWithIcon icon="" label="Дата"/>
          <TextareaWithIcon placeholder="(наименование застройщика, технического заказчика (при наличии технического заказчика), номер и дата выдачи свидетельства о государственной регистрации, ОГРН, ИНН, почтовые реквизиты, телефон/факс - для юридических лиц; фамилия, имя, отчество застройщика или технического заказчика, паспортные данные, место проживания, телефон/факс - для физических лиц)" icon="" label="1. Застройщик, технический заказчик"/>
          <TextareaWithIcon placeholder="(наименование объекта капитального строительства, в соответствии с проектной документацией, краткие проектные характеристики, описание этапа строительства, реконструкции, если разрешение выдается на этап строительства, реконструкции)" icon="" label="2. Объект капитального строительства"/>
          <InputWithIcon placeholder="(почтовый или строительный адрес объекта капитального строительства)" icon="" label="3. Адрес (местоположение) объекта капитального строительства"/>
          <InputWithIcon placeholder="(номер и дата выдачи, кем выдано, срок действия)" icon="" label="4. Разрешение на строительство объекта капитального строительства"/>
          <InputWithIcon placeholder="(номер и дата выдачи, кем выдано)" icon="" label="5. Положительное заключение экспертизы проектной документации, если проектная документация объекта капитального строительства подлежит экспертизе в соответствии с требованиями статьи 49 Градостроительного кодекса Российской Федерации (указание на применение типовой проектной документации или ее модификации, включенной в реестр типовой проектной документации)"/>
          <InputWithIcon placeholder="(номер и дата выдачи, кем выдано)" icon="" label="6. Положительное заключение государственной экологической экспертизы проектной документации, если проектная документация объекта капитального строительства подлежит государственной экологической экспертизе"/>
          <InputDateWithIcon icon="" label="7. Начало строительства, реконструкции"/>
          <InputDateWithIcon icon="" label="8. Окончание строительства, реконструкции"/>
          <InputWithIcon placeholder="" icon="" label="9. Перечень индивидуальных предпринимателей или юридических лиц, осуществляющих строительство, привлекаемых застройщиком или техническим Формы документов 36 Шаблон извещения о начале строительства, реконструкции объекта капитального строительства федеральной ядерной организации (У6) Заказчиком на основании договора, с указанием свидетельств о допуске к определенному виду или видам работ, которые оказывают влияние на безопасность объектов капитального строительства,и наименования саморегулируемых организаций, членами которых они являются"/>
          <InputWithIcon placeholder="(документы, прилагаемые к извещению в соответствии с частью 5 статьи 52 Градостроительного кодекса Российской Федерации)" icon="" label="10. К настоящему извещению прилагаются:"/>
          <hr>
          <InputWithIcon placeholder="(должность.)" icon="" />
          <InputWithIcon placeholder="(расшифровка подписи)" icon="" />
        <hr>
      </v-form>
      </div>
    </div>
    <v-col class="pf">
      <DocumentButtonActionSelection />
      <DocumentImgBlock :img="false" class="mt100"/>
    </v-col>
  </div>
</template>

<script>
const Icon = () => import('../components/Icon')
const DocumentButtonActionSelection = () => import('../components/DocumentButtonActionSelection')
const DocumentImgBlock = () => import('../components/DocumentImgBlock')
const Input = () => import('../components/Input')
const InputWithIcon = () => import('../components/InputWithIcon')
const InputDateWithIcon = () => import('../components/InputDateWithIcon')
const TextareaWithIcon = () => import('../components/TextareaWithIcon')
export default {
  components: {
    Icon,
    DocumentButtonActionSelection,
    DocumentImgBlock,
    Input,
    InputWithIcon,
    InputDateWithIcon,
    TextareaWithIcon
  },
  data: () => ({
    
  }),
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