<template>
  <div>
    <span class="icon">{{icon}}</span>
  </div>
</template>

<script>
export default {
  props: ['icon']
}
</script>

<style scoped>
.icon {
  width: 38px;
  height: 38px;
  font-size: 38px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.58;
  letter-spacing: normal;
  text-align: center;
  font-family: "Font Awesome 5 Pro";
}
@font-face {font-family: "Font Awesome 5 Pro"; src: url("//db.onlinewebfonts.com/t/0b28d43e90a11a93d935b305ff2cefb2.eot"); src: url("//db.onlinewebfonts.com/t/0b28d43e90a11a93d935b305ff2cefb2.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/0b28d43e90a11a93d935b305ff2cefb2.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/0b28d43e90a11a93d935b305ff2cefb2.woff") format("woff"), url("//db.onlinewebfonts.com/t/0b28d43e90a11a93d935b305ff2cefb2.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/0b28d43e90a11a93d935b305ff2cefb2.svg#Font Awesome 5 Pro") format("svg"); }
</style>