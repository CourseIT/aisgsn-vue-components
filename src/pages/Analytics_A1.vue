<template>
  <div class="analytics">
    <h1 class="analytics__title">Государственный строительный надзор на объектах ФЯО</h1>
    <DateAndRadioButton />
    <AnalyticsBlock />
  </div>
</template>

<script>
const DateAndRadioButton = () => import('../components/DateAndRadioButton')
const AnalyticsBlock = () => import('../components/AnalyticsBlock')
export default {
  name: 'Analytics_A1',
  components: { DateAndRadioButton, AnalyticsBlock }
}
</script>

<style scoped>
.analytics__title {
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0);
  font-family: Roboto;
  font-size: 24px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.13;
  letter-spacing: normal;
  text-align: left;
  color: red;
  color: var(--dark);
  margin-bottom: 60px;
}
</style>