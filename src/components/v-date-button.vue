<template>
  <div class="date-btn__block">
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      min-width="290px"
    >
      <template v-slot:activator="{ on }">
        <button v-on="on" class="date__btn">
          <div v-on="on" @click="date = new Date().toISOString().substr(0, 10)">
            <v-icon v-if="date != new Date().toISOString().substr(0, 10)" class="icon-colse" width="15" icon="" />
          </div>
          <p :class="{'pl15': date == new Date().toISOString().substr(0, 10)}">{{day}}.{{month}}.{{year}}</p>
          <v-icon v-on="on" class="icon w19" width="19" icon="" />
        </button>
      </template>
      <v-date-picker color="#8d43ff" :first-day-of-week="1" v-model="date" no-title scrollable>
      </v-date-picker>
    </v-menu>
  </div>
</template>

<script>
const VIcon = () => import('@/components/v-icon')

export default {
  components: { VIcon },
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
  }),
  watch: {
    date() {
      this.$emit('input', `${this.day},${this.month},${this.year}`)
    }
  },
  computed: {
    year() {
      return this.date.substr(0, 4)
    },
    month() {
      return this.date.substr(5, 2)
    },
    day() {
      return this.date.substr(8, 2)
    }
  }
}
</script>

<style>
.test {
  position: relative;
  z-index: 100;
}
.w19 {
  width: 19px !important;
}
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
.v-date-picker-header__value button {
  font-weight: normal;
  text-transform: capitalize;
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
  padding: 0px 10px;
  border-radius: 4px;
  transition: all 0.2s ease-out;
  margin: 0px;
  margin-bottom: 7px;
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
  width: 19px;
  line-height: 1.67;
  letter-spacing: normal;
  text-align: center;
  color: var(--dark);
  transition: all 0.2s ease-out;
}
.date-btn__block .icon-colse {
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0);
  font-family: FontAwesome5Pro;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
  z-index: 9;
}
.date-btn__block .icon-colse:hover .icon{
  color: var(--bright-orange);
}
.date-btn__block .icon-colse .icon {
  font-size: 15px !important;
  z-index: 9;
}
.date-btn__block .date__btn:hover {
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
}
.date-btn__block .date__btn:focus {
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
}
.date-btn__block .date__btn:hover .icon {
  color: var(--bright-orange);
}
.date-btn__block .date__btn:focus .icon {
  color: var(--bright-orange);
}
</style>