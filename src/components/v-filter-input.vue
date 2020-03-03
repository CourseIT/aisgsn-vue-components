<template>
  <div v-if="visible" :class="{'read-only': readOnly == true}" class="filter-input">
    <div v-if="filter_input_show">
      <div class="filter-btn-input">
        <form @submit="emitFilterInput">
          <input v-model="value" type="text" autofocus>
        </form>
        <v-icon v-if="value.length > 0" :action="emitFilterInput" class="icon-apply" width="15" icon="" />
        <v-icon v-else :action="clearFilter" class="icon-apply" width="15" icon="" />
      </div>
    </div>
    <div v-else class="df">
      <v-icon v-if="value.length > 0" :action="clearFilter" class="icon-colse" width="15" icon="" />
      <p @click="filter_input_show = true" :class="{'ml15': value.length == 0}">{{value || default_text}}</p>
      <v-icon :action="filterClick" class="icon-filter" width="15" icon="" />
    </div>
  </div>
</template>

<script>
const VIcon = () => import('./v-icon')

export default {
  components: { VIcon },
  props: {
    default_text: {
      default: 'Фильтр'
    },
    read_only: {},
    visible: {
      default: true
    }
  },
  data: () => ({
    value: '',
    filter_input_show: false
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
  methods: {
    emitFilterInput(e) {
      e.preventDefault();

      this.filter_input_show = false
      this.$emit('input', this.value)
    },
    clearFilter() {
      this.value = ''
      this.$emit('input', '')
      this.filter_input_show = false
    },
    filterClick() {
      if(this.value) {
        this.emitFilterInput()
      } else {
        this.filter_input_show = true
      }
    }
  }
}
</script>

<style scoped>
.filter-input {
  width: 263px;
  height: 36px;
  border-radius: 4px;
  background-color: var(--pale-lilac);
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-out;
}
.filter-input:hover {
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.22);
  cursor: pointer;
}
.filter-input p:hover {
  color: var(--bright-orange);
}
.filter-input p {
  font-family: Roboto;
  font-size: 0.6875rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: normal;
  text-align: center;
  color: var(--dark);
  margin-bottom: 0;
  width: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon-colse {
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
  z-index: 9;
}
.icon-colse:hover {
  color: var(--bright-orange);
}
.icon-filter:hover {
  color: var(--bright-orange);
}
.filter-btn-input {
  display: flex;
  width: 263px;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: var(--pale-lilac);
  padding: 4px;
  height: 36px;
}
.filter-btn-input input {
  outline: none;
  text-align: center;
  border-radius: 4px;
  background-color: var(--white);
  width: 100%;
  font-family: Roboto;
  font-size: 0.6875rem;
  height: 27px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  color: var(--dark);
  padding: 4px 23px;
  padding-top: 5px;
  padding-left: 20px;
}

.filter-btn-input .icon-apply{
  position: absolute;
  margin-top: -4px;
  margin-left: 230px;
  width: 15px;
  height: 15px;
  font-size: 15px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.53;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
}
.filter-btn-input .icon-apply:hover {
  color: var(--bright-orange);
}
</style>