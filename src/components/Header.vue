<template>
  <header class="header">
    <nav class="header__nav">
      <v-toolbar flat>
        <v-app-bar-nav-icon @click="openMenu"></v-app-bar-nav-icon>
        <v-toolbar-title>
          <img src="@/assets/logo.png" alt="" class="nav__logo">
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
          <span>℃</span>
        </v-toolbar-items>
      </v-toolbar>
    </nav>
  </header>
</template>

<script>
export default {
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
      this.$store.commit('SET_MENU_VISABILITY', true)
    }
  }
}
</script>

<style>
.df {
  display: flex;
}
.db{
  display: block;
}
.menu__close-icon {
  margin-top: -9px;
}
.menu__close-icon span {
  width: 22px;
  height: 35px;
  font-family: "Font Awesome 5 Pro" !important;
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
}
nav {
  position: absolute;
  z-index: 9;
  width: 100%;
}
.v-toolbar__content {
  height: auto !important;
  background: #efeff4;
  padding: 35px 30px;
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
  font-stretch: normal;
  font-style: normal;
  line-height: 1.13;
  letter-spacing: normal;
  text-align: left;
  margin-bottom: 0 !important;
}
</style>