<template>
  <div class="input-block">
    <p v-if="label" class="label">{{label}}</p>
    <div class="df">
      <input v-model="input_value" :placeholder="placeholder" class="input" type="text">
      <div class="w58"></div>
      <div class="select-block">
        <ul>
          <li @click="input_value = `${input_value} ${item}`" v-for="(item, index) in list" :key="index">{{item}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['placeholder', 'value', 'label'],
  data: () => ({
    input_value: '',
    list: [
      'Объект КС 1',
      'Объект КС 2',
      '...',
      '...'
    ]
  }),
}
</script>
<style scoped>
.df {
  display: flex;
}
.w58{
  width: 58px;
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
  width: 96%;
}
.input-block {
  margin-bottom: -15px;
}
.icon:hover + .select-block {
  display: block;
}
.input:focus + .select-block {
  display: block;
}
.input {
  font-family: Roboto;
  height: 36px;
  outline: none;
  width: 100%;
  background-color: #fff !important;
  padding: 3px 15px;
  border-radius: 4px;
  border: 1px solid #fff;
  margin-bottom: 30px;
  height: 36px;
  width: 96%;
}
.input::placeholder {
  font-family: Roboto;
  font-size: 9px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  color: var(--blue-grey);
}
.select-block {
  position: absolute;
  z-index: 99;
  margin-top: 42px;
  display: none;
}
.select-block:hover {
  display: block;
}
.select-block ul {
  padding: 0px;
  list-style-type: none;
  z-index: 99;
  width: 200px;
  border-radius: 4px;
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
  background-color: var(--white);
}
.select-block ul li {
  font-family: Roboto;
  font-size: 15px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
  padding: 6px 14px;
  cursor: pointer;
  transition: all 0.2s ease-out;
}
.select-block ul li:hover {
  color: var(--bright-orange);
}
</style>