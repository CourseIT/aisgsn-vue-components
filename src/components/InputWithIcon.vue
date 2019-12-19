<template>
  <div class="input-block">
    <p v-if="label" class="label">{{label}}</p>
    <div class="df">
      <v-text-field
        :placeholder="placeholder"
        :flat=true
        solo
        v-model="value"
        auto-grow
      ></v-text-field>
      <Icon :icon="icon" class="icon"/>
    </div>
  </div>
</template>

<script>
const Icon = () => import('./Icon')
export default {
  props: ['placeholder', 'value', 'icon', 'label'],
  components: {
    Icon
  }
}
</script>

<style scoped>
.df {
  display: flex;
}
.label {
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0);
  font-family: Roboto;
  font-size: 12px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
  margin-bottom: 5px;
}
.input-block {
  margin-bottom: -15px;
}
.icon {
  font-family: "Font Awesome 5 Pro";
  margin-top: 9px;
  font-size: 21px;
  width: 5%;
  text-align: center;
}
</style>