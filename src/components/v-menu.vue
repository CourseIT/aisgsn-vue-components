<template>
  <div class="menu" :class="{openMenu: $store.state.menu_visibility}">
    <div class="animate" :class="{'lightGamma': light_gamma}">
      <div class="menu-top-bg"></div>
      <div class="menu__container">
        <div class="menu__links">
          <div class="link">
            <h1 class="menu__title cp" :style="`font-size: ${text_size}px`" @click="$router.push({name: 'Home'})">Главная</h1>
          </div>
          <div class="link">
            <div class="df jcsb cp" @click="openSubmenu('Надзор')">
              <h1 class="menu__title" :style="`font-size: ${text_size}px`">Надзор</h1>
              <v-icon class="icon__dots" icon="" :class="{colorOrange: open_submenu.includes('Надзор')}" />
            </div>
            <div class="link__submenu" :class="{hidden: !open_submenu.includes('Надзор')}">
              <ul>
                <li :class="{t03s: open_submenu.includes('Надзор')}" :style="`font-size: ${text_size}px`">Надзорные дела</li>
                <li :class="{t04s: open_submenu.includes('Надзор')}" :style="`font-size: ${text_size}px`">Программа проверок</li>
                <li :class="{t05s: open_submenu.includes('Надзор')}" :style="`font-size: ${text_size}px`">Проверки</li>
              </ul>
            </div>
          </div>
          <div class="link">
            <div class="df jcsb cp" @click="openSubmenu('ТКИ')">
              <h1 class="menu__title" :style="`font-size: ${text_size}px`">ТКИ</h1>
              <v-icon class="icon__dots" icon="" :class="{colorOrange: open_submenu.includes('ТКИ')}"/>
            </div>
            <div class="link__submenu" :class="{hidden: !open_submenu.includes('ТКИ')}">
              <ul>
                <li :class="{t03s: open_submenu.includes('ТКИ')}" :style="`font-size: ${text_size}px`">План работ</li>
                <li :class="{t04s: open_submenu.includes('ТКИ')}" :style="`font-size: ${text_size}px`">Средства контроля</li>
                <li :class="{t05s: open_submenu.includes('ТКИ')}" :style="`font-size: ${text_size}px`">Повышение квалификации</li>
                <li :class="{t06s: open_submenu.includes('ТКИ')}" :style="`font-size: ${text_size}px`">СМК</li>
              </ul>
            </div>
          </div>
          <div class="link">
            <div class="df jcsb cp" @click="openSubmenu('Аналитика')">
              <h1 class="menu__title" :style="`font-size: ${text_size}px`">Аналитика</h1>
              <v-icon class="icon__dots" icon="" :class="{colorOrange: open_submenu.includes('Аналитика')}" />
            </div>
            <div class="link__submenu" :class="{hidden: !open_submenu.includes('Аналитика')}">
              <ul>
                <li :class="{t03s: open_submenu.includes('Аналитика')}" :style="`font-size: ${text_size}px`">Статистика</li>
                <li :class="{t04s: open_submenu.includes('Аналитика')}" :style="`font-size: ${text_size}px`">Нарушения</li>
                <li :class="{t05s: open_submenu.includes('Аналитика')}" :style="`font-size: ${text_size}px`">Резонансные нарушения</li>
                <li :class="{t06s: open_submenu.includes('Аналитика')}" :style="`font-size: ${text_size}px`">СМК</li>
              </ul>
            </div>
          </div>
          <div class="link">
            <div class="df jcsb cp" @click="openSubmenu('НСИ')">
              <h1 class="menu__title" :style="`font-size: ${text_size}px`">НСИ</h1>
              <v-icon class="icon__dots" icon="" :class="{colorOrange: open_submenu.includes('НСИ')}" />
            </div>
            <div class="link__submenu" :class="{hidden: !open_submenu.includes('НСИ')}">
              <ul>
                <li :class="{t03s: open_submenu.includes('НСИ')}" :style="`font-size: ${text_size}px`">Регулирующие документы</li>
                <li :class="{t04s: open_submenu.includes('НСИ')}" :style="`font-size: ${text_size}px`">Журнал ознокомления с документами</li>
                <li :class="{t05s: open_submenu.includes('НСИ')}" :style="`font-size: ${text_size}px`">Реестр организаций</li>
                <li :class="{t06s: open_submenu.includes('НСИ')}" :style="`font-size: ${text_size}px`">Участники ГСН</li>
                <li :class="{t07s: open_submenu.includes('НСИ')}" :style="`font-size: ${text_size}px`">Классификатор нарушений</li>
                <li :class="{t08s: open_submenu.includes('НСИ')}" :style="`font-size: ${text_size}px`">Управление сотрудниками</li>
                <li :class="{t09s: open_submenu.includes('НСИ')}" :style="`font-size: ${text_size}px`">КоАП</li>
              </ul>
            </div>
          </div>
          <h1 class="menu__title cp" :style="`font-size: ${text_size}px`">Поиск документов</h1>
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
const VIcon = () => import ('@/components/v-icon.vue')

export default {
  props:['drawer'],
  components: {
    VIcon
  },
  data: () => ({
    open_submenu: [],
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
    openSubmenu(title) {
      if(this.open_submenu.includes(title)) {
        this.open_submenu = this.open_submenu.filter(word => word != title);
      } else {
        this.open_submenu.push(title)
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
.t03s {
  -webkit-transition: padding-left 0.3s ease-in-out !important;
  -moz-transition: padding-left 0.3s ease-in-out !important;
  transition: padding-left 0.3s ease-in-out !important;
  opacity: 1 !important;
  padding-left: 0px !important;
}
.t04s {
  -webkit-transition: padding-left 0.4s ease-in-out !important;
  -moz-transition: padding-left 0.4s ease-in-out !important;
  transition: padding-left 0.4s ease-in-out !important;
  opacity: 1 !important;
  padding-left: 0px !important;
}
.t05s {
  -webkit-transition: padding-left 0.5s ease-in-out !important;
  -moz-transition: padding-left 0.5s ease-in-out !important;
  transition: padding-left 0.5s ease-in-out !important;
  opacity: 1 !important;
  padding-left: 0px !important;
}
.t06s {
  -webkit-transition: padding-left 0.6s ease-in-out !important;
  -moz-transition: padding-left 0.6s ease-in-out !important;
  transition: padding-left 0.6s ease-in-out !important;
  opacity: 1 !important;
  padding-left: 0px !important;
}
.t07s {
  -webkit-transition: padding-left 0.7s ease-in-out !important;
  -moz-transition: padding-left 0.7s ease-in-out !important;
  transition: padding-left 0.7s ease-in-out !important;
  opacity: 1 !important;
  padding-left: 0px !important;
}
.t08s {
  -webkit-transition: padding-left 0.8s ease-in-out !important;
  -moz-transition: padding-left 0.8s ease-in-out !important;
  transition: padding-left 0.8s ease-in-out !important;
  opacity: 1 !important;
  padding-left: 0px !important;
}
.t09s {
  -webkit-transition: padding-left 0.9s ease-in-out !important;
  -moz-transition: padding-left 0.9s ease-in-out !important;
  transition: padding-left 0.9s ease-in-out !important;
  opacity: 1 !important;
  padding-left: 0px !important;
}
.t1s {
  -webkit-transition: padding-left 1s ease-in-out !important;
  -moz-transition: padding-left 1s ease-in-out !important;
  transition: padding-left 1s ease-in-out !important;
  opacity: 1 !important;
  padding-left: 0px !important;
}
.t11s {
  -webkit-transition: padding-left 1.1s ease-in-out !important;
  -moz-transition: padding-left 1.1s ease-in-out !important;
  transition: padding-left 1.1s ease-in-out !important;
  opacity: 1 !important;
  padding-left: 0px !important;
}

.dn {
  transition: all 0.2s ease-out;
  display: none;
}
.df {
  display: flex;
}
.jcsb {
  justify-content: space-between;
}
.pr30 {
  padding-right: 30px;
}
.cp {
  cursor: pointer;
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
.menu .v-input--selection-controls__ripple {
  display: none;
}
.menu .accent--text {
  color: var(--blue-grey) !important;
}
.colorOrange {
  color: var(--bright-orange);
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
.link {
  margin-bottom: 25px;
}
.menu__title {
  width: 200px;
  font-family: Roboto;
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.47;
  letter-spacing: 0.5px;
  text-align: left;
  text-transform: uppercase;
}
.icon__dots {
  font-family: var(--font-awesome-5-pro);
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.47;
  letter-spacing: normal;
  text-align: left;
  transition: all 0.2s ease-out;
}
.icon__dots:hover {
  color: var(--bright-orange)
}
.hidden {
  max-height: 0px !important;
  overflow-y: hidden;
}
/* .hidden ul li {
  opacity: 0 !important;
  padding-left: 40px !important;
} */
.link__submenu {
  opacity: 1;
  max-height: 350px;
  overflow-y: hidden;
  transition: all 0.5s cubic-bezier(0.5, 0.5, 0.5, 0.5) !important;
}
.link__submenu ul{
  padding-left: 15px;
  margin-top: 10px;
  list-style-type: none;
  overflow: hidden;
  position: relative;
}
.link__submenu ul li {
  font-family: Roboto;
  font-size: 15px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  opacity: 0.7;
  cursor: pointer;
  margin: 5px 0px;
  transition: all 0.4s ease-in-out;
  opacity: 0;
  padding-left: 40px;
}
.link__submenu ul li:hover {
  color: var(--bright-orange);
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