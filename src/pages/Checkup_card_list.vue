<template>
  <div class="checkup-card-list">
    <div class="df">
      <div class="w66" :class="{pl305: $store.state.menu_visibility}">
        <div class="df jcsb">
          <Search />
          <IconUploadDoc />
          <IconCreateDoc />
          <GreenRadioButton :labels="labels" radio_color="orange" />
        </div>
        <div class="df jcsb">
          <AuthorSelectButton />
          <DateButton />
          <PodpisanSelectButton />
          <StatusSelectButton />
          <TypeSelectButton />
          <FiltersButton />
        </div>
        <div class="table-block">
          <Table :docs="docs" />
        </div>
        <p class="table__info">Время выдачи 12:25, количество записей и любая другая информация</p>
      </div>
      <v-col>
        <div class="df">
          <p class="doc__title">Заявитель (уточняется)</p>
          <p class="title-value">{{podpisant}}</p>
        </div>
        <div class="df">
          <p class="doc__title">Название проверки (уточняется)</p>
          <p class="title-value">{{title_of_verification}}</p>
        </div>
        <div class="df">
          <p class="doc__title">Проверяющий (уточняется)</p>
          <p class="title-value">{{inspector}}</p>
        </div>
        <div class="df">
          <p class="doc__title">Сроки проведения</p>
          <p class="title-value color-orange">{{dates}}</p>
        </div>
        <DocumentImgBlock img="true" class="mt60"/>
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
const Table = () => import('../components/Table')
const DocumentImgBlock = () => import('../components/DocumentImgBlock')
const Search = () => import('../components/Search')
const IconUploadDoc = () => import('../components/IconUploadDoc')
const IconCreateDoc = () => import('../components/IconCreateDoc')
const AuthorSelectButton = () => import('../components/AuthorSelectButton')
const PodpisanSelectButton = () => import('../components/PodpisanSelectButton')
const TypeSelectButton = () => import('../components/TypeSelectButton')
const StatusSelectButton = () => import('../components/StatusSelectButton')
const DateButton = () => import('../components/DateButton')
const FiltersButton = () => import('../components/FiltersButton')
const GreenRadioButton = () => import('../components/GreenRadioButton')

export default {
  components: {
    Table,
    DocumentImgBlock,
    Search,
    IconUploadDoc,
    IconCreateDoc,
    GreenRadioButton,
    AuthorSelectButton,
    PodpisanSelectButton,
    TypeSelectButton,
    StatusSelectButton,
    DateButton,
    FiltersButton
  },
  data: () => ({
    labels: ['Список','Хронология'],
    podpisant: 'ВНИИЭФ',
    title_of_verification: 'Уточняется',
    inspector: 'Куликов Б. Ю.',
    dates: '20.08.20 – 28.08.20',
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
.df {
  display: flex;
}
.jcsb {
  justify-content: space-between;
}
.mt60 {
  margin-top: 60px;
}
.w66 {
  width: 66%;
  transition: all 0.3s ease;
}
.pl305 {
  padding-left: 305px;
}
.color-orange {
  color: var(--bright-orange) !important;
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
  color: var(--dark);
}
.checkup-card-list .doc__title {
  width: 190px;
  font-family: Roboto;
  font-size: 11px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
  margin-bottom: 14px;
  margin-left: 25px;
}
.checkup-card-list .title-value {
  font-family: Roboto;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
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
  height: 65vh;
  margin-top: 10px;
  overflow: auto;
  margin-bottom: 5px;
  padding-right: 20px;
}
.checkup-card-list .table-block::-webkit-scrollbar {
  width: 11px;
  height: 8px;
  background-color: rgba(0, 0, 0, 0);
}
.checkup-card-list .table-block::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: var(--pale-lilac);
}
</style>