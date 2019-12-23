<template>
  <div class="menu" :class="{openMenu: $store.state.menu_visibility, 'lightGamma': light_gamma}">
    <div class="menu__container">
      <div class="df">
        <div class="menu__close-btn" @click="closeMenu">
          <Icon class="menu__close-icon" :class="{colorBlack: light_gamma}" icon=""/>
        </div>
        <img v-if="!light_gamma" class="menu__logo-img" src="@/assets/menu-logo.svg" alt="">
        <img v-else class="menu__logo-img" src="@/assets/logo.svg" alt="">
      </div>
      <div class="menu__links">
        <div class="link">
          <h1 class="menu__title cp" :style="`font-size: ${text_size}px`" @click="$router.push({name: 'Home'})">Главная</h1>
        </div>
        <div class="link">
          <div class="df jcsb pr30 cp" @click="openSubmenu('Надзор')">
            <h1 class="menu__title" :style="`font-size: ${text_size}px`">Надзор</h1>
            <Icon class="icon__dots" icon="" :class="{colorOrange: open_submenu.includes('Надзор')}" />
          </div>
          <div class="link__submenu" :class="{hidden: !open_submenu.includes('Надзор')}">
            <ul>
              <li :style="`font-size: ${text_size}px`">Надзорные дела</li>
              <li :style="`font-size: ${text_size}px`">Программа проверок</li>
              <li :style="`font-size: ${text_size}px`">Проверки</li>
            </ul>
          </div>
        </div>
        <div class="link">
          <div class="df jcsb pr30 cp" @click="openSubmenu('ТКИ')">
            <h1 class="menu__title" :style="`font-size: ${text_size}px`">ТКИ</h1>
            <Icon class="icon__dots" icon="" :class="{colorOrange: open_submenu.includes('ТКИ')}"/>
          </div>
          <div class="link__submenu" :class="{hidden: !open_submenu.includes('ТКИ')}">
            <ul>
              <li :style="`font-size: ${text_size}px`">План работ</li>
              <li :style="`font-size: ${text_size}px`">Средства контроля</li>
              <li :style="`font-size: ${text_size}px`">Повышение квалификации</li>
              <li :style="`font-size: ${text_size}px`">СМК</li>
            </ul>
          </div>
        </div>
        <div class="link">
          <div class="df jcsb pr30 cp" @click="openSubmenu('Аналитика')">
            <h1 class="menu__title" :style="`font-size: ${text_size}px`">Аналитика</h1>
            <Icon class="icon__dots" icon="" :class="{colorOrange: open_submenu.includes('Аналитика')}" />
          </div>
          <div class="link__submenu" :class="{hidden: !open_submenu.includes('Аналитика')}">
            <ul>
              <li :style="`font-size: ${text_size}px`">Статистика</li>
              <li :style="`font-size: ${text_size}px`">Нарушения</li>
              <li :style="`font-size: ${text_size}px`">Резонансные нарушения</li>
              <li :style="`font-size: ${text_size}px`">СМК</li>
            </ul>
          </div>
        </div>
        <div class="link">
          <div class="df jcsb pr30 cp" @click="openSubmenu('НСИ')">
            <h1 class="menu__title" :style="`font-size: ${text_size}px`">НСИ</h1>
            <Icon class="icon__dots" icon="" :class="{colorOrange: open_submenu.includes('НСИ')}" />
          </div>
          <div class="link__submenu" :class="{hidden: !open_submenu.includes('НСИ')}">
            <ul>
              <li :style="`font-size: ${text_size}px`">Регулирующие документы</li>
              <li :style="`font-size: ${text_size}px`">Журнал ознокомления</li> 
              <li :style="`font-size: ${text_size}px`">с документами</li>
              <li :style="`font-size: ${text_size}px`">Реестр организаций</li>
              <li :style="`font-size: ${text_size}px`">Участники ГСН</li>
              <li :style="`font-size: ${text_size}px`">Классификатор нарушений</li>
              <li :style="`font-size: ${text_size}px`">Управление сотрудниками</li>
              <li :style="`font-size: ${text_size}px`">КоАП</li>
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
            <Icon class="icon-btn" icon="" />
          </div>
          <div @click="textSizeMinus">
            <Icon class="icon-btn" icon="" />
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
</template>

<script>
const Icon = () => import ('@/components/Icon.vue')
export default {
  props:['drawer'],
  components: {
    Icon
  },
  data: () => ({
    open_submenu: [],
    light_gamma: false,
    text_size: 15
  }),
  methods: {
    closeMenu() {
      this.open_submenu = []
      this.$store.commit('SET_MENU_VISIBILITY', false)
    },
    openSubmenu(title) {
      if(this.open_submenu.includes(title)) {
        this.open_submenu = this.open_submenu.filter(word => word != title);
      } else {
        this.open_submenu.push(title)
      }
    },
    textSizePlus() {
      this.text_size++
    },
    textSizeMinus() {
      this.text_size--
    }
  }
}
</script>

<style slang="scss">
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
.hidden {
  height: 0px !important;
  overflow: hidden;
}
.hidden ul {
  opacity: 0 !important;
  transition: all 2s ease-out;
}
.colorOrange {
  color: #fb6229 !important;
}
nav {
  padding-right: 5px;
}
.lightGamma {
  transition: all 0.4s ease;
  background-color: #e5e5ea !important;
  color: #000 !important;
}
.openMenu {
  transition: all 0.2s ease-out;
  margin-left: 0px !important;
}
.menu {
  margin-left: -308px;
  position: fixed;
  transition: all 0.2s ease-in-out;
  background-color: #21262c;
  padding: 0px;
  min-width: 312px;
  height: 100vh;
  z-index: 99;
  color: #fff;
}
.menu__container {
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 40px;
  padding-bottom: 77px;
  overflow-y: auto;
  height: 80vh;
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
  margin-top: -8px;
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
}
.link {
  margin-bottom: 25px;
}
.menu__title {
  font-family: Roboto;
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.47;
  letter-spacing: 0.5px;
  text-align: left;
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
}
.link__submenu {
  opacity: 1;
  height: auto;
  overflow: auto;
}
.link__submenu ul{
  padding-left: 15px;
  margin-top: 10px;
  list-style-type: none;
  transition: all 0.3s ease-out;
}
.link__submenu ul li {
  font-family: Roboto;
  font-size: 15px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
  opacity: 0.7;
  transition: all 0.2s ease-out;
  cursor: pointer;
}
.link__submenu ul li:hover {
  color: #fb6229;
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
  margin-top: 10px;
}
.icon-btn {
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0) !important;
  font-family: var(--font-awesome-5-pro);
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
.v-input--switch {
  margin-top: 5px !important;
  margin-left: 20px;
}
</style>