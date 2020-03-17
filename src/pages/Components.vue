<template>
  <div class="components" :class="{pl305: $store.state.menu_visibility}">

    <hr class="dotted">
<!-------------------------------- action-group & action-button -------------------------------->
    <v-action-group width="200px" title="Выбор действия" class="mt20">
      <v-action-button width="200px" :action="test" title="Подписать документ" icon=""/>
      <v-action-button width="200px" :action="test2" title="Вернуть на доработку" icon=""/>
    </v-action-group>
<!-------------------------------- action-group & action-button -------------------------------->


<!-------------------------------- buttons -------------------------------->
    <v-button class="mb20" :action="test" :read_only="function(){return true}" text="Принять"/>
    <v-button class="mb20" :action="test2" text="Принять"/>
    <v-button class="mb20" :action="test" text="Сбросить" type="reset"/>
<!-------------------------------- buttons -------------------------------->


<!-------------------------------- icon with prompt -------------------------------->
    <v-icon :action="test" class="icon ml600 mb10" font_size="21px" :hover_color="true" icon="" prompt="Создать документ"/>
<!-------------------------------- icon with prompt -------------------------------->


<!-------------------------------- icon with unicode -------------------------------->
    <v-icon :action="test" unicode="&#xf319;" class="icon ml600" font_size="21px" :hover_color="true" prompt="Создать документ"/>
<!-------------------------------- icon with unicode -------------------------------->


<!-------------------------------- icons-group -------------------------------->
    <v-icons-group class="mb20">
      <template #main-icon>
        <v-icon padding_left="7px" :action="test" :hover_shadow="true" :hover_color="true" icon="" />
      </template>
      <v-icon font_size="21px" :hover_color="true" :action="test" icon="" />
      <v-icon font_size="21px" :hover_color="true" :action="test2" icon="" />
    </v-icons-group>
<!-------------------------------- icons-group -------------------------------->


<!-------------------------------- template-block-with-icon -------------------------------->
    <v-template-block-with-icon icon="" el_after="true" el_before="true" label="Кому" class="ml600 mb20" template_text_top="307px">
      <v-template-block class="mb20" :action_edit="test" :action_plus="test2">
        <template #search>
          <v-search v-model="search" class="search" width="403px"/>
        </template>
        <draggable :disabled="!enabled" ghost-class="ghost" @start="dragging = true" @end="dragging = false" >
          <v-template-text :action="test2" :action_minus="test" v-for="(text) in texts" :key="text.id" @start="dragging = true" @end="dragging = false" />
        </draggable>
      </v-template-block>
    </v-template-block-with-icon>
<!-------------------------------- template-block-with-icon -------------------------------->


<!-------------------------------- card-block with draggable -------------------------------->
    <draggable :disabled="!enabled" ghost-class="ghost" @start="dragging = true" @end="dragging = false" >
      <v-card-block class="mb20" width="450px" :action_minus="index == 2 ? '' : test" :action_edit="test" :action_select="index == 0 ? test : ''" v-for="(item, index) in list_card" :key="item.id" >
        <template #text>
          <v-card-text :text="item.date" bold="true" class="mb7"/>
          <v-card-text :text="item.number" />
          <v-card-text :text="item.method" />
          <v-card-text :text="item.signature" />
          <v-card-text :text="item.text" class="mb0"/>
        </template>
      </v-card-block>
    </draggable>
    
<!-------------------------------- card-block with draggable -------------------------------->



    


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
      <v-select :close_icon="false" hint="test" class="media-min-1500" v-model="value1" defailt_value="Выбор1" text_center="true" width="438px">
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
    
    <div class="w600">
      <v-select :close_icon="false" hint="test" class="media-min-1500 pr56" v-model="value1" defailt_value="Выбор1" text_center="true" width="100%">
        <v-options :option="option" :action="function(){value1 = option}" v-for="(option, index) in buttons" :key="index" />
      </v-select>
      <!-------------------------------- input -------------------------------->
      <v-input v-model="input_1" :icon_block="true" :label_icon_action="test" hint="hint" placeholder="№" label="Какой-то label" :list="list_input">
        <template #icon>
          <v-template-block-with-icon icon="" el_after="true" el_before="true">
            <v-template-block class="mb20" :action_edit="test" :action_plus="test2">
              <template #search>
                <v-search v-model="search" width="403px"/>
              </template>
              <draggable :disabled="!enabled" ghost-class="ghost" @start="dragging = true" @end="dragging = false" >
                <v-template-text :action="function(){input_1 = text.text}" :action_minus="test" v-for="(text) in texts" :key="text.id" :text="text.text" @start="dragging = true" @end="dragging = false" />
              </draggable>
            </v-template-block>
          </v-template-block-with-icon>
        </template>
      </v-input>
      <!-------------------------------- input -------------------------------->
      <!-------------------------------- input -------------------------------->
      <v-input :icon_block="true" v-model="input" :label_icon_action="test" hint="Интерпретация всех изложенных ниже наблюдений предполагает, что еще до начала измерений экситон синхронизует лазер, однозначно свидетельствуя о неустойчивости процесса в целом. Расслоение, если рассматривать процессы в рамках специальной теории относительности, переворачивает вихревой луч. Примесь вращает квант. Примесь, в согласии с традиционными представлениями, квазипериодично отталкивает квантово-механический атом. Идеальная тепловая машина воспроизводима в лабораторных условиях." placeholder="№" label="Какой-то label" :list="list_input"/>
      <!-------------------------------- input -------------------------------->

      <!-------------------------------- input -------------------------------->
      <v-input v-model="input" :icon_block="true" :label_icon_action="test" hint="Интерпретация всех изложенных ниже наблюдений предполагает, что еще до начала измерений экситон синхронизует лазер, однозначно свидетельствуя о неустойчивости процесса в целом. Расслоение, если рассматривать процессы в рамках специальной теории относительности, переворачивает вихревой луч. Примесь вращает квант. Примесь, в согласии с традиционными представлениями, квазипериодично отталкивает квантово-механический атом. Идеальная тепловая машина воспроизводима в лабораторных условиях." placeholder="№" label="Какой-то label" :list="list_input"/>
      <!-------------------------------- input -------------------------------->

      <!-------------------------------- input-number -------------------------------->
      <v-input v-model="input_n" :icon_block="true" :obligatory="true" placeholder="№" :label_icon_action="test" label="Какой-то label" type="number"/>
      <!-------------------------------- input-number -------------------------------->
      <!-------------------------------- input-number -------------------------------->
      <v-input v-model="input_n" :icon_block="true" :obligatory="true" placeholder="№" :label_icon_action="test" label="Какой-то label" type="number"/>
      <!-------------------------------- input-number -------------------------------->
      <!-------------------------------- search -------------------------------->
        <v-search class="mb20 pr56" v-model="search" width="600px"/>
      <!-------------------------------- search -------------------------------->


      <!-------------------------------- textarea -------------------------------->
      <v-input v-model="textarea" :icon_block="true" placeholder="placeholder" label="Какой-то label" type="textarea" :list="list_input"/>
      <!-------------------------------- textarea -------------------------------->


      <v-input-date-with-icon hint="test" v-model="input_date" :obligatory="true" :no_range="true" icon="" label="Срок проведения работ"/>

      <!-------------------------------- input-date -------------------------------->
    </div>
    

<!-------------------------------- icon open modal -------------------------------->
    <v-icon width="20" :action="function() {modal_show = true}" icon="" class="icon-plus"/>
<!-------------------------------- icon open modal -------------------------------->


<!-------------------------------- modal -------------------------------->
    <transition name="modal">
      <v-modal v-if="modal_show" v-model="modal_show" :action_apply="test" :action_delete="test2">
        <form action="">
        <div class="df">
          <v-input v-model="input" placeholder="" label="п/п" :list="list_input" tabindex="1"/>
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
          <v-input v-model="input" placeholder="" label="Наименование работ, подлежащих проверке, определяемых в соответствии с проектом Организации строительства" :list="list_input" tabindex="2"/>
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
          <v-input v-model="input" placeholder="" label="Предмет каждой проверки" :list="list_input" tabindex="3"/>
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

        <v-input-date-with-icon v-model="input_date2" icon="" label="Примерная дата проведения каждой проверки" tabindex="4"/>

        <div class="df">
          <v-input v-model="input" placeholder="" label="Ориентировочные затраты времени должностного Лица органа государственного строительного Надзора на проведение проверки" :list="list_input" tabindex="5"/>
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
          <v-input v-model="input" placeholder="" label="Документы, подлежащие представлению при проведении проверок, предусмотренных программой проведения проверок" :list="list_input" tabindex="6"/>
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
предусмотренных программой проведения проверок, является обязательным" :list="list_input" tabindex="7"/>
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
      </form>
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
    <v-categories-search v-model="categories_search" :list="categories_list" defailt_text="Категории">
      <v-select v-model="categories_option" :list="categories_list" icon_left="true" defailt_value="Категории" text_center="true" width="140px" />
    </v-categories-search>
<!-------------------------------- categories-search -------------------------------->


  <!-------------------------------- multiple-search -------------------------------->
    <v-multiple-search v-model="multiple_search" :list="categories_list"/>
  <!-------------------------------- multiple-search -------------------------------->


<!-------------------------------- SORT (slect with sort icon) -------------------------------->
    <v-select class="media-min-1500" v-model="value1" icon="" icon_size="20px" defailt_value="Сортировка" text_center="true" width="238px">
      <v-options :option="option" :action="function(){value1 = option}" v-for="(option, index) in buttons" :key="index" />
    </v-select>
<!-------------------------------- SORT (slect with sort icon) -------------------------------->

<!-------------------------------- filter-input -------------------------------->
    <v-filter-input class="mb20" v-model="filter_input"/>
<!-------------------------------- filter-input -------------------------------->

<!-------------------------------- filter-input-switch -------------------------------->
    <v-filter-input-switch class="mb20" v-model="filter_input_switch" :list="filter_list"/>
<!-------------------------------- filter-input-switch -------------------------------->

<!-------------------------------- time-btn -------------------------------->
    <v-time-button class="mb20" v-model="time_btn" />
<!-------------------------------- time-btn -------------------------------->

    <div class="df">
      <!-------------------------------- date-button -------------------------------->
      <v-date-button  v-model="date_btn" />
      <!-------------------------------- date-button -------------------------------->

      <!-------------------------------- date-range-button -------------------------------->
      <v-date-range-button class="ml25" v-model="date_range_btn"/>
      <!-------------------------------- date-range-button -------------------------------->
    </div>

    <!-------------------------------- switch-button -------------------------------->
    <v-switch-button class="mb20" v-model="switch_button" />
    <!-------------------------------- switch-button -------------------------------->

    <!-------------------------------- news-feed -------------------------------->
    <v-news-feed class="mb20">
      <v-news v-for="(news,index) in news_list" :key="index" :news="news"/>
    </v-news-feed>
    <!-------------------------------- news-feed -------------------------------->

    <!-------------------------------- v-layout -------------------------------->
    <v-layout width="670px" class="mb20">
      <v-input v-model="input" label="Фамилия" class="input_style_2"/>
      <v-input v-model="input" label="Имя" class="input_style_2" />
      <v-input v-model="input" label="Отчество (если есть)" class="input_style_2" />
      <p class="radio_label">Пол</p>
      <v-radio-buttons class="ml7 mb15" v-model="label" radio_color="green">
        <v-radio value="Мужской" label="Мужской" />
        <v-radio value="Женский" label="Женский" />
      </v-radio-buttons>
      <v-date-input v-model="input" label="Дата рождения"/>
      <p class="layout_title">Место рождения</p>
      <v-input :obligatory="true" v-model="input" label="Тип места (если известно)" class="input_style_2" />
      <v-input :obligatory="true" v-model="input" label="Поселение (если известно)" class="input_style_2" />
      <v-input v-model="input" label="Район (если известен)" class="input_style_2" />
      <v-input v-model="input" label="Регион (если известен)" class="input_style_2" />
      <v-input v-model="input" label="Страна (если известна)" class="input_style_2" />
      <p class="layout_title">Паспорт рф</p>
      <div class="df">
        <v-input :obligatory="true" v-model="input_n" label="Серия" type="number" max_length="4" text_align="center" width="72px" class="mr8 input_style_2" />
        <v-input :obligatory="true" v-model="input_n" label="Номер" type="number" max_length="6" text_align="center" width="108px" class="input_style_2" />
      </div>
      <v-date-input :obligatory="true" v-model="input" label="Дата выдачи" class="input_style_2 mt5"/>
      <v-input v-model="input" label="Кем выдан" class="input_style_2 mt8" />
    </v-layout>
    <!-------------------------------- v-layout -------------------------------->


    <!-------------------------------- v-column-list -------------------------------->
    <v-column-list v-model="column" :list="column_list" :action_minus="test" :action_plus="test2" :action_reset="test2" class="mb20" />
    <!-------------------------------- v-column-list -------------------------------->

    <!-------------------------------- v-column-list only_one -------------------------------->
    <v-column-list v-model="column2" :only_one="true" :list="column_list" :action_minus="test" :action_plus="test2" :action_reset="test2" class="mb20" />
    <!-------------------------------- v-column-list -------------------------------->


    <!-------------------------------- v-legend -------------------------------->
    <v-legend />
    <!-------------------------------- v-legend -------------------------------->

    <v-tool-icons class="transition" top="97px" left="350px" :class="{pl305: $store.state.menu_visibility}">
      <v-icon font_size="21px" :hover_color="true" :action="test" prompt="test" icon=""/>
      <v-icon font_size="21px" :hover_color="true" :action="test" icon=""/>
      <v-icon font_size="21px" :hover_color="true" icon=""/>
      <v-icon font_size="21px" :hover_color="true" icon=""/>
      <v-icon font_size="21px" :hover_color="true" icon=""/>
      <v-icon font_size="21px" :hover_color="true" icon=""/>
      <v-icon font_size="21px" :hover_color="true" icon=""/>
      <v-icon font_size="21px" :hover_color="true" icon=""/>
      <v-icon font_size="21px" :hover_color="true" icon=""/>
      <v-icon font_size="21px" :hover_color="true" icon=""/>
      <v-icon font_size="21px" :hover_color="true" icon=""/>
    </v-tool-icons>

    <v-tool-icons top="97px" right="100px" :row="false">
      <v-icon font_size="21px" :hover_color="true" prompt="test" icon=""/>
      <v-icon font_size="21px" :hover_color="true" icon=""/>
      <v-icon font_size="21px" :hover_color="true" icon=""/>
      <v-icon font_size="21px" :hover_color="true" icon=""/>
      <v-icon font_size="21px" :hover_color="true" icon=""/>
      <v-icon font_size="21px" :hover_color="true" icon=""/>
      <v-icon font_size="21px" :hover_color="true" icon=""/>
      <v-icon font_size="21px" :hover_color="true" icon=""/>
      <v-icon font_size="21px" :hover_color="true" icon=""/>
      <v-icon font_size="21px" :hover_color="true" icon=""/>
      <v-icon font_size="21px" :hover_color="true" icon=""/>
    </v-tool-icons>

    <v-icon font_size="21px" :hover_color="true" :action="function() {modal_layout = true}"  icon="" prompt="Активатор модального окна" class="ml600"/>


    <transition name="modal">
    <!-------------------------------- v-modal-layout -------------------------------->
    <v-modal-layout v-if="modal_layout" v-model="modal_layout" @keydown.esc="modal_layout == false">
      
      <v-modal-layout-tab name="Общая информация" v-model="show_tabs">
        <v-layout width="100%" class="mb20" :border="false">
          test
        </v-layout>
      </v-modal-layout-tab>

      <v-modal-layout-tab name="Начисление" v-model="show_tabs">
        <template #icons>
          <v-tool-icons :row="false">
            <v-icon font_size="21px" color="#e7e5dc" :hover_color="true" icon=""/>
            <v-icon font_size="21px" color="#e7e5dc" :hover_color="true" icon=""/>
            <v-icon font_size="21px" color="#e7e5dc" :hover_color="true" icon=""/>
            <v-icon font_size="21px" color="#e7e5dc" :hover_color="true" icon=""/>
            <v-icon font_size="21px" color="#e7e5dc" :hover_color="true" icon=""/>
            <v-icon font_size="21px" color="#e7e5dc" :hover_color="true" icon=""/>
            <v-icon font_size="21px" color="#e7e5dc" :hover_color="true" icon=""/>
            <v-icon font_size="21px" color="#e7e5dc" :hover_color="true" icon="" class="mb80"/>
            <v-icon font_size="21px" color="#e7e5dc" :hover_color="true" icon=""/>
            <v-icon font_size="21px" color="#e7e5dc" :hover_color="true" icon=""/>
          </v-tool-icons>
        </template>
        <!-------------------------------- v-layout -------------------------------->
        <v-layout width="100%" class="mb20" :border="false">

          <div class="df">
            <v-input v-model="input" label="Шаблон" class="input_style_2"/>
            <v-template-block-with-icon icon="" el_after="true" el_before="true" label="Кому" class="mt25" template_text_top="0px">
              <v-template-block class="mb20" :action_edit="test" :action_plus="test2">
                <template #search>
                  <v-search v-model="search" class="search" width="403px"/>
                </template>
                <draggable :disabled="!enabled" ghost-class="ghost" @start="dragging = true" @end="dragging = false" >
                  <v-template-text :action="test2" :action_minus="test" v-for="(text) in texts" :key="text.id" @start="dragging = true" @end="dragging = false" />
                </draggable>
              </v-template-block>
            </v-template-block-with-icon>
          </div>

          <v-input v-model="input" label="Наименование" :obligatory="true" class="input_style_2" />

          <div class="df">
            <v-input :obligatory="true" v-model="input" label="Сумма (руб.)" type="number" text_align="center" width="106px" class="mr25 input_style_2" />
            <v-input v-model="input" label="Оплачено (руб.)" type="number" text_align="center" width="106px" class="mr25 input_style_2" />
            <v-input v-model="input" label="Остаток (руб.)" type="number" text_align="center" width="106px" class="input_style_2" />
          </div>

          <div class="df">
            <v-input v-model="input" label="Тип налогоплательщика" :obligatory="true" width="237px" class="input_style_2"/>
            <v-template-block-with-icon icon="" el_after="true" el_before="true" label="Кому" class="mt25" template_text_top="0px">
              <v-template-block class="mb20" :action_edit="test" :action_plus="test2">
                <template #search>
                  <v-search v-model="search" class="search" width="403px"/>
                </template>
                <draggable :disabled="!enabled" ghost-class="ghost" @start="dragging = true" @end="dragging = false" >
                  <v-template-text :action="test2" :action_minus="test" v-for="(text) in texts" :key="text.id" @start="dragging = true" @end="dragging = false" />
                </draggable>
              </v-template-block>
            </v-template-block-with-icon>
          </div>

          <div class="df">
            <v-input v-model="input" label="Плательщик" :obligatory="true" class="input_style_2"/>
            <v-template-block-with-icon icon="" el_after="true" el_before="true" label="Кому" class="mt25" template_text_top="0px">
              <v-template-block class="mb20" :action_edit="test" :action_plus="test2">
                <template #search>
                  <v-search v-model="search" class="search" width="403px"/>
                </template>
                <draggable :disabled="!enabled" ghost-class="ghost" @start="dragging = true" @end="dragging = false" >
                  <v-template-text :action="test2" :action_minus="test" v-for="(text) in texts" :key="text.id" @start="dragging = true" @end="dragging = false" />
                </draggable>
              </v-template-block>
            </v-template-block-with-icon>
          </div>

          <div class="df">
            <v-input v-model="input" label="Удостоверяющий документ" :obligatory="true" width="237px" class="input_style_2"/>
            <v-template-block-with-icon icon="" el_after="true" el_before="true" label="Кому" class="mt25" template_text_top="0px">
              <v-template-block class="mb20" :action_edit="test" :action_plus="test2">
                <template #search>
                  <v-search v-model="search" class="search" width="403px"/>
                </template>
                <draggable :disabled="!enabled" ghost-class="ghost" @start="dragging = true" @end="dragging = false" >
                  <v-template-text :action="test2" :action_minus="test" v-for="(text) in texts" :key="text.id" @start="dragging = true" @end="dragging = false" />
                </draggable>
              </v-template-block>
            </v-template-block-with-icon>
          </div>

          <div class="df mb150">
            <div class="df mr25">
              <v-input v-model="input" label="Номер" :obligatory="true" type="number" width="237px" class="input_style_2"/>
              <v-template-block-with-icon icon="" el_after="true" el_before="true" label="Кому" class="mt25" template_text_top="0px">
                <v-template-block class="mb20" :action_edit="test" :action_plus="test2">
                  <template #search>
                    <v-search v-model="search" class="search" width="403px"/>
                  </template>
                  <draggable :disabled="!enabled" ghost-class="ghost" @start="dragging = true" @end="dragging = false" >
                    <v-template-text :action="test2" :action_minus="test" v-for="(text) in texts" :key="text.id" @start="dragging = true" @end="dragging = false" />
                  </draggable>
                </v-template-block>
              </v-template-block-with-icon>
            </div>
            <div class="df w100">
              <v-input v-model="input" label="Страна" :obligatory="true" class="input_style_2"/>
              <v-template-block-with-icon icon="" el_after="true" el_before="true" label="Кому" class="mt25" template_text_top="0px">
                <v-template-block class="mb20" :action_edit="test" :action_plus="test2">
                  <template #search>
                    <v-search v-model="search" class="search" width="403px"/>
                  </template>
                  <draggable :disabled="!enabled" ghost-class="ghost" @start="dragging = true" @end="dragging = false" >
                    <v-template-text :action="test2" :action_minus="test" v-for="(text) in texts" :key="text.id" @start="dragging = true" @end="dragging = false" />
                  </draggable>
                </v-template-block>
              </v-template-block-with-icon>
            </div>
          </div>

        </v-layout>
        <!-------------------------------- v-layout -------------------------------->
      </v-modal-layout-tab>

      <v-modal-layout-tab name="Дополнительно" v-model="show_tabs">
        <v-layout width="100%" class="mb20" :border="false">
          test
        </v-layout>
      </v-modal-layout-tab>

      <v-modal-layout-tab name="Организация" v-model="show_tabs">
        <v-layout width="100%" class="mb20" :border="false">
          test
        </v-layout>
      </v-modal-layout-tab>

      <v-modal-layout-tab name="Служебная информация" v-model="show_tabs">
        <v-layout width="100%" class="mb20" :border="false">
          test
        </v-layout>
      </v-modal-layout-tab>

      <v-modal-layout-tab name="Платежи" v-model="show_tabs">
        <v-layout width="100%" class="mb20" :border="false">
          test
        </v-layout>
      </v-modal-layout-tab>

      <v-modal-layout-tab name="Пакеты" v-model="show_tabs">
        <v-layout width="100%" class="mb20" :border="false">
          test
        </v-layout>
      </v-modal-layout-tab>

      <v-modal-layout-tab name="Статусы" v-model="show_tabs">
        <v-layout width="100%" class="mb20" :border="false">
          test
        </v-layout>
      </v-modal-layout-tab>

      <v-modal-layout-tab name="Интеграция" v-model="show_tabs">
        <v-layout width="100%" class="mb20" :border="false">
          test
        </v-layout>
      </v-modal-layout-tab>

      <v-modal-layout-tab name="История" v-model="show_tabs">
        <v-layout width="100%" class="mb20" :border="false">
          test
        </v-layout>
      </v-modal-layout-tab>

    </v-modal-layout>
    <!-------------------------------- v-modal-layout -------------------------------->
    </transition>


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
const VFilterInput = () => import('@/components/v-filter-input')
const VFilterInputSwitch = () => import('@/components/v-filter-input-switch')
const VTimeButton = () => import('@/components/v-time-button')
const VCardText = () => import('@/components/v-card-text')
const VSwitchButton = () => import('@/components/v-switch-button')
const VMultipleSearch = () => import('@/components/v-multiple-search')
const VNewsFeed = () => import('@/components/v-news-feed')
const VNews = () => import('@/components/v-news')
const VLayout = () => import('@/components/v-layout')
const VDateInput = () => import('@/components/v-date-input')
const VColumnList = () => import('@/components/v-column-list')
const VLegend = () => import('@/components/v-legend')
const VModalLayout = () => import('@/components/v-modal-layout')
const VModalLayoutTab = () => import('@/components/v-modal-layout-tab') 
const VToolIcons = () => import('@/components/v-tool-icons')

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
    VFilterInput,
    VFilterInputSwitch,
    VTimeButton,
    VCardText,
    VSwitchButton,
    VMultipleSearch,
    VNewsFeed,
    VNews,
    VLayout,
    VDateInput,
    VColumnList,
    VLegend,
    VModalLayout,
    VModalLayoutTab,
    VToolIcons
  },
  data: () => ({
    // drag`n`drop
    dragging: false,
    enabled: true,
    button1: false,
    obj: {
      1: '',
      2: ''
    },

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
    buttons: ['Выбор 1', 'Выбор 2', 'Выбор 3', 'Выбор 4'],

    textarea: 'texteria',
    input_1: '',
    input: '',
    input_n: '23',
    list_input: [
      'Объект КС 1',
      'Объект КС 2',
      '...',
      '...'
    ],
    input_date: "",
    input_date2: '',

    modal_show: false,
    modal_layout: false,

    labels: ['Список','Хронология'],
    labels2: ['На месяц', 'На 1-е февраля', 'На 1-е апреля', 'На 1-е июля', 'На 1-е октября', 'На 1-е января'],
    label: 'Список',
    label2: '',

    search: '',
    search123: '',

    texts:[
      {
        id: 1,
        text: 'Шаблонный текст1'
      },
      {
        id: 2,
        text: 'Шаблонный текст2'
      },
      {
        id: 3,
        text: 'Шаблонный текст3'
      },
      
      {
        id: 4,
        text: 'Шаблонный текст4'
      },
      {
        id: 5,
        text: 'Шаблонный текст5'
      },
      {
        id: 6,
        text: 'Шаблонный текст6'
      },
      {
        id: 7,
        text: 'Шаблонный текст7'
      },
      {
        id: 8,
        text: 'Шаблонный текст8'
      },
      {
        id: 9,
        text: 'Шаблонный текст9'
      },
      {
        id: 10,
        text: 'Шаблонный текст10'
      },
      {
        id: 11,
        text: 'Шаблонный текст11'
      },
      {
        id: 12,
        text: 'Шаблонный текст12'
      },
      {
        id: 13,
        text: 'Шаблонный текст13'
      },
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
    ],


    filter_input: '',
    filter_input_switch: '',
    filter_list: [
      'Материалы проверки №21',
      'Материалы проверки №22',
      'Материалы проверки №23',
      'Материалы проверки №24',
      'Материалы проверки №25',
      'Материалы проверки проверки проверки проверки проверки №25'
    ],

    time_btn: '',
    switch_button: '',

    multiple_search: '',

    news_list: [
      {
        type: 'advertisement',
        author: 'Горланов Роман Павлович',
        date: '21.02.2020',
        time: '12:32',
        text: 'Работоспособность сервиса Росреестр восстановлена! По информации от Росреестра работоспособность сервиса, связанная с техническими работами по переходу сервиса на новый сертификат, восстановлена. Все неотправленные запросы возвращены на статус «Новый» их необходимо подписать и отправить самостоятельно. Запросы, отправленные до 01.01.2020 переведены на «Ожидание ответа», часть из них уже успешно обработаны.',
        provider: 'ОБУ «Информационно-технический центр»'
      },
      {
        type: 'warning',
        author: 'Горланов Роман Павлович',
        date: '21.02.2020',
        time: '12:32',
        text: 'Работоспособность сервиса Росреестр восстановлена! По информации от Росреестра работоспособность сервиса, связанная с техническими работами по переходу сервиса на новый сертификат, восстановлена. Все неотправленные запросы возвращены на статус «Новый» их необходимо подписать и отправить самостоятельно. Запросы, отправленные до 01.01.2020 переведены на «Ожидание ответа», часть из них уже успешно обработаны.',
        provider: 'ОБУ «Информационно-технический центр»'
      },
      {
        type: 'notification',
        author: 'Горланов Роман Павлович',
        date: '21.02.2020',
        time: '12:32',
        text: 'Работоспособность сервиса Росреестр восстановлена! По информации от Росреестра работоспособность сервиса, связанная с техническими работами по переходу сервиса на новый сертификат, восстановлена. Все неотправленные запросы возвращены на статус «Новый» их необходимо подписать и отправить самостоятельно. Запросы, отправленные до 01.01.2020 переведены на «Ожидание ответа», часть из них уже успешно обработаны.',
        provider: 'ОБУ «Информационно-технический центр»'
      },
      {
        type: 'notification',
        author: 'Горланов Роман Павлович',
        date: '21.02.2020',
        time: '12:32',
        text: 'Работоспособность сервиса Росреестр восстановлена! По информации от Росреестра работоспособность сервиса, связанная с техническими работами по переходу сервиса на новый сертификат, восстановлена. Все неотправленные запросы возвращены на статус «Новый» их необходимо подписать и отправить самостоятельно. Запросы, отправленные до 01.01.2020 переведены на «Ожидание ответа», часть из них уже успешно обработаны.',
        provider: 'ОБУ «Информационно-технический центр»'
      },
      {
        type: 'notification',
        author: 'Горланов Роман Павлович',
        date: '21.02.2020',
        time: '12:32',
        text: 'Работоспособность сервиса Росреестр восстановлена! По информации от Росреестра работоспособность сервиса, связанная с техническими работами по переходу сервиса на новый сертификат, восстановлена. Все неотправленные запросы возвращены на статус «Новый» их необходимо подписать и отправить самостоятельно. Запросы, отправленные до 01.01.2020 переведены на «Ожидание ответа», часть из них уже успешно обработаны.',
        provider: 'ОБУ «Информационно-технический центр»'
      },
      {
        type: 'notification',
        author: 'Горланов Роман Павлович',
        date: '21.02.2020',
        time: '12:32',
        text: 'Работоспособность сервиса Росреестр восстановлена! По информации от Росреестра работоспособность сервиса, связанная с техническими работами по переходу сервиса на новый сертификат, восстановлена. Все неотправленные запросы возвращены на статус «Новый» их необходимо подписать и отправить самостоятельно. Запросы, отправленные до 01.01.2020 переведены на «Ожидание ответа», часть из них уже успешно обработаны.',
        provider: 'Администрация города Липецка'
      },
      {
        type: 'notification',
        author: 'Горланов Роман Павлович',
        date: '21.02.2020',
        time: '12:32',
        text: 'Работоспособность сервиса Росреестр восстановлена! По информации от Росреестра работоспособность сервиса, связанная с техническими работами по переходу сервиса на новый сертификат, восстановлена. Все неотправленные запросы возвращены на статус «Новый» их необходимо подписать и отправить самостоятельно. Запросы, отправленные до 01.01.2020 переведены на «Ожидание ответа», часть из них уже успешно обработаны.',
        provider: 'Администрация города Липецка'
      },
      {
        type: 'notification',
        author: 'Горланов Роман Павлович',
        date: '21.02.2020',
        time: '12:32',
        text: 'Работоспособность сервиса Росреестр восстановлена! По информации от Росреестра работоспособность сервиса, связанная с техническими работами по переходу сервиса на новый сертификат, восстановлена. Все неотправленные запросы возвращены на статус «Новый» их необходимо подписать и отправить самостоятельно. Запросы, отправленные до 01.01.2020 переведены на «Ожидание ответа», часть из них уже успешно обработаны.',
        provider: 'ОБУ «Информационно-технический центр»'
      },
      {
        type: 'notification',
        author: 'Горланов Роман Павлович',
        date: '21.02.2020',
        time: '12:32',
        text: 'Работоспособность сервиса Росреестр восстановлена! По информации от Росреестра работоспособность сервиса, связанная с техническими работами по переходу сервиса на новый сертификат, восстановлена. Все неотправленные запросы возвращены на статус «Новый» их необходимо подписать и отправить самостоятельно. Запросы, отправленные до 01.01.2020 переведены на «Ожидание ответа», часть из них уже успешно обработаны.',
        provider: 'ОБУ «Информационно-технический центр»'
      },
      {
        type: 'notification',
        author: 'Горланов Роман Павлович',
        date: '21.02.2020',
        time: '12:32',
        text: 'Работоспособность сервиса Росреестр восстановлена! По информации от Росреестра работоспособность сервиса, связанная с техническими работами по переходу сервиса на новый сертификат, восстановлена. Все неотправленные запросы возвращены на статус «Новый» их необходимо подписать и отправить самостоятельно. Запросы, отправленные до 01.01.2020 переведены на «Ожидание ответа», часть из них уже успешно обработаны.',
        provider: 'ОБУ «Информационно-технический центр»'
      },
      {
        type: 'notification',
        author: 'Горланов Роман Павлович',
        date: '21.02.2020',
        time: '12:32',
        text: 'Работоспособность сервиса Росреестр восстановлена! По информации от Росреестра работоспособность сервиса, связанная с техническими работами по переходу сервиса на новый сертификат, восстановлена. Все неотправленные запросы возвращены на статус «Новый» их необходимо подписать и отправить самостоятельно. Запросы, отправленные до 01.01.2020 переведены на «Ожидание ответа», часть из них уже успешно обработаны.',
        provider: 'ОБУ «Информационно-технический центр»'
      },
      {
        type: 'notification',
        author: 'Горланов Роман Павлович',
        date: '21.02.2020',
        time: '12:32',
        text: 'Работоспособность сервиса Росреестр восстановлена! По информации от Росреестра работоспособность сервиса, связанная с техническими работами по переходу сервиса на новый сертификат, восстановлена. Все неотправленные запросы возвращены на статус «Новый» их необходимо подписать и отправить самостоятельно. Запросы, отправленные до 01.01.2020 переведены на «Ожидание ответа», часть из них уже успешно обработаны.',
        provider: 'ОБУ «Информационно-технический центр»'
      },
      {
        type: 'notification',
        author: 'Горланов Роман Павлович',
        date: '21.02.2020',
        time: '12:32',
        text: 'Работоспособность сервиса Росреестр восстановлена! По информации от Росреестра работоспособность сервиса, связанная с техническими работами по переходу сервиса на новый сертификат, восстановлена. Все неотправленные запросы возвращены на статус «Новый» их необходимо подписать и отправить самостоятельно. Запросы, отправленные до 01.01.2020 переведены на «Ожидание ответа», часть из них уже успешно обработаны.',
        provider: 'ОБУ «Информационно-технический центр»'
      },
      {
        type: 'notification',
        author: 'Горланов Роман Павлович',
        date: '21.02.2020',
        time: '12:32',
        text: 'Работоспособность сервиса Росреестр восстановлена! По информации от Росреестра работоспособность сервиса, связанная с техническими работами по переходу сервиса на новый сертификат, восстановлена. Все неотправленные запросы возвращены на статус «Новый» их необходимо подписать и отправить самостоятельно. Запросы, отправленные до 01.01.2020 переведены на «Ожидание ответа», часть из них уже успешно обработаны.',
        provider: 'ОБУ «Информационно-технический центр»'
      },
      {
        type: 'notification',
        author: 'Горланов Роман Павлович',
        date: '21.02.2020',
        time: '12:32',
        text: 'Работоспособность сервиса Росреестр восстановлена! По информации от Росреестра работоспособность сервиса, связанная с техническими работами по переходу сервиса на новый сертификат, восстановлена. Все неотправленные запросы возвращены на статус «Новый» их необходимо подписать и отправить самостоятельно. Запросы, отправленные до 01.01.2020 переведены на «Ожидание ответа», часть из них уже успешно обработаны.',
        provider: 'ОБУ «Информационно-технический центр»'
      }
    ],


    column_list: [
      'Название столбца1',
      'Название столбца2',
      'Название столбца3',
      'Название столбца4',
      'Название столбца5',
      'Название столбца6',
      'Название столбца7',
      'Название столбца8',
      'Название столбца9',
      'Название столбца10',
      'Название столбца11',
      'Название столбца12',
      'Название столбца13',
      'Название столбца14',
      'Название столбца15',
      'Название столбца16',
      'Название столбца17',
      'Название столбца18',
      'Название столбца19',
      'Название столбца20',
      'Название столбца21',
      'Название столбца22',
      'Название столбца23',
    ],

    column: ['Название столбца3'],
    column2: 'Название столбца3',

    show_tabs: 'Начисление'
    

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
  }
}
</script>

<style scoped>
.ml600 {
  margin-left: 600px;
}
.components {
  padding-bottom: 400px;
  transition: all 0.3s ease;
}
.transition {
  transition: all 0.3s ease;
}
.pr56 {
  padding-right: 56px;
}
</style>