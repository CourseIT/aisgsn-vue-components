<template>
  <div v-if="visible" :class="[{'read-only': readOnly == true, 'mb30': chips, 'categories-style2': style_type == 'style2', 'categories': style_type != 'style2'}, dynamic_class]">
    <div class="df">
      <div class="select w140" :class="{'pos-r': menu_show, 'index100': menu_show}" :style="{'width': width}">
        <button class="main-btn" :style="{'width': width}">
          <div class="hover-btn df w100">
            <div @click="menu_show = !menu_show" class="hover-btn">
              <slot name="main-icon">
                <v-icon :icon="icon" width="16" class="select__icon-dots"/>
              </slot>
            </div>
            <div @click="menu_show = !menu_show" class="w100 df aic jcc pr16">
              {{defailt_text}}
            </div>
          </div>
        </button>
        <div v-if="menu_show" class="select__menu w132" :style="{'width': width}">
          <div @click="pickOption(item), menu_show = false"  v-for="(item, index) in list" :key="index">
            <v-categories-option :style_type="style_type" :option="item" :list="search_list" />
          </div>
        </div>
      </div>
      <div class="categories-search">
        <input type="text" v-model="search" placeholder="Поиск">
        <div v-if="search != ''" class="icon-btn" @click="search = ''">
          <v-icon class="icon" width="15" icon="" />
        </div>
      </div>
    </div>
    <div v-if="chips" class="chips">
      <div class="chip" @click="pickOption(item)" v-for="(item, index) in search_list" :key="index">
        <v-icon class="icon" width="15" icon="" />
        {{item}}
      </div>
    </div>
    <div v-if="menu_show" @click="menu_show = false" class="colse-bg" :class="{'dark_bg': dark_bg}"></div>
  </div>
</template>

<script>
const VIcon = () => import('./v-icon')
const VCategoriesOption = () => import('./v-categories-option')

export default {
  props: {
    chips: {
      default: 'true'
    },
    style_type: {},
    option: {},
    list: {
      default: () => {
        return [
          'Все'
        ]
      }
    },
    defailt_text: {
      default: 'Категории'
    },
    icon: {
      default: ''
    },
    dark_bg: {
      default: false
    },
    width: {
      default: '140px'
    },
    read_only: {},
    visible: {
      default: true
    },
    submit: {
      default: function() {
        return () => ({})
      }
    },
    dynamic_class: {}
  },
  components: {
    VIcon,
    VCategoriesOption
  },
  data: () => ({
    menu_show: false,
    search: '',
    search_list: []
  }),
  watch:{
    search(search) {
      this.search = search.replace(/"([^"]+)"/g, '«$1»')
      this.$emit('input', {
        search: search,
        search_list: this.search_list
      })
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
    pickOption(option) {
      if(this.search_list.includes(option)) {
        const new_list = this.search_list.filter(item => item != option )
        this.search_list = new_list
        this.$emit('input', {
          search: this.search,
          search_list: this.search_list
        })
      } else {
        this.search_list.push(option)
        this.$emit('input', {
          search: this.search,
          search_list: this.search_list
        })
      }
    }
  }
}
</script>

<style scoped>
.pr16{
  padding-right: 16px;
}
.categories-search {
  display: flex;
  transition: all 0.3s ease;
  width: 100%;
}
.categories-search input {
  font-family: Roboto;
  font-size: 0.9375rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
  height: 27px;
  outline: none;
  height: 36px;
  border-radius: 0px 4px 4px 0px;
  background-color: var(--white);
  padding: 0px 10px;
  padding-right: 35px;
  width: 340px;
}
.icon-btn {
  width: 15px;
  height: 36px;
  display: flex;
  position: relative;
  margin-left: -25px;
  align-items: center;
}
.icon-btn:hover .icon {
  color: var(--bright-orange);
}
.icon {
  font-family: var(--font-awesome-5-pro-light);
  font-size: 15px;
  width: 15px;
  height: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: normal;
  text-align: left;
  color: #000;
}

.pos-r {
  position: relative;
}
.w36 {
  width: 47px;
  height: 36px;
}
.w132 {
  width: 140px;
}
.pl16 {
  padding-left: 16px;
}
.jcc {
  justify-content: center;
}
.select_shadow {
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.22);
}
.index100{
  z-index: 109 !important;
}
.select {
  z-index: 7;
}
.no-icon {
  width: 36px;
  height: 36px;
}
.categories .main-btn {
  background-color: var(--pale-lilac);
}
.main-btn {
  width: 100%;
  height: 36px;
  padding: 0px 10px;
  display: flex;
  margin-bottom: 6px;
  text-align: center;
  align-items: center;
  font-family: Roboto;
  outline: none;
  border-radius: 4px 0px 0px 4px;
  font-size: 0.6875rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: normal;
  color: var(--dark);
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease-in-out;
}
.main-btn:hover {
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.22);
}
.main-btn:focus {
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.22);
}
.main-btn:focus .select__icon-dots {
  color: var(--bright-orange);
}
.hover-btn {
  height: 36px;
  z-index: 5;
}
.hover-btn:hover .select__icon-dots {
  color: var(--bright-orange);
}
.select__icon-colse {
  font-family: var(--font-awesome-5-pro-light);
  font-size: 15px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
  height: 34px !important;
  z-index: 5;
}
.select__icon-colse:hover {
  color: var(--bright-orange);
}
.select__icon-dots {
  font-family: var(--font-awesome-5-pro-light);
  margin-top: 0px;
  font-size: 28px;
  text-align: center;
}
.select__menu {
  z-index: 9;
  position: absolute;
}
.select-btn {
  width: 100%;
  height: 36px;
  background-color: var(--white);
  display: flex;
  margin-bottom: 6px;
  text-align: center;
  align-items: center;
  font-family: Roboto;
  outline: none;
  border-radius: 4px;
  font-size: 0.6875rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: normal;
  color: var(--dark);
  cursor: pointer;
  z-index: 9;
}
.select-btn:hover .select__icon-colse{
  background: var(--pale-lilac);
}
.select-btn .select__icon-colse {
  padding-top: 0;
}
.select-btn:hover {
  background: var(--pale-lilac);
  color: var(--bright-orange);
}
.colse-bg {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
}
.dark_bg {
  z-index: 101;
  background: rgba(0, 0, 0, 0.4);
}
.chips {
  display: flex;
  position: absolute;
}
.chip {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  font-family: Roboto;
  font-size: 0.58rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: right;
  color: var(--dark);
  border-radius: 15px;
  background-color: var(--pale-lilac);
  margin-right: 10px;
  margin-bottom: 10px;
}
.chip .icon {
  margin-right: 7px;
}
.chip .icon:hover {
  color: var(--bright-orange);
}
</style>