<template>
  <div :style='{width: `${(days * width) - action_margin}%`, left: `${(days_ago * width)}%`}' class="pa">
    <div v-if="date_from" class="calendar__action hover_action" ref="action">
      <div class="action__top absolute__top" ref="date">
        <div v-if="show_icon" class="action__icon" :style='{background: `${color}`}'>
          <v-icon :icon="icon" font_size="11px" color="#ffffff"/>
        </div>
        <p v-if="show_text" class="action__date">{{date_from.substr(8, 2)}}.{{date_from.substr(5, 2)}}.{{date_from.substr(0, 4)}} – {{date_to.substr(8, 2)}}.{{date_to.substr(5, 2)}}.{{date_to.substr(0, 4)}}</p>
      </div>
      <p v-if="show_text" class="action__name absolute_name" ref="name">{{name}}</p>
      <!-- <p v-if="show_text" class="action__desc absolute_desc" ref="desc">{{details}}</p> -->
      <div class="absolute_bottom" :style='{background: `${color}`}'>
        <!-- <div v-for="(action, index) in actions" :key="index">
          <v-calendar-line-action 
              :date_from="action.date_from"
              :date_to="action.date_to"
              :details="action.details"
              :head="action.head"
              :id="action.id"
              :name="action.name"
              :show_range_as="action.show_range_as"
              :color="action.color"
              :pick_date="pick_date"
              :index="index"
          />
        </div> -->
        <!-- <div class="action__bottom absolute_bottom1" :style='{background: `${color}`, "z-index": index + 1}'></div>
        <div class="action__bottom absolute_bottom1" :style='{background: `${color}`, "z-index": index}'></div>
        <div class="action__bottom absolute_bottom1" :style='{background: `${color}`,}'></div>
        <div class="action__bottom absolute_bottom1" :style='{background: `${color}`, "z-index": 1000 - index}'></div>
        <div class="action__bottom absolute_bottom2" :style='{background: `${color}`, "z-index": 1000 - index}'></div> -->
      </div>
    </div>
    <div v-if="!show_text" class="calendar__action show_on_hover_action" :style='{marginLeft: date_from_ === "2020-08-31" ? "-257px" : "0"}'>
      <div class="action__top">
        <div class="action__icon" :style='{background: `${color}`}'>
          <v-icon :icon="icon" font_size="11px" color="#ffffff"/>
        </div>
        <p class="action__date">{{date_from.substr(8, 2)}}.{{date_from.substr(5, 2)}}.{{date_from.substr(0, 4)}} – {{date_to.substr(8, 2)}}.{{date_to.substr(5, 2)}}.{{date_to.substr(0, 4)}}</p>
      </div>
      <p class="action__name">{{name}}</p>
      <p class="action__desc">{{details}}</p>
      <div class="action__bottom" :style='{background: `${color}`}'></div>
      <div class="action__bottom" :style='{background: `${color}`}'></div>
      <div class="action__bottom" :style='{background: `${color}`}'></div>
      <div class="action__bottom" :style='{background: `${color}`}'></div>
      <div class="action__bottom action__bottom2" :style='{background: `${color}`}'></div>
      <div class="arrow" :class="{'left0': !show_icon}" :style="{'border-bottom': `8px solid ${color}`, 'marginLeft': date_from_ === `2020-08-31` ? `257px` : `0`}"></div>
    </div>
  </div>
  
</template>

<script>
const VIcon = () => import('./v-icon')
// const VCalendarLineAction = () => import('./v-calendar-line-action')

export default {
  components: {
    VIcon,
    // VCalendarLineAction
  },
  props: {
    id: null,
    name: {
      default: ''
    },
    head: null,
    date_from: {
      default: ''
    },
    date_to: {
      default: ''
    },
    color: {
      default: '#4cd964'
    },
    show_range_as: null,
    details: {
      default: ''
    },
    actions: {
      default: []
    },
    month: {},
    index: {},
    // action_date: {},
    // action_name: {
    //   default: 'ВНИИЭФ'
    // },
    // action_desc:{
    //   default: 'Название проверки'
    // },
    // days: {
    //   default: 0
    // },
    // month_days_ago: {
    //   default: 0
    // },
    pick_date: {
      default: 0
    }
  },
  data: () => ({
    action_width: '',
    date_width: '',
    name_width: '',
    desc_width: '',
    show_text: true,
    show_icon: true,
    days_ago: 0,
    days: 0,
    date_to_: '',
    date_from_: ''
  }),
  mounted() {
    this.date_from_ = this.date_from
    if(this.date_to.length > 0) {
      this.date_to_ = this.date_to
    } else {
      this.date_to_ = this.date_from
    }
    let date_from_year = this.date_from.substr(0, 4)
    let date_from_month = this.date_from.substr(5, 2)
    let date_from_days = this.date_from.substr(8, 2)

    let date_to_year = this.date_to_.substr(0, 4)
    let date_to_month = this.date_to_.substr(5, 2)
    let date_to_days = this.date_to_.substr(8, 2)

    // if(this.date_to.length <= 0) {
    //   this.date_to_ = this.date_from
    // }

    if(this.pick_date === 1) {
      //window.console.log(Number(date_from_month), this.month, Number(date_to_month))
      if( Number(date_from_month) < Number(date_to_month)) {
        this.days_ago = 0
        this.days = date_to_days
      }
      if( Number(date_from_month) == Number(date_to_month)) {
        this.days_ago = Number(date_from_days - 1)
        this.days = Number(date_to_days) - Number(date_from_days) + 1
      }
      if(Number(date_from_month) < this.month && this.month < Number(date_to_month)) {
        //window.console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
        
        let date = new Date();
        this.days_ago = 0
        this.days = this.getLastDayOfMonth(date.getFullYear(), this.month - 1)
        //window.console.log(this.getLastDayOfMonth(date.getFullYear(), this.month - 1))
      }
    }

    
    window.console.log(date_from_year, date_from_month, date_from_days, '|', date_to_year, date_to_month, date_to_days)

      this.date_width = this.$refs.date.clientWidth
      this.name_width = this.$refs.name.clientWidth
      //this.desc_width = this.$refs.desc.clientWidth


      setTimeout(()=> {
        if(this.$refs.action) {
        this.setActionWidth()

        setInterval(()=>{
          this.setActionWidth()
        },200)

        
        this.setShowText()
      }
      }, 0)
    

    
  },
  watch: {
    action_width() {
      this.setShowText()
    }
  },
  computed: {
    icon() {
      switch (this.name.toLowerCase()) {
        case 'отпуск':
          return ''
        case 'обучение':
          return ''
        case 'больничный':
          return ''
        default:
          return ''
      }
    },
    width() {
      switch (this.pick_date) {
        case 1:
          return 3
        case 3:
          return 1
        default:
          return 0
      }
    },
    action_margin() {
      switch (this.pick_date) {
        case 1:
          return 0.5
        case 3:
          return 0
        default:
          return 0
      }
    }
  },
  methods: {
    getLastDayOfMonth(year, month) {
      let date = new Date(year, month + 1, 0);
      return date.getDate();
    },
    setActionWidth() {
      if(this.$refs.action) {
        this.action_width = this.$refs.action.clientWidth
      }
    },
    setShowText() {
      if(this.action_width <= this.date_width || this.action_width <= this.name_width) {
        this.show_text = false
      } else {
        this.show_text = true
      }
      if(this.action_width <= 35) {
        this.show_icon = false
      } else {
        this.show_icon = true
      }
    }
  }
}
</script>

<style scoped>
.pa {
  position: absolute;
}
.pu {
  position: unset;
}
.absolute__top {
  position: absolute;
}
.absolute_name {
  position: absolute;
  top: 33px;
}
.absolute_desc {
  position: absolute;
  top: 55px;
}
.absolute_bottom {
  margin-top: 65px;
  height: 15px;
}
.left0 {
  left: 0px !important;
  top: 78px !important;
}

.calendar__action {
  height: 80px;
  border-radius: 4px;
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
  background-color: var(--white);
  overflow: hidden;
  transition: all 0.2s ease;
  cursor: pointer;
  z-index: 10;
}
.action__top {
  display: flex;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 7px;
  margin-left: 5px;
}
.action__icon {
  width: 19px;
  height: 19px;
  background-color: var(--weird-green);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 5px;
}
.action__date {
  font-family: Roboto;
  font-size: 11px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
  margin-bottom: 0px;
  margin-right: 5px;
  white-space: nowrap;
}
.action__name {
  font-family: Roboto;
  font-size: 15px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
  margin-bottom: 0;
  margin-left: 13px;
  white-space: nowrap;
  margin-right: 13px;
  white-space: nowrap;
}
.action__desc {
  font-family: Roboto;
  font-size: 11px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
  margin-bottom: 2px;
  margin-left: 13px;
  margin-top: -5px;
  white-space: nowrap;
  margin-right: 13px;
  white-space: nowrap;
}
.action__bottom {
  width: 100%;
  height: 2.8px;
  background-color: var(--weird-green);
  position: relative;
}
.action__bottom2 {
  border-radius: 0px 0px 4px 4px;
  position: relative;
  z-index: 2;
}

.show_on_hover_action {
  display: none;
  position: relative;
  bottom: 90px;
  width: auto;
  overflow: unset;
  z-index: 100;
}
.hover_action:hover + .show_on_hover_action {
  display: block;
  position: absolute;
}
.arrow {
  position: absolute;
  top: 80px;
  left: 7px;
  display: inline-block;
  color: var(--dark);
  z-index: 111;
  border: 7px solid transparent;	
  border-bottom: 8px solid var(--weird-green);
  transform: rotate(180deg);
}
</style>