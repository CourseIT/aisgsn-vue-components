<template>
  <div>
    <div class="df">
      <div class="icon " :class="{'icon-template-shadow': template_show, 'el-after': template_show && el_after, 'el-before': template_show && el_before}" @click="template_show = !template_show">
        <slot name="icon">
          <v-icon :icon="icon" :hover_shadow="true" :hover_color="true" :color="template_show ? '#fb6229' : '#21262c' " :class="{'icon-block': template_show}"/>
        </slot>
      </div>
      <div v-if="template_show" class="block-fix" :style='{top: `${template_text_top}`}'>
        <slot>
          <v-template-block  />
        </slot>
      </div>
    </div>
    <div class="close-block" v-if="template_show" @click="template_show = false"></div>
  </div>
</template>

<script>
const VIcon = () => import('./v-icon')
const VTemplateBlock = () => import('./v-template-block')

export default {
  props: ['placeholder', 'value', 'icon', 'label', 'template_text_top', 'el_after', 'el_before', 'width'],
  components: {
    VIcon,
    VTemplateBlock
  },
  data: () =>({
    template_show: false,
  }),
  watch: {
    template_show(value) {
      if(value) {
        document.getElementsByTagName('html')[0].style.overflow = "hidden";
      } else {
        document.getElementsByTagName('html')[0].removeAttribute("style")
      }
    }
  },
}
</script>

<style scoped>
.w36 {
  width: 36px;
}
.block-fix {
  position: absolute;
  z-index: 10;
  margin-left: 50px;
}
.label {
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0);
  font-family: Roboto;
  font-size: 12px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
  margin-bottom: 5px;
  width: 95%;
}
.icon {
  cursor: pointer;
  height: 36px;
  font-family: var(--font-awesome-5-pro-light);
  font-size: 33px;
  float: right;
  text-align: center;
  position: relative;
  bottom: 0px;
  margin: 0px 10px;
}
.close-block {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
}
</style>