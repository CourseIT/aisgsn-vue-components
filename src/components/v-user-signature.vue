<template>
  <div class="dropdown__users">
    <div>
      <p class="dropdown__user-title">{{title}}</p>
      <p class="dropdown__user-name">{{name}}</p>
    </div>
    <div @click="icon_action">
      <v-icon class="icon" data-title="Проверить подпись" style="margin-top: 0px;" icon="" />
    </div>
  </div>
</template>

<script>
const VIcon = () => import('./v-icon')

export default {
  components: {
    VIcon
  },
  props: {
    icon_action: {
      default: ()=>({})
    },
    title: {},
    name: {}
  }
}
</script>

<style scoped>
.dropdown__users {
  display: flex;
  padding: 4px 8px;
  width: 200px;
  height: 36px;
  justify-content: space-between;
  margin-bottom: 5px;
  border-radius: 4px;
  box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.22) !important;
  background: #fff;
}
.dropdown__user-title {
  font-family: Roboto;
  font-size: 12px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
  margin-bottom: 0px !important;
}
.dropdown__user-name {
  font-family: Roboto;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
  margin-bottom: 0px;
}
.dropdown__users .icon {
  cursor: pointer;
  margin-top: 2px !important;
  position: relative;
  bottom: 6px;
  left: 10px;
}
.icon {
  cursor: pointer;
  font-family: var(--font-awesome-5-pro-light);
  margin-top: 9px;
  font-size: 21px;
  text-align: center;
}
[data-title] {
  position: relative;
}
[data-title]:hover::before {
  content: attr(data-title);
  position: absolute;
  bottom: 40px;
  left: -53px;
  display: inline-block;
  padding: 5px 16px;
  border-radius: 2px;
  background: #000;
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
  border-radius: 5px;
  color: #fff;
  font-size: 12px;
  font-family: sans-serif;
  white-space: nowrap;
}
[data-title]:hover::after {
  content: '';
  position: absolute;
  bottom: 25px;
  left: 10px;
  display: inline-block;
  color: #fff;
  border: 8px solid transparent;	
  border-bottom: 8px solid #000;
  transform: rotate(180deg);
}
</style>