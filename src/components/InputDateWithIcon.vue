<template>
  <div class="input-block">
    <p class="label">{{label}}</p>
    <div class="df">
      <v-text-field
            v-model="date"
            :flat=true
            solo
            auto-grow
            v-on="on"
      ></v-text-field>
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <div class="icon" v-on="on"><Icon :icon="icon" :color="menu ? '#fb6229' : 'black' " class="icon-block"/></div>
        </template>
        <v-date-picker v-model="date" no-title scrollable color="orange" range>
          <v-spacer></v-spacer>
          <v-btn text color="#000" @click="menu = false">Закрыть</v-btn>
          <v-btn text color="#000" @click="$refs.menu.save(date)">Выбрать</v-btn>
        </v-date-picker>
      </v-menu>
    </div>
  </div>
</template>

<script>
const Icon = () => import('./Icon')
export default {
  props: ['placeholder', 'value', 'icon', 'label'],
  components: {
    Icon
  },
  data: () => ({
    date: ['2019-09-10', '2019-09-20'],
    menu: false
  })
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
  cursor: pointer;
  height: 40px;
  font-family: var(--font-awesome-5-pro);
  margin-top: 9px;
  font-size: 21px;
  width: 5%;
  text-align: center;
}
</style>