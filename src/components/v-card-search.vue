<template>
  <div :class="[{'read-only': readOnly == true}, dynamic_class]">
    <div :class="{'card__search': style_type != 'style2', 'card__search-style2': style_type == 'style2'}">
      <div class="df">
        <v-input class="input__caret-none" v-model="input_value" :focus="focus" @click="focus = true" :on_focus="showBlock" :disabled_text="disabled" :icon_block="true" :hint="hint" :obligatory="obligatory" :error="error" :placeholder="placeholder" :label="label" ref="input">
          <template #icon>
            <v-icon icon="" font_size="21px" :action="showBlock" :hover_shadow="true" :hover_color="true" :class="{'icon__active': search_block_show}"/>
          </template>
        </v-input>
        <div v-if="input_value != ''" class="icon-btn" @click="resetInput">
          <v-icon class="icon__reset" width="15" :hover_color="true" icon="" />
        </div>
      </div>
      
      <div v-if="search_block_show" ref="searchBlock" class="search__block" :style="{'width': blockWidth}">
        <slot name="search">
          <v-search v-model="search" :hint="false" placeholder="Поиск" />
        </slot>
        <div class="cards">
          <slot>
          </slot>
        </div>
      </div>
    </div>
    <div v-if="search_block_show" @click="showBlock" class="colse-bg"></div>
  </div>
</template>

<script>
const VInput = () => import('./v-input')
const VIcon = () => import('./v-icon')
const VSearch = () => import('./v-search')

export default {
  props: {
    read_only: {},
    style_type: {},
    value: {},
    disabled: {
      default: false
    },
    hint: {
      default: false
    },
    placeholder: {
      default: ''
    },
    label: {
      default: ''
    },
    action_show: {
      default: function() {
        return () => ({})
      }
    },
    action_reset: {
      default: function() {
        return () => ({})
      }
    },
    error: {},
    obligatory: {
      default: false
    },
    inc: {},
    dynamic_class: {}
  },
  components: {
    VInput,
    VIcon,
    VSearch,
  },
  data: () => ({
    search_block_show: false,
    input_value: '',
    search: '',
    focus: false
  }),
  mounted() {
    if(this.value) {
      this.input_value = this.value
    }
  },
  watch: {
    inc() {
      this.search_block_show = false
    },
    input_value(value) {
      this.$emit('input', value)
    },
    value(value,preVal) {
      this.prevVal = preVal
      this.search_block_show = false
      this.input_value = value
    },
  },
  computed: {
    blockWidth() {
      return this.$refs.input.input_width
    },
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
    showBlock() {
      if(this.search_block_show) {
        this.search_block_show = false
        this.focus = false
        
      } else {
        setTimeout(()=>{
          let searchEl = this.$refs.searchBlock.getElementsByClassName('search')[0]
          let inputEl = searchEl.getElementsByTagName('input')[0]
          window.console.log(inputEl)
          inputEl.focus()
        },0)
        this.search_block_show = true
        //this.focus = true
      }
      this.action_show()
    },
    resetInput() {
      this.$emit('input', '')
      setTimeout(()=>{
        this.action_reset()
      },0)
    }
  }
}
</script>

<style scoped>
  .card__search .search__block {
    background-color: var(--pale-grey);
  }
  .search__block {
    border-radius: 4px;
    box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
    padding: 10px;
    padding-left: 0px;
    position: absolute;
    width: inherit;
    z-index: 10;
    margin-top: -8px;
  }
  .icon-btn {
    width: 15px;
    height: 36px;
    position: relative;
    margin-left: -81px;
    margin-top: 20px;
  }
  .icon__reset {
    font-family: var(--font-awesome-5-pro-light);
    font-size: 15px;
    width: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: normal;
    text-align: left;
    color: #000;
  }
  .cards {
    max-height: 640px;
    overflow-y: scroll;
    padding-right: 25px;
    padding-left: 10px;
  }
  .card__search .cards::-webkit-scrollbar {
    width: 11px;
    height: 8px;
    background-color: rgba(0, 0, 0, 0);
  }
  .card__search .cards::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: var(--pale-lilac);
  }
  .colse-bg {
  position: fixed;
  z-index: 8;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  }
  .input__caret-none {
    caret-color: transparent !important;
  }
</style>