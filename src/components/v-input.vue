<template>
  <div class="input-block" :style="{'width': width}">
    <div class="df">
      <span v-if="obligatory" class="obligatory">*</span>
      <p v-if="label" class="label">{{label}}</p>
      <v-icon :action="label_icon_action" v-if="label_icon_action" icon="" class="label_icon" hover_color="true" />
    </div>
    <div  v-if="visible" :class="{'read-only': readOnly == true}">
      <div v-if="type == 'textarea'">
        <div class="df">
          <div class="w100">
            <textarea class="textarea" :placeholder="placeholder" :style="{'text-align': text_align}" v-model="input_value" cols="10" rows="4" ref="input"></textarea>
            <div v-if="select_block_show" class="select-block select-block_textarea">
              <ul>
                <li @click="input_value = `${input_value} ${item}`" v-for="(item, index) in list" :key="index">{{item}}</li>
              </ul>
            </div>
          </div>
          <v-icon v-if="hint" icon="" class="hint_icon" />
          <div v-if="hint" class="icon__prompt-block" :style="{'width': hint_width}">
            <div class="arrow"></div>
            <div class="icon__prompt">
              <span>{{hint}}</span>
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
          <input v-model="number_value" :placeholder="placeholder" :style="{'text-align': text_align}" class="input" type="number" ref="input">
          <v-icon v-if="hint" icon="" class="hint_icon" />
          <div v-if="hint" class="icon__prompt-block" :style="{'width': hint_width}">
            <div class="arrow"></div>
            <div class="icon__prompt">
              <span>{{hint}}</span>
            </div>
          </div>
          <div v-if="icon_block" class="input_icon-block">
            <slot name="icon">
            </slot>
          </div>
        </div>
      </div>
      <div v-else class="df">
        <input v-model="input_value" :placeholder="placeholder" :style="{'text-align': text_align}" class="input" type="text" ref="input">
        <v-icon v-if="hint" icon="" class="hint_icon" />
        <div v-if="hint" class="icon__prompt-block" :style="{'width': hint_width}">
          <div class="arrow"></div>
          <div class="icon__prompt">
            <span>{{hint}}</span>
          </div>
        </div>
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
    label_icon_action: {},
    placeholder:{},
    value: {},
    label: {},
    type: {},
    list: {},
    width: {},
    hint: {},
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
    }
  },
  components: {
    VIcon
  },
  data: () => ({
    select_block_show: false,
    input_value: '',
    number_value: '',
    hint_width: '',
    textarea_hint_width: ''
  }),
  mounted() {
    setTimeout(() =>{
      this.hint_width = `${this.$refs.input.clientWidth}px`
    }, 0)
    if(this.value) {
      if(this.type == 'number') {
        this.number_value = this.value
      } else {
        this.input_value = this.value
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
      this.$emit('input', value)
      if(value != this.$props.value)
        this.select_block_show = true

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
  width: 36px;
  height: 36px;
  position: relative;
  right: 0px;
  top: 1px;
  margin-left: -36px;
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
.icon__prompt-block {
  display: none;
  width: 400px;
  position: absolute;
  margin-left: 0px;
  margin-top: -15px;
}
.icon__prompt {
  bottom: -6px;
  position: absolute;
  width: 100%;
  z-index: 9;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
  background-color: var(--white);
  font-family: Roboto;
  font-size: 11px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
}
.arrow {
  position: absolute;
  top: 6px;
  height: 10px;
  right: 10px;
  display: inline-block;
  color: var(--white);
  z-index: 99;
  border: 8px solid transparent;	
  border-bottom: 8px solid var(--white);
  transform: rotate(180deg);
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
.label_icon {
  font-size: 15px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.53;
  letter-spacing: normal;
  text-align: left;
  color: #38393b;
  width: 13px;
  height: 15px;
  position: relative;
  bottom: 10px;
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
  border: 1px solid var(--white);
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
  height: 95px;
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
  font-size: 10px;
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
</style>