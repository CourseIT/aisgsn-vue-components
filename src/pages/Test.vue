<template>
  <div class="test_page" :class="{pl305: $store.state.menu_visibility}">
    <div class="w66">
      <!-------------------------------- action-group & action-button -------------------------------->
      <div class="fix-bg">
          <v-action-group width="200px" title="Выбор действия" class="fix-btn">
            <v-action-button width="200px" :action="test" title="Подписать документ" icon=""/>
            <v-action-button width="200px" :action="test2" title="Вернуть на доработку" icon=""/>
          </v-action-group>
      </div>
      <!-------------------------------- action-group & action-button -------------------------------->
      <h1 class="title">ГОСУДАРСТВЕННАЯ КОРПОРАЦИЯ ПО АТОМНОЙ ЭНЕРГИИ «РОСАТОМ» 
(Госкорпорация «Росатом») Управление государственного строительного надзора</h1>
      <div class="df">
        <v-input v-model="input" placeholder="№" label="Какой-то label" />
        <v-template-block-with-icon icon="" el_after="true" el_before="true" class="mt19">
          <v-template-block class="mb20" :action_edit="test" :action_plus="test2">
            <template #search>
              <v-search v-model="search" width="403px"/>
            </template>
            <v-template-text :action="test2" :action_minus="test" v-for="(text) in texts" :key="text.id" />
          </v-template-block>
        </v-template-block-with-icon>
      </div>
      <v-input-date-with-icon v-model="date_input" icon="" label="Срок проведения работ" />
      <v-input v-model="textarea" width="600px" placeholder="placeholder" label="Какой-то label" type="textarea" :list="list_input"/>
      <v-input v-model="textarea" width="600px" placeholder="placeholder" label="Какой-то label" type="number" :list="list_input"/>


      <!-------------------------------- icon open modal -------------------------------->
          <v-icon width="20" :action="function() {modal_show = true}" icon="" class="icon-plus"/>
      <!-------------------------------- icon open modal -------------------------------->
      <!-------------------------------- modal -------------------------------->
    <transition name="modal">
      <v-modal v-if="modal_show" v-model="modal_show" :action_delete="test" :action_apply="test2">

        <div class="df">
          <v-input v-model="input" placeholder="" label="п/п" :list="list_input"/>
          <v-template-block-with-icon icon="" el_after="true" el_before="true" template_text_top="0px" class="mt19">
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
          <v-template-block-with-icon icon="" el_after="true" el_before="true" template_text_top="0px" class="mt19">
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
          <v-template-block-with-icon icon="" el_after="true" el_before="true" template_text_top="0px" class="mt19">
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
          <v-template-block-with-icon icon="" el_after="true" el_before="true" template_text_top="0px" class="mt19">
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
          <v-template-block-with-icon icon="" el_after="true" el_before="true" template_text_top="0px" class="mt19">
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
          <v-template-block-with-icon icon="" el_after="true" el_before="true" template_text_top="0px" class="mt34">
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


      <v-card-block class="mb20" width="90%" :action_minus="test" :action_edit="test" v-for="item in list_card" :key="item.id">
        <template #text>
          <v-card-text :text="item.date" bold="true" class="mb7"/>
          <v-card-text :text="item.number" bold="true" />
          <v-card-text :text="item.method" bold="true" />
          <v-card-text :text="item.signature" />
          <v-card-text :text="item.text" class="mb0"/>
        </template>
      </v-card-block>

      

    </div>
    <div class="fixed">
      <!-------------------------------- action-group & action-button -------------------------------->
          <v-action-group width="200px" title="Выбор действия" class="mb20">
            <v-action-button width="200px" :action="test" title="Подписать документ" icon=""/>
            <v-action-button width="200px" :action="test2" title="Вернуть на доработку" icon=""/>
          </v-action-group>
      <!-------------------------------- action-group & action-button -------------------------------->
      <!-------------------------------- document-block -------------------------------->
        <v-document-block>
          <v-icon :hover_shadow="true" :hover_color="true" font_size="21px" color="#8e8e93" icon=""  class="mb5"/>
          <v-icon :hover_shadow="true" :hover_color="true" font_size="21px" icon="" class="pl2 mb5"/>
          <v-icon :hover_shadow="true" :hover_color="true" font_size="21px" prompt="Лист визирования" icon="" class="mb5"/>
          <v-icon :hover_shadow="true" :hover_color="true" font_size="21px" icon="" class="mb5"/>
          <v-icon :hover_shadow="true" :hover_color="true" font_size="21px" icon="" class="mb5"/>
          <v-icon :hover_shadow="true" :hover_color="true" font_size="21px" prompt="Подписано всеми участниками" color="#ff6100" icon="" class="mb5"/>
        </v-document-block>
    <!-------------------------------- document-block -------------------------------->
    </div>
  </div>
</template>

<script>
const VActionButton = () => import('@/components/v-action-button')
const VActionGroup = () => import('@/components/v-action-group')
const VInput = () => import('@/components/v-input')
const VTemplateBlockWithIcon = () => import('@/components/v-template-block-with-icon')
const VTemplateBlock = () => import('@/components/v-template-block')
const VSearch = () => import('@/components/v-search')
const VInputDateWithIcon = () => import('@/components/v-input-date-with-icon')
const VModal = () => import('@/components/v-modal')
const VIcon = () => import('@/components/v-icon')
const VCardBlock = () => import('@/components/v-card-block')
const VCardText = () => import('@/components/v-card-text')
const VDocumentBlock = () => import('@/components/v-document-block')

export default {
  components: {
    VInput,
    VTemplateBlockWithIcon,
    VTemplateBlock,
    VSearch,
    VInputDateWithIcon,
    VModal,
    VIcon,
    VCardBlock,
    VCardText,
    VDocumentBlock,
    VActionGroup,
    VActionButton
  },
  data: () => ({
    src: 'https://static.thenounproject.com/png/4561-200.png',
    date_input: '',
    modal_show: false,
    search: '',
    input: '',
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
  }),
  methods: {
    test() {
      window.console.log('test1')
    },
    test2() {
      window.console.log('test2')
    },
  }
}
</script>

<style scoped>
.fix-bg {
  width: 66%;
  height: 50px;
  position: fixed;
}
  .test_page {
    padding-bottom: 200px;
    transition: all 0.3s ease;
  }
  .w66 {
    width: 66%;
    transition: all 0.3s ease;
  }
  .fixed {
    position: fixed;
    top: 200px;
    left: 66%;
  }
  .title {
    font-family: Roboto;
    font-size: 24px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.13;
    letter-spacing: normal;
    text-align: left;
    color: var(--dark);
    margin-bottom: 60px;
    margin-top: 50px;
    position: relative;
    top: 50px;
  }
  .fix-btn {
    position: fixed;
  }
</style>