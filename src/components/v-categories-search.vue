<template>
  <div v-if="visible" :class="{'read-only': readOnly == true}" class="categories">
    <div class="df">
      <div class="select w140" :class="{'pos-r': menu_show, 'index100': menu_show}" :style="{'width': width}">
        <slot>
        select
        </slot>
      </div>
      <div class="categories-search">
        <input type="text" v-model="search" placeholder="Поиск">
        <div v-if="search != ''" class="icon-btn" @click="search = ''">
          <v-icon class="icon" width="15" icon="" />
        </div>
      </div>
    </div>
    <div v-if="menu_show" @click="menu_show = false" class="colse-bg" :class="{'dark_bg': dark_bg}"></div>
  </div>
</template>

<script>
const VIcon = () => import('./v-icon')

export default {
  props: {
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
    }
  },
  components: {
    VIcon,
  },
  data: () => ({
    menu_show: false,
    search: '',
  }),
  watch:{
    search(search) {
      this.$emit('input', search)
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
    },
    title() {
      return this.option == 'Все' ? 'Категории' : this.option
    }
  }
}
</script>

<style scoped>
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
  z-index: 8;
}
.no-icon {
  width: 36px;
  height: 36px;
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
</style>