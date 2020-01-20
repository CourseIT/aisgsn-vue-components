<template>
  <li class="submenu__link t03s" :style="`font-size: ${text_size}px`">{{text}}</li>
</template>

<script>
export default {
  props: {
    text: {},
    text_size: {},
    transition: {}
  }
}
</script>

<style scoped>
@keyframes submenu-link {
  0% {
    opacity: 0;
    padding-left: 40px;
  }
  100% {
    opacity: 1;
    padding-left: 0px;
  }
}
.submenu__link {
  font-family: Roboto;
  font-size: 15px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: var(--blue-grey);
  list-style-type: none;
  margin: 5px 0px;
  cursor: pointer;
  animation: submenu-link 1s ease;
}
.submenu__link:hover {
  color: var(--bright-orange)
}
</style>