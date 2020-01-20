<template>
  <div class="menu" :class="{openMenu: $store.state.menu_visibility}">
    <div class="animate" :class="{'lightGamma': light_gamma}">
      <div class="menu-top-bg"></div>
      <div class="menu__container">
        <div class="menu__links">
          <v-submenu title="Главная" :action="test" only_title="true" :text_size="text_size" />
          <v-submenu title="НАДЗОР" :text_size="text_size">
            <v-submenu-link :action="test" text="Надзорные дела" />
            <v-submenu-link text="Программа проверок" />
            <v-submenu-link text="Проверки" />
          </v-submenu>
          <v-submenu title="ТКИ" :text_size="text_size">
            <v-submenu-link text="План работ" />
            <v-submenu-link text="Средства контроля" />
            <v-submenu-link text="Повышение квалификации" />
            <v-submenu-link text="СМК" />
          </v-submenu>
          <v-submenu title="АНАЛИТИКА" :text_size="text_size">
            <v-submenu-link text="Статистика" />
            <v-submenu-link text="Нарушения" />
            <v-submenu-link text="Резонансные нарушения" />
            <v-submenu-link text="СМК" />
          </v-submenu>
          <v-submenu title="НСИ" :text_size="text_size">
            <v-submenu-link text="Регулирующие документы" />
            <v-submenu-link text="Журнал ознокомления с документами" />
            <v-submenu-link text="Реестр организаций" />
            <v-submenu-link text="Участники ГСН" />
            <v-submenu-link text="Классификатор нарушений" />
            <v-submenu-link text="Управление сотрудниками" />
            <v-submenu-link text="КоАП" />
          </v-submenu>
          <v-submenu title="ПОИСК ДОКУМЕНТОВ" only_title="true" :text_size="text_size" />
        </div>
      </div>
      <div class="menu__settings">
        <div class="df jcsb">
          <p class="settings__text">Размер шрифта</p>
          <div class="df">
            <div @click="textSizePlus">
              <v-icon class="icon-btn" :class="{'icon-btn__disable': text_size === 17}" icon="" />
            </div>
            <div @click="textSizeMinus">
              <v-icon class="icon-btn" :class="{'icon-btn__disable': text_size === 13}" icon="" />
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
const VIcon = () => import('@/components/v-icon.vue')
const VSubmenu = () => import('@/components/v-submenu')
const VSubmenuLink = () => import('@/components/v-submenu-link')

export default {
  props:['drawer'],
  components: {
    VIcon,
    VSubmenu,
    VSubmenuLink
  },
  data: () => ({
    light_gamma: false,
    text_size: 15
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
      if(this.text_size >= 13 && this.text_size < 17){
        this.text_size++
      }
    },
    textSizeMinus() {
      if(this.text_size > 13 && this.text_size <= 17){
        this.text_size--
      }
    }
  }
}
</script>

<style>
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
.menu .v-input--selection-controls__ripple {
  display: none;
}
.menu .accent--text {
  color: var(--blue-grey) !important;
}
nav {
  padding-right: 5px;
}
.lightGamma {
  background-color: #e5e5ea !important;
  color: #000 !important;
}
.openMenu {
  margin-left: 0px !important;
}
.menu {
  margin-left: -308px;
  position: fixed;
  transition: all 0.3s ease;
  color: #fff;
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
  padding: 20px 30px;
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
.menu__close-btn {
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  margin-right: 35px;
  height: 40px;
  max-width: 22px;
}
.colorBlack {
  transition: all 0.2s ease-in-out;
  color: #000 !important;
}
.menu__close-icon {
  margin-top: -5px;
  color: #fff;
}
.menu__close-icon span {
  max-width: 22px;
  height: 35px;
  font-family: var(--font-awesome-5-pro-light);
  font-size: 35px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.54;
  letter-spacing: normal;
  text-align: center;
}
.menu__logo-img {
  min-width: 190px;
  min-height: 40px;
  margin-bottom: 100px;
  cursor: pointer;
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