<template>
  <div>
    <v-header />
    <v-menu>
      <template #search>
        <v-search-menu v-model="search" placeholder="Поиск" />
      </template>
      <div v-if="!search">
        <v-submenu title="Главная" :notifications="notifications" :action="test" only_title="true" />
          <v-submenu title="НАДЗОР" :notifications="notifications2">
            <v-submenu-link :action="test" :notifications="notifications2" text="Надзорные дела">
              <v-link text="test" :notifications="notifications" />
              <v-link text="test" :notifications="notifications" />
              <v-link text="test" />
              <v-link text="test" />
            </v-submenu-link>
            <v-submenu-link only_title="true" text="Программа проверок" />
            <v-submenu-link text="Проверки">
              <v-link text="test" />
              <v-link text="test" />
            </v-submenu-link>
          </v-submenu>
          <v-submenu title="ТКИ" :notifications="notifications2">
            <v-submenu-link only_title="true" :notifications="notifications" text="План работ" />
            <v-submenu-link only_title="true" :notifications="notifications"  text="Средства контроля" />
            <v-submenu-link only_title="true" text="Повышение квалификации" />
            <v-submenu-link only_title="true" text="СМК" />
          </v-submenu>
          <v-submenu title="АНАЛИТИКА">
            <v-submenu-link only_title="true" text="Статистика" />
            <v-submenu-link only_title="true" text="Нарушения" />
            <v-submenu-link only_title="true" text="Резонансные нарушения" />
            <v-submenu-link only_title="true" text="СМК" />
          </v-submenu>
          <v-submenu title="НСИ">
            <v-submenu-link only_title="true" text="Регулирующие документы" />
            <v-submenu-link only_title="true" text="Журнал ознокомления с документами" />
            <v-submenu-link only_title="true" text="Реестр организаций" />
            <v-submenu-link only_title="true" text="Участники ГСН" />
            <v-submenu-link only_title="true" text="Классификатор нарушений" />
            <v-submenu-link only_title="true" text="Управление сотрудниками" />
            <v-submenu-link only_title="true" text="КоАП" />
          </v-submenu>
        <v-submenu title="ПОИСК ДОКУМЕНТОВ" only_title="true" />
      </div>
      <div v-else>
        <v-link v-for="(link, index) in filterList" :key="index" :text="link.text" :notifications="link.notifications" />
      </div>
    </v-menu>
    <main>
      <div class="content" >
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
const VLink = () => import('@/components/v-link')

export default {
  name: 'DocLayout',
  components: {
    VMenu,
    VHeader,
    VSubmenu,
    VSubmenuLink,
    VSearchMenu,
    VLink
  },
  data: () => ({
    search: '',
    notifications: [
      '1',
      '2',
      '3'
    ],
    notifications2: [
      '1',
      '2',
      '3',
      '1',
      '2',
      '3'
    ],
    links: [
      {
        text: 'Главная',
        notifications: ['1','2','3']
      },
      {
        text: 'НАДЗОР',
        notifications: []
      },
      {
        text: 'Надзорные дела',
        notifications: []
      },
      {
        text: 'test',
        notifications: ['1','2','3']
      },
      {
        text: 'Программа проверок',
        notifications: []
      },
      {
        text: 'Проверки',
        notifications: []
      },
      {
        text: 'ТКИ',
        notifications: []
      },
      {
        text: 'План работ',
        notifications: ['1','2','3']
      },
      {
        text: 'Средства контроля',
        notifications: ['1','2','3']
      },
      {
        text: 'Повышение квалификации',
        notifications: []
      },
      {
        text: 'СМК',
        notifications: []
      },
      {
        text: 'Статистика',
        notifications: []
      },
      {
        text: 'Нарушения',
        notifications: []
      },
      {
        text: 'Резонансные нарушения',
        notifications: []
      },
      {
        text: 'Регулирующие документы',
        notifications: []
      },
      {
        text: 'Журнал ознокомления с документами',
        notifications: []
      },
      {
        text: 'Реестр организаций',
        notifications: []
      },
      {
        text: 'Участники ГСН',
        notifications: []
      },
      {
        text: 'Классификатор нарушений',
        notifications: []
      },
      {
        text: 'Управление сотрудниками',
        notifications: []
      },
      {
        text: 'КоАП',
        notifications: []
      }
    ]
  }),
  methods: {
    test() {
      window.console.log('test')
    }
  },
  computed: {
    filterList() {
      const new_list = this.links.filter(link => link.text.toLowerCase().includes(this.search.toLowerCase()))
      if(new_list.length == 0) {
        return [{text:'Ничего не найдено',notifications: []}]
      } else {
        return new_list;
      }
    }
  },
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
  padding-right: 35px;
}
</style>