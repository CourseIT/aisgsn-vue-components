import VActionGroup from './components/v-action-group'
import VActionButton from './components/v-action-button'
import VButton from './components/v-button'
import VCardBlock from './components/v-card-block'
import VDateButton from './components/v-date-button'
import VDateRangeButton from './components/v-date-range-button'
import VDocInfo from './components/v-doc-info'
import VDocumentBlock from './components/v-document-block'
import VUsersSignature from './components/v-users-signature'
import VUserSignature from './components/v-user-signature'
import VIcon from './components/v-icon'
import VFiltersButton from './components/v-filters-button'
import VSelect from './components/v-select'
import VOptions from './components/v-options'
import VInput from './components/v-input'
import VInputDateWithIcon from './components/v-input-date-with-icon'
import VModal from './components/v-modal'
import VRadioButtons from './components/v-radio-buttons'
import VTemplateBlock from './components/v-template-block'
import VTemplateText from './components/v-template-text'
import VSearch from './components/v-search'
import VTemplateBlockWithIcon from './components/v-template-block-with-icon'
import VIconsGroup from './components/v-icons-group'
import VCategoriesSearch from './components/v-categories-search'
import VFilterInput from './components/v-filter-input'
import VFilterInputSwitch from './components/v-filter-input-switch'
import VTimeButton from './components/v-time-button'
import VCardText from './components/v-card-text'
import VSwitchButton from './components/v-switch-button'
import VMultipleSearch from './components/v-multiple-search'
import VNewsFeed from './components/v-news-feed'
import VNews from './components/v-news'
import VLayout from './components/v-layout'
import VDateInput from './components/v-date-input'
import VColumnList from './components/v-column-list'
import VLegend from './components/v-legend'
import VToolIcons from './components/v-tool-icons'

export { default as draggable } from 'vuedraggable'

import Vue from 'vue'

const Components = {
  VActionGroup,
  VActionButton,
  VButton,
  VCardBlock,
  VDateButton,
  VDateRangeButton,
  VDocInfo,
  VDocumentBlock,
  VUsersSignature,
  VUserSignature,
  VIcon,
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
  VIconsGroup,
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
  VToolIcons
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
})

export default Components