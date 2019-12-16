<template>
  <header>
    <nav>
      <v-toolbar flat>
        <v-app-bar-nav-icon @click="openMenu"></v-app-bar-nav-icon>
        <v-toolbar-title>
          <img src="@/assets/logo.png" alt="">
        </v-toolbar-title>
        <p>Navbar</p>
      </v-toolbar>
    </nav>
  </header>
</template>

<script>
export default {
  data: () => ({
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
.menu__close-icon {
  margin-top: -9px;
}
.menu__close-icon span {
  width: 22px;
  height: 35px;
  font-family: "Font Awesome 5 Pro Light";
  font-size: 35px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.54;
  letter-spacing: normal;
  text-align: center;
  margin-right: 30px;
}
.menu__logo-img {
  width: 190px;
  height: 40px;
}
nav {
  position: absolute;
  z-index: 9;
  width: 100%;
}
</style>