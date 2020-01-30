<template>
  <div class="components" :class="{pl305: $store.state.menu_visibility}">

<!-------------------------------- action-group & action-button -------------------------------->
    <v-action-group width="200px" title="Выбор действия">
      <v-action-button width="200px" :action="test" title="Подписать документ" icon=""/>
      <v-action-button width="200px" :action="test2" title="Вернуть на доработку" icon=""/>
    </v-action-group>
<!-------------------------------- action-group & action-button -------------------------------->


<!-------------------------------- buttons -------------------------------->
    <v-button class="mb20" :action="test" text="Принять" />
    <v-button class="mb20" :action="test" text="Сбросить" type="reset"/>
<!-------------------------------- buttons -------------------------------->


<!-------------------------------- icon with prompt -------------------------------->
    <v-icon class="icon ml600" font_size="21px" :hover_color="true" icon="" prompt="Создать документ"/>
<!-------------------------------- icon with prompt -------------------------------->


<!-------------------------------- icons-group -------------------------------->
    <v-icons-group>
      <template #main-icon>
        <v-icon class="icon1" :action="test" :hover_shadow="true" :hover_color="true" icon="" />
      </template>
      <v-icon font_size="21px" :hover_color="true" :action="test" icon="" />
      <v-icon font_size="21px" :hover_color="true" :action="test2" icon="" />
    </v-icons-group>
<!-------------------------------- icons-group -------------------------------->


<!-------------------------------- template-block-with-icon -------------------------------->
    <v-template-block-with-icon icon="" el_after="true" el_before="true" label="Кому" class="ml600" template_text_top="207px">
      <v-template-block class="mb20" :action_edit="test" :action_plus="test2">
        <template #search>
          <v-search v-model="search" class="search" width="403px"/>
        </template>
        <draggable :disabled="!enabled" class=" pr54" ghost-class="ghost" @start="dragging = true" @end="dragging = false" >
          <v-template-text :action="test2" :action_minus="test" v-for="(text) in texts" :key="text.id" @start="dragging = true" @end="dragging = false" />
        </draggable>
      </v-template-block>
    </v-template-block-with-icon>
<!-------------------------------- template-block-with-icon -------------------------------->


<!-------------------------------- card-block with draggable -------------------------------->
    <draggable :disabled="!enabled" class=" pr54" ghost-class="ghost" @start="dragging = true" @end="dragging = false" >
      <v-card-block class="mb20" width="450px" :item="element" :action_minus="test" :action_edit="test" v-for="element in list_card" :key="element.id"/>
    </draggable>
<!-------------------------------- card-block with draggable -------------------------------->


    <div class="df">
      <!-------------------------------- date-button -------------------------------->
      <v-date-button v-model="date_btn"/>
      <!-------------------------------- date-button -------------------------------->

      <!-------------------------------- date-range-button -------------------------------->
      <v-date-range-button class="ml25" v-model="date_range_btn"/>
      <!-------------------------------- date-range-button -------------------------------->
    </div>


<!-------------------------------- doc-info -------------------------------->
    <v-doc-info :doc_info="doc_info"/>
<!-------------------------------- document-block -------------------------------->


<!-------------------------------- document-block -------------------------------->
    <v-document-block :src="src">
      <v-icon :hover_shadow="true" :hover_color="true" font_size="21px" color="#8e8e93" icon=""  class="mb5"/>
      <v-icon :hover_shadow="true" :hover_color="true" font_size="21px" icon="" class="pl2 mb5"/>
      <v-icon :hover_shadow="true" :hover_color="true" font_size="21px" prompt="Лист визирования" icon="" class="mb5"/>
      <v-icon :hover_shadow="true" :hover_color="true" font_size="21px" icon="" class="mb5"/>
      <v-icon :hover_shadow="true" :hover_color="true" font_size="21px" icon="" class="mb5"/>
      <v-icon :hover_shadow="true" :hover_color="true" font_size="21px" prompt="Подписано всеми участниками" color="#ff6100" icon="" class="mb5"/>
    </v-document-block>
<!-------------------------------- document-block -------------------------------->


<!-------------------------------- users-signature -------------------------------->
    <v-users-signature class="mb20">
      <v-user-signature title="Утверждено" name="Сотрудник А. А." :icon_action="test"/>
      <v-user-signature title="Согласовано" name="Сотрудник А. А." />
      <v-user-signature title="Согласовано" name="Сотрудник А. А." />
      <v-user-signature title="Согласовано" name="Сотрудник А. А." />
      <v-user-signature title="Согласовано" name="Сотрудник А. А." />
    </v-users-signature>
<!-------------------------------- users-signature -------------------------------->


<!-------------------------------- media classes -------------------------------->
    <div class="df jcsb">
      <!-------------------------------- select -------------------------------->
      <v-select class="media-min-1500" v-model="value1" defailt_value="Выбор1" text_center="true" width="438px">
        <v-options :option="option" :action="function(){value1 = option}" v-for="(option, index) in buttons" :key="index" />
      </v-select>
      <!-------------------------------- select -------------------------------->

      <!-------------------------------- select -------------------------------->
      <v-select class="media-min-1200" v-model="value2" defailt_value="Выбор2" text_center="true" width="438px" :list="buttons"/>
      <v-select class="media-min-900" v-model="value3" defailt_value="Выбор3" text_center="true" width="438px" :list="buttons"/>
      <!-------------------------------- select -------------------------------->

      <!-------------------------------- filter-button -------------------------------->
      <v-filters-button :action_reset="reset" :action_apply="test" left="-353px" info="Количество записей и любая другая информация" time="12:25">
        <v-select class="media-max-1500" v-model="value1" defailt_value="Выбор1" text_center="true" width="438px" :list="buttons"/>
        <v-select class="media-max-1200" v-model="value2" defailt_value="Выбор2" text_center="true" width="438px" :list="buttons"/>
        <v-select class="media-max-900" v-model="value3" defailt_value="Выбор3" text_center="true" width="438px" :list="buttons"/>
        <div class="df jcsb">
          <v-select v-model="value4" defailt_value="Выбор" width="132px" :list="buttons"/>
          <v-select v-model="value5" defailt_value="Выбор" width="132px" :list="buttons"/>
          <v-select v-model="value6" defailt_value="Выбор" width="132px" :list="buttons"/>
        </div>
        <div class="df jcsb">
          <v-select v-model="value7" defailt_value="Выбор" width="132px" :list="buttons"/>
          <v-select v-model="value8" defailt_value="Выбор" width="132px" :list="buttons"/>
          <v-select v-model="value9" defailt_value="Выбор" width="132px" :list="buttons"/>
        </div>
        <div class="df jcsb">
          <v-select v-model="value10" defailt_value="Выбор" width="132px" :list="buttons"/>
          <v-select v-model="value11" defailt_value="Выбор" width="132px" :list="buttons"/>
          <v-select v-model="value12" defailt_value="Выбор" width="132px" :list="buttons"/>
        </div>
      </v-filters-button>
      <!-------------------------------- filter-button -------------------------------->
    </div>
    

    <!-------------------------------- input -------------------------------->
    <v-input v-model="input" width="600px" placeholder="№" label="Какой-то label" :list="list_input"/>
    <!-------------------------------- input -------------------------------->
    

    <!-------------------------------- input-number -------------------------------->
    <v-input v-model="input_n" width="600px" placeholder="№" label="Какой-то label" type="number"/>
    <!-------------------------------- input-number -------------------------------->


    <!-------------------------------- textarea -------------------------------->
    <v-input v-model="textarea" width="600px" placeholder="placeholder" label="Какой-то label" type="textarea" :list="list_input"/>
    <!-------------------------------- textarea -------------------------------->


    <v-input-date-with-icon v-model="input_date" width="655px" icon="" label="Срок проведения работ"/>
    <!-------------------------------- input-date -------------------------------->

<!-------------------------------- icon open modal -------------------------------->
    <v-icon width="20" :action="function() {modal_show = true}" icon="" class="icon-plus"/>
<!-------------------------------- icon open modal -------------------------------->


<!-------------------------------- modal -------------------------------->
    <transition name="modal">
      <v-modal v-if="modal_show" @toggleModal="toggleModal" :action_delete="test" :action_apply="test2">

        <div class="df">
          <v-input v-model="input" placeholder="" label="п/п" :list="list_input"/>
          <v-template-block-with-icon icon="" el_after="true" el_before="true" label="Кому" template_text_top="0px" class="mt19">
            <v-template-block class="mb20" :action_edit="test" :action_plus="test2">
              <template #search>
                <v-search v-model="search" width="403px"/>
              </template>
              <draggable :disabled="!enabled" ghost-class="ghost" @start="dragging = true" @end="dragging = false" >
                <v-template-text :action="test2" :action_minus="test" v-for="(text) in texts" :key="text.id" @start="dragging = true" @end="dragging = false" />
              </draggable>
            </v-template-block>
          </v-template-block-with-icon>
        </div>

        <div class="df">
          <v-input v-model="input" placeholder="" label="Наименование работ, подлежащих проверке, определяемых в соответствии с проектом Организации строительства" :list="list_input"/>
          <v-template-block-with-icon icon="" el_after="true" el_before="true" label="Кому" template_text_top="0px" class="mt19">
            <v-template-block class="mb20" :action_edit="test" :action_plus="test2">
              <template #search>
                <v-search v-model="search" width="403px"/>
              </template>
              <draggable :disabled="!enabled" class=" pr54" ghost-class="ghost" @start="dragging = true" @end="dragging = false" >
                <v-template-text :action="test2" :action_minus="test" v-for="(text) in texts" :key="text.id" @start="dragging = true" @end="dragging = false" />
              </draggable>
            </v-template-block>
          </v-template-block-with-icon>
        </div>

        <div class="df">
          <v-input v-model="input" placeholder="" label="Предмет каждой проверки" :list="list_input"/>
          <v-template-block-with-icon icon="" el_after="true" el_before="true" label="Кому" template_text_top="0px" class="mt19">
            <v-template-block class="mb20" :action_edit="test" :action_plus="test2">
              <template #search>
                <v-search v-model="search" width="403px"/>
              </template>
              <draggable :disabled="!enabled" ghost-class="ghost" @start="dragging = true" @end="dragging = false" >
                <v-template-text :action="test2" :action_minus="test" v-for="(text) in texts" :key="text.id" @start="dragging = true" @end="dragging = false" />
              </draggable>
            </v-template-block>
          </v-template-block-with-icon>
        </div>

        <v-input-date-with-icon v-model="input_date" icon="" label="Примерная дата проведения каждой проверки"/>

        <div class="df">
          <v-input v-model="input" placeholder="" label="Ориентировочные затраты времени должностного Лица органа государственного строительного Надзора на проведение проверки" :list="list_input"/>
          <v-template-block-with-icon icon="" el_after="true" el_before="true" label="Кому" template_text_top="0px" class="mt19">
            <v-template-block class="mb20" :action_edit="test" :action_plus="test2">
              <template #search>
                <v-search v-model="search" width="403px"/>
              </template>
              <draggable :disabled="!enabled" ghost-class="ghost" @start="dragging = true" @end="dragging = false" >
                <v-template-text :action="test2" :action_minus="test" v-for="(text) in texts" :key="text.id" @start="dragging = true" @end="dragging = false" />
              </draggable>
            </v-template-block>
          </v-template-block-with-icon>
        </div>

        <div class="df">
          <v-input v-model="input" placeholder="" label="Документы, подлежащие представлению при проведении проверок, предусмотренных программой проведения проверок" :list="list_input"/>
          <v-template-block-with-icon icon="" el_after="true" el_before="true" label="Кому" template_text_top="0px" class="mt19">
            <v-template-block class="mb20" :action_edit="test" :action_plus="test2">
              <template #search>
                <v-search v-model="search" width="403px"/>
              </template>
              <draggable :disabled="!enabled" ghost-class="ghost" @start="dragging = true" @end="dragging = false" >
                <v-template-text :action="test2" :action_minus="test" v-for="(text) in texts" :key="text.id" @start="dragging = true" @end="dragging = false" />
              </draggable>
            </v-template-block>
          </v-template-block-with-icon>
        </div>

        <div class="df">
          <v-input v-model="input" placeholder="" label="Должностные лица или работники застройщика, технического заказчика либо лица, осуществляющего строительство, присутствие которых при проведении проверок,
предусмотренных программой проведения проверок, является обязательным" :list="list_input"/>
          <v-template-block-with-icon icon="" el_after="true" el_before="true" label="Кому" template_text_top="0px" class="mt34">
            <v-template-block class="mb20" :action_edit="test" :action_plus="test2">
              <template #search>
                <v-search v-model="search" width="403px"/>
              </template>
              <draggable :disabled="!enabled" ghost-class="ghost" @start="dragging = true" @end="dragging = false" >
                <v-template-text :action="test2" :action_minus="test" v-for="(text) in texts" :key="text.id" @start="dragging = true" @end="dragging = false" />
              </draggable>
            </v-template-block>
          </v-template-block-with-icon>
        </div>

      </v-modal>
    </transition>
<!-------------------------------- modal -------------------------------->


<!-------------------------------- radio-buttons -------------------------------->
    <v-radio-buttons v-model="label" radio_color="green" :labels="labels">
      <v-radio v-for="label in labels" :key="label" :value="label" :label="label"></v-radio>
    </v-radio-buttons>
    <v-radio-buttons v-model="label2" :labels="labels2">
      <v-radio v-for="label in labels2" :key="label" :value="label" :label="label"></v-radio>
    </v-radio-buttons>
<!-------------------------------- radio-buttons -------------------------------->


<!-------------------------------- template-block -------------------------------->
    <v-template-block class="mb20" :action_edit="test" :action_plus="test2">
      <template #search>
        <v-search v-model="search" width="403px"/>
      </template>
      <draggable :disabled="!enabled" class=" pr54" ghost-class="ghost" @start="dragging = true" @end="dragging = false" >
        <v-template-text :action="test2" :action_minus="test" v-for="(text) in texts" :key="text.id" @start="dragging = true" @end="dragging = false" />
      </draggable>
    </v-template-block>
<!-------------------------------- template-block -------------------------------->

<!-------------------------------- search -------------------------------->
    <v-search class="mb20" v-model="search" width="600px"/>
<!-------------------------------- search -------------------------------->

<!-------------------------------- categories-search -------------------------------->
    <v-categories-search v-model="categories_search" :option="categories_option" defailt_text="Категории">
      <v-categories-option v-model="categories_option" :option="item" v-for="(item, index) in categories_list" :key="index" />
    </v-categories-search>
<!-------------------------------- categories-search -------------------------------->

<!-------------------------------- SORT (slect with sort icon) -------------------------------->
    <v-select class="media-min-1500" v-model="value1" icon="" icon_size="20px" defailt_value="Выбор1" text_center="true" width="238px">
      <v-options :option="option" :action="function(){value1 = option}" v-for="(option, index) in buttons" :key="index" />
    </v-select>
<!-------------------------------- SORT (slect with sort icon) -------------------------------->

  </div>
</template>

<script>
const VActionGroup = () => import('@/components/v-action-group')
const VActionButton = () => import('@/components/v-action-button')
const VButton = () => import('@/components/v-button')
const VCardBlock = () => import('@/components/v-card-block')
import draggable from 'vuedraggable'
const VDateButton = () => import('@/components/v-date-button')
const VDateRangeButton = () => import('@/components/v-date-range-button')
const VDocInfo = () => import('@/components/v-doc-info')
const VDocumentBlock = () => import('@/components/v-document-block')
const VUsersSignature = () => import('@/components/v-users-signature')
const VUserSignature = () => import('@/components/v-user-signature')
const VIcon = () => import('@/components/v-icon')
const VFiltersButton = () => import('@/components/v-filters-button')
const VSelect = () => import('@/components/v-select')
const VOptions = () => import('@/components/v-options')
const VInput = () => import('@/components/v-input')
const VInputDateWithIcon = () => import('@/components/v-input-date-with-icon')
const VModal = () => import('@/components/v-modal')
const VRadioButtons = () => import('@/components/v-radio-buttons')
const VTemplateBlock = () => import('@/components/v-template-block')
const VTemplateText = () => import('@/components/v-template-text')
const VSearch = () => import('@/components/v-search')
const VTemplateBlockWithIcon = () => import('@/components/v-template-block-with-icon')
const VIconsGroup = () => import('@/components/v-icons-group')
const VCategoriesSearch = () => import('@/components/v-categories-search')
const VCategoriesOption = () => import('@/components/v-categories-option')

export default {
  components: {
    VActionGroup,
    VActionButton,
    VButton,
    VCardBlock,
    draggable,
    VDateButton,
    VDateRangeButton,
    VDocInfo,
    VDocumentBlock,
    VUsersSignature,
    VUserSignature,
    VIcon,
    VIconsGroup,
    VFiltersButton,
    VSelect,
    VOptions,
    VInput,
    VInputDateWithIcon,
    VModal,
    VRadioButtons,
    VTemplateBlock,
    VTemplateText,
    VSearch,
    VTemplateBlockWithIcon,
    VCategoriesSearch,
    VCategoriesOption
  },
  data: () => ({
    // drag`n`drop
    dragging: false,
    enabled: true,

    list_card: [
      { 
        date: '20.08.20 – 28.08.20',
        number: 'Номер объекта контроля 1',
        method: 'Метод 1',
        signature: 'Подпись 1',
        text: 'Любая необходимая информация 1',
        id: 1
      },
      { 
        date: '20.08.20 – 28.08.20',
        number: 'Номер объекта контроля 2',
        method: 'Метод 2',
        signature: 'Подпись 2',
        text: 'Любая необходимая информация 2',
        id: 2
      },
      { 
        date: '20.08.20 – 28.08.20',
        number: 'Номер объекта контроля 3',
        method: 'Метод 3',
        signature: 'Подпись 3',
        text: 'Любая необходимая информация 3',
        id: 3
      }
    ],

    date_btn: '',
    date_range_btn: '',

    doc_info: {
      declarant: 'ВНИИЭФ',
      title_of_verification: 'Уточняется',
      inspector: 'Куликов Б. Ю.',
      dates: '20.08.20 – 28.08.20'
    },

    src: 'https://static.thenounproject.com/png/4561-200.png',

    users_signature_show: false,

    value1: '',
    value2: '',
    value3: '',
    value4: '',
    value5: '',
    value6: '',
    value7: '',
    value8: '',
    value9: '',
    value10: '',
    value11: '',
    value12: '',
    buttons: ['Выбор', 'Выбор', 'Выбор', 'Выбор'],

    textarea: '',
    input: '',
    input_n: '',
    list_input: [
      'Объект КС 1',
      'Объект КС 2',
      '...',
      '...'
    ],
    input_date: '',

    modal_show: false,

    labels: ['Список','Хронология'],
    labels2: ['На месяц', 'На 1-е февраля', 'На 1-е апреля', 'На 1-е июля', 'На 1-е октября', 'На 1-е января'],
    label: '',
    label2: '',

    search: '',
    search123: '',

    texts:[
      {id: 1},
      {id: 2},
      {id: 3},
      {id: 4},
      {id: 5},
      {id: 6},
      {id: 7},
      {id: 8},
      {id: 9},
      {id: 10},
      {id: 11},
      {id: 12},
      {id: 13},
    ],

    template_show: false,
    template_show2: false,
    template_show3: false,
    template_show4: false,
    template_show5: false,
    template_show6: false,

    categories_search: '',
    categories_option: '',
    categories_list: [
      'Все',
      'Категория1',
      'Категория2',
      'Категория3',
      'Категория4'
    ]
    

  }),
  methods: {
    test() {
      window.console.log('test')
    },
    test2() {
      window.console.log('test22')
    },
    reset() {
      this.value1 = '',
      this.value2 = '',
      this.value3 = '',
      this.value4 = '',
      this.value5 = '',
      this.value6 = '',
      this.value7 = '',
      this.value8 = '',
      this.value9 = '',
      this.value10 = '',
      this.value11 = '',
      this.value12 = ''
    },
    toggleModal(show) {
      this.modal_show = show
    },
  }
}
</script>

<style scoped>
.ml600 {
  margin-left: 600px;
}
.components {
  transition: all 0.3s ease;
}
</style>