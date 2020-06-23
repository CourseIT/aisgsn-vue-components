<template>
  <div class="input-block" :style="{'width': width}" ref="labelHint">
    <div class="df" :style="{'width': hint_width}">
      <div class="df test" ref="label">
        <span v-if="obligatory" class="obligatory">*</span>
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
      <slot>
      </slot>
    </div>
  </div>
</template>
<script>
const VIcon = () => import('./v-icon')

export default {
  props:{
    label: {},
    width: {},
    disabled: {
      default: false
    },
    hint: {
      default: false
    },
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
    hint_width: '',
    label_width: '',
    timer: '',
  }),
  mounted() {
    
    this.setWidth()

    this.timer = setInterval(()=> {
      this.setWidth()
    },300)
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
  methods: {
    setWidth() {
      const l_w = this.$refs.label.clientWidth
      const lh_w = this.$refs.labelHint.clientWidth
      this.label_width = `${l_w + 40}px`
      this.hint_width = `${lh_w}px`
      window.console.log(l_w, lh_w)
    }
  }
}
</script>
<style scoped>
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
  margin-bottom: 2px;
}
.icons__block div {
  margin-left: 10px;
};
.icons__block .icon {
  width: 15px;
  height: 15px;
}
</style>