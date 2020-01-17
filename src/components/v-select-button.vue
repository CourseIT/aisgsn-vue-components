<template>
  <div class="w132 select-btns"  :style='{width: `${width}px`}'>
    <v-menu offset-y >
      <template v-slot:activator="{ on }">
        <v-btn
          v-on="on"
          block
          v-ripple="false"
          :style='{width: `${width}px`}'
          class="select"
        >
        <div>
          {{select}}
        </div>
          <v-icon class="icon" icon="" :style='{marginLeft: `${(width / 2) - 27}px`}'/>
        </v-btn>
      </template>
      <slot name="buttons">
        <v-btn @click="select = item" v-for="(item, index) in selects" :key="index" :style='{width: `${width}px !important`}' class="select select__btn">
          <div>
            {{item}}
          </div>
        </v-btn>
      </slot>
    </v-menu>
  </div>
</template>

<script>
const VIcon = () => import('./v-icon')

export default {
  props: ['width'],
  components: {
    VIcon
  },
  data: () => ({
    select: 'Выбор',
    selects: ['Выбор', 'Выбор', 'Выбор', 'Выбор']
  })
}
</script>

<style scoped>
.w132 {
  width: 132px;
  margin-bottom: 3px;
}
.select-btns .icon {
  font-family: var(--font-awesome-5-pro-light);
  margin-top: 0px;
  font-size: 28px;
  text-align: center;
  float: right;
  transition: all 0.2s ease-out;
  position: absolute;
  margin-left: 191px;
}
.select {
  width: 438.5px !important;
  height: 36px !important;
  box-shadow: none;
  display: flex;
  font-family: Roboto;
  padding: 0px;
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: normal;
  text-align: center;
  text-transform: none;
  margin-bottom: 7px;
  justify-content: space-around;
  background: var(--pale-lilac) !important;
}
.v-btn:not(.v-btn--round).v-size--default {
  padding-left: 12px !important;
  padding-right: 12px !important;
}
.v-btn__content {
  justify-content: inherit !important;
}
.v-btn:before {
  background: none;
}
.v-menu__content {
  padding: 0px 10px !important;
  padding-bottom: 10px !important;
  margin-left: -10px;
  margin-top: 0px;
  box-shadow: none;
}
.select:hover {
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.22) !important;
}
.select:focus {
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.22) !important;
}
.select:hover ::before{
  background: var(--pale-lilac) !important;
}
.select:active ::before{
  background: var(--pale-lilac) !important;
}
.select:hover .icon {
  color: #ff6100;
}
.select:focus .icon {
  color: #ff6100;
}
.select__btn {
  text-transform: none;  
  width: 100%;
  font-family: Roboto;
  font-size: 11px;
  padding-right: 50px !important;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: normal;
  background-color: #fff !important;
  text-align: center;
  border-radius: 4px;
  margin: 0px !important;
  margin-top: 7px !important;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.22) !important;
}
.select__btn:hover {
  background: var(--pale-lilac) !important;
  color: #ff6100;
}
</style>