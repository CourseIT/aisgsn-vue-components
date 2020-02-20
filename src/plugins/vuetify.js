import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import {
  VSwitch,
  VDatePicker,
  VRadioGroup,
  VRadio,
  VMenu,
} from "vuetify";

Vue.use(Vuetify);

export default new Vuetify({
  components: {
    VSwitch,
    VDatePicker,
    VRadioGroup,
    VRadio,
    VMenu,
  },
  lang: {
    current: 'Ru',
  },
  theme: {
    themes: {
      light: {
        primary: '#3f51b5',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c',
        orange: '#fb6229',
        black: '#21262c'
      },
    },
  },
});
