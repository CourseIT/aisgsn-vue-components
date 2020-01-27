<template>
  <div>
    <div class="df">
      <p class="doc__title">Заявитель (уточняется)</p>
      <p class="title-value">{{doc_info.declarant}}</p>
    </div>
    <div class="df">
      <p class="doc__title">Название проверки (уточняется)</p>
      <p class="title-value">{{doc_info.title_of_verification}}</p>
    </div>
    <div class="df">
      <p class="doc__title">Проверяющий (уточняется)</p>
      <p class="title-value">{{doc_info.inspector}}</p>
    </div>
    <div class="df">
      <p class="doc__title">Сроки проведения</p>
      <p class="title-value color-orange">{{doc_info.dates}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['doc_info']
}
</script>

<style scoped>
.doc__title {
  width: 190px;
  font-family: Roboto;
  font-size: 11px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
  margin-bottom: 14px;
}
.title-value {
  font-family: Roboto;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
}
</style>