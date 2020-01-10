<template>
  <div class="date-btn__block">
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      :return-value.sync="date"
      transition="scale-transition"
      offset-y
      min-width="290px"
    >
      <template v-slot:activator="{ on }">
        <button class="date__btn" v-on="on">
          <p>{{date}} </p>
          <Icon class="icon" icon="" />
        </button>
      </template>
      <v-date-picker color="#8d43ff" v-model="date" no-title scrollable>
      </v-date-picker>
    </v-menu>
  </div>
</template>

<script>
const Icon = () => import('../components/Icon')
export default {
  components: { Icon },
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
  }),
}
</script>

<style>
.v-date-picker-header {
  padding: 8px 0px;
}
.v-date-picker-table {
  padding: 0px;
  height: 215px;
}
.v-date-picker-table table{
  border-spacing: 0px
}
.v-date-picker-table table thead {
  background-color: var(--pale-lilac);
}
.v-date-picker-table--date .v-btn {
  margin: 2px !important;
}
.v-date-picker-header__value {
  font-family: Roboto;
  font-size: 12px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: center;
  color: var(--dark);
}
.theme--light.v-date-picker-header .v-date-picker-header__value:not(.v-date-picker-header__value--disabled) button:not(:hover):not(:focus) {
  font-weight: normal;
}
.v-date-picker-header .v-btn--icon::before {
  width: 0px;
}
.v-btn--icon.v-size--default .v-icon, .v-btn--fab.v-size--default .v-icon{
  width: 22px !important;
  border-radius: 0px;
  padding: 0px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  margin: 0px 10px;
}
.v-date-picker-header .v-ripple__container{
  display: none;
}
.v-menu__content {
  margin-top: 6px;
}
.date-btn__block .date__btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 132px;
  height: 36px;
  background-color: var(--pale-lilac);
  padding-left: 20px;
  padding-right: 14px;
  border-radius: 4px;
  transition: all 0.2s ease-out;
  margin: 3px 0px;
  outline: none;
}
.date-btn__block .date__btn p {
  margin-bottom: 0;
  font-family: Roboto;
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: normal;
  color: var(--dark);
}
.date-btn__block .icon {
  font-family: var(--font-awesome-5-pro-light);
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  text-align: center;
  color: var(--dark);
  transition: all 0.2s ease-out;
}
.date-btn__block .date__btn:hover {
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
}
.date-btn__block .date__btn:hover .icon {
  color: var(--bright-orange);
}
.date-btn__block .date__btn:focus .icon {
  color: var(--bright-orange);
}
</style>