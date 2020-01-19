<template>
  <div>
    <div class="template-block" :class="{'tb-shadow': shadow}">
      <div class="w90" @click="selectText">
        <p>{{text}}</p>
      </div>
      <div class="icons-block">
        <v-icon icon="" height="11" width="11" class="icon-b mb7"/>
        <v-icon icon="" height="11" width="11" class="icon-b mb3"/>
        <v-icon icon="" height="11" width="11" class="icon-b"/>
      </div>
    </div>
    <div class="bg"></div>
  </div>
</template>

<script>
const VIcon = () => import('./v-icon')

export default {
  props: ['shadow'],
  components: {
    VIcon
  },
  data: () => ({
    text: 'Шаблонный текст 1 …'
  }),
  methods:{
    selectText() {
      this.$emit('selectText', this.text)
    },
  }
}
</script>

<style scoped>
.w90 {
  width: 90%;
}
.mb7 {
  margin-bottom: 7px;
}
.mb3 {
  margin-bottom: 3px;
}
.tb-shadow{
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
}
.template-block:hover {
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
}
.template-block {
  padding-top: 2px;
  display: flex;
  justify-content: space-between;
  background: #fff;
  padding: 4px 8px;
  padding-right: 12px;
  border-radius: 4px;
  width: 100%;
  height: 50px;
  z-index: 9;
  position: relative;
  overflow: auto;  
  transition: all 0.2s ease-out;
  cursor: pointer;
  margin-bottom: 6px;
}
.template-block:hover{
  background: var(--pale-lilac);
}
.template-block p {
  font-family: Roboto;
  font-size: 9px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.89;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
}
.template-block:hover p {
  color: var(--bright-orange);
}
.icon-b {
  font-size: 11px;
  font-family: var(--font-awesome-5-pro-light);
  cursor: pointer;
  font-weight: bold;
}
</style>