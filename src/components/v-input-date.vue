<template>
  <div :style="{'width': width}" :class="[{'input-date': style_type != 'style2', 'input-date-style2': style_type == 'style2' }, dynamic_class]">
    
    <div class="df">
    <div class="input-block">
      <div class="df">
        <div class="df" ref="label">
          <span v-if="obligatory" class="obligatory mb-4px">*</span>
          <p class="label">{{label}}</p>
        </div>
        <v-icon v-if="hint" icon="" class="hint_icon" width="15" height="15" />
        <div v-if="hint" class="icon__prompt-block" :style="{'width': hint_width}">
          <div class="icon__prompt" :style="{'min-width': label_width}">
            <span>{{hint}}</span>
          </div>
        </div>
      </div>
      <div v-if="visible" :class="{'read-only': readOnly == true}" class="df h55" >
        <input v-model="date_input" class="input" type="text" ref="input" :class="{'pr25': hint, 'error-status' : error}">
        <!-- <v-menu
          v-if="show_icon"
          ref="menu"
          :nudge-right="56"
          :nudge-top="44"
          v-model="menu"
          :close-on-content-click="true"
          transition="scale-transition"
          offset-y
          min-width="290px"
          selected-items-text="ru"
        >
          <template v-slot:activator="{ on }">
            <div class="icon-date" hint="MM/DD/YYYY format" v-on="on">
              <v-icon :icon="icon" :class="{'icon-shadow': menu, 'icon-block': menu}" :hover_shadow="true" :hover_color="true" :color="menu ? 'var(--bright-orange)' : 'black' " />
            </div>
          </template>
          <v-date-picker v-model="date" no-title :first-day-of-week="1" show-current color="#8d43ff">
            <button v-if="button" class="clear_btn" @click="clearDate">Сбросить</button>
          </v-date-picker>
        </v-menu> -->
        <div v-if="!show_icon" class="mr56"></div>
        <div v-else class="icon__clear">
          <v-icon :icon="icon" :action="openDatepicker" font_size="21px" prompt="Выбрать дату" :hover_color="true" />
        </div>
      </div>
    </div>
    <date-picker class="input-date__hide-data-picker" value-type="format" format="YYYY-MM-DD" v-model="date" :open.sync="open" >
      <template v-slot:footer>
          <button class="mx-btn mx-btn-text" @click="clearDate">
            Сбросить
          </button>
        </template>
    </date-picker>
  </div>
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import 'vue2-datepicker/locale/ru';

const VIcon = () => import('./v-icon')


export default {
  name: 'VInputDate',
  props: {
    placeholder: {},
    style_type: {},
    value: {},
    icon: {
      default: ''
    },
    label: {},
    width: {},
    read_only: {},
    button: {},
    error: {},
    hint: {
      default: false
    },
    obligatory: {
      default: false
    },
    visible: {
      default: true
    },
    action: {
      default: function() {
        return () => ({})
      }
    },
    show_icon: {
      default: true
    },
    dynamic_class: {}
  },
  components: {
    VIcon,
    DatePicker
  },
  data: () => ({
    open: false,
    label_width: '',
    date: '',
    date_input: '',
    menu: false,
    hint_width: ''
  }),
  mounted() {
    setTimeout(() =>{
      if(this.hint) {
        const l_w = this.$refs.label.clientWidth
        const h_w = this.$refs.input.clientWidth

        this.hint_width = `${h_w}px`

        if(l_w == h_w) {
          this.label_width = `${l_w}px`
        }
        if(l_w > h_w) {
          this.label_width = `${h_w}px`
        }
        if((h_w - l_w) > 40) {
          this.label_width = `${l_w + 40}px`
        }
      }
    }, 100)

    this.date = `${new Date().toISOString().substr(0, 10)}`

    if(this.value) {
      this.date = this.value
    } else {
      this.date = null
    }
    window.console.log(this.$refs.newDatePicker)
  },
  watch: {
    value(value) {
      this.date = value
    },
    date(date) {
      if(date) {
        this.menu = false
        this.$emit('input', date)
        this.date_input = `${this.date.substr(8, 2)}.${this.date.substr(5, 2)}.${this.date.substr(0, 4)}`
        setTimeout(()=>{
          this.action()
        }, 0)
      } else {
        this.$emit('input', null)
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

      if(value.length == 10 && pevValue.length < value.length) {
        let arr = value.split('.')
        this.date = `${arr[2]}-${arr[1]}-${arr[0]}`
      }
      if(value.length == 0) {
        this.clearDate()
      }
    },
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
  },
  methods: {
    clearDate() {
      //this.open = true
      this.date = null
      this.date_input = ''
      setTimeout(()=>{
        this.action()
      }, 0)
    },
    openDatepicker() {
      this.open = true
    }
  }
}
</script>

<style scoped>
.mr55 {
  margin-right: 55px;
}
.icon__clear {
  padding: 0px 10px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hint_icon {
  margin-left: 10px;
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
.hint_icon:hover::before{
  content: '';
  position: absolute;
  z-index: 111;
  margin-top: -12px;
  margin-left: 1px;
  border: 6px solid transparent;
  border-bottom: 6px solid var(--dark);
  transform: rotate(180deg);
}
.icon__prompt-block {
  display: none;
  width: 400px;
  position: absolute;
  margin-left: 0px;
  margin-top: -18px;
}
.icon__prompt {
  bottom: -6px;
  position: absolute;
  z-index: 110;
  padding: 5px 15px;
  border-radius: 4px;
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
  background-color: var(--dark);
  font-family: sans-serif;
  font-size: 12px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: left;
  min-height: 28px;
  display: flex;
  align-items: center;
  color: var(--white);
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
}
.input-date .input-block {
  width: 100%;
}
.input-date .icon-date {
  cursor: pointer;
  height: 40px;
  font-family: var(--font-awesome-5-pro-light);
  margin-top: 00px;
  font-size: 21px;
  padding: 0px 10px;
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
  border: 0px solid var(--white);
  margin-bottom: 30px;
  width: 100%;
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
.clear_btn {
  height: 36px;
  min-width: 64px;
  font-size: 0.875rem;
  font-weight: 500;
  outline: 0;
  color: rgb(141, 67, 255);
  text-transform: uppercase;
  transition: all 0.2s ease;
}
.clear_btn:hover {
  color: var(--bright-orange);
}
.input-date__hide-data-picker {
  width: 45px;
  visibility: hidden;
  margin-left: -45px;
  position: relative;
  left: 0px;
  /* visibility: hidden;
  height: 46px;
  position: absolute; */
}
</style>