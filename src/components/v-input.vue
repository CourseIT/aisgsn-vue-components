<template>
  <div :style="{'width': width}" :class="{'input-block': style_type != 'style2', 'input-block-style2': style_type == 'style2'}">
    <div class="df" :style="{'width': hint_width}">
      <div class="df test" ref="label">
        <span v-if="obligatory" class="obligatory" style="margin-bottom: -4px;">*</span>
        <p v-if="label" class="label">{{label}}</p>
        <div class="icons__block df">
          <slot name="icons">
          </slot>
        </div>
      </div>
      <v-icon v-if="hint" icon="" class="hint_icon" width="15" height="15" />
      <div v-if="hint" class="icon__prompt-block" :style="{'width': hint_width}">
        <div class="icon__prompt" :style="{'min-width': label_width}">
          <span>{{hint}}</span>
        </div>
      </div>
    </div>
    <div  v-if="visible" :class="{'read-only': readOnly == true}">
      <div v-if="type == 'textarea'">
        <div class="df">
          <div class="w100">
            <textarea class="textarea" :class="{'error-status' : error, 'input-background-none': !background, 'pl35': text_align == 'center', 'hover_login': hover_login, 'placeholder-center': text_align == 'center' }" :placeholder="placeholder" :style="{'text-align': text_align}" v-model="input_value" cols="10" :rows="rows" ref="input"></textarea>
            <div v-if="select_block_show" class="select-block select-block_textarea">
              <ul>
                <li @click="input_value = `${input_value} ${item}`" v-for="(item, index) in list" :key="index">{{item}}</li>
              </ul>
            </div>
          </div>
          <div v-if="icon_block" class="input_icon-block">
            <slot name="icon">
            </slot>
          </div>
        </div>
      </div>
      <div v-else-if="type == 'number'">
        <div class="df">
          <input v-model="number_value" :placeholder="placeholder" :style="{'text-align': text_align}" class="input" :class="{'error-status' : error, 'input-background-none': !background, 'pl35': text_align == 'center', 'hover_login': hover_login, 'placeholder-center': text_align == 'center' }" type="number" ref="input">
          <div v-if="icon_block" class="input_icon-block">
            <slot name="icon">
            </slot>
          </div>
        </div>
      </div>
      <div v-else-if="type == 'password'">
        <div class="df">
          <input v-model="number_value" :placeholder="placeholder" :style="{'text-align': text_align}" class="input" :class="{'error-status' : error, 'input-background-none': !background, 'pl35': text_align == 'center', 'hover_login': hover_login, 'placeholder-center': text_align == 'center' }" :type="password_show ? 'text' : 'password'" ref="input">
          <div class="password_icon">
            <v-icon :icon="password_show ? '' : ''" width="15" height="15" :action="passwordShow" />
          </div>
          <div v-if="icon_block" class="input_icon-block">
            <slot name="icon">
            </slot>
          </div>
        </div>
      </div>
      <div v-else class="df">
        <input v-model="input_value" @focus="focusInput()" :onkeydown="disabledText()" :placeholder="placeholder" :style="{'text-align': text_align}" class="input" :class="{'error-status' : error, 'input-background-none': !background, 'pl35': text_align == 'center', 'hover_login': hover_login, 'placeholder-center': text_align == 'center' }" type="text" ref="input">
        <div v-if="select_block_show" class="select-block">
          <ul>
            <li @click="input_value = `${input_value} ${item}`" v-for="(item, index) in list" :key="index">{{item}}</li>
          </ul>
        </div>
        <div v-if="icon_block" class="input_icon-block">
          <slot name="icon">
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const VIcon = () => import('./v-icon')

export default {
  props:{
    style_type: {},
    placeholder:{},
    value: {},
    label: {},
    type: {},
    list: {},
    width: {},
    test: {},
    error: {},
    rows: {
      default: 4
    },
    disabled_text: {
      default: false
    },
    hint: {
      default: false
    },
    icon_block: {
      default: false
    },
    max_length: {
      default: false
    },
    text_align: {},
    obligatory: {
      default: false
    },
    read_only: {},
    visible: {
      default: true
    },
    background: {
      default: true
    },
    hover_login: {
      default: false
    },
    on_focus: {
      default: function() {
        return () => ({})
      }
    },
    focus: {}
  },
  components: {
    VIcon
  },
  data: () => ({
    select_block_show: false,
    input_value: '',
    number_value: '',
    hint_width: '',
    input_width: '',
    label_width: '',
    timer: '',
    textarea_hint_width: '',
    password_show: false
  }),
  mounted() {
    const l_w = this.$refs.label.clientWidth
    const i_w = this.$refs.input.clientWidth

    this.input_width = `${i_w}px`
    this.hint_width = `${i_w}px`

    if(l_w == i_w) {
      this.label_width = `${l_w}px`
    }
    if(l_w > i_w) {
      this.label_width = `${i_w}px`
    }
    if((i_w - l_w) > 40) {
      this.label_width = `${l_w + 40}px`
    }
    
    this.timer = setInterval(() =>{
      this.time = this.setWidth()
    }, 300)
    if(this.value) {
      if(this.type == 'number') {
        this.number_value = this.value
      } else {
        this.input_value = this.value
      }
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
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
    },
  },
  watch: {
    number_value(value) {
      this.$emit('input', value)
      
      if(this.max_length) {
        var number1 = String(value).substr(0,this.max_length)
        this.input_value = Number(number1)
      }
       if(value != this.$props.value)
        this.select_block_show = true

      setTimeout(() => {
        if(value === this.input_value) {
          this.select_block_show = false
        }
      }, 2000)
    },
    input_value(value) {
      if(this.disabled_text && value) {
        if(value != this.value) {
          this.input_value = this.value
          //this.$emit('input', value)
        }
      } else {
        this.$emit('input', value)
        if(value != this.$props.value)
        this.select_block_show = true

      }

      setTimeout(() => {
        if(value === this.input_value) {
          this.select_block_show = false
        }
      }, 2000)
    },
    value(value) {
      if(this.type == 'number') {
        this.number_value = Number(value)
      } else {
        this.input_value = String(value)
      }
    },
    focus(val) {
      if(val) {
        this.$refs.input.focus()
      }
    }
  },
  methods: {
    passwordShow() {
      this.password_show = !this.password_show
    },
    setWidth() {
      this.input_width = `${this.$refs.input.clientWidth}px`
      this.hint_width = `${this.$refs.input.clientWidth}px`
    },
    disabledText() {
      // if(this.disabled_text) {
      //   this.input_value = this.value
      //   window.console.log('asdasdasdasdasdasd')
      // }
    },
    focusInput(){
      if(this.focus){
        return ()=>{}
      } else {
        this.on_focus()
      }
    }
  }
}
</script>
<style scoped>
.input_icon-block {
  min-width: 56px;
  max-width: 56px;
  display: flex;
  justify-content: center;
  height: 36px;
  align-items: center;
}
.hint_icon {
  margin-left: 10px;
  font-size: 15px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.1;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark2);
}
.hint_icon:hover + .icon__prompt-block {
  display: flex;
}
.hint_icon:hover::before{
  content: '';
  position: absolute;
  z-index: 111;
  margin-top: -12px;
  margin-left: 1px;
  border: 6px solid transparent;
  border-bottom: 6px solid var(--dark);
  transform: rotate(180deg);
}
.icon__prompt-block {
  display: none;
  width: 400px;
  position: absolute;
  margin-left: 0px;
  margin-top: -18px;
}
.icon__prompt {
  bottom: -6px;
  position: absolute;
  min-width: 100px;
  z-index: 110;
  padding: 5px 15px;
  min-height: 28px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
  background-color: var(--dark);
  font-family: sans-serif;
  font-size: 12px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: left;
  color: var(--white);
}
.w74{
  width: 74px;
}
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
}
.icons__block div {
  margin-left: 10px;
};
.icons__block .icon {
  width: 15px;
  height: 15px;
}
.input-block {
  width: 100%;
  margin-bottom: -15px;
}
.input {
  font-family: Roboto;
  height: 36px;
  font-weight: 300;
  outline: none;
  width: 100%;
  background-color: var(--white) !important;
  padding: 3px 10px;
  border-radius: 4px;
  border: 0px solid var(--white);
  margin-bottom: 30px;
  padding-right: 35px;
  height: 36px;
  width: 100%;
}
.input::-webkit-outer-spin-button,
.input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  -moz-appearance:textfield;
}
.input-background-none {
  background-color: transparent !important;
  border-radius: 0px !important;
  border-bottom: 1px solid #4e4e4e;
}
.textarea {
  width: 100%;
  outline: none;
  padding: 9px 10px;
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
  margin-bottom: 20px;
  border: none;
}
.textarea::placeholder {
  padding-top: 5px;
  font-size: 9px;
  color: var(--blue-grey);
}
.input::placeholder {
  font-family: Roboto;
  font-size: 15px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  color: var(--blue-grey);
}
.select-block {
  position: absolute;
  z-index: 99;
  margin-top: 42px;
}
.select-block_textarea {
  margin-top: -20px;
}
.select-block:hover {
  display: block;
}
.select-block ul {
  padding: 0px;
  list-style-type: none;
  z-index: 99;
  border-radius: 4px;
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
  background-color: var(--white);
}
.select-block ul li {
  font-family: Roboto;
  font-size: 0.9375rem;
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

.password_icon {
  height: 36px;
  width: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  right: 0px;
  margin-left: -36px;
}
.pl35 {
  padding-left: 35px;
}
.hover_login {
  transition: all 0.2s ease;
}
.hover_login:hover {
  border-bottom: 1px solid #ff62004b;
}
.hover_login:focus {
  border-bottom: 1px solid #ff6100;
}
.placeholder-center::placeholder {
  text-align: center;
}
</style>