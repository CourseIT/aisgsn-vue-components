<template>
  <div v-if="visible" :class="{'read-only': readOnly == true}" class="textarea-with-icon" :style="{'width': width}">
    <div class="input-block">
      <span v-if="obligatory" class="obligatory">*</span>
      <p class="label">{{label}}</p>
      <div class="df">
        <input :placeholder="placeholder" v-model="text" >
        <div v-if="select_block_show" class="select-block">
          <ul>
            <li @click="text = `${text} ${item}`" v-for="(item, index) in list" :key="index">{{item}}</li>
          </ul>
        </div>
        <div class="icon " :class="{'icon-template-shadow': template_show, 'el-after': template_show && el_after, 'el-before': template_show && el_before}" @click="template_show = !template_show">
          <slot name="icon">
            <v-icon :icon="icon" :hover_shadow="true" :hover_color="true" :color="template_show ? '#fb6229' : '#21262c' " class="icon-block"/>
          </slot>
        </div>
        <div v-if="template_show">
          <v-template-block class="template_block-fix" :style='{top: `${template_text_top}`}'/>
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
    label: {},
    template_text_top: {},
    el_after: {},
    el_before: {},
    width: {},
    obligatory: {
      default: false
    },
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
    select_block_show: false,
    list: [
      'Объект КС 1',
      'Объект КС 2',
      '...',
      '...'
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
  watch: {
    text(value){
      this.$emit('input', value)
      this.template_show = false
      this.select_block_show = true
      setTimeout(() => {
        if(value === this.text) {
          this.select_block_show = false
        }
      }, 1000)
    },
    template_show(value) {
      if(value) {
        document.getElementsByTagName('html')[0].style.overflow = "hidden";
      } else {
        document.getElementsByTagName('html')[0].removeAttribute("style")
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
.icon {
  cursor: pointer;
  height: 36px;
  font-family: var(--font-awesome-5-pro-light);
  font-size: 33px;
  float: right;
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
input {
  width: 100%;
  outline: none;
  padding: 9px 15px;
  border-radius: 4px;
  background-color: var(--white);
  font-family: Roboto;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  height: 36px;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  resize : none;
}
input::placeholder {
  font-size: 9px;
  position: relative;
  bottom: 2px;
  color: var(--blue-grey);
}

input:focus + .select-block {
  display: block;
}
.select-block {
  position: absolute;
  z-index: 99;
  margin-top: 42px;
  display: none;
}
.select-block:hover {
  display: block;
}
.select-block ul {
  padding: 0px;
  list-style-type: none;
  z-index: 99;
  width: 200px;
  border-radius: 4px;
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
  background-color: var(--white);
}
.select-block ul li {
  font-family: Roboto;
  font-size: 15px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
  padding: 6px 14px;
  cursor: pointer;
  transition: all 0.2s ease-out;
}
.select-block ul li:hover {
  color: var(--bright-orange);
}
</style>