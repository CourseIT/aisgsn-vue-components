<template>
  <div class="input-date">
    <div class="input-block">
      <p class="label">{{label}}</p>
      <div class="df" 
        @click="menu = true">
        <input v-model="dateRangeText" class="input" type="text">
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          min-width="290px"
          selected-items-text="ru"
        >
          <template v-slot:activator="{ on }">
            <div class="icon-date" v-on="on">
              <Icon :icon="icon" :hover_shadow="true" :hover_color="true" :color="menu ? '#fb6229' : 'black' " class="icon-block"/>
            </div>
          </template>
          <v-date-picker v-model="date" no-title :first-day-of-week="1" show-current color="#8d43ff" range>
          </v-date-picker>
        </v-menu>
      </div>
    </div>
  </div>
</template>

<script>
const Icon = () => import('./Icon')

export default {
  props: ['placeholder', 'value', 'icon', 'label'],
  components: {
    Icon
  },
  data: () => ({
    date: [],
    menu: false
  }),
  computed: {
    dateRangeText () {
      return this.date.join(' - ')
    },
  },
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
.v-date-picker-header__value button {
  font-weight: normal;
  text-transform: capitalize;
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
.input-date .theme--light.v-input--is-disabled .v-label, .theme--light.v-input--is-disabled input, .theme--light.v-input--is-disabled textarea {
  color: #000;
}
.df {
  display: flex;
}
.input-date .label {
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
  width: 95%;
}
.input-date .input-block {
  margin-bottom: -15px;
  cursor: pointer;
}
.input-date .icon-date {
  cursor: pointer;
  height: 40px;
  font-family: var(--font-awesome-5-pro-light);
  margin-top: 00px;
  font-size: 21px;
  padding: 0px 18px;
  text-align: center;
}
.input {
  font-family: Roboto;
  font-size: 15px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.93;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
  height: 36px;
  outline: none;
  width: 100%;
  background-color: #fff !important;
  padding: 3px 15px;
  border-radius: 4px;
  border: 1px solid #fff;
  margin-bottom: 30px;
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
</style>