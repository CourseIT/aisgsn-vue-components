<template>
    <v-row>
      <v-col cols="8">
        <div class="df jcsb">
          <div class="w95">
            <h1 class="title">
              Заявка на выполнение испытаний (измерений) на объектах 
              капитального строительства для включения в план ОТКИ УГСН
            </h1>
          </div>
          <Icon icon="" class="icon-s mt0"/>
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
          <div class="df jcsb w95">
            <p class="label">Провести испытания (измерения) объектов контроля следующим работникам:</p>
            <Icon icon="" class="icon-plus"/>
          </div>
          <hr>
          <InputWithIcon placeholder="Заполнено ………" icon="" />
          <InputWithIcon placeholder="Заполнено ………" icon="" />
          <InputWithIcon placeholder="Заполнено ………" icon="" />
          <InputWithIcon placeholder="Заполнено ………" icon="" />
          <InputDateWithIcon icon=""/>

          <div class="df jcfe w95">
            <Icon icon="" class="icon-plus"/>
          </div>
        <hr>
      </v-form>
      <div class="df jcsb">
          <div class="w95">
          </div>
          <Icon icon="" class="icon-s mt0"/>
        </div>
    </v-col>
    <v-col cols="2">
      <DocumentButtonActionSelection />
      <DocumentImgBlock />
    </v-col>
  </v-row>
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
.w95 {
  width: 95%;
}
hr {
  border: dashed 0.5px #000;
  margin-bottom: 12px;
}
.icon-s {
  font-family: var(--font-awesome-5-pro-light);
  margin-top: 9px;
  font-size: 21px;
  width: 5%;
  text-align: center;
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