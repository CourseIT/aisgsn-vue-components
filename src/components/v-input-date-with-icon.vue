<template>
  <div class="input-date" :style="{'width': width}">
    <div class="input-block">
      <div class="df">
        <span v-if="obligatory" class="obligatory mb-4px">*</span>
        <p class="label">{{label}}</p>
      </div>
      <div v-if="visible" :class="{'read-only': readOnly == true}" class="df h55" >
        <input v-if="no_range == true" v-model="date_input" class="input" type="text" ref="input" :class="{'pr25': hint}">
        <input v-else  v-model="date_range_input" class="input" type="text" ref="input" :class="{'pr25': hint}">
        <v-icon v-if="hint" icon="" class="hint_icon" />
          <div v-if="hint" class="icon__prompt-block" :style="{'width': hint_width}">
            <div class="arrow"></div>
            <div class="icon__prompt">
              <span>{{hint}}</span>
            </div>
          </div>
        <v-menu
          ref="menu"
          :nudge-right="56"
          :nudge-top="44"
          v-model="menu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          min-width="290px"
          selected-items-text="ru"
        >
          <template v-slot:activator="{ on }">
            <div class="icon-date" hint="MM/DD/YYYY format" v-on="on">
              <v-icon :icon="icon" :class="{'icon-shadow': menu, 'icon-block': menu}" :hover_shadow="true" :hover_color="true" :color="menu ? '#fb6229' : 'black' " />
            </div>
          </template>
          <v-date-picker v-if="no_range == true" v-model="date" no-title :first-day-of-week="1" show-current color="#8d43ff">
            <v-btn v-if="button" text color="primary" @click="clearDate">Отменить</v-btn>
            <v-btn v-if="button" text color="primary" @click="$refs.menu.save(date)">Принять</v-btn>
          </v-date-picker>
          <v-date-picker v-else v-model="date" no-title :first-day-of-week="1" show-current color="#8d43ff" range>
            <v-btn v-if="button" text color="primary" @click="clearDate">Отменить</v-btn>
            <v-btn v-if="button" text color="primary" @click="$refs.menu.save(date)">Принять</v-btn>
          </v-date-picker>
        </v-menu>
      </div>
    </div>
  </div>
</template>

<script>
const VIcon = () => import('./v-icon')

export default {
  name: 'VInputDateWithIcon',
  props: {
    placeholder: {},
    value: {},
    icon: {},
    label: {},
    width: {},
    read_only: {},
    no_range: {},
    button: {},
    hint: {},
    obligatory: {
      default: false
    },
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
    date_range_input: `${new Date().toISOString().substr(8, 2)}.${new Date().toISOString().substr(5, 2)}.${new Date().toISOString().substr(0, 4)} - ${new Date().toISOString().substr(8, 2)}.${new Date().toISOString().substr(5, 2)}.${new Date().toISOString().substr(0, 4)}`,
    menu: false,
    hint_width: ''
  }),
  mounted() {
    setTimeout(() =>{
      this.hint_width = `${this.$refs.input.clientWidth}px`
    }, 0)
    if(!this.no_range && !this.value) {
      this.date = [new Date().toISOString().substr(0, 10), new Date().toISOString().substr(0, 10)]
      this.$emit('input', this.date_range_input)
    }
    if(this.no_range && !this.value) {
      this.$emit('input', this.date_input)
    }
  },
  watch: {
    date() {
      if(this.no_range) {
        this.$emit('input', `${this.day}.${this.month}.${this.year}`)
        this.date_input = `${this.day}.${this.month}.${this.year}`
      } else {
        if(this.date.length > 1) {
          this.date_range_input = `${this.date[0].substr(8, 2)}.${this.date[0].substr(5, 2)}.${this.date[0].substr(0, 4)} - ${this.date[1].substr(8, 2)}.${this.date[1].substr(5, 2)}.${this.date[1].substr(0, 4)}`
        } else {
          this.date_range_input = `${this.date[0].substr(8, 2)}.${this.date[0].substr(5, 2)}.${this.date[0].substr(0, 4)}`
        }
        this.$emit('input', this.dateRangeText)
      }
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
      this.$emit('input', this.date_input)
    },
    date_range_input(value, pevValue) {
      let date1
      let date2
      let date3
      var day = `${new Date().getDay()+1}`

      if(value.length == 2 && pevValue.length < value.length) {
        if(Number(value) > 31) {
          if(day < 10){
            this.date_range_input = `0${day}.`
          } else {
            this.date_range_input = `${value.substr(0,3)}.`
          }
        } else {
          date1 = value.split('')
          date2 = date1.push('.')
          date3 = date1.join('')
          this.date_range_input = date3
        }
        window.console.log(date2)


      } else if(value.length == 5 && pevValue.length < value.length) {
        if(Number(value.substr(3,5)) > 12) {
          var month = `${new Date().getMonth()+1}`
          if(month < 10){
            this.date_range_input = `${value.substr(0,3)}0${month}.`
          } else {
            this.date_range_input = `${value.substr(0,3)}${month}.`
          }
        } else {
          date1 = value.split('')
          date2 = date1.push('.')
          date3 = date1.join('')
          this.date_range_input = date3
        }
        window.console.log(date2)


      } else if(value.length == 10 && pevValue.length < value.length) {
        date1 = value.split('')
        date2 = date1.push(' - ')
        date3 = date1.join('')
        this.date_range_input = date3
        window.console.log(date2)


      } else if(value.length == 15 && pevValue.length < value.length) {
        if(Number(value.substr(13,15)) > 31) {
          if(day < 10){
            this.date_range_input = `${value.substr(0,13)}0${day}.`
          }
        } else {
          date1 = value.split('')
          date2 = date1.push('.')
          date3 = date1.join('')
          this.date_range_input = date3
        }
        window.console.log(date2)


      } else if(value.length == 18 && pevValue.length < value.length) {
        if(Number(value.substr(16,18)) > 12) {
          var month2 = `${new Date().getMonth()+1}`
          if(month2 < 10){
            this.date_range_input = `${value.substr(0,16)}0${month2}.`
          } else {
            this.date_range_input = `${value.substr(0,16)}${month2}.`
          }
        } else {
          date1 = value.split('')
          date2 = date1.push('.')
          date3 = date1.join('')
          this.date_range_input = date3
        }
        window.console.log(date2)


      } else {
        this.date_range_input = value.replace(/[^.-\d\s]/g, '').substr(0,23)
      }
      
      this.$emit('input', this.date_range_input)
    }
  },
  computed: {
    readOnly() {
      if(typeof (this.read_only) == 'function') {
        return this.read_only()
      } else if (this.read_only) {
        return this.read_only
      } else {
        return false
      }
    },
    dateNoRange() {
      return `${this.date.substr(8, 2)}.${this.date.substr(5, 2)}.${this.date.substr(0, 4)}`
    },
    dateRangeText () {
      if(this.date.length > 1) {
        return `${this.date[0].substr(8, 2)}.${this.date[0].substr(5, 2)}.${this.date[0].substr(0, 4)} – ${this.date[1].substr(8, 2)}.${this.date[1].substr(5, 2)}.${this.date[1].substr(0, 4)}`
      } else {
        return `${this.date[0].substr(8, 2)}.${this.date[0].substr(5, 2)}.${this.date[0].substr(0, 4)}`
      }
    },
    year() {
      return this.date.substr(0, 4)
    },
    month() {
      return this.date.substr(5, 2)
    },
    day() {
      return this.date.substr(8, 2)
    }
  },
  methods: {
    clearDate() {
      this.date_range_input = `${new Date().toISOString().substr(8, 2)}.${new Date().toISOString().substr(5, 2)}.${new Date().toISOString().substr(0, 4)}`
      this.date_input = `${new Date().toISOString().substr(8, 2)}.${new Date().toISOString().substr(5, 2)}.${new Date().toISOString().substr(0, 4)}`
      this.$emit('input', this.date_input)
      this.date = new Date().toISOString().substr(0, 10)
    }
  }
}
</script>

<style scoped>
.hint_icon {
  width: 36px;
  height: 36px;
  position: relative;
  right: 0px;
  top: 1px;
  margin-left: -36px;
  font-size: 15px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.1;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark2);
}
.hint_icon:hover + .icon__prompt-block {
  display: flex;
}
.icon__prompt-block {
  display: none;
  width: 400px;
  position: absolute;
  margin-left: 0px;
  margin-top: -15px;
}
.icon__prompt {
  bottom: -6px;
  position: absolute;
  width: 100%;
  z-index: 9;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
  background-color: var(--white);
  font-family: Roboto;
  font-size: 11px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
}
.arrow {
  position: absolute;
  top: 6px;
  height: 10px;
  right: 10px;
  display: inline-block;
  color: var(--white);
  z-index: 99;
  border: 8px solid transparent;	
  border-bottom: 8px solid var(--white);
  transform: rotate(180deg);
}

.mb-4px {
  margin-bottom: -4px;
}
.input-date {
  outline: none;
}
.input-date .v-menu__content {
  margin-left: 80px !important;
  margin-top: -40px !important;
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
.input-date .label {
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0);
  font-family: Roboto;
  font-size: 0.75rem;
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
  cursor: pointer;
}
.input-date .icon-date {
  cursor: pointer;
  height: 40px;
  font-family: var(--font-awesome-5-pro-light);
  margin-top: 00px;
  font-size: 21px;
  padding: 0px 9px;
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
  background-color: var(--white) !important;
  padding: 3px 15px;
  border-radius: 4px;
  border: 1px solid var(--white);
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
  position: relative;
  bottom: 2px;
}
</style>