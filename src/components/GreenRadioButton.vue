<template>
  <div class="checkup-card-list__radio"> 
    <v-radio-group row>
      <v-radio v-for="label in labels" :key="label" class="radio" :label="label"></v-radio>
    </v-radio-group>
  </div>
</template>

<script>
export default {
  props: ['labels', 'radio_color']
}
</script>

<style>
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
  font-size: 11px;
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
  background: #fff;
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
  color: var(--weird-green) !important;
  width: 22px;
  height: 22px !important;
  background: #000;
  border-radius: 5px;
}
</style>