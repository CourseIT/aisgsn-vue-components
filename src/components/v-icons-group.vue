<template>
  <div v-if="visible" :class="[{'read-only': readOnly == true, 'icons-block': style_type != 'style2', 'icons-block-style2': style_type == 'style2' }, dynamic_class]" class="">
    <div class="icon1" :class="{'active_icon1': hover}">
      <slot name="main-icon">
        <v-icon class="icon" :hover_shadow="true" :hover_color="true" icon=""  />
      </slot>
    </div>
    <div @mouseover="hover = true" @mouseout="hover = false" class="hover-icon">
      <div class="hover-icon__bg">
        <slot>
          <v-icon font_size="21px" :hover_color="true" icon="" />
        </slot>
      </div>
    </div>
    </div>
</template>

<script>
const VIcon = () => import('./v-icon')

export default {
  props: {
    padding_left: {},
    style_type: {},
    read_only: {},
    visible: {
      default: true
    },
    dynamic_class: {}
  },
  components: {
    VIcon
  },
  data: () => ({
    hover: false,
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
.icons-block {
  display: inline-block;
  position: relative;
  bottom: 12px;
}
.icon1 {
  font-family: var(--font-awesome-5-pro-light);
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.1;
  letter-spacing: normal;
  text-align: left;
  color: #20262c;
  margin-top: 15px;
  cursor: pointer;
}
.active_icon1 {
  border-radius: 4px;
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
  color: var(--bright-orange);
}
.icon1 .icon {
  cursor: pointer;
  z-index: 9;
  padding-left: 5px;
}
.hover-icon:hover {
  display: block;
  z-index: 1;
}
.hover-icon {
  position: absolute;
  display: none;
  width: 36px;
  text-align: center;
  padding-top: 10px;
}
.hover-icon::before {
  content: ''; 
  position: absolute;
  left: 8px; 
  top: -7px;
  border: 10px solid transparent;
  border-bottom: 10px solid var(--white);
}
.icon1:hover + .hover-icon{
  display: block;
}
.hover-icon__bg div {
  background: var(--white);
  border-radius: 5px;
  margin-bottom: 5px;
}
.hover-icon__bg div:hover {
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
}
.hover-icon__bg {
  border-radius: 5px;
  transition: all 0.2s ease-out;
}
</style>