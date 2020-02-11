<template>
  <div>
    <v-header />
    <v-menu drawer='false'>
      <template #search>
        <v-search-menu placeholder="Поиск" />
      </template>
      <v-submenu title="Главная" :action="test" only_title="true" />
            <v-submenu title="НАДЗОР">
              <v-submenu-link :action="test" text="Надзорные дела" />
              <v-submenu-link text="Программа проверок" />
              <v-submenu-link text="Проверки" />
            </v-submenu>
            <v-submenu title="ТКИ">
              <v-submenu-link text="План работ" />
              <v-submenu-link text="Средства контроля" />
              <v-submenu-link text="Повышение квалификации" />
              <v-submenu-link text="СМК" />
            </v-submenu>
            <v-submenu title="АНАЛИТИКА">
              <v-submenu-link text="Статистика" />
              <v-submenu-link text="Нарушения" />
              <v-submenu-link text="Резонансные нарушения" />
              <v-submenu-link text="СМК" />
            </v-submenu>
            <v-submenu title="НСИ">
              <v-submenu-link text="Регулирующие документы" />
              <v-submenu-link text="Журнал ознокомления с документами" />
              <v-submenu-link text="Реестр организаций" />
              <v-submenu-link text="Участники ГСН" />
              <v-submenu-link text="Классификатор нарушений" />
              <v-submenu-link text="Управление сотрудниками" />
              <v-submenu-link text="КоАП" />
            </v-submenu>
            <v-submenu title="ПОИСК ДОКУМЕНТОВ" only_title="true" />
    </v-menu>
    <main class="df">
      <div class="content" :class="{ml320 : $store.state.menu_visibility}">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
const VMenu = () => import('@/components/v-menu')
const VHeader = () => import('@/components/v-header')
const VSubmenu = () => import('@/components/v-submenu')
const VSubmenuLink = () => import('@/components/v-submenu-link')
const VSearchMenu = () => import('@/components/v-search-menu')

export default {
  name: 'DefaultLayout',
  components: {
    VMenu,
    VHeader,
    VSubmenu,
    VSubmenuLink,
    VSearchMenu
  },
  data: () => ({
    //
  }),
  methods: {
    test() {
      window.console.log('test')
    }
  }
};
</script>

<style>
.ml320 {
  padding-left: 310px !important;
  transition: all 0.3s ease;
}
.df {
  display: flex;
}
.content {
  transition: all 0.3s ease;
  margin-top: 175px;
  margin-left: 15px;
  width: 100%;
  padding: 0px 15px;
}
</style>