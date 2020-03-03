<template>
  <div v-if="visible" :class="{'read-only': readOnly == true}" class="date-btn__block">
    <div v-if="date_input_show">
      <div class="date-btn-input">
        <form @submit="emitDateInput">
          <input v-model="date_input" type="text" placeholder="дд.мм.гггг" autofocus class="date-input">
        </form>
        <v-icon v-if="date_input.length == 10" :action="emitDateInput" class="icon-apply" width="15" icon="" />
        <v-icon v-else :action="clearDate" class="icon-apply" width="15" icon="" />
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
    >
      <template v-slot:activator="{ on }">
        <button v-on="on" class="date__btn">
          <div v-on="on" @click="clearDate">
            <v-icon v-if="date_input != `${new Date().toISOString().substr(8, 2)}.${new Date().toISOString().substr(5, 2)}.${new Date().toISOString().substr(0, 4)}`" class="icon-colse" width="15" icon="" />
          </div>
          <p @click="date_input_show = true" v-on="on" :class="{'pl15': date_input == `${new Date().toISOString().substr(8, 2)}.${new Date().toISOString().substr(5, 2)}.${new Date().toISOString().substr(0, 4)}`}">{{date_input}}</p>
          <v-icon v-on="on" class="icon w19" width="19" icon="" />
        </button>
      </template>
      <v-date-picker color="#8d43ff" :first-day-of-week="1" v-model="date" no-title scrollable>
      </v-date-picker>
    </v-menu>
  </div>
</template>

<script>
const VIcon = () => import('./v-icon')

export default {
  props: {
    read_only: {},
    visible: {
      default: true
    }
  },
  components: {
    VIcon
  },
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    date_input: `${new Date().toISOString().substr(8, 2)}.${new Date().toISOString().substr(5, 2)}.${new Date().toISOString().substr(0, 4)}`,
    menu: false,
    modal: false,
    date_input_show: false
  }),
  mounted() {
    this.$emit('input', this.date_input)
  },
  watch: {
    date() {
      this.$emit('input', `${this.day}.${this.month}.${this.year}`)
      this.date_input = `${this.day}.${this.month}.${this.year}`
    },
    date_input(value, pevValue) {
      let date1
      let date2
      let date3

      if(value.length == 2 && pevValue.length < value.length) {
        if(Number(value) > 31) {
          var day = `${new Date().getDay()+1}`
          if(day < 10){
            this.date_input = `0${day}.`
          } else {
            this.date_input = `${value.substr(0,3)}.`
          }
        } else {
          date1 = value.split('')
          date2 = date1.push('.')
          date3 = date1.join('')
          this.date_input = date3
        }
        window.console.log(date2)
      } else if(value.length == 5 && pevValue.length < value.length) {
        if(Number(value.substr(3,5)) > 12) {
          var month = `${new Date().getMonth()+1}`
          if(month < 10){
            this.date_input = `${value.substr(0,3)}0${month}.`
          } else {
            this.date_input = `${value.substr(0,3)}${month}.`
          }
        } else {
          date1 = value.split('')
          date2 = date1.push('.')
          date3 = date1.join('')
          this.date_input = date3
        }
        window.console.log(date2)
      } else {
        this.date_input = value.replace(/[^.\d\s]/g, '').substr(0,10)
      }
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
    },
    readOnly() {
      if(typeof (this.read_only) == 'function') {
        return this.read_only()
      } else if (this.read_only) {
        return this.read_only
      } else {
        return false
      }
    }
  },
  methods: {
    emitDateInput(e) {
      e.preventDefault();
      
      this.date_input_show = false
      this.$emit('input', this.date_input)
      this.date = `${this.date_input.substr(6, 4)}-${this.date_input.substr(3, 2)}-${this.date_input.substr(0, 2)}`
    },
    clearDate() {
      this.date = new Date().toISOString().substr(0, 10)
      this.date_input = `${new Date().toISOString().substr(8, 2)}.${new Date().toISOString().substr(5, 2)}.${new Date().toISOString().substr(0, 4)}`
      this.$emit('input', this.date_input)
      this.date_input_show = false
    },
  }
}
</script>

<style scoped>
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
  font-size: 0.6875rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: normal;
  color: var(--dark);
  height: 36px;
  display: flex;
  align-items: center;
}
.date-btn__block .icon {
  font-family: var(--font-awesome-5-pro-light);
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  width: 19px;
  letter-spacing: normal;
  text-align: center;
  color: var(--dark);
  transition: all 0.2s ease-out;
}
.date-btn__block .icon-apply{
  position: absolute;
  margin-left: 100px;
  margin-top: -4px;
}
.date-btn__block .icon-colse {
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
  z-index: 7;
}
.date-btn__block .icon-colse:hover .icon{
  color: var(--bright-orange);
}
.date-btn__block .icon-colse .icon {
  font-size: 15px !important;
  z-index: 7;
}
.date-btn__block .date__btn:hover {
  cursor: pointer;
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

.date-btn-input {
  display: flex;
  width: 132px;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: var(--pale-lilac);
  padding: 4px;
  height: 36px;
}
.date-btn-input input {
  outline: none;
  text-align: center;
  border-radius: 4px;
  background-color: var(--white);
  width: 100%;
  height: 27px;
  font-family: Roboto;
  font-size: 0.6875rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  color: var(--dark);
  padding: 4px 23px;
  padding-top: 5px;
  padding-left: 20px;
}
.date-btn-input .icon-apply .icon{
  position: absolute;
  margin-top: 6.5px;
  margin-left: -25px;
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
.date-btn-input .icon-apply .icon:hover {
  color: var(--bright-orange);
}
</style>