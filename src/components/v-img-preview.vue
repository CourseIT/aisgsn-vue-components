<template>
  <div class="img-preview" :class="[{'read-only': readOnly == true}, dynamic_class]">
    <img v-if="src" :src="src" alt="" class="img-preview__img-mini">
    <div v-else class="img-preview__no-img"></div>
    <div v-if="src" class="img-main_right">
      <img :src="src" alt="" class="img-preview__img-main ">
    </div>
  </div>
</template>

<script>
export default {
  props:{
    read_only: {},
    src: {},
    dynamic_class: {}
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
  }

}
</script>

<style scoped>
.img-preview__no-img {
  width: 30px;
  height: 42px;
  border-radius: 4px;
  border: dashed 1px #707070;
  cursor: pointer;
  margin-bottom: 3px;
}
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
  object-fit: contain;
  width: 100%;
  height: 100%;
}
.img-main_right {
  background-color: var( --white);
  width: 242px;
  height: 328px;
  padding: 13px 9px;
  border-radius: 4px;
  box-shadow: 0 7px 15px 0 rgba(0, 0, 0, 0.3);
  display: none;
  margin-left: 45px;
  z-index: 99;
  position: absolute;
  margin-top: 0px;
  margin-top: -190px;
}
.img-main_right::after {
  content: ''; 
  position: absolute;
  left: -20px; 
  top: 153px;
  border: 10px solid transparent;
  border-right: 10px solid var( --white);
}
</style>