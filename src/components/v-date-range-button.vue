<template>
  <div class="date-range-btn__block">
    <div v-if="date_range_input_show">
      <div class="date-range-btn-input">
        <input v-model="date_range_input" type="text" autofocus>
        <v-icon :action="emitDateRangeInput" class="icon-apply" width="15" icon="" />
      </div>
    </div>
    <v-menu
      v-else
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      min-width="290px"
      selected-items-text="ru"
    >
      <template v-slot:activator="{ on }">
        <button v-on="on" class="df date__btn">
          <div v-on="on" @click="clearDate">
            <v-icon v-if="date.length > 1 || date[0] != new Date().toISOString().substr(0, 10)" class="icon-colse" width="15" icon="" />
          </div>
          <button class="hover" v-on="on">
            <p @click="date_range_input_show = true" class="pl25">{{dateRangeText}} </p>
          </button>
          <v-icon class="icon hover" width="19" icon="" />
        </button>
      </template>
      <v-date-picker color="#8d43ff" :first-day-of-week="1" v-model="date" no-title scrollable range>
      </v-date-picker>
    </v-menu>
  </div>
</template>

<script>
const VIcon = () => import('@/components/v-icon')

export default {
  components: { VIcon },
  data: () => ({
    date: [new Date().toISOString().substr(0, 10)],
    date_range_input: `${new Date().toISOString().substr(8, 2)}.${new Date().toISOString().substr(5, 2)}.${new Date().toISOString().substr(0, 4)}`,
    menu: false,
    modal: false,
    date_range_input_show: false
  }),
  mounted() {
    this.$emit('input', this.date_range_input)
  },
  watch: {
    date() {
      this.$emit('input', this.dateRangeText)
      this.date_range_input = `${this.date[0].substr(8, 2)}.${this.date[0].substr(5, 2)}.${this.date[0].substr(0, 4)} – ${this.date[1].substr(8, 2)}.${this.date[1].substr(5, 2)}.${this.date[1].substr(0, 4)}`
    }
  },
  computed: {
    dateRangeText () {
      if(this.date.length > 1) {
        return `${this.date[0].substr(8, 2)}.${this.date[0].substr(5, 2)}.${this.date[0].substr(0, 4)} – ${this.date[1].substr(8, 2)}.${this.date[1].substr(5, 2)}.${this.date[1].substr(0, 4)}`
      } else {
        return `${this.date[0].substr(8, 2)}.${this.date[0].substr(5, 2)}.${this.date[0].substr(0, 4)}`
      }
    },
  },
  methods: {
    emitDateRangeInput() {
      this.date_range_input_show = false
      this.$emit('input', this.date_range_input)
      if(this.date_range_input.length > 13) {
        const date1 = this.date_range_input.split('–')[0].replace(/\s+/g, '').replace(/\./g, "-")
        const date2 = this.date_range_input.split('–')[1].replace(/\s+/g, '').replace(/\./g, "-")
        window.console.log(date1, date2)
        this.date = [`${date1.split('-')[2]}-${date1.split('-')[1]}-${date1.split('-')[0]}`, `${date2.split('-')[2]}-${date2.split('-')[1]}-${date2.split('-')[0]}`]
      } else {
        const date1 = this.date_range_input.split('–')[0].replace(/\s+/g, '').replace(/\./g, "-")
        this.date = [`${date1.split('-')[2]}-${date1.split('-')[1]}-${date1.split('-')[0]}`]
      }
     
    },
    clearDate() {
      this.date = [new Date().toISOString().substr(0, 10)]
      this.date_range_input = `${new Date().toISOString().substr(8, 2)}.${new Date().toISOString().substr(5, 2)}.${new Date().toISOString().substr(0, 4)}`
      this.$emit('input', this.date_input)
    }
  }
}
</script>

<style>
button {
  outline: none;
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
.date-range-btn__block button {
  width: 100%;
}
.date-range-btn__block .date__btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 263px;
  height: 36px;
  background-color: var(--pale-lilac);
  padding: 0px 10px;
  border-radius: 4px;
  transition: all 0.2s ease-out;
  margin: 0px;
  margin-bottom: 7px;
  outline: none;
}
.date-range-btn__block .date__btn p {
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
.date-range-btn__block .icon {
  font-family: var(--font-awesome-5-pro-light);
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  width: 19px;
  letter-spacing: normal;
  text-align: center;
  color: var(--dark);
  transition: all 0.2s ease-out;
}
.date-range-btn__block .icon-colse {
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
  position: absolute;
  margin-top: -17px;
}
.date-range-btn__block .icon-colse:hover .icon{
  color: var(--bright-orange);
}
.date-range-btn__block .icon-colse .icon {
  font-size: 15px !important;
  z-index: 9;
}
.date-range-btn__block .date__btn:hover {
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
}
.date-range-btn__block .date__btn:focus {
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
}
.date-range-btn__block .date__btn:hover .icon .icon {
  color: var(--bright-orange);
}
.date-range-btn__block .date__btn:hover .icon-colse {
  color: var(--dark);
}
.date-range-btn__block .date__btn:focus .icon {
  color: var(--bright-orange);
}

.date-range-btn-input {
  display: flex;
  width: 263px;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: var(--pale-lilac);
  padding: 4px;
  height: 36px;
}
.date-range-btn-input input {
  outline: none;
  text-align: center;
  border-radius: 4px;
  background-color: #fff;
  width: 100%;
  font-family: Roboto;
  font-size: 11px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  color: var(--dark);
  padding: 4px 23px;
  padding-top: 5px;
  padding-left: 27px;
}
.date-range-btn-input .icon-apply .icon{
  position: absolute;
  margin-top: 7px;
  margin-left: -20px;
  width: 15px;
  height: 15px;
  font-size: 15px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.53;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
}
.date-range-btn-input .icon-apply .icon:hover {
  color: var(--bright-orange);
}
</style>