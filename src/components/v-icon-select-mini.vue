<template>
  <div class="icon-select-mini" :class="{'icon-select': style_type != 'style2', 'icon-select-style2': style_type == 'style2'}">
    <v-icon :icon="icon" :action="showSelects" :hover_color="hover_color" :prompt="hint" :hover_shadow="hover_shadow" :font_size="font_size"  :class="{'icon__active': show_selects}" />
    <div v-if="show_selects" class="select-block">
      <div @click="showSelects">
        <slot>
        </slot>
      </div>
    </div>
    <div v-if="show_selects" @click="showSelects" class="colse-bg" :class="{'dark_bg': dark_bg}"></div>
  </div>
</template>

<script>
const VIcon = () => import('./v-icon')

export default {
  props: {
    style_type: {},
    icon:{
      default: ''
    },
    hint: {
      default: ''
    },
    hover_color: {
      default: true
    },
    hover_shadow: {
      default: true
    },
    font_size: {
      default: '15px'
    },
    options: {},
    dark_bg:{}
  },
  components: {
    VIcon
  },
  data: () => ({
    show_selects: false
  }),
  methods: {
    showSelects() {
      this.show_selects = !this.show_selects
    }
  }
}
</script>

<style scoped>
.select-block {
  width: 262px;
  margin-top: 6px;
  position: absolute;
  z-index: 103;
}
</style>