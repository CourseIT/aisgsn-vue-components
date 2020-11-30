<template>
  <div v-if="show" class="v-circles-loader">
    <div class="item-1"></div>
    <div class="item-2"></div>
    <div class="item-3"></div>
    <div class="item-4"></div>
    <div class="item-5"></div>
    <div class="item-6"></div>
    <div class="item-7"></div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      default: true
    }
  }
}
</script>

<style scoped>
.v-circles-loader {
  display: flex;
}
.v-circles-loader div {
  background-color: var(--blue-grey);
  height: 13px;
  width: 13px;
  border-radius: 50%;
  margin: 7px 3.5px;
  -webkit-animation: loader-3 2.3s infinite ease-in-out;
  animation: loader-3 2.3s infinite ease-in-out;
}

.v-circles-loader .item-2 {
  -webkit-animation-delay: -2s;
  animation-delay: -2s;
}

.v-circles-loader .item-3 {
  -webkit-animation-delay: -1.7s;
  animation-delay: -1.7s;
}

.v-circles-loader .item-4 {
  -webkit-animation-delay: -1.4s;
  animation-delay: -1.4s;
}

.v-circles-loader .item-5 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}

.v-circles-loader .item-6 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}

.v-circles-loader .item-7 {
  -webkit-animation-delay: -0.5s;
  animation-delay: -0.5s;
}

@-webkit-keyframes loader-3 {
  30%,
  40%,
  100% {
    background-color: var(--blue-grey);
  }
  0% {
    background-color: var(--dark);
  }
}

@keyframes loader-3 {
  30%,
  40%,
  100% {
    background-color: var(--blue-grey);
  }
  0% {
    background-color: var(--dark);
  }
}
</style>