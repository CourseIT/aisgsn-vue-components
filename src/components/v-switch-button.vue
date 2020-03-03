<template>
  <div v-if="visible" :class="{'read-only': readOnly == true}" class="switch-button">
    <v-switch v-model="value"  inset/>
  </div>
</template>

<script>

export default {
  props: {
    default_value: {},
    read_only: {},
    visible: {
      default: true
    }
  },
  data: () => ({
    value: false,
  }),
  mounted() {
    if(this.default_value) {
      this.value = Boolean(this.default_value)
      this.$emit('input', this.value)
    } else {
      this.$emit('input', this.value)
    }
  },
  watch: {
    value(value) {
      this.$emit('input', value)
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
}
</script>

<style>
.switch-button {
  display: block;
  height: 25px;
  width: 50px;
}
.switch-button .v-messages .theme--light {
  display: none;
}
.switch-button .v-input__slot {
  height: 25px;
  margin-bottom: 0 !important;
  margin-bottom: -10px;
}
.switch-button .v-input--switch {
  height: 25px;
  margin-left: 0px;
}
.switch-button .v-input__control {
  position: relative !important;
  bottom: 10px !important;
  height: 25px;
  top: 0px;
  margin: 0px 10px;
}
.switch-button .v-input--switch__track {
  background-color: var(--white) !important;
  opacity: 1 !important;
  height: 21px !important;
  width: 43px !important;
  top: 0px !important;
  margin: 0px 2px !important;
}
.switch-button .v-input--switch__thumb {
  width: 19px !important;
  background-color: var(--blue-grey) !important;
  top: 1px !important;
  height: 19px !important;
}
.switch-button .v-input--selection-controls{
  margin-top: 5px !important;
}
.switch-button .v-input--selection-controls__ripple {
  display: none;
}
</style>