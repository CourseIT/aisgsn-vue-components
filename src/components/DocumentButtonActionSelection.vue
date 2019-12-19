<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on }">
      <v-btn
        color="#e5e5ea"
        v-on="on"
        block
        class="dropdown"
      >
        Выбор действия
        <Icon class="icon" style="margin-top: 0px;" icon="" />
      </v-btn>
    </template>
    <v-btn class="dropdown dropdown__btn">
      Подписать документ
      <Icon class="icon" style="margin-top: 0px;" icon="" />
    </v-btn>
    <v-btn class="dropdown dropdown__btn">
      Вернуть на доработку
      <Icon class="icon" style="margin-top: 0px;" icon="" />
    </v-btn>
  </v-menu>
</template>

<script>
const Icon = () => import('./Icon')
export default {
  components: {
    Icon
  }
}
</script>

<style scoped>
.icon {
  font-family: "Font Awesome 5 Pro";
  margin-top: 9px;
  font-size: 21px;
  width: 5%;
  text-align: center;
}
.dropdown {
  box-shadow: none;
  width: 260px;
  display: flex;
  font-family: Roboto;
  font-size: 11px !important;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: normal;
  text-align: center;
  text-transform: none !important;
  margin: 3px 0px;
  justify-content: space-around !important;
}
.dropdown:focus .icon {
  color: #ff6100;
}
.dropdown__btn {
  text-transform: none !important;  
  width: 100%;
  font-family: Roboto;
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: normal;
  background-color: #fff !important;
  text-align: center;
  border-radius: 4px;
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.103);
}
.v-menu__content {
  box-shadow: none !important;
}
</style>