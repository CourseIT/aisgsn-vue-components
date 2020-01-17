<template>
  <div class="dropdown-btns">
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          v-on="on"
          block
          v-ripple="false"
          class="dropdown"
        >
        <div>
          <slot name="value">
            {{value}}
          </slot>
        </div>
          <v-icon class="icon" icon="" />
        </v-btn>
      </template>
      <slot name="buttons">
        <v-btn @click="value = item" v-for="(item, index) in buttons" :key="index" class="dropdown dropdown__btn">
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
  props: {
    value: {
      type: String,
      default: 'Кнопка'
    },
    buttons: {
      type: Array
    }
  },
  components: {
    VIcon
  },
  data: () => ({
    author: 'Автор',
    authors: ['НО', 'ОТКИ']
  })
}
</script>

<style scoped>
.dropdown-btns .icon {
  font-family: var(--font-awesome-5-pro-light);
  margin-top: 0px;
  font-size: 28px;
  text-align: center;
  float: right;
  transition: all 0.2s ease-out;
}
.dropdown-btns {
  height: 36px !important;
  margin-bottom: 6.4px;
}
.dropdown {
  width: 132px !important;
  height: 36px !important;
  box-shadow: none;
  display: flex;
  font-family: Roboto;
  padding: 0px;
  font-size: 11px !important;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: normal;
  text-align: center;
  text-transform: none;
  margin-bottom: 7px !important;
  margin-top: 0px !important;
  justify-content: space-between;
  background: var(--pale-lilac) !important;
}
.v-btn:not(.v-btn--round).v-size--default {
  padding-left: 34px;
  padding-right: 12px;
}
.dropdown-btns .v-btn__content {
  justify-content: space-between;
}
.v-btn:before {
  background: none;
}
.v-menu__content {
  padding: 0px 10px !important;
  margin-left: -10px;
  margin-top: 0px;
  box-shadow: none;
}
.dropdown:hover {
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.22) !important;
}
.dropdown:focus {
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.22) !important;
}
.dropdown:hover ::before{
  background: var(--pale-lilac) !important;
}
.dropdown:active ::before{
  background: var(--pale-lilac) !important;
}
.dropdown:hover .icon {
  color: #ff6100;
}
.dropdown:focus .icon {
  color: #ff6100;
}
.dropdown__btn {
  text-transform: none;  
  width: 100%;
  font-family: Roboto;
  font-size: 11px !important;
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
  margin-bottom: 7px !important;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.22) !important;
}
.dropdown__btn:hover {
  background: var(--pale-lilac) !important;
  color: #ff6100;
}
</style>