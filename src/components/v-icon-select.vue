<template>
  <div class="icon-select">
    <v-icon icon="" :action="showSelects" :hover_color="hover_color" :hover_shadow="hover_shadow" :font_size="font_size"  :class="{'icon__active': show_selects}" />

    <div v-if="show_selects" class="select-block">
      <div @click="showSelects">
        <div class="arrow"></div>
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
    icon:{
      default: ''
    },
    hover_color: {
      default: true
    },
    hover_shadow: {
      default: true
    },
    font_size: {
      default: '21px'
    },
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

<style>
.select-block {
  width: 262px;
  margin-top: -17px;
  position: absolute;
  z-index: 103;
}
.icon__active {
  background-color: var(--pale-grey);
  border-radius: 4px;
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
  width: 36px;
  color: var(--bright-orange);
}
.arrow {
  position: relative;
  bottom: -7px;
  left: 12px;
  display: inline-block;
  z-index: 99;
  border: 6px solid transparent;	
  border-bottom: 6px solid var(--white);
}
</style>