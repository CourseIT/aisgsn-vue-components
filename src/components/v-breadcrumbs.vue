<template>
  <div class="breadc-bg">
    <div class="breadcrumbs__shadow" :class="{'l345' : $store.state.menu_visibility}">
      <div v-if="visible" :class="{'read-only': readOnly == true}" class="breadcrumbs">
        <v-icon :action="action_left" icon="" font_size="21px" :hover_color="true" color="var(--pale-grey)" class="breadcrumbs__arrow1" />
        <v-icon :action="action_right" icon="" font_size="21px" :hover_color="true" color="var(--pale-grey)" class="breadcrumbs__arrow2" />
        <div class="breadcrumbs__line"></div>
        <v-breadcrumbs :items="items" :large="large">
          <template v-if="customDiv" v-slot:divider>
            <span class="breadcrumbs_icon"></span>
          </template>
        </v-breadcrumbs>
      </div>
      <div>
        <slot>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
const VIcon = () => import('@/components/v-icon')

export default {
  components: {
    VIcon
  },
  props: {
    action_left: {
      default: function() {
        return () => ({})
      }
    },
    action_right: {
      default: function() {
        return () => ({})
      }
    },
    read_only: {},
    visible: {
      default: true
    },
    items: {
      default:function() {
        return [
          {
            text: 'Главная',
            disabled: false,
            href: '/',
          }
        ]
      } 
    }
  },
  data: () => ({
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
  top: 100px;
  position: fixed;
  background: var(--pale-grey);
}
.l345 {
  left: 345px !important;
  padding-left: 0px;
}
.breadcrumbs__arrow1 {
  margin-left: 10px;
}
.breadcrumbs__arrow2 {
}
.breadcrumbs__line {
  height: 26px;
  border-radius: 4px;
  background-color: var(--pale-grey);
  padding: 5px 0px;
  width: 1px;
  margin-left: 13px;
  border-radius: 1px;
}
.breadcrumbs__shadow {
  position: fixed;
  display: flex;
  width: 100%;
  top: 100px;
  left: 30px;
  background-color: var(--pale-grey);
  box-shadow: -15px 15px 30px var(--pale-grey);
  z-index: 9;
  transition: all 0.3s ease;
}
.breadcrumbs {
  display: inline-flex;
  align-items: center;
  background-color: var(--dark);
  border-radius: 4px;
  margin-bottom: 10px;
  height: 36px;
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