<template>
  <div v-if="visible" :class="{'read-only': readOnly == true}" class="textarea-with-icon">
    <div class="input-block">
      <p class="label">{{label}}</p>
      <div class="df">
        <textarea :placeholder="placeholder" v-model="text" cols="10" rows="4"></textarea>
        <div class="icon" :class="{'icon-template-shadow': template_show, 'el-after': template_show && el_after, 'el-before': template_show && el_before}" @click="template_show = !template_show">
          <slot name="icon">
            <v-icon :icon="icon" :hover_shadow="true" :hover_color="true" :color="template_show ? '#fb6229' : '#21262c' " class="icon-block"/>
          </slot>
        </div>
        <div v-if="template_show">
          <v-template-block class="temp late_block-fix" :style='{top: `${template_text_top}`}' />
        </div>
      </div>
      <div class="close-block" v-if="template_show" @click="template_show = false"></div>
    </div>
  </div>
</template>

<script>
const VIcon = () => import('./v-icon')
const VTemplateBlock = () => import('./v-template-block')

export default {
  props: {
    placeholder: {},
    value: {},
    icon: {},
    template_text_top: {},
    el_after: {},
    el_before: {},
    label: {},
    read_only: {},
    visible: {
      default: true
    }
  },
  components: {
    VIcon,
    VTemplateBlock
  },
  data: () =>({
    text: '',
    template_show: false,
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
  watch: {
    text(){
      this.template_show = false
    },
    template_show(value) {
      if(value) {
        document.getElementsByTagName('html')[0].style.overflow = "hidden";
      } else {
        document.getElementsByTagName('html')[0].removeAttribute("style")
      }
    }
  },
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
  methods: {
    selectText(text) {
      this.text = text
      this.template_show = false
    }
  }
}
</script>

<style scoped>
.label {
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0);
  font-family: Roboto;
  font-size: 0.75rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
  margin-bottom: 5px;
  width: 95%;
}
.input-block {
  margin-bottom: 15px;
}
.icons_text-block {
  display: flex;
  position: absolute;
  margin-top: 510px;
  margin-left: 255px;
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
  margin-left: 22px;
}
.icon {
  cursor: pointer;
  height: 36px;
  font-family: var(--font-awesome-5-pro-light);
  font-size: 33px;
  margin: 0px 10px;
  text-align: center;
  position: relative;
  bottom: 0px;
}
.close-block {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
}
.templates-block {
  position: absolute;
  z-index: 99;
  left: 66%;
  max-width: 450px;
  min-width: 400px;
  overflow: auto;
  max-height: 500px;
  padding-right: 25px;
  padding-left: 10px;
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
.input {
  color: red;
}
textarea {
  width: 100%;
  outline: none;
  padding: 9px 15px;
  border-radius: 4px;
  background-color: var(--white);
  font-family: Roboto;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  resize : none;
  height: 95px;
}
textarea::placeholder {
  padding-top: 5px;
  font-size: 9px;
  color: var(--blue-grey);
  position: relative;
  bottom: 2px;
}
</style>