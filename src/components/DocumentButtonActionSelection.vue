<template>
  <div>
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          v-on="on"
          block
          v-ripple="false"
          class="dropdown"
        >
        <div class="w80">
          Выбор действия
        </div>
          <Icon class="icon" style="margin-top: 0px;" icon="" />
        </v-btn>
      </template>
      <v-btn class="dropdown dropdown__btn">
        <div class="w80">
          Подписать документ
        </div>
        <Icon class="icon ff-light" style="margin-top: 0px;" icon="" />
      </v-btn>
      <v-btn class="dropdown dropdown__btn">
        <div class="w80">
          Вернуть на доработку
        </div>
        <Icon class="icon ff-light" style="margin-top: 0px;" icon="" />
      </v-btn>
    </v-menu>
  </div>
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
.w80 {
  width: 80%;
}
.ff-light {
  font-family: var(--font-awesome-5-pro-light) !important;
}
.icon {
  font-family: var(--font-awesome-5-pro);
  margin-top: 9px;
  font-size: 21px;
  width: 5%;
  text-align: center;
  float: right;
  width: 20%;
  transition: all 0.2s ease-out;
}
.dropdown {
  box-shadow: none;
  display: flex;
  font-family: Roboto;
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: normal;
  text-align: center;
  text-transform: none;
  margin: 3px 0px;
  justify-content: space-around;
  background: var(--pale-lilac) !important;
}
.v-btn:before {
  background: none;
}
.dropdown:hover ::before{
  background: var(--pale-lilac) !important;
}
.dropdown:active ::before{
  background: var(--pale-lilac) !important;
}
.dropdown:focus .icon {
  color: #ff6100;
}
.dropdown__btn {
  text-transform: none;  
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
  margin: 7px 0px !important;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.22) !important;
}
.v-menu__content {
  box-shadow: none;
}
</style>