<template>
  <div v-if="visible" class="checkup-card-list__radio" :class="{'read-only': readOnly == true, 'green-radio': radio_color == 'green'}"> 
    <v-radio-group row v-model="radios">
      <slot>
        <v-radio v-for="label in labels" :key="label" class="radio"  :value="label" :label="label"></v-radio>
      </slot>
    </v-radio-group>
  </div>
</template>

<script>

export default {
  props: {
    labels: {},
    radio_color: {},
    value: {},
    read_only: {},
    visible: {
      default: true
    }
  },
  data: () => ({
    radios: ''
  }),
  mounted() {
    if(this.value) {
      this.radios = this.value
    }
  },
  watch: {
    radios(radios) {
      this.$emit('input', radios)
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
.v-input__control {
  height: 40px;
}
.v-input--radio-group--row .v-input--radio-group__input {
  flex-wrap: unset !important;
}
.checkup-card-list__radio .v-radio:last-child {
  margin-right: 0;
}
.checkup-card-list__radio .v-input {
  margin-top: 0;
}
.checkup-card-list__radio .radio {
  margin-bottom: 20px;
}
.checkup-card-list__radio label {
  margin-left: 5px;
  padding-top: 5px;
  font-family: Roboto;
  font-size: 0.6875rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
}
.checkup-card-list__radio .mdi-radiobox-blank::before {
  content: "";
  background: var(--white);
  width: 22px;
  border-radius: 5px;
  height: 22px;
  margin-top: 5px;
}
.checkup-card-list__radio .v-input--selection-controls__ripple {
  background-color: rgba(0, 0, 0, 0);
  background: rgba(0, 0, 0, 0);
  opacity: 0;
  cursor: pointer;
  border-radius: 0px;
}
.checkup-card-list__radio .mdi-radiobox-marked::before {
  content: "\25CF";
  font-size: 20px;
  margin-top: 5px;
  padding-left: 5px !important;
  color: var(--bright-orange);
  width: 22px;
  height: 22px !important;
  background: #000;
  border-radius: 5px;
}
.green-radio .mdi-radiobox-marked::before {
  color: var(--weird-green) !important;
}
</style>