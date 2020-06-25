<template>
  <div v-if="visible" ref="radio" class="checkup-card-list__radio" :class="{'read-only': readOnly == true, 'green-radio': radio_color == 'green'}">
    <div class="df">
      <div v-if="label" class="df" ref="label">
        <p class="label">{{label}}</p>
      </div>
      <v-icon v-if="hint" icon="" class="hint_icon" width="15" height="15" />
      <div v-if="hint" class="icon__prompt-block" :style="{'width': hint_width}">
        <div class="icon__prompt" :style="{'min-width': label_width}">
          <span>{{hint}}</span>
        </div>
      </div>
    </div>
    <v-radio-group row v-model="radios">
      <slot>
        <v-radio v-for="label in labels" :key="label" class="radio" :value="label" :label="label"></v-radio>
      </slot>
    </v-radio-group>
  </div>
</template>

<script>
const VIcon = () => import('./v-icon')
export default {
  props: {
    label: {},
    hint: {},
    labels: {},
    action: {
      default: function() {
        return () => ({})
      }
    },
    radio_color: {},
    value: {},
    read_only: {},
    visible: {
      default: true
    }
  },
  components: {
    VIcon
  },
  data: () => ({
    radios: '',
    label_width: '',
    hint_width: ''
  }),
  mounted() {
    if(this.hint) {
      setTimeout(() =>{
        const l_w = this.$refs.label.clientWidth
        const r_w = this.$refs.radio.clientWidth
        this.label_width = `${l_w + 40}px`
        this.hint_width = `${r_w}px`
      }, 100)
    }
    if(this.value) {
      this.radios = this.value
    }
  },
  watch: {
    value(val) {
      this.radios = val
    },
    radios(radios) {
      this.$emit('input', radios)
      setTimeout(()=>{
        this.action()
      }, 0)
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
}
</script>

<style>
.checkup-card-list__radio .v-messages {
  display: none !important;
}
.v-input__control {
  height: auto;
}
.v-input--radio-group--row .v-input--radio-group__input {
  flex-wrap: unset !important;
}
.checkup-card-list__radio .v-radio:last-child {
  margin-right: 0;
}
.checkup-card-list__radio .v-input {
  margin-top: 0;
}
.checkup-card-list__radio .radio {
  margin-bottom: 20px;
}
.checkup-card-list__radio .v-radio {
  align-items: flex-start !important;
}
.checkup-card-list__radio label {
  margin-left: 0px;
  padding-top: 7px;
  margin-right: 2px;
  font-family: Roboto;
  font-size: 0.6875rem;
  max-width: 154px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
}
.checkup-card-list__radio .mdi-radiobox-blank::before {
  content: "";
  background: var(--white);
  width: 22px;
  border-radius: 5px;
  height: 22px;
  margin-top: 5px;
}
.checkup-card-list__radio .v-input--selection-controls__ripple {
  background-color: rgba(0, 0, 0, 0);
  background: rgba(0, 0, 0, 0);
  opacity: 0;
  cursor: pointer;
  border-radius: 0px;
}
.checkup-card-list__radio .mdi-radiobox-marked::before {
  content: "\25CF";
  font-size: 20px;
  margin-top: 5px;
  padding-left: 5px !important;
  color: var(--bright-orange);
  width: 22px;
  height: 22px !important;
  background: #000;
  border-radius: 5px;
}
.green-radio .mdi-radiobox-marked::before {
  color: var(--weird-green) !important;
}

.checkup-card-list__radio .hint_icon {
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
.checkup-card-list__radio .hint_icon:hover + .icon__prompt-block {
  display: flex;
}
.checkup-card-list__radio .hint_icon:hover::before{
  content: '';
  position: absolute;
  z-index: 111;
  margin-top: -12px;
  margin-left: 1px;
  border: 6px solid transparent;
  border-bottom: 6px solid var(--dark);
  transform: rotate(180deg);
}
.checkup-card-list__radio .icon__prompt-block {
  display: none;
  width: 400px;
  position: absolute;
  margin-left: 0px;
  margin-top: -18px;
}
.checkup-card-list__radio .icon__prompt {
  bottom: -6px;
  position: absolute;
  z-index: 110;
  padding: 5px 15px;
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
  min-height: 28px;
  display: flex;
  align-items: center;
  color: var(--white);
}
.checkup-card-list__radio .label {
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
</style>