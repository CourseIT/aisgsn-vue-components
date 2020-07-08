<template>
  <div :style='{width: `${(days * 3) - 0.5}%`, left: `${(days_ago * 3)}%`}' class="test123">
    <div v-if="action_date" class="calendar__action hover_action" ref="action">
      <div class="action__top absolute__top" ref="date">
        <div class="action__icon">
          <v-icon icon="" font_size="11px"/>
        </div>
        <p v-if="show_text" class="action__date">{{action_date}}</p>
      </div>
      <p v-if="show_text" class="action__name absolute_name" ref="name">{{action_name}}</p>
      <p v-if="show_text" class="action__desc absolute_desc" ref="desc">{{action_desc}}</p>
      <div class="absolute_bottom">
        <div class="action__bottom absolute_bottom1"></div>
        <div class="action__bottom absolute_bottom2"></div>
      </div>
    </div>
    <div v-if="!show_text" class="calendar__action show_on_hover_action">
      <div class="action__top">
        <div class="action__icon">
          <v-icon icon="" font_size="11px"/>
        </div>
        <p class="action__date">{{action_date}}</p>
      </div>
      <p class="action__name">{{action_name}}</p>
      <p class="action__desc">{{action_desc}}</p>
      <div class="action__bottom"></div>
      <div class="action__bottom action__bottom2"></div>
      <div class="arrow"></div>
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
    action_date: {},
    action_name: {
      default: 'ВНИИЭФ'
    },
    action_desc:{
      default: 'Название проверки'
    },
    days: {
      default: 0
    },
    days_ago: {
      default: 0
    }
  },
  data: () => ({
    action_width: '',
    date_width: '',
    name_width: '',
    desc_width: '',
    show_text: true
  }),
  mounted() {
    if(this.$refs.action) {
      this.setActionWidth()

      setInterval(()=>{
        this.setActionWidth()
      },200)

      this.date_width = this.$refs.date.clientWidth
      this.name_width = this.$refs.name.clientWidth
      this.desc_width = this.$refs.desc.clientWidth
      
      this.setShowText()
    }
  },
  watch: {
    action_width() {
      this.setShowText()
    }
  },
  methods: {
    setActionWidth() {
      if(this.$refs.action) {
        this.action_width = this.$refs.action.clientWidth
      }
    },
    setShowText() {
      if(this.action_width <= this.date_width || this.action_width <= this.name_width || this.action_width <= this.desc_width) {
        this.show_text = false
      } else {
        this.show_text = true
      }
    }
  }
}
</script>

<style scoped>
.test123 {
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
  margin-top: 66px;
}

.calendar__action {
  height: 80px;
  border-radius: 4px;
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
  background-color: var(--white);
  overflow: hidden;
  transition: all 0.2s ease;
  cursor: pointer;
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
  height: 7px;
  background-color: var(--weird-green);
}
.action__bottom2 {
  border-radius: 0px 0px 4px 4px;
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
  z-index: 110;
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