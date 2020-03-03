<template>
  <div class="breadc-bg">
    <div class="shadow" :class="{'l345' : $store.state.menu_visibility}">
      <div v-if="visible" :class="{'read-only': readOnly == true}" class="breadcrumbs">
        <v-breadcrumbs :items="items" :large="large">
          <template v-if="customDiv" v-slot:divider>
            <span class="breadcrumbs_icon"></span>
          </template>
        </v-breadcrumbs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    read_only: {},
    visible: {
      default: true
    }
  },
  data: () => ({
    items: [
      {
        text: 'Главная',
        disabled: false,
        href: '/',
      },
      {
        text: 'Название проверки',
        disabled: true,
        href: 'breadcrumbs_link_1',
      }
    ],
    divider: '>',
    dividers: ['/', '\\', '.', ';', '>', '-'],
    large: false,
    customDiv: true,
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
  }
}
</script>

<style>
.breadc-bg{
  z-index: 9;
  width: 100%;
  height: 41px;
  top: 100px;
  position: fixed;
  background: var(--pale-grey);
}
.l345 {
  left: 345px !important;
  padding-left: 0px;
}
.shadow {
  position: fixed;
  width: 100%;
  top: 100px;
  left: 30px;
  background-color: var(--pale-grey);
  box-shadow: -15px 15px 30px var(--pale-grey);
  z-index: 9;
  transition: all 0.3s ease;
}
.breadcrumbs {
  display: inline-block;
  background-color: var(--dark);
  border-radius: 4px;
  margin-bottom: 10px;
}
.breadcrumbs ul {
  padding: 10px 30px;
}
.breadcrumbs ul li{
  color: var(--pale-grey) !important;
}
.breadcrumbs .v-breadcrumbs__item {
  color: var(--pale-grey) !important;
  font-family: Roboto;
  font-size: 15px !important;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
  transition: all 0.2s ease-out;
}
.v-breadcrumbs__item:hover {
  color: #ff6100 !important;
}
.v-breadcrumbs__item--disabled {
  color: var(--pale-grey);
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
}
.breadcrumbs_icon{
  font-family: var(--font-awesome-5-pro-light);
}
</style>