<template>
<div>
 <div class="header-bg"></div>
  <header class="header">
    <nav class="header__nav">
        <v-toolbar-items >
          <div class="close-icon" @click="closeMenu">
            <span :class="{'openClose1': show_close || $store.state.menu_visibility, 'colorBlack': $store.state.menu_visibility && $store.state.light_gamma }"></span>
            <span :class="{'openClose2': show_close || $store.state.menu_visibility, 'colorBlack': $store.state.menu_visibility && $store.state.light_gamma }"></span>
          </div>
          <div @click="openMenu">
            <Icon class="menu-icon" :class="{'closeMenuIcon': show_close || $store.state.menu_visibility }" icon=""/>
          </div>
        </v-toolbar-items>
        <v-toolbar-title class="df aic">
            <svg
              @click="$router.push({name: 'Home'})"
              class="nav__logo" xmlns="http://www.w3.org/2000/svg"
              id="Лого_АИС_ГСН_fin"
              width="191.307"
              height="40.4"
              data-name="Лого_АИС ГСН_fin"
              viewBox="0 0 191.307 40.4">
              <g id="Group_188" data-name="Group 188">
                  <path :fill="$store.state.menu_visibility && !$store.state.light_gamma ? '#fff' : '#000'" id="Path_21" d="M126.587 70.191V52.2L112.7 70.191z" class="cls-1" data-name="Path 21" transform="translate(-68.237 -31.606)"/>
                  <path :fill="$store.state.menu_visibility && !$store.state.light_gamma ? '#fff' : '#000'" id="Path_22" d="M116 23.448L130.085 5.3H116z" class="cls-1" data-name="Path 22" transform="translate(-70.235 -3.209)"/>
                  <path :fill="$store.state.menu_visibility && !$store.state.light_gamma ? '#fff' : '#000'" id="Path_23" d="M15.071 5.3L0 41.794h11.56l2.64-6.825h11.878l2.6 6.825h12.037L25.763 5.3zm2.407 21.265l2.722-8.64 2.643 8.64h-5.365z" class="cls-1" data-name="Path 23" transform="translate(0 -3.209)"/>
                  <path :fill="$store.state.menu_visibility && !$store.state.light_gamma ? '#fff' : '#000'" id="Path_24" d="M184.884 13.493a10.3 10.3 0 0 1 7.338-2.722 19.436 19.436 0 0 1 9.469 2.564V2.052A21.5 21.5 0 0 0 191.867 0c-6.391 0-11.717 1.894-15.86 5.642-.316.276-.631.592-.907.868v27.3c.316.316.631.631.986.947 4.182 3.748 9.508 5.642 15.9 5.642a23.282 23.282 0 0 0 9.705-1.815V27.222a16.5 16.5 0 0 1-9.035 2.407 11.451 11.451 0 0 1-7.654-2.6 8.694 8.694 0 0 1-3-6.825 8.663 8.663 0 0 1 2.882-6.711z" class="cls-1" data-name="Path 24" transform="translate(-106.018)"/>
              </g>
              <g id="Group_189" data-name="Group 189" transform="translate(106.444 2.052)">
                  <path fill="#fb6229" id="Path_25" d="M391.319 5.2v13.335h-12.94V5.2h-10.692v11.284a19.436 19.436 0 0 0-9.469-2.564 10.3 10.3 0 0 0-7.338 2.722 8.663 8.663 0 0 0-2.88 6.706 8.693 8.693 0 0 0 3 6.825 11.451 11.451 0 0 0 7.654 2.6 16.5 16.5 0 0 0 9.035-2.407v11.367h10.692v-13.3h12.941v13.3h10.692V5.2z" class="cls-2" data-name="Path 25" transform="translate(-317.148 -5.2)"/>
                  <path fill="#fb6229" id="Path_26" d="M294.695 37.967a18.744 18.744 0 0 1-6.312-14.6 18.692 18.692 0 0 1 6.273-14.519A21.355 21.355 0 0 1 300.06 5.3l-12.7.039v8.206H269.8v28.209l30.971.039a21.665 21.665 0 0 1-6.076-3.826z" class="cls-2" data-name="Path 26" transform="translate(-269.8 -5.261)"/>
              </g>
          </svg>
        </v-toolbar-title>
        <v-toolbar-items class="nav__time">
          {{time}}
        </v-toolbar-items>
        <v-toolbar-items class="db">
          <p class="nav__day-week">{{day_week}}</p>
          <div class="nav__date">
            <span>{{date}},</span>
            <span>{{year}},</span>
            <span>{{city}}</span>
          </div>
        </v-toolbar-items>
        <v-toolbar-items>
          <i class="fal fa-thunderstorm-sun nav__icon"></i>
          <p class="nav__degree">{{degree}}</p>
          <span class="nav__celsius">℃</span>
        </v-toolbar-items>
        <v-spacer></v-spacer>

        <Notifications />
    </nav>
  </header>
  <Breadcrumbs />
</div>
   
</template>

<script>
const Icon = () => import('../components/Icon')
const Notifications = () => import('./Notifications')
const Breadcrumbs = () => import('../components/Breadcrumbs')
export default {
  components: {
    Notifications,
    Breadcrumbs,
    Icon
  },
  data: () => ({
    show_close: false,
    time: '12:25',
    day_week: 'Понедельник',
    year: '2020',
    date: '24 августа',
    city: 'Москва',
    degree: '28'
  }),
  methods: {
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
.df {
  display: flex !important;
}
.db{
  display: block !important;
}
.aic {
  align-items: center;
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
  /* background-color: var(--pale-grey); */
}
.menu__close-icon {
  margin-top: -9px;
}
.menu__close-icon span {
  max-width: 22px;
  height: 35px;
  font-family: var(--font-awesome-5-pro);
  font-size: 35px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.54;
  letter-spacing: normal;
  text-align: center;
  margin-right: 30px;
}
.nav__logo {
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
  width: 40px;
  cursor: pointer;
}
.close-icon span {
  display: block;
  width: 26px;
  height: 2.5px;
  background: #fff;
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
  background: #fff;
  transform: rotate(45deg) !important;
}
.openClose2 {
  background: #fff;
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
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
}
.nav__date span {
  color: var(--dark);
  font-family: Roboto;
  font-size: 15px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
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
.nav__degree {
  color: var(--dark);
  font-family: Roboto;
  font-size: 48px;
  font-weight: 300;
  margin-left: 6px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.13;
  letter-spacing: normal;
  text-align: left;
  margin-bottom: 0 !important;
}
.nav__celsius {
  font-family: Roboto;
  font-size: 15px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
}
</style>