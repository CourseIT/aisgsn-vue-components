<template>
  <div class="checkup-card-list">
    <div class="df">
      <div class="w66" :class="{pl305: $store.state.menu_visibility}">
        <div class="df jcsb">
          <Search />
          <Icon class="icon-d icon" icon="" prompt="Создать документ"/>
          <Icon class="icon-d icon" icon="" prompt="Загрузить документ"/>
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
        <DocInfo :doc_info="doc_info"/>
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
const Table = () => import('@/components/Table')
const DocumentImgBlock = () => import('@/components/DocumentImgBlock')
const Search = () => import('@/components/Search')
const Icon = () => import('@/components/Icon')
const AuthorSelectButton = () => import('@/components/AuthorSelectButton')
const PodpisanSelectButton = () => import('@/components/PodpisanSelectButton')
const TypeSelectButton = () => import('@/components/TypeSelectButton')
const StatusSelectButton = () => import('@/components/StatusSelectButton')
const DateButton = () => import('@/components/DateButton')
const FiltersButton = () => import('@/components/FiltersButton')
const GreenRadioButton = () => import('@/components/GreenRadioButton')
const DocInfo = () => import('@/components/DocInfo')

export default {
  components: {
    Table,
    DocumentImgBlock,
    Search,
    Icon,
    GreenRadioButton,
    AuthorSelectButton,
    PodpisanSelectButton,
    TypeSelectButton,
    StatusSelectButton,
    DateButton,
    FiltersButton,
    DocInfo
  },
  data: () => ({
    labels: ['Список','Хронология'],
    doc_info: {
      declarant: 'ВНИИЭФ',
      title_of_verification: 'Уточняется',
      inspector: 'Куликов Б. Ю.',
      dates: '20.08.20 – 28.08.20'
    },
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