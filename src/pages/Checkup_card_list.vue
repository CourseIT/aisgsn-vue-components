<template>
  <div class="checkup-card-list">
    <div class="df">
      <div class="w66" :class="{pl305: $store.state.menu_visibility}">
        <div class="df fr">
          <v-search v-model="search" width="100%"/>
          <v-icon class="icon-d icon ml42" :hover_color="true" icon="" prompt="Создать документ"/>
          <v-icon class="icon-d icon ml42" :hover_color="true" icon="" prompt="Загрузить документ"/>
          <v-radio-buttons radio_color="green" :labels="labels" class="g-radio"/>
        </div>
        <div class="df jcsb">
          <v-select dark_bg="true" v-model="author" defailt_value="Автор">
            <v-options :option="item" :action="function(){author = item}" v-for="(item, index) in select_list" :key="index"/>
          </v-select>
          <v-date-button v-model="date_btn"/>
          <v-date-range-button v-model="date_btn"/>
          <v-select dark_bg="true" v-model="status" defailt_value="Статус">
            <v-options :option="item" :action="function(){status = item}" v-for="(item, index) in select_list" :key="index"/>
          </v-select>
          <v-select dark_bg="true" v-model="type" defailt_value="Тип">
            <v-options :option="item" :action="function(){type = item}" v-for="(item, index) in select_list" :key="index"/>
          </v-select>
          <v-filters-button class="mr29"/>
        </div>
        <div class="table-block">
          <v-table :action="test" :docs="docs" :thead="thead" height="60vh" />
        </div>
        <p class="table__info">Время выдачи 12:25, количество записей и любая другая информация</p>
      </div>
      <v-col>
        <v-doc-info :doc_info="doc_info"/>
        <div class="ml25">
          <v-document-block img="true" :src="src" class="mt60"/>
        </div>
        <p class="doc__info">Информация о документе</p>
        <p class="doc__info">Информация о документе</p>
        <p class="doc__info">Информация о документе</p>
        <p class="doc__info">Информация о документе</p>
        <p class="doc__info">Информация о документе</p>
        <p class="doc__info">Информация о документе</p>
      </v-col>
    </div>
  </div>
</template>

<script>
const VTable = () => import('@/components/v-table')
const VDocumentBlock = () => import('@/components/v-document-block')
const VSearch = () => import('@/components/v-search')
const VIcon = () => import('@/components/v-icon')
const VDateButton = () => import('@/components/v-date-button')
const VDateRangeButton = () => import('@/components/v-date-range-button')
const VFiltersButton = () => import('@/components/v-filters-button')
const VRadioButtons = () => import('@/components/v-radio-buttons')
const VDocInfo = () => import('@/components/v-doc-info')
const VSelect = () => import('@/components/v-select')
const VOptions = () => import('@/components/v-options')

export default {
  components: {
    VTable,
    VDocumentBlock,
    VSearch,
    VIcon,
    VRadioButtons,
    VDateButton,
    VDateRangeButton,
    VFiltersButton,
    VDocInfo,
    VSelect,
    VOptions
  },
  methods: {
    test() {
      window.console.log('test')
    }
  },
  data: () => ({
    date_btn: '',
    search: '',
    author: '',
    date: '',
    type: '',
    status: '',
    select_list:['test1', 'test2'],
    src: 'https://static.thenounproject.com/png/4561-200.png',
    labels: ['Список','Хронология'],
    authors: [
      'НО',
      'ОТКИ'
    ],
    dates: [
      '23.08.2020',
      '23.08.2020'
    ],
    statuses: [
      'Статус1',
      'Статус2'
    ],
    types: [
      'Тип1',
      'Тип2'
    ],
    doc_info: {
      declarant: 'ВНИИЭФ',
      title_of_verification: 'Уточняется',
      inspector: 'Куликов Б. Ю.',
      dates: '20.08.20 – 28.08.20'
    },
    thead: ['Название документа', 'Автор', 'Тип', 'Подписан', 'Статус', 'Дата'],
    docs: [
      {
        name: 'Материалы проведённых испытаний (измерений) к протоколу РРК-9.7.14/ХХ-20__  от __.__.20__. ',
        author: 'ОТКИ',
        type: 'Что-то',
        podpisan: '23.08.2020',
        status: 'Какой-то',
        date: '20.07.2020'
      },
      {
        name: 'Материалы проведённых испытаний (измерений) к протоколу РРК-9.7.14/ХХ-20__  от __.__.20__. ',
        author: 'ОТКИ',
        type: 'Что-то',
        podpisan: '23.08.2020',
        status: 'Какой-то',
        date: '20.07.2020'
      },
      {
        name: 'Материалы проведённых испытаний (измерений) к протоколу РРК-9.7.14/ХХ-20__  от __.__.20__. ',
        author: 'ОТКИ',
        type: 'Что-то',
        podpisan: '23.08.2020',
        status: 'Какой-то',
        date: '20.07.2020'
      },
      {
        name: 'Материалы проведённых испытаний (измерений) к протоколу РРК-9.7.14/ХХ-20__  от __.__.20__. ',
        author: 'ОТКИ',
        type: 'Что-то',
        podpisan: '23.08.2020',
        status: 'Какой-то',
        date: '20.07.2020'
      },
      {
        name: 'Материалы проведённых испытаний (измерений) к протоколу РРК-9.7.14/ХХ-20__  от __.__.20__. ',
        author: 'ОТКИ',
        type: 'Что-то',
        podpisan: '23.08.2020',
        status: 'Какой-то',
        date: '20.07.2020'
      },
      {
        name: 'Материалы проведённых испытаний (измерений) к протоколу РРК-9.7.14/ХХ-20__  от __.__.20__. ',
        author: 'ОТКИ',
        type: 'Что-то',
        podpisan: '23.08.2020',
        status: 'Какой-то',
        date: '20.07.2020'
      },
      {
        name: 'Материалы проведённых испытаний (измерений) к протоколу РРК-9.7.14/ХХ-20__  от __.__.20__. ',
        author: 'ОТКИ',
        type: 'Что-то',
        podpisan: '23.08.2020',
        status: 'Какой-то',
        date: '20.07.2020'
      },
      {
        name: 'Материалы проведённых испытаний (измерений) к протоколу РРК-9.7.14/ХХ-20__  от __.__.20__. ',
        author: 'ОТКИ',
        type: 'Что-то',
        podpisan: '23.08.2020',
        status: 'Какой-то',
        date: '20.07.2020'
      },
      {
        name: 'Материалы проведённых испытаний (измерений) к протоколу РРК-9.7.14/ХХ-20__  от __.__.20__. ',
        author: 'ОТКИ',
        type: 'Что-то',
        podpisan: '23.08.2020',
        status: 'Какой-то',
        date: '20.07.2020'
      },
      {
        name: 'Материалы проведённых испытаний (измерений) к протоколу РРК-9.7.14/ХХ-20__  от __.__.20__. ',
        author: 'ОТКИ',
        type: 'Что-то',
        podpisan: '23.08.2020',
        status: 'Какой-то',
        date: '20.07.2020'
      },
      {
        name: 'Материалы проведённых испытаний (измерений) к протоколу РРК-9.7.14/ХХ-20__  от __.__.20__. ',
        author: 'ОТКИ',
        type: 'Что-то',
        podpisan: '23.08.2020',
        status: 'Какой-то',
        date: '20.07.2020'
      },
      {
        name: 'Материалы проведённых испытаний (измерений) к протоколу РРК-9.7.14/ХХ-20__  от __.__.20__. ',
        author: 'ОТКИ',
        type: 'Что-то',
        podpisan: '23.08.2020',
        status: 'Какой-то',
        date: '20.07.2020'
      },
      {
        name: 'Материалы проведённых испытаний (измерений) к протоколу РРК-9.7.14/ХХ-20__  от __.__.20__. ',
        author: 'ОТКИ',
        type: 'Что-то',
        podpisan: '23.08.2020',
        status: 'Какой-то',
        date: '20.07.2020'
      },
      {
        name: 'Материалы проведённых испытаний (измерений) к протоколу РРК-9.7.14/ХХ-20__  от __.__.20__. ',
        author: 'ОТКИ',
        type: 'Что-то',
        podpisan: '23.08.2020',
        status: 'Какой-то',
        date: '20.07.2020'
      },
      {
        name: 'Материалы проведённых испытаний (измерений) к протоколу РРК-9.7.14/ХХ-20__  от __.__.20__. ',
        author: 'ОТКИ',
        type: 'Что-то',
        podpisan: '23.08.2020',
        status: 'Какой-то',
        date: '20.07.2020'
      },
      {
        name: 'Материалы проведённых испытаний (измерений) к протоколу РРК-9.7.14/ХХ-20__  от __.__.20__. ',
        author: 'ОТКИ',
        type: 'Что-то',
        podpisan: '23.08.2020',
        status: 'Какой-то',
        date: '20.07.2020'
      }
    ],
  })
}
</script>

<style>
.fr {
  justify-content: flex-end;
}
.mt60 {
  margin-top: 60px;
}
.mr29 {
  margin-right: 29px;
}
.ml42 {
  margin-left: 42px;
}
.w66 {
  width: 66%;
  transition: all 0.3s ease;
}
.pl305 {
  padding-left: 305px;
}
.icon-d {
  font-family: var(--font-awesome-5-pro-light);
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.62;
  letter-spacing: normal;
  text-align: center;
  color: var(--dark);
  cursor: pointer;
}
.checkup-card-list {
  padding-top: 30px;
}
.checkup-card-list .table__info {
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
  margin-top: 5px;
  color: var(--dark);
}
.checkup-card-list .doc__info {
  font-family: Roboto;
  font-size: 15px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: var(--blue-grey);
  margin-left: 25px;
  margin-bottom: 10px;
}
.v-application--is-ltr .v-messages {
  display: none;
}
.checkup-card-list .table-block {
  margin-top: 10px;
}
.g-radio {
  margin-right: 30px;
  margin-left: 50px;
}
</style>