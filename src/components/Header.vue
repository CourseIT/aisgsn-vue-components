<template>
  <header class="header">
    <nav class="header__nav">
      <v-toolbar flat>
        <v-app-bar-nav-icon @click="openMenu"></v-app-bar-nav-icon>
        <v-toolbar-title>
          <img src="@/assets/logo.svg" alt="" @click="$router.push({name: 'Home'})" class="nav__logo">
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
      </v-toolbar>
    </nav>
  </header>
</template>

<script>
  const Notifications = () => import('./Notifications')
export default {
  components: {
    Notifications
  },
  data: () => ({
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
    }
  }
}
</script>

<style>
.df {
  display: flex !important;
}
.db{
  display: block !important;
}
.menu__close-icon {
  margin-top: -9px;
}
.menu__close-icon span {
  max-width: 22px;
  height: 35px;
  font-family: var(--font-awesome-5-pro) !important;
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
nav {
  position: absolute !important;
  z-index: 9 !important;
  width: 100% !important;
}
.v-toolbar__content {
  height: auto !important;
  background: #efeff4 !important;
  padding: 35px 30px !important;
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
  color: #21262c;
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
  color: #21262c;
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
  color: #21262c;
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
  color: #21262c;
}
</style>