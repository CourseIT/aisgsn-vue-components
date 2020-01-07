<template>
  <v-app>
    <component :is="layout">
      <router-view/>
    </component>
  </v-app>
</template>

<script>
const Menu = () => import('@/components/Menu')
const Header = () => import('@/components/Header')
const Breadcrumbs = () => import('@/components/Breadcrumbs')
export default {
  components: {
    Menu,
    Header,
    Breadcrumbs
  },
  name: 'App',
  data: () => ({
    //
  }),
  computed: {
    layout() {
      return this.$route.meta.layout || 'default-layout'
    }
  }
};
</script>
<style >
:root {
  --font-awesome-5-pro: "Font Awesome 5 Pro";
  --font-awesome-5-pro-light: "Font Awesome 5 Pro Light";
  --font-awesome-5-pro-regular: "Font Awesome 5 Pro Regular";
  --bright-orange: #fb6229;
  --dark: #21262c;
  --white: #fff;
  --pale-grey: #efeff4;
  --pale-lilac: #e5e5ea;
  --weird-green: #4cd964;
  --marigold: #ffcc00;
  --blue-grey: #8e8e93;
  --purpley: #8d43ff;
}
.df {
  display: flex;
}
.content {
  margin-top: 115px;
  margin-left: 27px;
}
#app {
  background-color: var(--pale-grey);
}
@font-face {font-family: "Font Awesome 5 Pro Regular"; src: url("//db.onlinewebfonts.com/t/363fb99c06d93ab0b553b029f8b5dfb4.eot"); src: url("//db.onlinewebfonts.com/t/363fb99c06d93ab0b553b029f8b5dfb4.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/363fb99c06d93ab0b553b029f8b5dfb4.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/363fb99c06d93ab0b553b029f8b5dfb4.woff") format("woff"), url("//db.onlinewebfonts.com/t/363fb99c06d93ab0b553b029f8b5dfb4.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/363fb99c06d93ab0b553b029f8b5dfb4.svg#Font Awesome 5 Pro Regular") format("svg"); }
@font-face {font-family: "Font Awesome 5 Pro Light"; src: url("//db.onlinewebfonts.com/t/14126655f43628074be1976d86f13eae.eot"); src: url("//db.onlinewebfonts.com/t/14126655f43628074be1976d86f13eae.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/14126655f43628074be1976d86f13eae.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/14126655f43628074be1976d86f13eae.woff") format("woff"), url("//db.onlinewebfonts.com/t/14126655f43628074be1976d86f13eae.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/14126655f43628074be1976d86f13eae.svg#Font Awesome 5 Pro") format("svg"); }
@font-face {font-family: "Font Awesome 5 Pro"; src: url("//db.onlinewebfonts.com/t/0b28d43e90a11a93d935b305ff2cefb2.eot"); src: url("//db.onlinewebfonts.com/t/0b28d43e90a11a93d935b305ff2cefb2.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/0b28d43e90a11a93d935b305ff2cefb2.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/0b28d43e90a11a93d935b305ff2cefb2.woff") format("woff"), url("//db.onlinewebfonts.com/t/0b28d43e90a11a93d935b305ff2cefb2.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/0b28d43e90a11a93d935b305ff2cefb2.svg#Font Awesome 5 Pro") format("svg"); }
</style>