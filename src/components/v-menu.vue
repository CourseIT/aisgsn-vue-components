<template>
  <div class="menu" :class="{openMenu: $store.state.menu_visibility}">
    <div class="animate" :class="{'lightGamma': light_gamma}">
      <div class="menu-top-bg"></div>
      <div class="menu__container">
        <slot name="search">
        </slot>
        <div class="menu__links">
          <slot>
          </slot>
        </div>
      </div>
      <div class="menu__settings">
        <div class="df jcsb">
          <p class="settings__text">Размер шрифта</p>
          <div class="df">
            <div @click="textSizeMinus" class="text-minus" :class="{'icon-btn__disable': text_size === 14, 'color-black': light_gamma}">
              A
            </div>
            <div @click="textSizePlus" class="text-plus" :class="{'icon-btn__disable': text_size === 18, 'color-black': light_gamma}">
              A
            </div>
          </div>
        </div>
        <div class="df">
          <p class="settings__text">Темная гамма</p>
          <v-switch v-model="light_gamma" inset></v-switch>
          <p class="settings__text">Светлая гамма</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data: () => ({
    light_gamma: false,
    text_size: 16
  }),
  watch: {
    light_gamma(light_gamma) {
      if(light_gamma) {
        this.$store.commit('SET_LIGHT_GAMMA', true)
      } else {
        this.$store.commit('SET_LIGHT_GAMMA', false)
      }
    }
  },
  created() {
    this.checkVisibilityInCookie()
  },
  methods: {
    test() {
      window.console.log('test')
    },
    checkVisibilityInCookie() {
      var name_cook = "menu_visibility=";
      var spl = document.cookie.split(";");
      for (var i = 0; i < spl.length; i++) {
        var c = spl[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1, c.length);
        }
        if (c.indexOf(name_cook) == 0) {
          if (c.substring(name_cook.length, c.length) === 'true') {
            this.$store.commit('SET_MENU_VISIBILITY', true)
          } else {
            this.$store.commit('SET_MENU_VISIBILITY', false)
          }
        }
      }
    },
    textSizePlus() {
      if(this.text_size >= 14 && this.text_size < 18){
        this.text_size++
        document.querySelector(':root').style.fontSize = `${this.text_size}px`
      }
    },
    textSizeMinus() {
      if(this.text_size > 14 && this.text_size <= 18){
        this.text_size--
        document.querySelector(':root').style.fontSize = `${this.text_size}px`
      }
    }
  }
}
</script>

<style>
.text-minus{
  cursor: pointer;
  opacity: 0.7;
  user-select: none;
  font-size: 15px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.53;
  letter-spacing: normal;
  text-align: left;
  color: var(--pre-light);
  margin-top: 8px;
  margin-right: 25px;
}
.text-plus{
  cursor: pointer;
  opacity: 0.7;
  user-select: none;
  font-size: 21px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.53;
  letter-spacing: normal;
  text-align: left;
  color: var(--pre-light);
}
.menu .v-input__control {
  position: relative !important;
  bottom: 10px !important;
}
.menu .v-input--switch__track {
  background-color: var(--pale-grey) !important;
  opacity: 1 !important;
  height: 21px !important;
  width: 43px !important;
  top: 11px !important;
  margin: 0px 2px !important;
}
.menu .v-input--switch__thumb {
  width: 19px !important;
  background-color: var(--blue-grey) !important;
  top: 12px !important;
  height: 19px !important;
}
.menu .v-input--selection-controls{
  margin-top: 5px !important;
}
.menu .v-input--selection-controls__ripple {
  display: none;
}
.lightGamma {
  background-color: #e5e5ea !important;
  color: #000 !important;
}
.color-black{
  color: #000;
}
.openMenu {
  margin-left: 0px !important;
}
.menu {
  margin-left: -308px;
  position: fixed;
  transition: all 0.3s ease;
  color: var(--white);
  padding: 0px;
  min-width: 312px;
  height: 100vh;
  z-index: 9;
}
.animate {
  transition: background-color 1s ease-out;
  height: 100vh;
  background-color: var(--dark);
}
.menu-top-bg {
  width: 100%;
  height: 130px;
}
.menu__container {
  width: 312px;
  padding: 20px 40px;
  overflow-y: auto;
  height: 65vh;
}
.menu__container .df{
  align-items: center;
}
.menu__container::-webkit-scrollbar {
  width: 0px;
  background: rgba(255, 255, 255, 0.0);
}
.colorBlack {
  transition: all 0.2s ease-in-out;
  color: #000 !important;
}
.menu__settings {
  position: relative;
  bottom: 0;
  padding: 0px 40px;
}
.settings__text {
  font-family: Roboto;
  font-size: 11px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: normal;
  text-align: center;
  margin-top: 12px;
}
.icon-btn {
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0);
  font-family: var(--font-awesome-5-pro-light);
  opacity: 0.7;
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.81;
  letter-spacing: normal;
  text-align: left;
  margin: 0px 5px;
  cursor: pointer;
}
.icon-btn__disable {
  opacity: 0.3;
  cursor: no-drop;
}
.v-input--switch {
  margin-top: 5px;
  margin-left: 20px;
}
.menu .theme--light.v-input:not(.v-input--is-disabled) input, .theme--light.v-input:not(.v-input--is-disabled) textarea {
  margin-top: 10px !important;
}
</style>