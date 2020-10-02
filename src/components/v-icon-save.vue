<template>
  <div class="v-icon-save" :class="{'read-only': readOnly == true}">
    <v-icon v-if="on_form_save" icon="" :font_size="font_size" :hover_color="hover_color" :hover_shadow="hover_shadow" :action="on_form_save" />
  </div>
</template>

<script>
const VIcon = () => import('./v-icon')

export default {
  components: {
    VIcon
  },
  props: {
    read_only: {},
    icon: {
      default: ""
    },
    hover_color: {
      default: true
    },
    hover_shadow: {
      default: false
    },
    font_size: {},
    on_form_save: {}
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
  }
}
</script>

<style scoped>
.v-icon-save {
  width: 36px;
  height: 36px;
}
</style>