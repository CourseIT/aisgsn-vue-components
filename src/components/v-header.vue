<template>
  <div :class="[dynamic_class]">
    <div class="header-bg"></div>
    <header class="header">
      <nav class="header__nav">
          <v-toolbar-items >
            <div class="close-icon" @click="closeMenu">
              <span :class="{'openClose1': show_close || $store.state.menu_visibility, 'colorBlack': $store.state.menu_visibility && $store.state.light_gamma }"></span>
              <span :class="{'openClose2': show_close || $store.state.menu_visibility, 'colorBlack': $store.state.menu_visibility && $store.state.light_gamma }"></span>
            </div>
            <div class="open-icon" @click="openMenu">
              <v-icon class="menu-icon" :class="{'closeMenuIcon': show_close || $store.state.menu_visibility }" icon=""/>
            </div>
          </v-toolbar-items>
          <v-toolbar-title class="nav__logo df aic" >
            <slot>
              <img v-if="!$store.state.menu_visibility" :src="path_dark_logo" alt="">
              <img v-if="$store.state.menu_visibility && !$store.state.light_gamma" :src="path_light_logo" alt="">
              <img v-if="$store.state.menu_visibility && $store.state.light_gamma" :src="path_dark_logo" alt="">
              <!-- <svg
              v-else
                @click="$router.push({name: 'Home'})"
                 xmlns="http://www.w3.org/2000/svg"
                id="Лого_АИС_ГСН_fin"
                width="191.307"
                height="40.4"
                data-name="Лого_АИС ГСН_fin"
                viewBox="0 0 191.307 40.4">
                <g id="Group_188" data-name="Group 188">
                    <path :fill="$store.state.menu_visibility && !$store.state.light_gamma ? 'var(--white)' : '#000'" id="Path_21" d="M126.587 70.191V52.2L112.7 70.191z" class="cls-1" data-name="Path 21" transform="translate(-68.237 -31.606)"/>
                    <path :fill="$store.state.menu_visibility && !$store.state.light_gamma ? 'var(--white)' : '#000'" id="Path_22" d="M116 23.448L130.085 5.3H116z" class="cls-1" data-name="Path 22" transform="translate(-70.235 -3.209)"/>
                    <path :fill="$store.state.menu_visibility && !$store.state.light_gamma ? 'var(--white)' : '#000'" id="Path_23" d="M15.071 5.3L0 41.794h11.56l2.64-6.825h11.878l2.6 6.825h12.037L25.763 5.3zm2.407 21.265l2.722-8.64 2.643 8.64h-5.365z" class="cls-1" data-name="Path 23" transform="translate(0 -3.209)"/>
                    <path :fill="$store.state.menu_visibility && !$store.state.light_gamma ? 'var(--white)' : '#000'" id="Path_24" d="M184.884 13.493a10.3 10.3 0 0 1 7.338-2.722 19.436 19.436 0 0 1 9.469 2.564V2.052A21.5 21.5 0 0 0 191.867 0c-6.391 0-11.717 1.894-15.86 5.642-.316.276-.631.592-.907.868v27.3c.316.316.631.631.986.947 4.182 3.748 9.508 5.642 15.9 5.642a23.282 23.282 0 0 0 9.705-1.815V27.222a16.5 16.5 0 0 1-9.035 2.407 11.451 11.451 0 0 1-7.654-2.6 8.694 8.694 0 0 1-3-6.825 8.663 8.663 0 0 1 2.882-6.711z" class="cls-1" data-name="Path 24" transform="translate(-106.018)"/>
                </g>
                <g id="Group_189" data-name="Group 189" transform="translate(106.444 2.052)">
                    <path fill="#fb6229" id="Path_25" d="M391.319 5.2v13.335h-12.94V5.2h-10.692v11.284a19.436 19.436 0 0 0-9.469-2.564 10.3 10.3 0 0 0-7.338 2.722 8.663 8.663 0 0 0-2.88 6.706 8.693 8.693 0 0 0 3 6.825 11.451 11.451 0 0 0 7.654 2.6 16.5 16.5 0 0 0 9.035-2.407v11.367h10.692v-13.3h12.941v13.3h10.692V5.2z" class="cls-2" data-name="Path 25" transform="translate(-317.148 -5.2)"/>
                    <path fill="#fb6229" id="Path_26" d="M294.695 37.967a18.744 18.744 0 0 1-6.312-14.6 18.692 18.692 0 0 1 6.273-14.519A21.355 21.355 0 0 1 300.06 5.3l-12.7.039v8.206H269.8v28.209l30.971.039a21.665 21.665 0 0 1-6.076-3.826z" class="cls-2" data-name="Path 26" transform="translate(-269.8 -5.261)"/>
                </g>
              </svg> -->
            </slot>
          </v-toolbar-title>
          <v-toolbar-items class="nav__time">
            {{time}}
          </v-toolbar-items>
          <v-toolbar-items class="db">
            <p class="nav__day-week">{{week_day}}</p>
            <div class="nav__date">
              <span>{{date}},</span>
              <span>{{year}}</span>
            </div>
          </v-toolbar-items>
          <v-spacer></v-spacer>
          <div class="df aic">
            <v-open-browser-tab />
            <v-copy-link class="ml10" :action="copy_action" />
            <v-icon v-if="notifications.length == 0" class="header-icon mr5 ml10" :action="notification_action" icon=""/>
            <div v-else>
              <v-icon class="header-icon regular mr5" icon=""/>
              <div class="notifications">{{notifications.length}}</div>
            </div>
            <p v-if="user" class="header-name">{{user}}</p>
            <v-icon :action="logout_action" class="header-icon mt3 ml10" :hover_color="true" icon="" prompt="Выход"/>
          </div>
      </nav>
    </header>
  </div>
</template>

<script>
const VIcon = () => import('./v-icon')
const VCopyLink = () => import('./v-copy-link')
const VOpenBrowserTab = () => import('./v-open-browser-tab')

export default {
  props: {
    user: {},
    logout_action: {
      default: function() {
        return () => ({})
      }
    },
    notifications: {
      type: Array,
      default: ()=>{
        return[]
      }
    },
    notification_action: {
      default: function() {
        return () => ({})
      }
    },
    copy_action: {
      default: function() {
        return () => ({})
      }
    },
    path_light_logo: {},
    path_dark_logo: {},
    dynamic_class: {}
  },
  components: {
    VIcon,
    VCopyLink,
    VOpenBrowserTab
  },
  data: () => ({
    time: ``,
    timer: '',
    date: '',
    year: '',
    week_day: '',
    show_close: false
  }),
  mounted() {
    this.time = this.getTime()
    this.year = this.getFullYear()
    this.week_day = this.getWeekDay()
    this.date = this.getDate()
    this.timer = setInterval(() =>{
      this.time = this.getTime()
    }, 1000 * 3)
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    getTime() {
      
      let hours = new Date().getHours()
      let minutes = new Date().getMinutes()
      if(hours < 10) {
        hours = `0${hours}`
      }
      if(minutes < 10) {
        minutes = `0${minutes}`
      }
      if(this.time == '00:00') {
        this.getWeekDay()
        this.getFullYear()
        this.getDate()
      }
      return `${hours}:${minutes}`
    },
    getDate() {
      let date = new Date().getDate()
      let month = new Date().getMonth()
      switch (month) {
        case 0:
          return `${date} января`
        case 1:
          return `${date} февраля`
        case 2:
          return `${date} марта`
        case 3:
          return `${date} апреля`
        case 4:
          return `${date} мая`
        case 5:
          return `${date} июня`
        case 6:
          return `${date} июля`
        case 7:
          return `${date} августа`
        case 8:
          return `${date} сентября`
        case 9:
          return `${date} октября`
        case 10:
          return `${date} ноября`
        case 11:
          return `${date} декабря`
        default:
          return ''
      }
    },
    getWeekDay() {
      let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
      let date = new Date()
      return days[date.getDay()];
    },
    getFullYear() {
      return `${new Date().getFullYear()}`
    },
    openMenu() {
      this.$store.commit('SET_MENU_VISIBILITY', true)
      this.show_close = true
    },
    closeMenu() {
      this.show_close = false
      this.$store.commit('SET_MENU_VISIBILITY', false)
    },
  }
}
</script>

<style scoped>
.mr {
  margin-right: 5px;
}
.db {
  display: block;
}
.mt3 {
  margin-top: 3px;
}
.colorBlack {
  transition: all 0.2s ease-in-out;
  background: #000 !important;
}
.header-bg {
  width: 100%;
  height: 100px;
  position: fixed;
  z-index: 9;
  background: var(--pale-grey);
}
.header {
  position: fixed;
  width: 100%;
  z-index: 99;
}
.header__nav {
  display: flex;
  align-items: center;
  padding: 30px;
  background-color: rgba(0, 0, 0, 0);
}
.nav__logo {
  width: 191px;
  margin-right: 55px;
  cursor: pointer;
}
.nav__logo path {
  transition: all 0.4s ease-out;
}
nav {
  position: absolute;
  z-index: 9;
  width: 100%;
}
.v-toolbar__content {
  height: auto !important;
  padding: 35px 30px !important;
}
.v-toolbar__content .v-app-bar__nav-icon {
  margin-top: -10px;
}
.header__nav .menu-icon {
  font-family: var(--font-awesome-5-pro-light);
  font-size: 30px;
  color: var(--dark);
  margin-right: 27px;
  cursor: pointer;
  z-index: 999;
  opacity: 1;
  transform: scale(1);
  transition: all 0.3s ease-out;
}
.close-icon {
  position: absolute;
  height: 40px;
  margin-left: 5px;
  margin-top: -5px;
  width: 40px;
  cursor: pointer;
}
.close-icon span {
  display: block;
  width: 26px;
  height: 2.5px;
  background: var(--white);
  position: relative;
  transition: all 0.3s ease-out;
  transform: rotate(0deg);
}
.close-icon span:nth-child(1) {
  top: 21px;
}
.close-icon span:nth-child(2) {
  top: 18.5px;
}
.closeMenuIcon {
  opacity: 0;
  transform: scale(0) !important;
}
.openClose1 {
  background: var(--white);
  transform: rotate(45deg) !important;
}
.openClose2 {
  background: var(--white);
  transform: rotate(-45deg) !important;
}
.nav__time {
  font-family: Roboto;
  font-size: 48px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.13;
  letter-spacing: normal;
  text-align: left;
  margin-right: 20px;
}
.nav__day-week {
  margin-bottom: 0 !important;
  color: var(--dark);
  font-family: Roboto;
  font-size: 15px;
  margin: 0;
  padding: 0;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  height: 22px;
  letter-spacing: normal;
  text-align: left;
}
.nav__date span {
  color: var(--dark);
  font-family: Roboto;
  font-size: 15px;
  margin: 0;
  padding: 0;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  margin-right: 5px;
}
.nav__icon{
  font-size: 26px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.81;
  letter-spacing: normal;
  text-align: left;
}
.nav__celsius {
  font-family: Roboto;
  font-size: 15px;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
}
.header-icon {
  font-family: var(--font-awesome-5-pro-light);
  font-size: 21px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.1;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark2);
}
.header-name {
  margin: 0px 18px;
  font-family: Roboto;
  font-size: 0.9375rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark2);
  margin-top: 5px;
}
.regular {
  font-family: var(--font-awesome-5-pro) !important;
}
.notifications {
  position: absolute;
  margin-left: 23px;
  margin-top: -44px;
  border-radius: 50%;
  padding: 8px;
  background-color: var(--bright-orange);
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  display: flex;
  text-align: center;
  align-items: center;
  width: 22px;
  height: 22px;
  color: var(--white);
}

.nav__logo {
  max-height: 100px;
  position: relative;
}
</style>