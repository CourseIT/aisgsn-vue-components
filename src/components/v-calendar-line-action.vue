<template>
  <div class="line_action pa" :class="[{'read-only': readOnly == true}, dynamic_class]" :style='{width: `${(days * width) - action_margin}%`, left: `${(days_ago * width)}%`, paddingTop: `${65 + index * 5}px`}'>
    <div v-if="date_from" class="hover_action" ref="action">
			<div class="action__bottom absolute_bottom1" :style='{background: `${color}`, zIndex: `${999 - index}`}'></div>
    </div>
    <div class="calendar__action show_on_hover_action">
      <div class="action__top">
        <div class="action__icon" :style='{background: `${color}`}'>
          <v-icon icon="" font_size="11px" color="#ffffff"/>
        </div>
        <p class="action__date">{{date_from.substr(8, 2)}}.{{date_from.substr(5, 2)}}.{{date_from.substr(0, 4)}} – {{date_to.substr(8, 2)}}.{{date_to.substr(5, 2)}}.{{date_to.substr(0, 4)}}</p>
      </div>
      <p class="action__name">{{name}}</p>
      <p class="action__desc">{{details}}</p>
      <div class="action__bottom" :style='{background: `${color}`}'></div>
      <div class="action__bottom" :style='{background: `${color}`}'></div>
      <div class="action__bottom action__bottom2" :style='{background: `${color}`}'></div>
      <div class="arrow" :class="{'left0': !show_icon}" :style="{'border-bottom': `8px solid ${color}`}"></div>
    </div>
  </div>
  
</template>

<script>
const VIcon = () => import('./v-icon')

export default {
  components: {
    VIcon
  },
  props: {
    read_only: {},
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
    index: {},
    pick_date: {
      default: 0
    },
    dynamic_class: {}
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

    this.setDaysAgo()


    this.$nextTick(function () {
      this.date_width = this.$refs.date.clientWidth
      this.name_width = this.$refs.name.clientWidth
      this.desc_width = this.$refs.desc.clientWidth


      setTimeout(()=> {
        if(this.$refs.action) {
					this.setActionWidth()

					setInterval(()=>{
						this.setActionWidth()
					},200)
				}
      }, 0)
    })
    

    
  },
  watch: {
    action_width() {
      this.setShowText()
    },
    pick_date() {
      this.setDaysAgo()
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
    width() {
      switch (this.pick_date) {
        case 1:
          return 3
        case 3:
          return 1
        case 6:
          return 0.6
        case 12:
          return 0.3
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
    setDaysAgo() {
      let date = new Date();
      let date_from_year = this.date_from.substr(0, 4)
      let date_from_month = this.date_from.substr(5, 2)
      let date_from_days = this.date_from.substr(8, 2)

      let date_to_year = this.date_to_.substr(0, 4)
      let date_to_month = this.date_to_.substr(5, 2)
      let date_to_days = this.date_to_.substr(8, 2)
      window.console.log(date_from_year, date_from_month, date_from_days, '|', date_to_year, date_to_month, date_to_days)

      if(this.pick_date === 1) {
        if( Number(date_from_month) < Number(date_to_month)) {
          this.days_ago = 0
          this.days = date_to_days
        }
        if( Number(date_from_month) == Number(date_to_month)) {
          this.days_ago = Number(date_from_days - 1)
          this.days = Number(date_to_days) - Number(date_from_days) + 1
        }
        if(Number(date_from_month) < this.month && this.month < Number(date_to_month)) {
          this.days_ago = 0
          this.days = this.getLastDayOfMonth(date.getFullYear(), this.month - 1)
        }
      }

      if(this.pick_date === 3) {
        let days_ago = 0
        let days = 0

        this.days_ago = Number(date_from_days - 1)
        if(date_from_month == 1 || date_from_month == 4 || date_from_month == 7 || date_from_month == 10) {
          for(let month = Number(date_from_month); month < Number(date_to_month) && month < (Number(date_from_month) + 3); month++) {
            days += this.getLastDayOfMonth(date.getFullYear(), month - 1)
          }
          //days_ago = this.getLastDayOfMonth(date.getFullYear(), date_from_month - 2)
        }
        // for(let month = Number(date_from_month); month < Number(date_to_month) && month < (Number(date_form_month) + 3); month++) {
        //   days += this.getLastDayOfMonth(date.getFullYear(), month - 1)
        //   window.console.log(days)
        // }
        //this.days = (days - Number(date_from_days) + 1 + Number(date_to_days))

        if(date_from_month == 2 || date_from_month == 5 || date_from_month == 8 || date_from_month == 11) {
          for(let month = Number(date_from_month); month < Number(date_to_month) && month < (Number(date_from_month) + 2); month++) {
            days += this.getLastDayOfMonth(date.getFullYear(), month - 1)
          }
          days_ago = this.getLastDayOfMonth(date.getFullYear(), date_from_month - 2)
        }

        if(date_from_month == 3 || date_from_month == 6 || date_from_month == 9 || date_from_month == 12) {
          for(let month = Number(date_from_month); month < Number(date_to_month) && month < (Number(date_from_month) + 1); month++) {
            days += this.getLastDayOfMonth(date.getFullYear(), month - 1)
          }
          days_ago = this.getLastDayOfMonth(date.getFullYear(), date_from_month - 3)
        }

        this.days = (days - Number(date_from_days) + 1 + Number(date_to_days))
        this.days_ago += days_ago
      }

      if(this.pick_date === 6) {
        let days_ago = 0
        let days = 0

        if(date_from_month == 1 || date_from_month == 2 || date_from_month == 3 || date_from_month == 4 || date_from_month == 5 || date_from_month == 6) {
          for(let month = Number(date_from_month); month < Number(date_to_month) && month < 6; month++) {
            days += this.getLastDayOfMonth(date.getFullYear(), month - 1)
          }
          for(let month = 0; month < Number(date_from_month); month++) {
            days_ago += this.getLastDayOfMonth(date.getFullYear(), month)
          }
          days_ago += Number(date_from_days)
        }

        if(date_from_month == 7 || date_from_month == 8 || date_from_month == 9 || date_from_month == 10 || date_from_month == 11 || date_from_month == 12) {
          for(let month = Number(date_from_month); month < Number(date_to_month) && month < 12; month++) {
            days += this.getLastDayOfMonth(date.getFullYear(), month - 1)
          }
          for(let month = 7; month < Number(date_from_month); month++) {
            days_ago += this.getLastDayOfMonth(date.getFullYear(), month)
          }
          days_ago += (Number(date_from_days) - 1)
        }

        this.days = (days - Number(date_from_days) + 1 + Number(date_to_days))
        this.days_ago += days_ago
      }

      if(this.pick_date == 12) {
        let days_ago = 0
        let days = 0
        for(let month = Number(date_from_month); month < Number(date_to_month) && month < 13; month++) {
            days += this.getLastDayOfMonth(date.getFullYear(), month - 1)
        }
        for(let month = 0; month < Number(date_from_month); month++) {
          days_ago += this.getLastDayOfMonth(date.getFullYear(), month)
        }
        days_ago += (Number(date_from_days) - 1)
        this.days = (days - Number(date_from_days) + 1 + Number(date_to_days))
        this.days_ago += days_ago
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
.absolute_bottom1 {
  cursor: pointer;
}
.left0 {
  left: 0px !important;
  top: 78px !important;
}
.line_action{
  height: 80px;
  padding-top: 65px;
}
.calendar__action {
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
  height: 5px;
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
  z-index: 1000;
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