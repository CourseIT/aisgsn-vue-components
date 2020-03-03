<template>
  <div v-if="visible" :class="{'read-only': readOnly == true}" class="templates__block-bg">
    <div class="search-block" :style='{width: `${width}`}'>
      <slot name="search">
        <v-search class="search" width="403px"/>
      </slot>
    </div>
    <div class="templates-block" :style='{width: `${width}`}' >
      <div>
        <draggable :list="texts" handle=".handle" class="" ghost-class="ghost" :disabled="!enabled" > 
          <slot>
            <v-template-text v-for="(text) in texts" :key="text.id" @start="dragging = true" @end="dragging = false" />
          </slot>
        </draggable>
      </div>
    </div>
    <div class="icons_text-block">
      <v-icon :action="action_edit" icon="" class="icon-text"/>
      <v-icon :action="action_plus" icon="" class="icon-text"/>
    </div>
  </div>
</template>

<script>
const VTemplateText = () => import('./v-template-text')
const VIcon = () => import('./v-icon')
const VSearch = () => import('./v-search')
import draggable from 'vuedraggable'

export default {
  props: {
    width: {},
    read_only: {},
    visible: {
      default: true
    },
    action_plus: {
      default: function() {
        return () => ({})
      }
    },
    action_edit: {
      default: function() {
        return () => ({})
      }
    },
  },
  components: {
    VIcon,
    VTemplateText,
    VSearch,
    draggable
  },
  data: () =>({
    dragging: false,
    enabled: true,
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
    ]
  }),
  computed: {
    readOnly() {
      if(typeof (this.read_only) == 'function') {
        return this.read_only()
      } else if (this.read_only) {
        return this.read_only
      } else {
        return false
      }
    }
  },
}
</script>

<style scoped>
.templates__block-bg {
  background-color: var(--pale-grey);
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22) !important;
  padding: 10px;
  z-index: 99;
  padding-right: 0;
  border-radius: 4px;
  max-width: 445px;
  min-width: 400px;
}
.search-block {
  z-index: 99;
  width: 435px;
}
.search {
  border-radius: 4px;
}
.templates-block {
  margin-top: 15px;
  z-index: 99;
  width: 454px;
  max-width: 454px;
  min-width: 400px;
  overflow: auto;
  max-height: 503px;
  padding-bottom: 10px;
  padding-right: 10px;
  padding-left: 30px;
  margin-left: -30px;
}
.templates-block::-webkit-scrollbar {
  width: 11px;
  height: 8px;
  background-color: rgba(0, 0, 0, 0);
}
.templates-block::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: var(--pale-lilac);
}
.templates-block .search {
  margin-bottom: 14.5px;
}
.icons_text-block {
  display: flex;
  margin-top: 20px;
  justify-content: flex-end;
  padding-right: 24px;
  z-index: 99;
}
.icon-text {
  cursor: pointer;
  font-family: var(--font-awesome-5-pro-light);
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.81;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
  margin-left: 10px;
}
</style>