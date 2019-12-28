<template>
  <div class="input-block">
    <p v-if="label" class="label">{{label}}</p>
    <div class="df">
      <input v-model="value" class="input" type="text">
      <Icon :icon="icon" class="icon"/>
    </div>
  </div>
</template>

<script>
const Icon = () => import('./Icon')
export default {
  props: ['placeholder', 'value', 'icon', 'label'],
  components: {
    Icon
  }
}
</script>

<style scoped>
.df {
  display: flex;
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
.input-block {
  margin-bottom: -15px;
}
.icon {
  cursor: pointer;
  height: 36px;
  font-family: var(--font-awesome-5-pro-light);
  font-size: 25px;
  width: 5%;
  text-align: center;
}
.input {
  font-family: Roboto;
  height: 36px;
  outline: none;
  width: 100%;
  background-color: #fff !important;
  padding: 3px;
  border-radius: 4px;
  border: 1px solid #fff;
  margin-bottom: 30px;
}
</style>