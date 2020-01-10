<template>
  <div class="w132">
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          v-on="on"
          block
          v-ripple="false"
          class="dropdown"
        >
        <div>
          {{select}}
        </div>
          <Icon class="icon" icon="" />
        </v-btn>
      </template>
      <v-btn @click="select = item" v-for="(item, index) in selects" :key="index" class="dropdown dropdown__btn">
        <div>
          {{item}}
        </div>
      </v-btn>
    </v-menu>
  </div>
</template>

<script>
const Icon = () => import('./Icon')
export default {
  components: {
    Icon
  },
  data: () => ({
    select: 'Выбор',
    selects: ['Выбор', 'Выбор', 'Выбор', 'Выбор']
  })
}
</script>

<style scoped>
.w132 {
  width: 132px;
}
.icon {
  font-family: var(--font-awesome-5-pro-light);
  margin-top: 0px;
  font-size: 28px;
  text-align: center;
  float: right;
  transition: all 0.2s ease-out;
}
.dropdown {
  width: 132px !important;
  height: 36px !important;
  box-shadow: none;
  display: flex;
  font-family: Roboto;
  padding: 0px;
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: normal;
  text-align: center;
  text-transform: none;
  margin: 0px;
  margin-bottom: 6px;
  justify-content: space-between;
  background: var(--pale-lilac) !important;
}
.v-btn:not(.v-btn--round).v-size--default {
  padding-left: 34px;
  padding-right: 12px !important;
}
.v-btn__content {
  justify-content: space-between;
}
.v-btn:before {
  background: none;
}
.v-menu__content {
  padding: 0px 5px !important;
  margin-left: -5px;
  margin-top: 0px;
  box-shadow: none;
}
.dropdown:hover {
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
  padding-right: 50px !important;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: normal;
  background-color: #fff !important;
  border-radius: 4px;
  justify-content: end;
  margin: 6px 0px !important;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.22) !important;
}
.dropdown__btn:hover {
  background: var(--pale-lilac) !important;
  color: #ff6100;
}
</style>