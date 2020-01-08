<template>
  <div class="checkup-card-list">
    <div class="df">
      <div class="w66" :class="{pl305: $store.state.menu_visibility}">
        <div class="df jcsb">
          <Search />
          <IconUploadDoc />
          <IconCreateDoc />
          <div class="checkup-card-list__radio"> 
            <v-radio-group
              row
              color="orange"
            >
              <v-radio class="radio" label="Список"></v-radio>
              <v-radio class="radio" label="Хронология"></v-radio>
            </v-radio-group>
          </div>
        </div>

        <Table :docs="docs" />
        <p class="table__info">Время выдачи 12:25, количество записей и любая другая информация</p>
      </div>
      <v-col>
        <div class="df">
          <p class="doc__title">Заявитель (уточняется)</p>
          <p class="title-value">{{ppplicant}}</p>
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

export default {
  components: {
    Table,
    DocumentImgBlock,
    Search,
    IconUploadDoc,
    IconCreateDoc
  },
  data: () => ({
    ppplicant: 'ВНИИЭФ',
    title_of_verification: 'Уточняется',
    inspector: 'Куликов Б. Ю.',
    dates: '20.08.20 – 28.08.20',
    docs: [
      {
        name: 'Материалы проведённых испытаний (измерений) к протоколу РРК-9.7.14/ХХ-20__  от __.__.20__. ',
        author: 'ОТКИ',
        type: 'Что-то',
        podpisant: '23.08.2020',
        status: 'Какой-то',
        date: '20.07.2020'
      },
      {
        name: 'Материалы проведённых испытаний (измерений) к протоколу РРК-9.7.14/ХХ-20__  от __.__.20__. ',
        author: 'ОТКИ',
        type: 'Что-то',
        podpisant: '23.08.2020',
        status: 'Какой-то',
        date: '20.07.2020'
      },
      {
        name: 'Материалы проведённых испытаний (измерений) к протоколу РРК-9.7.14/ХХ-20__  от __.__.20__. ',
        author: 'ОТКИ',
        type: 'Что-то',
        podpisant: '23.08.2020',
        status: 'Какой-то',
        date: '20.07.2020'
      },
      {
        name: 'Материалы проведённых испытаний (измерений) к протоколу РРК-9.7.14/ХХ-20__  от __.__.20__. ',
        author: 'ОТКИ',
        type: 'Что-то',
        podpisant: '23.08.2020',
        status: 'Какой-то',
        date: '20.07.2020'
      },
      {
        name: 'Материалы проведённых испытаний (измерений) к протоколу РРК-9.7.14/ХХ-20__  от __.__.20__. ',
        author: 'ОТКИ',
        type: 'Что-то',
        podpisant: '23.08.2020',
        status: 'Какой-то',
        date: '20.07.2020'
      },
      {
        name: 'Материалы проведённых испытаний (измерений) к протоколу РРК-9.7.14/ХХ-20__  от __.__.20__. ',
        author: 'ОТКИ',
        type: 'Что-то',
        podpisant: '23.08.2020',
        status: 'Какой-то',
        date: '20.07.2020'
      },
      {
        name: 'Материалы проведённых испытаний (измерений) к протоколу РРК-9.7.14/ХХ-20__  от __.__.20__. ',
        author: 'ОТКИ',
        type: 'Что-то',
        podpisant: '23.08.2020',
        status: 'Какой-то',
        date: '20.07.2020'
      },
      {
        name: 'Материалы проведённых испытаний (измерений) к протоколу РРК-9.7.14/ХХ-20__  от __.__.20__. ',
        author: 'ОТКИ',
        type: 'Что-то',
        podpisant: '23.08.2020',
        status: 'Какой-то',
        date: '20.07.2020'
      },
      {
        name: 'Материалы проведённых испытаний (измерений) к протоколу РРК-9.7.14/ХХ-20__  от __.__.20__. ',
        author: 'ОТКИ',
        type: 'Что-то',
        podpisant: '23.08.2020',
        status: 'Какой-то',
        date: '20.07.2020'
      },
      {
        name: 'Материалы проведённых испытаний (измерений) к протоколу РРК-9.7.14/ХХ-20__  от __.__.20__. ',
        author: 'ОТКИ',
        type: 'Что-то',
        podpisant: '23.08.2020',
        status: 'Какой-то',
        date: '20.07.2020'
      },
      {
        name: 'Материалы проведённых испытаний (измерений) к протоколу РРК-9.7.14/ХХ-20__  от __.__.20__. ',
        author: 'ОТКИ',
        type: 'Что-то',
        podpisant: '23.08.2020',
        status: 'Какой-то',
        date: '20.07.2020'
      },
      {
        name: 'Материалы проведённых испытаний (измерений) к протоколу РРК-9.7.14/ХХ-20__  от __.__.20__. ',
        author: 'ОТКИ',
        type: 'Что-то',
        podpisant: '23.08.2020',
        status: 'Какой-то',
        date: '20.07.2020'
      },
      {
        name: 'Материалы проведённых испытаний (измерений) к протоколу РРК-9.7.14/ХХ-20__  от __.__.20__. ',
        author: 'ОТКИ',
        type: 'Что-то',
        podpisant: '23.08.2020',
        status: 'Какой-то',
        date: '20.07.2020'
      },
      {
        name: 'Материалы проведённых испытаний (измерений) к протоколу РРК-9.7.14/ХХ-20__  от __.__.20__. ',
        author: 'ОТКИ',
        type: 'Что-то',
        podpisant: '23.08.2020',
        status: 'Какой-то',
        date: '20.07.2020'
      },
      {
        name: 'Материалы проведённых испытаний (измерений) к протоколу РРК-9.7.14/ХХ-20__  от __.__.20__. ',
        author: 'ОТКИ',
        type: 'Что-то',
        podpisant: '23.08.2020',
        status: 'Какой-то',
        date: '20.07.2020'
      },
      {
        name: 'Материалы проведённых испытаний (измерений) к протоколу РРК-9.7.14/ХХ-20__  от __.__.20__. ',
        author: 'ОТКИ',
        type: 'Что-то',
        podpisant: '23.08.2020',
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
.checkup-card-list .v-input--selection-controls.v-input {
  margin: 0;
  height: 50px;
}
.checkup-card-list__radio .radio {
  margin-left: 20px;
  margin-bottom: 20px;
}
.checkup-card-list__radio label {
  margin-left: 5px;
  padding-top: 5px;
  font-family: Roboto;
  font-size: 11px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
}
.checkup-card-list__radio .mdi-radiobox-blank::before {
  content: "";
  background: #fff;
  width: 22px;
  border-radius: 5px;
  height: 22px;
  margin-top: 5px;
}
.checkup-card-list__radio .v-input--selection-controls__ripple {
  background-color: rgba(0, 0, 0, 0);
  background: rgba(0, 0, 0, 0);
  opacity: 0;
  cursor: pointer;
  border-radius: 0px;
}
.checkup-card-list__radio .mdi-radiobox-marked::before {
  content: "\25CF";
  font-size: 20px;
  margin-top: 5px;
  padding-left: 4.5px;
  width: 22px;
  height: 22px !important;
  color: var(--weird-green) !important;
  background: #000;
  border-radius: 5px;
}
</style>