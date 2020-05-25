<template>
  <div class="img-preview">
    <img :src="src" alt="" class="img-preview__img-mini">
    <div v-if="src" class="img-main_right">
      <img :src="src" alt="" class="img-preview__img-main ">
    </div>
  </div>
</template>

<script>
export default {
  props:{
    src: {}
  },

}
</script>

<style>
.img-preview__img-mini {
  width: 30px;
  height: 42px;
  object-fit: cover;
  border-radius: 4px;
  border: dashed 1px #707070;
  cursor: pointer;
}
.img-preview__img-mini:hover + .img-main_right{
  display: block;
}
.img-preview__img-main {
  width: 242px;
  height: 328px;
  object-fit: cover;
  border-radius: 4px;
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
}
.img-main_right {
  display: none;
  margin-left: 45px;
  position: absolute;
  margin-top: 0px;
  margin-top: -185px;
}
.img-main_right::after {
  content: ''; 
  position: absolute;
  left: -20px; 
  top: 148px;
  border: 10px solid transparent;
  border-right: 10px solid var( --white);
}
</style>