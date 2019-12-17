<template>
  <div id="app">
    <div class="breadcrumbs">
      <v-breadcrumbs :items="items" :large="large">
        <template v-if="customDiv" v-slot:divider>
          <Icon icon="" class="breadcrumbs_icon"/>
        </template>
      </v-breadcrumbs>
    </div>
  </div>
</template>

<script>
const Icon = () => import('./Icon')
export default {
  components: {
    Icon
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
}
</script>

<style>
.breadcrumbs {
  margin-top: 10px;
  background-color: #21262c;
  border-radius: 4px;
  margin-bottom: 30px;
}
.breadcrumbs ul {
  padding: 10px 30px;
}
.breadcrumbs ul li{
  color: #efeff4 !important;
}
.v-breadcrumbs__item {
  color: #efeff4 !important;
  font-family: Roboto;
  font-size: 15px;
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
  color: #efeff4 !important;
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
  font-family: "Font Awesome 5 Pro";
}
</style>