<template>
  <div v-if="visible" :class="{'read-only': readOnly == true}" class="df fs">
    <div class="filter-input-switch">
      <div v-if="filter_input_show">
        <div class="filter-btn-input">
          <form @submit="emitFilterInput">
            <input v-model="value" type="text" autofocus>
          </form>
          <v-icon v-if="value.length > 0" :action="emitFilterInput" class="icon-apply" width="15" icon="" />
          <v-icon v-else :action="clearFilter" class="icon-apply" width="15" icon="" />
        </div>
        <div v-if="list_show" class="input-list">
          <p @click="pickValue(item)" v-for="(item, index) in (includes ? filterListIncludes : filterList)" :key="index">{{item}}</p>
        </div>
      </div>
      <div v-else class="df">
        <v-icon v-if="value.length > 0" :action="clearFilter" class="icon-colse" width="15" icon="" />
        <p @click="filter_input_show = true" :class="{'ml15': value.length == 0}">{{value || default_text}}</p>
        <v-icon :action="filterClick" class="icon-filter" width="15" icon="" />
      </div>
    </div>
    
    <div class="filter-switch">
      <p>Начинается с</p>
      <v-switch v-model="includes" inset/>
      <p>Содержит</p>
    </div>
  </div>
  
</template>

<script>
const VIcon = () => import('./v-icon')

export default {
  components: { VIcon },
  props: {
    default_text: {
      default: 'Материалы проверки'
    },
    list : {
      default: () => ({
        return: []
      })
    },
    read_only: {},
    visible: {
      default: true
    }
  },
  data: () => ({
    value: '',
    filter_input_show: false,
    list_show: false,
    includes: false
  }),
  watch: {
    value(value) {
      this.list_show = true
      if(value.length == 0) {
        this.list_show = false
      }
    }
  },
  computed: {
    filterList() {
      const new_list = this.list.filter(word => word.substr(0, this.value.length).toLowerCase() == this.value.toLowerCase());
      if(new_list.length == 0) {
        return ['Ничего не найдено']
      } else {
        return new_list;
      }
    },
    filterListIncludes() {
      const new_list = this.list.filter(word => word.toLowerCase().includes(this.value.toLowerCase()))
      if(new_list.length == 0) {
        return ['Ничего не найдено']
      } else {
        return new_list;
      }
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
    },
    pickValue(item) {
      this.value = item
      this.list_show = false
    }
  }
}
</script>

<style>
.fs {
  width: 438px;
  border-radius: 4px;
}
.filter-input-switch {
  width: 263px;
  height: 36px;
  border-radius: 4px 0px 0px 4px;
  background-color: var(--pale-lilac);
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-out;
}
.fs:hover {
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.22);
  cursor: pointer;
}
.filter-input-switch p:hover {
  color: var(--bright-orange);
}
.filter-input-switch p {
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
  display: flex;
  width: 210px;
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
.icon-filter {
  font-size: 18px;
}
.icon-filter:hover {
  color: var(--bright-orange);
}
.filter-btn-input {
  display: flex;
  width: 263px;
  border-radius: 4px 0px 0px 4px;
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
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  color: var(--dark);
  height: 27px;
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

.filter-input-switch .input-list {
  min-width: 255px;
  max-height: 122px;
  overflow: auto;
  margin: 0px 4px;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: var(--white);
  padding: 9px;
  position: absolute;
  z-index: 8;
}
.filter-input-switch .input-list::-webkit-scrollbar {
  width: 11px;
  height: 8px;
  background-color: rgba(0, 0, 0, 0);
}
.filter-input-switch .input-list::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: var(--pale-lilac);
}
.filter-input-switch .input-list p {
  font-family: Roboto;
  font-size: 0.6875rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: normal;
  text-align: left;
  width: 100%;
  color: var(--dark);
  margin-bottom: 5px;
}
.filter-input-switch .input-list p:hover {
  color: var(--bright-orange);
}
.filter-switch {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  border-radius: 0px 4px 4px 0px;
  padding: 4px 10px;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  background-color: var(--pale-lilac);
}
.filter-switch p {
  font-family: Roboto;
  font-size: 9px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: right;
  color: var(--dark);
  margin-bottom: 0;
}
.filter-switch .v-input__control {
  position: relative !important;
  bottom: 3px !important;
  width: 37px !important;
  right: 8px;
}
.filter-switch .v-input--switch__track {
  background-color: var(--white) !important;
  opacity: 1 !important;
  height: 15px !important;
  width: 37px !important;
  top: 11px !important;
  margin: 0px 2px !important;
}
.filter-switch .v-input--switch__thumb {
  width: 13px !important;
  background-color: var(--blue-grey) !important;
  opacity: 0.8;
  top: 12px !important;
  height: 13px !important;
}
.filter-switch .v-input--selection-controls{
  margin-top: 5px !important;
}
.filter-switch .v-input--selection-controls__ripple {
  display: none;
}
</style>