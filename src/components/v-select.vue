<template>
  <div>
    <div class="select w132" :style="{'width': width}">
      <button class="main-btn">
        <button v-if="value" @click="$emit('input', '')">
          <v-icon icon="" width="16" class="select__icon-colse"/>
        </button>
        <div class="hover-btn df w100">
          <div @click="menu_show = true" class="w100 df aic jcc"  :class="{'pl16': !value}">
            {{value || defailt_value}}
          </div>
          <div @click="menu_show = true" class="hover-btn">
            <v-icon icon="" width="16" class="select__icon-dots"/>
          </div>
        </div>
      </button>
      <div v-if="menu_show" class="select__menu w132" :style="{'width': width}">
        <div @click="menu_show = false">
          <slot>
            <button @click="value = item, $emit('input', item)" v-for="(item, index) in list" :key="index" class="select-btn select_shadow">
              <div class="df aic jcsb w100 hover-btn jcc">
                {{item}}
              </div>
            </button>
          </slot>
        </div>
      </div>
    </div>
    <div v-if="menu_show" @click="menu_show = false" class="colse-bg"></div>
  </div>
  
</template>

<script>
const VIcon = () => import('@/components/v-icon')

export default {
  props: {
    value: {
      type: String,
      default: 'Кнопка'
    },
    list: {
      type: Array
    },
    defailt_value: {
      default: 'Кнопка'
    },
    width: {},
    text_center: {}
  },
  components: {
    VIcon
  },
  data: () => ({
    menu_show: false
  })
}
</script>

<style scoped>
button {
  outline: none;
}
.w100 {
  width: 100%;
}
.w36 {
  width: 47px;
  height: 36px;
}
.w132 {
  width: 132px;
}
.pl16 {
  padding-left: 16px;
}
.aic {
  align-items: center;
}
.jcsb {
  justify-content: space-between;
}
.jcc {
  justify-content: center;
}
.select_shadow {
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.22);
}
.select {
  z-index: 9;
}
.no-icon {
  width: 36px;
  height: 36px;
}
.main-btn {
  width: 100%;
  height: 36px;
  padding: 0px 10px;
  background-color: var(--pale-lilac);
  display: flex;
  margin-bottom: 6px;
  text-align: center;
  align-items: center;
  font-family: Roboto;
  outline: none;
  border-radius: 4px;
  font-size: 11px;
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
  background-color: #fff;
  display: flex;
  margin-bottom: 6px;
  text-align: center;
  align-items: center;
  font-family: Roboto;
  outline: none;
  border-radius: 4px;
  font-size: 11px;
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
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
}
</style>