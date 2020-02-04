<template>
  <v-app>
    <component :is="layout">
      <router-view/>
    </component>
  </v-app>
</template>

<script>
export default {
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
.content {
  margin-top: 115px;
  margin-left: 27px;
}
body {
  background-color: var(--pale-grey);
}
#app {
  background-color: var(--pale-grey);
}
html {
  scroll-behavior: smooth;
}
.df {
  display: flex;
}
.db {
  display: block;
}
.jcfe {
  justify-content: flex-end;
}
.jcsb {
  justify-content: space-between;
  padding-right: 1px;
}
.jcc {
  justify-content: center;
}
.aic {
  align-items: center;
}
.h15 {
  height: 15px;
}
.h55 {
  height: 55px;
}
.w140 {
  width: 140px;
}
.w15 {
  width: 15px;
}
.w20 {
  width: 20px;
}
.w90 {
  width: 90%;
}
.w95 {
  width: 95%;
}
.w100 {
  width: 100%;
}
.pl305 {
  padding-left: 320px;
}
.pl2 {
  padding-left: 2px;
}
.pl15 {
  padding-left: 15px;
}
.pl25 {
  padding-left: 25px !important;
}
.pr30 {
  padding-right: 30px;
}
.mr5 {
  margin-right: 5px;
}
.ml3 {
  margin-left: 3px;
}
.ml15 {
  margin-left: 15px;
}
.mt0 {
  margin-top: 0px;
}
.mb0 {
  margin-bottom: 0 !important;
}
.mb20 {
  margin-bottom: 20px;
}
.mb30 {
  margin-bottom: 30px;
}
.mb7 {
  margin-bottom: 7px !important;
}
.mb5 {
  margin-bottom: 5px;
}
.mt19 {
  margin-top: 19px;
}
.mt34 {
  margin-top: 34px;
}
.ml0 {
  margin-left: 0px !important;
}
.ml25 {
  margin-left: 25px;
}
.icon-shadow {
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
  border-radius: 4px;
}
.icon-block {
  border-radius: 4px 0px 0px 4px;
  background-color: var(--pale-grey);
}
.icon-template-shadow {
  position: relative;
  width: 40px;
  z-index: 100;
  box-shadow: -4px 4px 5px 0px rgba(0, 0, 0, 0.10);
  border-radius: 4px 0px 0px 4px;
}
.icon-template-shadow .hover-shadow:hover {
  box-shadow: none !important;
}
.template_block-fix {
  position: absolute;
  margin-left: -10px;
}
.ghost {
  opacity: 0.5;
}

.el-after::after {
  transform: rotate(-135deg);
  content: ''; 
  position: absolute;
  left: 37px; 
  bottom: -4px;
  border: 5px solid transparent;
  border-top: 5px solid var(--pale-grey);
}
.el-before::before{
  transform: rotate(-45deg);
  content: ''; 
  position: absolute;
  left: 37px; 
  bottom: 30px;
  border: 5px solid transparent;
  border-top: 5px solid var(--pale-grey);
}
button {
  outline: none;
}
.cp {
  cursor: pointer;
}
.color-orange {
  color: var(--bright-orange) !important;
}
.icon-text {
  cursor: pointer;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  margin-bottom: -5px;
}
.icon-plus {
  display: inline-block;
  font-family: var(--font-awesome-5-pro-light);
  cursor: pointer;
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0);
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.81;
  letter-spacing: normal;
  text-align: center;
}


.modal-enter-active, .modal-leave-active{
  transition: all 0.5s ease;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
}
.modal-enter, .modal-leave-to{
  opacity: 0;
}


.media-min-1500 {
  display: none;
}
.media-max-1500 {
  display: none;
}
.media-min-1200 {
  display: none;
}
.media-max-1200 {
  display: none;
}
.media-min-900 {
  display: none;
}
.media-max-900 {
  display: none;
}

@media (min-width: 1500px) { 
  .media-min-1500 {
    display: block;
  }
}
@media (max-width: 1499px) { 
  .media-max-1500 {
    display: block;
  }
}
@media (min-width: 1200px) { 
  .media-min-1200 {
    display: block;
  }
}
@media (max-width: 1199px) { 
  .media-max-1200 {
    display: block;
  }
}
@media (min-width: 900px) { 
  .media-min-900 {
    display: block;
  }
}
@media (max-width: 899px) { 
  .media-max-900 {
    display: block;
  }
}

@font-face {
  font-family: "Font Awesome 5 Pro Regular"; 
  src: url("//db.onlinewebfonts.com/t/363fb99c06d93ab0b553b029f8b5dfb4.eot"); 
  src: url("//db.onlinewebfonts.com/t/363fb99c06d93ab0b553b029f8b5dfb4.eot?#iefix") 
  format("embedded-opentype"), url("//db.onlinewebfonts.com/t/363fb99c06d93ab0b553b029f8b5dfb4.woff2") format("woff2"), 
  url("//db.onlinewebfonts.com/t/363fb99c06d93ab0b553b029f8b5dfb4.woff") format("woff"), 
  url("//db.onlinewebfonts.com/t/363fb99c06d93ab0b553b029f8b5dfb4.ttf") format("truetype"), 
  url("//db.onlinewebfonts.com/t/363fb99c06d93ab0b553b029f8b5dfb4.svg#Font Awesome 5 Pro Regular") format("svg"); 
}
@font-face {
  font-family: "Font Awesome 5 Pro Light"; 
  src: url("//db.onlinewebfonts.com/t/14126655f43628074be1976d86f13eae.eot"); 
  src: url("//db.onlinewebfonts.com/t/14126655f43628074be1976d86f13eae.eot?#iefix") format("embedded-opentype"), 
  url("//db.onlinewebfonts.com/t/14126655f43628074be1976d86f13eae.woff2") format("woff2"),
  url("//db.onlinewebfonts.com/t/14126655f43628074be1976d86f13eae.woff") format("woff"), 
  url("//db.onlinewebfonts.com/t/14126655f43628074be1976d86f13eae.ttf") format("truetype"), 
  url("//db.onlinewebfonts.com/t/14126655f43628074be1976d86f13eae.svg#Font Awesome 5 Pro") format("svg");
}
@font-face {
  font-family: "Font Awesome 5 Pro"; 
  src: url("//db.onlinewebfonts.com/t/0b28d43e90a11a93d935b305ff2cefb2.eot"); 
  src: url("//db.onlinewebfonts.com/t/0b28d43e90a11a93d935b305ff2cefb2.eot?#iefix") format("embedded-opentype"), 
  url("//db.onlinewebfonts.com/t/0b28d43e90a11a93d935b305ff2cefb2.woff2") format("woff2"), 
  url("//db.onlinewebfonts.com/t/0b28d43e90a11a93d935b305ff2cefb2.woff") format("woff"), 
  url("//db.onlinewebfonts.com/t/0b28d43e90a11a93d935b305ff2cefb2.ttf") format("truetype"), 
  url("//db.onlinewebfonts.com/t/0b28d43e90a11a93d935b305ff2cefb2.svg#Font Awesome 5 Pro") format("svg");
}
</style>