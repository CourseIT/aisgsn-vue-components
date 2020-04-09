<template>
  <div>
    <div class="card__search">
      <v-input v-model="input_value" :disabled="disabled" :icon_block="true" :hint="hint" :placeholder="placeholder" :label="label" ref="input">
        <template #icon>
          <v-icon icon="" font_size="21px" :action="showBlock" :hover_shadow="true" :hover_color="true" :class="{'icon__active': search_block_show}"/>
        </template>
      </v-input>
      <div v-if="search_block_show" class="search__block" :style="{'width': blockWidth}">
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
  }),
  mounted() {
    if(this.value) {
      this.input_value = this.value
    }
  },
  watch: {
    input_value(value) {
      this.$emit('input', value)
    },
    value(value) {
      this.input_value = value
    }
  },
  computed: {
    blockWidth() {
      return this.$refs.input.input_width
    }
  },
  methods: {
    showBlock() {
      this.search_block_show = !this.search_block_show
    }
  }
}
</script>

<style scoped>
  .search__block {
    border-radius: 4px;
    box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
    background-color: var(--pale-grey);
    padding: 10px;
    padding-left: 0px;
    position: absolute;
    width: inherit;
    z-index: 103;
  }
  .cards {
    max-height: 640px;
    overflow-y: scroll;
    padding-right: 25px;
    padding-left: 10px;
  }
  .cards::-webkit-scrollbar {
    width: 11px;
    height: 8px;
    background-color: rgba(0, 0, 0, 0);
  }
  .cards::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: var(--pale-lilac);
  }
</style>