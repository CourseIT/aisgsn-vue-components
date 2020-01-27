<template>
  <div class="input-block" :style="{'width': width}">
    <p v-if="label" class="label">{{label}}</p>
    <div v-if="type == 'textarea'">
      <textarea class="textarea" :placeholder="placeholder" v-model="input_value" cols="10" rows="4"></textarea>
      <div v-if="select_block_show" class="select-block select-block_textarea">
        <ul>
          <li @click="input_value = `${input_value} ${item}`" v-for="(item, index) in list" :key="index">{{item}}</li>
        </ul>
      </div>
    </div>
    <div v-else-if="type == 'number'">
      <input v-model="input_value" :placeholder="placeholder" class="input" type="number">
    </div>
    <div v-else class="df">
      <input v-model="input_value" :placeholder="placeholder" class="input" type="text">
      <div v-if="select_block_show" class="select-block">
        <ul>
          <li @click="input_value = `${input_value} ${item}`" v-for="(item, index) in list" :key="index">{{item}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['placeholder', 'value', 'label', 'type', 'list', 'width'],
  data: () => ({
    select_block_show: false,
    input_value: ''
  }),
  watch: {
    input_value(value) {
      this.$emit('input', value)
      this.select_block_show = true
      setTimeout(() => {
        if(value === this.input_value) {
          this.select_block_show = false
        }
      }, 2000)
    }
  }
}
</script>
<style scoped>
.w74{
  width: 74px;
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
  width: 100%;
}
.input-block {
  width: 100%;
  margin-bottom: -15px;
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
  width: 100%;
}
.textarea {
  width: 100%;
  outline: none;
  padding: 9px 15px;
  border-radius: 4px;
  background-color: var(--white);
  font-family: Roboto;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  resize : none;
  height: 95px;
  margin-bottom: 20px;
}
.textarea::placeholder {
  padding-top: 5px;
  font-size: 9px;
  color: var(--blue-grey);
}
.input::placeholder {
  font-family: Roboto;
  font-size: 10px;
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
}
.select-block_textarea {
  margin-top: -20px;
}
.select-block:hover {
  display: block;
}
.select-block ul {
  padding: 0px;
  list-style-type: none;
  z-index: 99;
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