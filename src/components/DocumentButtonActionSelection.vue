<template>
  <div class="w262">
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
          <Icon class="icon" icon="" />
        </v-btn>
      </template>
      <v-btn class="dropdown dropdown__btn">
        <div class="w80">
          Подписать документ
        </div>
        <Icon class="icon ff-light" icon="" />
      </v-btn>
      <v-btn class="dropdown dropdown__btn">
        <div class="w80">
          Вернуть на доработку
        </div>
        <Icon class="icon ff-light" icon="" />
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
.w262 {
  width: 262px;
}
.ff-light {
  font-size: 22px !important;
  padding-left: 10px;
}
.icon {
  font-family: var(--font-awesome-5-pro-light);
  margin-top: 0px;
  font-size: 33px;
  width: 5%;
  text-align: center;
  float: right;
  width: 20%;
  transition: all 0.2s ease-out;
}
.dropdown {
  width: 262px !important;
  height: 36px !important;
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
.v-menu__content {
  padding: 0px 15px !important;
  padding-bottom: 20px !important;
  margin-left: -15px;
}
.dropdown:hover {
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.22) !important;
}
.dropdown:focus {
   box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.22) !important;
}
.dropdown:hover ::before{
  background: var(--pale-lilac) !important;
}
.dropdown:active ::before{
  background: var(--pale-lilac) !important;
}
.dropdown:hover .icon {
  color: #ff6100;
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
.dropdown__btn:hover {
  background: var(--pale-lilac) !important;
  color: #ff6100;
}
.v-menu__content {
  box-shadow: none;
}
</style>