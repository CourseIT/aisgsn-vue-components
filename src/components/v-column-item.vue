<template>
  <div class="column__item">
    <div @click="action(text)" class="circle__block">
        <div v-if="text == item_value || list.includes(text)" class="circle"></div>
    </div>
      <p @click="action(text)" class="column__text">{{text}}</p>
    <v-icon :action="action_minus" class="icon" icon="" hover_color="true" />
  </div>
</template>

<script>
const VIcon = () => import('./v-icon')

export default {
  props: {
    item_value: {
      default: ''
    },
    list: {
      default: function() {
        return () => []
      }
    },
    text: {},
    action: {},
    action_minus: {
      default: function() {
        return () => ({})
      }
    },
  },
  components: {
    VIcon
  }
}
</script>

<style scoped>
.column__item {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  height: 36px;
  background-color: var(--light-grey);
  border-radius: 4px;
  margin-bottom: 6px;
  cursor: pointer;
}
.circle__block {
    width: 22px;
  height: 22px;
  border-radius: 4px;
  background-color: var(--pre-light);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 3px;
}
.circle {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--weird-green);
}
.column__text {
  font-family: Roboto;
  font-size: 12px;
  font-weight: 300;
  height: 36px;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: center;
  color: var(--dark2);
  margin-bottom: 0;
  width: 180px;
  position: relative;
  padding-top: 10px;
  bottom: 10px;
}
.icon {
    font-size: 15px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.53;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark2);
  width: 15px;
  height: 15px;
  margin-top: 2px;
}
</style>